import type { PaletteColor } from '../../types'
import { formatHslString, formatOklchString, formatRgbString } from '../color/conversions'

/**
 * Generate CSS Custom Properties code string
 */
export function generateCssExport(colors: PaletteColor[], prefix: string = 'palette'): string {
  const lines = colors.map((col, index) => {
    return `  --${prefix}-${index + 1}: ${col.hex.toLowerCase()};`
  })

  return `:root {\n${lines.join('\n')}\n}`
}

/**
 * Generate structured JSON export
 */
export function generateJsonExport(
  colors: PaletteColor[],
  paletteName: string = 'MoPalette'
): string {
  const payload = {
    name: paletteName,
    generator: 'MoPalette v1.0.0',
    createdAt: new Date().toISOString(),
    swatchesCount: colors.length,
    colors: colors.map((col, index) => ({
      index: index + 1,
      id: col.id,
      hex: col.hex,
      rgb: [col.rgb.r, col.rgb.g, col.rgb.b],
      rgbString: formatRgbString(col.rgb),
      hsl: { h: col.hsl.h, s: col.hsl.s, l: col.hsl.l },
      hslString: formatHslString(col.hsl),
      oklch: { l: col.oklch.l, c: col.oklch.c, h: col.oklch.h },
      oklchString: formatOklchString(col.oklch),
      luminance: col.contrast.relativeLuminance,
      contrastAgainstWhite: col.contrast.whiteRatio,
      contrastAgainstBlack: col.contrast.blackRatio,
      suggestedForeground: col.contrast.suggestedForeground,
      role: col.role || 'Dominant',
      populationEstimate: col.population,
      proportion: col.proportion,
      locked: col.locked,
    })),
  }

  return JSON.stringify(payload, null, 2)
}

/**
 * Generate TXT export (newline separated list of hex colors)
 */
export function generateTxtExport(colors: PaletteColor[]): string {
  return colors.map((c) => c.hex).join('\n')
}

/**
 * Generate valid SVG document representing the palette
 */
export function generateSvgExport(
  colors: PaletteColor[],
  paletteName: string = 'MoPalette'
): string {
  const swatchWidth = 160
  const swatchHeight = 320
  const totalWidth = colors.length * swatchWidth
  const totalHeight = swatchHeight + 80

  const rects = colors.map((col, index) => {
    const x = index * swatchWidth
    const y = 80
    const textColor = col.contrast.suggestedForeground
    const secondaryTextColor =
      textColor === '#ffffff' ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.65)'

    return `  <g id="swatch-${index + 1}">
    <rect x="${x}" y="${y}" width="${swatchWidth}" height="${swatchHeight}" fill="${col.hex}" />
    <text x="${x + swatchWidth / 2}" y="${y + swatchHeight - 55}" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="16" fill="${textColor}" text-anchor="middle">${col.hex}</text>
    <text x="${x + swatchWidth / 2}" y="${y + swatchHeight - 32}" font-family="system-ui, -apple-system, sans-serif" font-weight="500" font-size="12" fill="${secondaryTextColor}" text-anchor="middle">${formatRgbString(col.rgb)}</text>
  </g>`
  })

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalWidth} ${totalHeight}" width="${totalWidth}" height="${totalHeight}">
  <style>
    text { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
  </style>
  <rect width="${totalWidth}" height="${totalHeight}" fill="#0f172a" />
  <g id="header">
    <text x="24" y="48" font-size="20" font-weight="700" fill="#f8fafc">${paletteName}</text>
    <text x="${totalWidth - 24}" y="48" font-size="14" font-weight="500" fill="#94a3b8" text-anchor="end">Created with MoPalette</text>
  </g>
${rects.join('\n')}
</svg>`
}

/**
 * Render palette into an HTMLCanvasElement for high quality PNG export
 */
export function renderPaletteToCanvas(
  colors: PaletteColor[],
  paletteName: string = 'MoPalette',
  width: number = 1200,
  height: number = 630
): HTMLCanvasElement {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    throw new Error('Could not get 2D canvas context')
  }

  // Background
  ctx.fillStyle = '#0f172a'
  ctx.fillRect(0, 0, width, height)

  // Header
  const headerHeight = 90
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 26px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  ctx.fillText(paletteName, 40, 56)

  ctx.fillStyle = '#94a3b8'
  ctx.font = '500 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  ctx.textAlign = 'right'
  ctx.fillText('Created with MoPalette', width - 40, 56)
  ctx.textAlign = 'left'

  // Card swatches area
  const marginX = 40
  const marginY = headerHeight
  const areaWidth = width - marginX * 2
  const areaHeight = height - marginY - 40

  const count = colors.length
  const swatchWidth = areaWidth / count

  colors.forEach((col, idx) => {
    const x = marginX + idx * swatchWidth
    const y = marginY

    // Swatch box
    ctx.fillStyle = col.hex
    ctx.fillRect(x, y, swatchWidth, areaHeight)

    // Swatch text overlay at bottom
    const textColor = col.contrast.suggestedForeground
    const secondaryColor =
      textColor === '#ffffff' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.65)'

    ctx.textAlign = 'center'
    const centerX = x + swatchWidth / 2

    // Color HEX
    ctx.fillStyle = textColor
    ctx.font = 'bold 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    ctx.fillText(col.hex, centerX, y + areaHeight - 65)

    // Color RGB
    ctx.fillStyle = secondaryColor
    ctx.font = '500 13px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    ctx.fillText(formatRgbString(col.rgb), centerX, y + areaHeight - 40)

    // Population / Role badge if space permits
    if (col.role) {
      ctx.font = '11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      ctx.fillText(col.role, centerX, y + areaHeight - 20)
    }
  })

  return canvas
}
