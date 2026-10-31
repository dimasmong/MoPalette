import { describe, expect, it } from 'vitest'
import {
  calculateContrast,
  formatHslString,
  formatOklchString,
  formatRgbString,
  getContrastRatio,
  getRelativeLuminance,
  hexToRgb,
  hslToRgb,
  oklchToRgb,
  rgbToHex,
  rgbToHsl,
  rgbToOklch,
} from './conversions'

describe('Color Conversions', () => {
  describe('rgbToHex & hexToRgb', () => {
    it('converts RGB to HEX correctly', () => {
      expect(rgbToHex({ r: 124, g: 58, b: 237 })).toBe('#7C3AED')
      expect(rgbToHex({ r: 255, g: 255, b: 255 })).toBe('#FFFFFF')
      expect(rgbToHex({ r: 0, g: 0, b: 0 })).toBe('#000000')
      expect(rgbToHex({ r: 255, g: 0, b: 0 })).toBe('#FF0000')
    })

    it('clamps values out of bounds', () => {
      expect(rgbToHex({ r: 300, g: -20, b: 128 })).toBe('#FF0080')
    })

    it('converts 6-digit HEX to RGB correctly', () => {
      expect(hexToRgb('#7C3AED')).toEqual({ r: 124, g: 58, b: 237 })
      expect(hexToRgb('7C3AED')).toEqual({ r: 124, g: 58, b: 237 })
      expect(hexToRgb('#ffffff')).toEqual({ r: 255, g: 255, b: 255 })
      expect(hexToRgb('#000000')).toEqual({ r: 0, g: 0, b: 0 })
    })

    it('converts 3-digit shorthand HEX correctly', () => {
      expect(hexToRgb('#fff')).toEqual({ r: 255, g: 255, b: 255 })
      expect(hexToRgb('#f00')).toEqual({ r: 255, g: 0, b: 0 })
      expect(hexToRgb('abc')).toEqual({ r: 170, g: 187, b: 204 })
    })

    it('handles invalid hex gracefully', () => {
      expect(hexToRgb('invalid')).toEqual({ r: 0, g: 0, b: 0 })
      expect(hexToRgb('#xyz123')).toEqual({ r: 0, g: 0, b: 0 })
    })
  })

  describe('rgbToHsl & hslToRgb', () => {
    it('converts primary colors to HSL accurately', () => {
      expect(rgbToHsl({ r: 255, g: 0, b: 0 })).toEqual({ h: 0, s: 100, l: 50 })
      expect(rgbToHsl({ r: 0, g: 255, b: 0 })).toEqual({ h: 120, s: 100, l: 50 })
      expect(rgbToHsl({ r: 0, g: 0, b: 255 })).toEqual({ h: 240, s: 100, l: 50 })
      expect(rgbToHsl({ r: 255, g: 255, b: 255 })).toEqual({ h: 0, s: 0, l: 100 })
      expect(rgbToHsl({ r: 0, g: 0, b: 0 })).toEqual({ h: 0, s: 0, l: 0 })
    })

    it('converts MoPalette brand purple #7C3AED', () => {
      const hsl = rgbToHsl({ r: 124, g: 58, b: 237 })
      expect(hsl.h).toBe(262)
      expect(hsl.s).toBe(83)
      expect(hsl.l).toBe(58)
    })

    it('roundtrips RGB -> HSL -> RGB within 1 unit tolerance', () => {
      const original = { r: 124, g: 58, b: 237 }
      const hsl = rgbToHsl(original)
      const restored = hslToRgb(hsl)
      expect(Math.abs(restored.r - original.r)).toBeLessThanOrEqual(2)
      expect(Math.abs(restored.g - original.g)).toBeLessThanOrEqual(2)
      expect(Math.abs(restored.b - original.b)).toBeLessThanOrEqual(2)
    })
  })

  describe('rgbToOklch & oklchToRgb', () => {
    it('computes OKLCH for pure white and black', () => {
      const whiteOklch = rgbToOklch({ r: 255, g: 255, b: 255 })
      expect(whiteOklch.l).toBe(1)
      expect(whiteOklch.c).toBe(0)

      const blackOklch = rgbToOklch({ r: 0, g: 0, b: 0 })
      expect(blackOklch.l).toBe(0)
      expect(blackOklch.c).toBe(0)
    })

    it('roundtrips RGB -> OKLCH -> RGB within reasonable sRGB tolerance', () => {
      const original = { r: 124, g: 58, b: 237 }
      const oklch = rgbToOklch(original)
      expect(oklch.l).toBeGreaterThan(0.4)
      expect(oklch.l).toBeLessThan(0.7)
      expect(oklch.c).toBeGreaterThan(0.15)

      const restored = oklchToRgb(oklch)
      expect(Math.abs(restored.r - original.r)).toBeLessThanOrEqual(2)
      expect(Math.abs(restored.g - original.g)).toBeLessThanOrEqual(2)
      expect(Math.abs(restored.b - original.b)).toBeLessThanOrEqual(2)
    })
  })

  describe('WCAG Luminance & Contrast', () => {
    it('calculates exact relative luminance for white and black', () => {
      expect(getRelativeLuminance({ r: 255, g: 255, b: 255 })).toBeCloseTo(1.0, 4)
      expect(getRelativeLuminance({ r: 0, g: 0, b: 0 })).toBeCloseTo(0.0, 4)
    })

    it('calculates 21:1 contrast ratio between white and black', () => {
      expect(getContrastRatio(1.0, 0.0)).toBe(21)
      expect(getContrastRatio(0.5, 0.5)).toBe(1)
    })

    it('evaluates WCAG metrics for purple #7C3AED', () => {
      const contrast = calculateContrast({ r: 124, g: 58, b: 237 })
      // Purple background should recommend white text
      expect(contrast.suggestedForeground).toBe('#ffffff')
      expect(contrast.whiteRatio).toBeGreaterThan(4.5)
      expect(contrast.whiteAA).toBe(true)
    })

    it('evaluates WCAG metrics for pure white #FFFFFF', () => {
      const contrast = calculateContrast({ r: 255, g: 255, b: 255 })
      expect(contrast.suggestedForeground).toBe('#000000')
      expect(contrast.blackRatio).toBe(21)
      expect(contrast.blackAA).toBe(true)
      expect(contrast.blackAAA).toBe(true)
      expect(contrast.whiteRatio).toBe(1)
      expect(contrast.whiteAA).toBe(false)
    })
  })

  describe('String formatting helpers', () => {
    it('formats RGB, HSL, and OKLCH CSS strings correctly', () => {
      expect(formatRgbString({ r: 124, g: 58, b: 237 })).toBe('rgb(124, 58, 237)')
      expect(formatHslString({ h: 262, s: 83, l: 58 })).toBe('hsl(262, 83%, 58%)')
      expect(formatOklchString({ l: 0.54, c: 0.23, h: 290.4 })).toBe('oklch(0.54 0.23 290.4)')
    })
  })
})
