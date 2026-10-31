import type { EyedropperSample, RGB } from '../../types'
import { rgbToHex } from './conversions'

/**
 * Coordinate mapping from element click/touch position to source image pixel coordinates,
 * taking into account CSS object-fit: contain and letterbox bars.
 */
export function mapElementToImageCoordinates(
  elementX: number,
  elementY: number,
  elementWidth: number,
  elementHeight: number,
  naturalWidth: number,
  naturalHeight: number
): { imageX: number; imageY: number; isInside: boolean } {
  if (elementWidth <= 0 || elementHeight <= 0 || naturalWidth <= 0 || naturalHeight <= 0) {
    return { imageX: 0, imageY: 0, isInside: false }
  }

  // Scale factor for object-fit: contain
  const scale = Math.min(elementWidth / naturalWidth, elementHeight / naturalHeight)
  const renderedWidth = naturalWidth * scale
  const renderedHeight = naturalHeight * scale

  // Letterbox padding
  const offsetX = (elementWidth - renderedWidth) / 2
  const offsetY = (elementHeight - renderedHeight) / 2

  // Check if click is inside the actual image area
  if (
    elementX < offsetX ||
    elementX > offsetX + renderedWidth ||
    elementY < offsetY ||
    elementY > offsetY + renderedHeight
  ) {
    return {
      imageX: 0,
      imageY: 0,
      isInside: false,
    }
  }

  // Relative coordinate on image (0.0 to 1.0)
  const relX = (elementX - offsetX) / renderedWidth
  const relY = (elementY - offsetY) / renderedHeight

  const imageX = Math.min(Math.max(Math.floor(relX * naturalWidth), 0), naturalWidth - 1)
  const imageY = Math.min(Math.max(Math.floor(relY * naturalHeight), 0), naturalHeight - 1)

  return {
    imageX,
    imageY,
    isInside: true,
  }
}

/**
 * Sample a pixel from Canvas ImageData at (x, y)
 */
export function samplePixelFromImageData(
  imageData: ImageData,
  x: number,
  y: number,
  compositingBg: RGB = { r: 255, g: 255, b: 255 }
): EyedropperSample {
  const width = imageData.width
  const height = imageData.height

  const clampedX = Math.min(Math.max(x, 0), width - 1)
  const clampedY = Math.min(Math.max(y, 0), height - 1)

  const index = (clampedY * width + clampedX) * 4
  const data = imageData.data

  const r = data[index]
  const g = data[index + 1]
  const b = data[index + 2]
  const a = data[index + 3]

  const isTransparent = a < 128

  // Composite semi-transparent pixels over compositing background
  let finalR = r
  let finalG = g
  let finalB = b

  if (a < 255) {
    const alpha = a / 255
    finalR = Math.round(r * alpha + compositingBg.r * (1 - alpha))
    finalG = Math.round(g * alpha + compositingBg.g * (1 - alpha))
    finalB = Math.round(b * alpha + compositingBg.b * (1 - alpha))
  }

  const rgb: RGB = { r: finalR, g: finalG, b: finalB }
  const hex = rgbToHex(rgb)

  return {
    x: clampedX,
    y: clampedY,
    hex,
    rgb,
    isTransparent,
  }
}

/**
 * Extract an NxN pixel neighborhood around (centerX, centerY) for the magnifier loupe
 */
export function getMagnifierNeighborhood(
  imageData: ImageData,
  centerX: number,
  centerY: number,
  size: number = 11
): { grid: RGB[][]; centerColor: RGB } {
  const half = Math.floor(size / 2)
  const grid: RGB[][] = []
  let centerColor: RGB = { r: 255, g: 255, b: 255 }

  for (let row = -half; row <= half; row++) {
    const rowColors: RGB[] = []
    for (let col = -half; col <= half; col++) {
      const sx = Math.min(Math.max(centerX + col, 0), imageData.width - 1)
      const sy = Math.min(Math.max(centerY + row, 0), imageData.height - 1)
      const idx = (sy * imageData.width + sx) * 4

      const color: RGB = {
        r: imageData.data[idx],
        g: imageData.data[idx + 1],
        b: imageData.data[idx + 2],
      }
      rowColors.push(color)

      if (row === 0 && col === 0) {
        centerColor = color
      }
    }
    grid.push(rowColors)
  }

  return { grid, centerColor }
}
