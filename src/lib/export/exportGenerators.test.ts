import { describe, expect, it } from 'vitest'
import type { PaletteColor } from '../../types'
import { createPaletteColor } from '../color/extractor'
import {
  generateCssExport,
  generateJsonExport,
  generateSvgExport,
  generateTxtExport,
} from './exportGenerators'

describe('Export Generators', () => {
  const sampleColors: PaletteColor[] = [
    createPaletteColor({ r: 124, g: 58, b: 237 }, { role: 'Vibrant' }), // #7C3AED
    createPaletteColor({ r: 246, g: 193, b: 119 }, { role: 'Muted' }), // #F6C177
    createPaletteColor({ r: 40, g: 47, b: 68 }, { role: 'Dominant' }), // #282F44
  ]

  it('generates valid CSS custom properties', () => {
    const css = generateCssExport(sampleColors)
    expect(css).toContain(':root {')
    expect(css).toContain('--palette-1: #7c3aed;')
    expect(css).toContain('--palette-2: #f6c177;')
    expect(css).toContain('--palette-3: #282f44;')
    expect(css.endsWith('}')).toBe(true)
  })

  it('generates parseable JSON structured palette data', () => {
    const jsonStr = generateJsonExport(sampleColors, 'Summer Breeze')
    const parsed = JSON.parse(jsonStr)

    expect(parsed.name).toBe('Summer Breeze')
    expect(parsed.generator).toBe('MoPalette v1.0.0')
    expect(parsed.swatchesCount).toBe(3)
    expect(parsed.colors).toHaveLength(3)

    expect(parsed.colors[0].hex).toBe('#7C3AED')
    expect(parsed.colors[0].rgb).toEqual([124, 58, 237])
    expect(parsed.colors[0].role).toBe('Vibrant')
    expect(parsed.colors[0].contrastAgainstWhite).toBeDefined()
    expect(parsed.colors[0].suggestedForeground).toBe('#ffffff')

    expect(parsed.colors[1].hex).toBe('#F6C177')
    expect(parsed.colors[2].hex).toBe('#282F44')
  })

  it('generates clean TXT list of hex codes', () => {
    const txt = generateTxtExport(sampleColors)
    const lines = txt.split('\n')
    expect(lines).toEqual(['#7C3AED', '#F6C177', '#282F44'])
  })

  it('generates valid SVG vector document', () => {
    const svg = generateSvgExport(sampleColors, 'Cool Ocean')
    expect(svg).toContain('<?xml version="1.0" encoding="UTF-8"?>')
    expect(svg).toContain('<svg xmlns="http://www.w3.org/2000/svg"')
    expect(svg).toContain('Cool Ocean')
    expect(svg).toContain('#7C3AED')
    expect(svg).toContain('#F6C177')
    expect(svg).toContain('#282F44')
    expect(svg).toContain('</svg>')
  })
})
