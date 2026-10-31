import type { ExportFormat, PaletteColor } from '../../types'
import {
  generateCssExport,
  generateJsonExport,
  generateSvgExport,
  generateTxtExport,
  renderPaletteToCanvas,
} from './exportGenerators'

/**
 * Trigger browser file download with blob or data url
 */
export function triggerFileDownload(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  // Revoke object URL after slight delay
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

/**
 * Download palette in specified format
 */
export async function downloadPalette(
  format: ExportFormat,
  colors: PaletteColor[],
  baseName: string = 'mopalette'
): Promise<void> {
  const cleanBase = baseName.replace(/[^a-zA-Z0-9_-]/g, '_').toLowerCase() || 'mopalette'

  switch (format) {
    case 'png': {
      const canvas = renderPaletteToCanvas(colors, baseName)
      canvas.toBlob((blob) => {
        if (blob) {
          triggerFileDownload(blob, `${cleanBase}.png`)
        }
      }, 'image/png')
      break
    }

    case 'svg': {
      const content = generateSvgExport(colors, baseName)
      const blob = new Blob([content], { type: 'image/svg+xml;charset=utf-8' })
      triggerFileDownload(blob, `${cleanBase}.svg`)
      break
    }

    case 'css': {
      const content = generateCssExport(colors)
      const blob = new Blob([content], { type: 'text/css;charset=utf-8' })
      triggerFileDownload(blob, `${cleanBase}.css`)
      break
    }

    case 'json': {
      const content = generateJsonExport(colors, baseName)
      const blob = new Blob([content], { type: 'application/json;charset=utf-8' })
      triggerFileDownload(blob, `${cleanBase}.json`)
      break
    }

    case 'txt': {
      const content = generateTxtExport(colors)
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' })
      triggerFileDownload(blob, `${cleanBase}.txt`)
      break
    }
  }
}
