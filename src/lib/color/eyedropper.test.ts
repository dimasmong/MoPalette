import { describe, expect, it } from 'vitest'
import {
  getMagnifierNeighborhood,
  mapElementToImageCoordinates,
  samplePixelFromImageData,
} from './eyedropper'

describe('Eyedropper Coordinate Mapping & Sampling', () => {
  it('maps center coordinate correctly with matching aspect ratio', () => {
    // Container 400x300, image 800x600 (both 4:3)
    const result = mapElementToImageCoordinates(200, 150, 400, 300, 800, 600)
    expect(result.isInside).toBe(true)
    expect(result.imageX).toBe(400)
    expect(result.imageY).toBe(300)
  })

  it('handles horizontal letterboxing (wide container, square image)', () => {
    // Container 1000x500, image 500x500. Rendered size will be 500x500 with 250px left/right offset
    // Click in letterbox area (x = 100, y = 250)
    const outside = mapElementToImageCoordinates(100, 250, 1000, 500, 500, 500)
    expect(outside.isInside).toBe(false)

    // Click in center of image (x = 500, y = 250) -> should map to center (250, 250)
    const center = mapElementToImageCoordinates(500, 250, 1000, 500, 500, 500)
    expect(center.isInside).toBe(true)
    expect(center.imageX).toBe(250)
    expect(center.imageY).toBe(250)
  })

  it('handles vertical letterboxing (tall container, wide image)', () => {
    // Container 400x800, image 400x200 (2:1). Rendered size will be 400x200 with 300px top/bottom offset
    // Click in top letterbox (x = 200, y = 100)
    const outside = mapElementToImageCoordinates(200, 100, 400, 800, 400, 200)
    expect(outside.isInside).toBe(false)

    // Click in center (x = 200, y = 400)
    const center = mapElementToImageCoordinates(200, 400, 400, 800, 400, 200)
    expect(center.isInside).toBe(true)
    expect(center.imageX).toBe(200)
    expect(center.imageY).toBe(100)
  })

  it('samples pixel correctly from ImageData', () => {
    // Create 2x2 mock ImageData:
    // (0,0): Red, (1,0): Green
    // (0,1): Blue, (1,1): Transparent
    const width = 2
    const height = 2
    const buffer = new Uint8ClampedArray([
      255, 0, 0, 255,       0, 255, 0, 255,
      0, 0, 255, 255,       0, 0, 0, 0,
    ])
    const imgData = {
      width,
      height,
      data: buffer,
    } as unknown as ImageData

    const redSample = samplePixelFromImageData(imgData, 0, 0)
    expect(redSample.hex).toBe('#FF0000')
    expect(redSample.rgb).toEqual({ r: 255, g: 0, b: 0 })
    expect(redSample.isTransparent).toBe(false)

    const greenSample = samplePixelFromImageData(imgData, 1, 0)
    expect(greenSample.hex).toBe('#00FF00')

    const blueSample = samplePixelFromImageData(imgData, 0, 1)
    expect(blueSample.hex).toBe('#0000FF')

    const transSample = samplePixelFromImageData(imgData, 1, 1, { r: 255, g: 255, b: 255 })
    expect(transSample.isTransparent).toBe(true)
    // Composited over white:
    expect(transSample.hex).toBe('#FFFFFF')
  })

  it('extracts magnifier neighborhood', () => {
    const width = 5
    const height = 5
    const buffer = new Uint8ClampedArray(5 * 5 * 4)
    // Set center pixel (2, 2) to brand purple (124, 58, 237)
    const idx = (2 * 5 + 2) * 4
    buffer[idx] = 124
    buffer[idx + 1] = 58
    buffer[idx + 2] = 237
    buffer[idx + 3] = 255

    const imgData = { width, height, data: buffer } as unknown as ImageData
    const { grid, centerColor } = getMagnifierNeighborhood(imgData, 2, 2, 3)

    expect(grid.length).toBe(3)
    expect(grid[0].length).toBe(3)
    expect(centerColor).toEqual({ r: 124, g: 58, b: 237 })
  })
})
