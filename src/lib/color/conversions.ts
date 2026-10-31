import type { HSL, OKLCH, RGB, WCAGContrast } from '../../types'

/**
 * Clamp a number between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Convert RGB components to 6-character hex string (e.g. #7C3AED)
 */
export function rgbToHex(rgb: RGB): string {
  const r = clamp(Math.round(rgb.r), 0, 255).toString(16).padStart(2, '0')
  const g = clamp(Math.round(rgb.g), 0, 255).toString(16).padStart(2, '0')
  const b = clamp(Math.round(rgb.b), 0, 255).toString(16).padStart(2, '0')
  return `#${r}${g}${b}`.toUpperCase()
}

/**
 * Parse a hex string into RGB components.
 * Supports 3-digit (#fff) and 6-digit (#ffffff) with or without #.
 */
export function hexToRgb(hex: string): RGB {
  let clean = hex.replace(/^#/, '').trim()
  if (clean.length === 3) {
    clean = clean
      .split('')
      .map((c) => c + c)
      .join('')
  }
  if (clean.length !== 6) {
    return { r: 0, g: 0, b: 0 }
  }
  const parsed = parseInt(clean, 16)
  if (isNaN(parsed)) {
    return { r: 0, g: 0, b: 0 }
  }
  return {
    r: (parsed >> 16) & 255,
    g: (parsed >> 8) & 255,
    b: parsed & 255,
  }
}

/**
 * Convert RGB to HSL
 */
export function rgbToHsl(rgb: RGB): HSL {
  const r = clamp(rgb.r, 0, 255) / 255
  const g = clamp(rgb.g, 0, 255) / 255
  const b = clamp(rgb.b, 0, 255) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const d = max - min

  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (d !== 0) {
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h *= 60
  }

  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

/**
 * Convert HSL to RGB
 */
export function hslToRgb(hsl: HSL): RGB {
  const h = ((hsl.h % 360) + 360) % 360
  const s = clamp(hsl.s, 0, 100) / 100
  const l = clamp(hsl.l, 0, 100) / 100

  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2

  let r1 = 0
  let g1 = 0
  let b1 = 0

  if (h >= 0 && h < 60) {
    r1 = c; g1 = x; b1 = 0
  } else if (h >= 60 && h < 120) {
    r1 = x; g1 = c; b1 = 0
  } else if (h >= 120 && h < 180) {
    r1 = 0; g1 = c; b1 = x
  } else if (h >= 180 && h < 240) {
    r1 = 0; g1 = x; b1 = c
  } else if (h >= 240 && h < 300) {
    r1 = x; g1 = 0; b1 = c
  } else {
    r1 = c; g1 = 0; b1 = x
  }

  return {
    r: Math.round((r1 + m) * 255),
    g: Math.round((g1 + m) * 255),
    b: Math.round((b1 + m) * 255),
  }
}

/**
 * Linearize sRGB gamma for color space transformation & luminance
 */
function srgbLinearize(val: number): number {
  const v = val / 255
  return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
}

/**
 * Gamma-encode linear sRGB
 */
function srgbDelinearize(val: number): number {
  return val <= 0.0031308
    ? 12.92 * val
    : 1.055 * Math.pow(val, 1 / 2.4) - 0.055
}

/**
 * Convert RGB to OKLCH (perceptually uniform D65 color space)
 */
export function rgbToOklch(rgb: RGB): OKLCH {
  const rLin = srgbLinearize(rgb.r)
  const gLin = srgbLinearize(rgb.g)
  const bLin = srgbLinearize(rgb.b)

  // Linear sRGB to LMS
  const l = 0.4122214708 * rLin + 0.5363325363 * gLin + 0.0514459929 * bLin
  const m = 0.2119034982 * rLin + 0.6806995451 * gLin + 0.1073969566 * bLin
  const s = 0.0883024619 * rLin + 0.2817188376 * gLin + 0.6299787005 * bLin

  // Cube root of LMS
  const l_ = Math.cbrt(l)
  const m_ = Math.cbrt(m)
  const s_ = Math.cbrt(s)

  // LMS to OKLAB
  const L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_
  const a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_
  const b = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_

  // OKLAB to OKLCH
  const C = Math.sqrt(a * a + b * b)
  let h = (Math.atan2(b, a) * 180) / Math.PI
  if (h < 0) h += 360

  return {
    l: Math.round(L * 1000) / 1000,
    c: Math.round(C * 1000) / 1000,
    h: Math.round(h * 10) / 10,
  }
}

/**
 * Convert OKLCH to RGB
 */
export function oklchToRgb(oklch: OKLCH): RGB {
  const L = oklch.l
  const C = oklch.c
  const hRad = (oklch.h * Math.PI) / 180

  const a = C * Math.cos(hRad)
  const b = C * Math.sin(hRad)

  // Inverse OKLAB to LMS
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b
  const s_ = L - 0.0894841775 * a - 1.291485548 * b

  const l = l_ * l_ * l_
  const m = m_ * m_ * m_
  const s = s_ * s_ * s_

  // LMS to linear sRGB
  const rLin = +4.0767434757 * l - 3.3077115913 * m + 0.2309699291 * s
  const gLin = -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s
  const bLin = -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s

  return {
    r: clamp(Math.round(srgbDelinearize(rLin) * 255), 0, 255),
    g: clamp(Math.round(srgbDelinearize(gLin) * 255), 0, 255),
    b: clamp(Math.round(srgbDelinearize(bLin) * 255), 0, 255),
  }
}

/**
 * Calculate WCAG 2.1 relative luminance
 * Formula: 0.2126 * R_lin + 0.7152 * G_lin + 0.0722 * B_lin
 */
export function getRelativeLuminance(rgb: RGB): number {
  const rLin = srgbLinearize(rgb.r)
  const gLin = srgbLinearize(rgb.g)
  const bLin = srgbLinearize(rgb.b)
  return 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin
}

/**
 * Calculate WCAG contrast ratio between two luminances (1.0 to 21.0)
 */
export function getContrastRatio(lum1: number, lum2: number): number {
  const lighter = Math.max(lum1, lum2)
  const darker = Math.min(lum1, lum2)
  const ratio = (lighter + 0.05) / (darker + 0.05)
  return Math.round(ratio * 100) / 100
}

/**
 * Calculate full WCAG contrast metrics against White and Black
 */
export function calculateContrast(rgb: RGB): WCAGContrast {
  const lum = getRelativeLuminance(rgb)
  const whiteRatio = getContrastRatio(1.0, lum)
  const blackRatio = getContrastRatio(lum, 0.0)

  // Better contrast choice: White or Black
  const suggestedForeground: '#ffffff' | '#000000' =
    whiteRatio >= blackRatio ? '#ffffff' : '#000000'

  return {
    whiteRatio,
    blackRatio,
    whiteAA: whiteRatio >= 4.5,
    whiteAAA: whiteRatio >= 7.0,
    blackAA: blackRatio >= 4.5,
    blackAAA: blackRatio >= 7.0,
    whiteAALarge: whiteRatio >= 3.0,
    whiteAAALarge: whiteRatio >= 4.5,
    blackAALarge: blackRatio >= 3.0,
    blackAAALarge: blackRatio >= 4.5,
    suggestedForeground,
    relativeLuminance: Math.round(lum * 1000) / 1000,
  }
}

/**
 * Format color strings for copy/display
 */
export function formatRgbString(rgb: RGB): string {
  return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
}

export function formatHslString(hsl: HSL): string {
  return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
}

export function formatOklchString(oklch: OKLCH): string {
  return `oklch(${oklch.l} ${oklch.c} ${oklch.h})`
}
