import { describe, expect, it } from 'vitest'
import type { ExtractionConfig, PaletteColor } from '../../types'
import {
  createPaletteColor,
  deduplicateColors,
  extractPaletteFromSource,
  generateSwatchId,
} from './extractor'

function createMockImageData(
  width: number,
  height: number,
  pixelFn: (x: number, y: number) => [number, number, number, number]
): ImageData {
  const data = new Uint8ClampedArray(width * height * 4)
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4
      const [r, g, b, a] = pixelFn(x, y)
      data[idx] = r
      data[idx + 1] = g
      data[idx + 2] = b
      data[idx + 3] = a
    }
  }
  return new ImageData(data, width, height)
}

const baseConfig: ExtractionConfig = {
  colorCount: 6,
  preset: 'balanced',
  quality: 'high',
  colorSpace: 'oklch',
  ignoreTransparent: true,
  compositingBg: '#ffffff',
}

describe('Color Extraction Engine', () => {
  describe('Deterministic Color Extraction', () => {
    it('extracts solid red accurately', () => {
      const redImg = createMockImageData(50, 50, () => [255, 0, 0, 255])
      const palette = extractPaletteFromSource(redImg, { ...baseConfig, colorCount: 3 })

      expect(palette.length).toBeGreaterThan(0)
      const dominant = palette[0]
      expect(dominant.hex).toBe('#FF0000')
      expect(dominant.rgb).toEqual({ r: 255, g: 0, b: 0 })
    })

    it('extracts solid green accurately', () => {
      const greenImg = createMockImageData(50, 50, () => [0, 255, 0, 255])
      const palette = extractPaletteFromSource(greenImg, { ...baseConfig, colorCount: 3 })

      expect(palette.length).toBeGreaterThan(0)
      expect(palette[0].hex).toBe('#00FF00')
    })

    it('extracts solid blue accurately', () => {
      const blueImg = createMockImageData(50, 50, () => [0, 0, 255, 255])
      const palette = extractPaletteFromSource(blueImg, { ...baseConfig, colorCount: 3 })

      expect(palette.length).toBeGreaterThan(0)
      expect(palette[0].hex).toBe('#0000FF')
    })

    it('extracts pure black accurately', () => {
      const blackImg = createMockImageData(50, 50, () => [0, 0, 0, 255])
      const palette = extractPaletteFromSource(blackImg, { ...baseConfig, colorCount: 3 })

      expect(palette.length).toBeGreaterThan(0)
      expect(palette[0].hex).toBe('#000000')
    })

    it('extracts pure white without discarding it', () => {
      const whiteImg = createMockImageData(50, 50, () => [255, 255, 255, 255])
      const palette = extractPaletteFromSource(whiteImg, { ...baseConfig, colorCount: 3 })

      expect(palette.length).toBeGreaterThan(0)
      expect(palette[0].hex).toBe('#FFFFFF')
    })

    it('extracts both colors from 50% red / 50% blue image', () => {
      const splitImg = createMockImageData(60, 60, (x) =>
        x < 30 ? [255, 0, 0, 255] : [0, 0, 255, 255]
      )
      const palette = extractPaletteFromSource(splitImg, { ...baseConfig, colorCount: 2 })

      expect(palette.length).toBe(2)
      const hexes = palette.map((p) => p.hex)
      expect(hexes).toContain('#FF0000')
      expect(hexes).toContain('#0000FF')
    })

    it('respects 75% red / 25% blue distribution in dominant ranking', () => {
      const splitImg = createMockImageData(100, 100, (x) =>
        x < 75 ? [255, 0, 0, 255] : [0, 0, 255, 255]
      )
      const palette = extractPaletteFromSource(splitImg, {
        ...baseConfig,
        preset: 'dominant',
        colorCount: 2,
      })

      expect(palette.length).toBe(2)
      // Dominant preset ranks by population: Red (75%) must be first
      expect(palette[0].hex).toBe('#FF0000')
      expect(palette[1].hex).toBe('#0000FF')
      expect(palette[0].population).toBeGreaterThan(palette[1].population)
    })

    it('excludes fully transparent pixels when ignoreTransparent is true', () => {
      // Half transparent, half purple #7C3AED (124, 58, 237)
      const transImg = createMockImageData(60, 60, (x) =>
        x < 30 ? [0, 0, 0, 0] : [124, 58, 237, 255]
      )
      const palette = extractPaletteFromSource(transImg, {
        ...baseConfig,
        ignoreTransparent: true,
        colorCount: 2,
      })

      expect(palette.length).toBeGreaterThan(0)
      // Transparent black (0,0,0,0) should NOT be extracted as solid black
      expect(palette[0].hex).toBe('#7C3AED')
      const hasBlack = palette.some((p) => p.hex === '#000000')
      expect(hasBlack).toBe(false)
    })
  })

  describe('Locked Swatch Preservation', () => {
    it('preserves locked swatches at their exact position during regeneration', () => {
      const sampleImg = createMockImageData(60, 60, (x) =>
        x < 30 ? [255, 0, 0, 255] : [0, 255, 0, 255]
      )

      // Create an existing palette with a custom locked gold swatch at index 1
      const lockedGold: PaletteColor = createPaletteColor(
        { r: 255, g: 215, b: 0 },
        { locked: true, id: 'custom-gold-id' }
      )
      const existing: PaletteColor[] = [
        createPaletteColor({ r: 10, g: 10, b: 10 }, { locked: false }),
        lockedGold,
        createPaletteColor({ r: 20, g: 20, b: 20 }, { locked: false }),
      ]

      const regenerated = extractPaletteFromSource(
        sampleImg,
        { ...baseConfig, colorCount: 3 },
        existing
      )

      expect(regenerated.length).toBe(3)
      // The locked gold swatch must remain at index 1 with its exact id and hex
      expect(regenerated[1].id).toBe('custom-gold-id')
      expect(regenerated[1].hex).toBe('#FFD700')
      expect(regenerated[1].locked).toBe(true)
    })
  })

  describe('Color Count & Deduplication', () => {
    it('respects requested colorCount', () => {
      // Image with 4 distinct quadrants: Red, Green, Blue, Yellow
      const quadImg = createMockImageData(80, 80, (x, y) => {
        if (x < 40 && y < 40) return [255, 0, 0, 255]
        if (x >= 40 && y < 40) return [0, 255, 0, 255]
        if (x < 40 && y >= 40) return [0, 0, 255, 255]
        return [255, 255, 0, 255]
      })

      const p2 = extractPaletteFromSource(quadImg, { ...baseConfig, colorCount: 2 })
      expect(p2.length).toBe(2)

      const p4 = extractPaletteFromSource(quadImg, { ...baseConfig, colorCount: 4 })
      expect(p4.length).toBe(4)
    })

    it('deduplicates visually identical colors', () => {
      const colors = [
        { rgb: { r: 255, g: 0, b: 0 }, population: 100 },
        { rgb: { r: 254, g: 1, b: 0 }, population: 90 }, // duplicate
        { rgb: { r: 0, g: 0, b: 255 }, population: 80 },
      ]
      const deduped = deduplicateColors(colors, 10)
      expect(deduped.length).toBe(2)
      expect(deduped[0].rgb).toEqual({ r: 255, g: 0, b: 0 })
      expect(deduped[1].rgb).toEqual({ r: 0, g: 0, b: 255 })
    })

    it('generates unique swatch IDs', () => {
      const id1 = generateSwatchId()
      const id2 = generateSwatchId()
      expect(id1).not.toBe(id2)
      expect(typeof id1).toBe('string')
    })
  })
})
