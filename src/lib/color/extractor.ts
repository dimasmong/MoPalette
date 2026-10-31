import { getColorSync, getPaletteSync, getSwatchesSync } from 'colorthief'
import type {
  ExtractionConfig,
  PaletteColor,
  RGB,
  SwatchRole,
} from '../../types'
import {
  calculateContrast,
  rgbToHex,
  rgbToHsl,
  rgbToOklch,
} from './conversions'

/**
 * Helper to generate a unique ID
 */
export function generateSwatchId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID()
  }
  return `swatch-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`
}

/**
 * Quality setting to pixel step mapping
 */
function getQualityStep(quality: ExtractionConfig['quality']): number {
  switch (quality) {
    case 'high':
      return 1
    case 'balanced':
      return 4
    case 'fast':
    default:
      return 10
  }
}

/**
 * Build a full PaletteColor object from an RGB tuple
 */
export function createPaletteColor(
  rgb: RGB,
  options?: {
    id?: string
    locked?: boolean
    population?: number
    proportion?: number
    role?: SwatchRole
    isManual?: boolean
  }
): PaletteColor {
  const hex = rgbToHex(rgb)
  const hsl = rgbToHsl(rgb)
  const oklch = rgbToOklch(rgb)
  const contrast = calculateContrast(rgb)

  return {
    id: options?.id || generateSwatchId(),
    hex,
    rgb,
    hsl,
    oklch,
    contrast,
    locked: options?.locked ?? false,
    population: options?.population ?? 100,
    proportion: options?.proportion ?? 0.1,
    role: options?.role,
    isManual: options?.isManual ?? false,
  }
}

/**
 * Check color distance between two RGB colors in Euclidean space
 */
export function colorDistance(c1: RGB, c2: RGB): number {
  const dr = c1.r - c2.r
  const dg = c1.g - c2.g
  const db = c1.b - c2.b
  return Math.sqrt(dr * dr + dg * dg + db * db)
}

/**
 * Filter out colors that are visually identical (within distance threshold)
 */
export function deduplicateColors(
  colors: Array<{ rgb: RGB; population: number; role?: SwatchRole }>,
  threshold: number = 8
): Array<{ rgb: RGB; population: number; role?: SwatchRole }> {
  const result: Array<{ rgb: RGB; population: number; role?: SwatchRole }> = []

  for (const item of colors) {
    const isDuplicate = result.some(
      (existing) => colorDistance(existing.rgb, item.rgb) < threshold
    )
    if (!isDuplicate) {
      result.push(item)
    }
  }

  return result
}

/**
 * Extract palette from an HTMLImageElement or HTMLCanvasElement or ImageData
 */
export function extractPaletteFromSource(
  source: HTMLImageElement | HTMLCanvasElement | ImageData,
  config: ExtractionConfig,
  existingColors: PaletteColor[] = []
): PaletteColor[] {
  const quality = getQualityStep(config.quality)
  const colorSpace = config.colorSpace // 'oklch' or 'rgb'
  const count = Math.min(Math.max(config.colorCount, 2), 20)

  const extractionOpts = {
    colorCount: Math.min(count * 2, 20),
    quality,
    colorSpace,
    ignoreWhite: false,
    alphaThreshold: config.ignoreTransparent ? 128 : 1,
    gamut: 'srgb' as const,
  }

  // Preserve locked colors and their positions
  const lockedEntries: Array<{ index: number; color: PaletteColor }> = []
  existingColors.forEach((color, idx) => {
    if (color.locked) {
      lockedEntries.push({ index: idx, color })
    }
  })

  // Determine needed new colors count
  const neededCount = Math.max(0, count - lockedEntries.length)

  // Raw extracted colors from Color Thief
  const extractedRaw: Array<{ rgb: RGB; population: number; role?: SwatchRole }> = []

  try {
    if (config.preset === 'vibrant' || config.preset === 'muted') {
      const swatches = getSwatchesSync(source, extractionOpts)
      if (swatches) {
        if (config.preset === 'vibrant') {
          const roles: SwatchRole[] = ['Vibrant', 'LightVibrant', 'DarkVibrant']
          for (const role of roles) {
            const sw = swatches[role as keyof typeof swatches]
            if (sw && sw.color) {
              const rgb = sw.color.rgb()
              extractedRaw.push({
                rgb,
                population: sw.color.population || 100,
                role,
              })
            }
          }
        } else {
          const roles: SwatchRole[] = ['Muted', 'LightMuted', 'DarkMuted']
          for (const role of roles) {
            const sw = swatches[role as keyof typeof swatches]
            if (sw && sw.color) {
              const rgb = sw.color.rgb()
              extractedRaw.push({
                rgb,
                population: sw.color.population || 100,
                role,
              })
            }
          }
        }
      }
    }

    // Also get general palette
    const palette = getPaletteSync(source, extractionOpts)
    if (palette && palette.length > 0) {
      for (const col of palette) {
        const rgb = col.rgb()
        extractedRaw.push({
          rgb,
          population: col.population || 100,
          role: 'Dominant',
        })
      }
    } else {
      const single = getColorSync(source, extractionOpts)
      if (single) {
        extractedRaw.push({
          rgb: single.rgb(),
          population: single.population || 100,
          role: 'Dominant',
        })
      }
    }
  } catch (err) {
    console.warn('Extraction warning:', err)
  }

  // Deduplicate colors
  const uniqueExtracted = deduplicateColors(extractedRaw, 12)

  // Preset-specific ordering/filtering
  if (config.preset === 'dominant') {
    uniqueExtracted.sort((a, b) => b.population - a.population)
  } else if (config.preset === 'vibrant') {
    uniqueExtracted.sort((a, b) => {
      const hslA = rgbToHsl(a.rgb)
      const hslB = rgbToHsl(b.rgb)
      return hslB.s - hslA.s
    })
  } else if (config.preset === 'muted') {
    uniqueExtracted.sort((a, b) => {
      const hslA = rgbToHsl(a.rgb)
      const hslB = rgbToHsl(b.rgb)
      return hslA.s - hslB.s
    })
  }

  // Calculate total population for proportion
  const totalPop = uniqueExtracted.reduce((acc, c) => acc + (c.population || 1), 0) || 1

  // Map to PaletteColor
  const newPaletteColors: PaletteColor[] = uniqueExtracted.slice(0, neededCount).map((item) => {
    const prop = Math.round(((item.population || 1) / totalPop) * 1000) / 1000
    return createPaletteColor(item.rgb, {
      population: item.population || 100,
      proportion: prop,
      role: item.role || 'Dominant',
      locked: false,
    })
  })

  // Assemble final palette respecting locked positions
  const finalPalette: PaletteColor[] = []
  let newIdx = 0

  for (let i = 0; i < count; i++) {
    const lockedAtPos = lockedEntries.find((l) => l.index === i)
    if (lockedAtPos) {
      finalPalette.push(lockedAtPos.color)
    } else if (newIdx < newPaletteColors.length) {
      finalPalette.push(newPaletteColors[newIdx++])
    }
  }

  while (finalPalette.length < count && newIdx < newPaletteColors.length) {
    finalPalette.push(newPaletteColors[newIdx++])
  }

  return finalPalette
}
