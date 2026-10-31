export interface RGB {
  r: number
  g: number
  b: number
}

export interface HSL {
  h: number // 0 - 360
  s: number // 0 - 100
  l: number // 0 - 100
}

export interface OKLCH {
  l: number // 0 - 1 (Lightness)
  c: number // 0 - 0.4 (Chroma)
  h: number // 0 - 360 (Hue)
}

export interface WCAGContrast {
  whiteRatio: number
  blackRatio: number
  whiteAA: boolean
  whiteAAA: boolean
  blackAA: boolean
  blackAAA: boolean
  whiteAALarge: boolean
  whiteAAALarge: boolean
  blackAALarge: boolean
  blackAAALarge: boolean
  suggestedForeground: '#ffffff' | '#000000'
  relativeLuminance: number
}

export type SwatchRole =
  | 'Dominant'
  | 'Vibrant'
  | 'Muted'
  | 'DarkVibrant'
  | 'DarkMuted'
  | 'LightVibrant'
  | 'LightMuted'
  | 'Manual'
  | 'Custom'

export interface PaletteColor {
  id: string
  hex: string // e.g. "#7C3AED" (uppercase 6-char hex)
  rgb: RGB
  hsl: HSL
  oklch: OKLCH
  contrast: WCAGContrast
  locked: boolean
  population: number // estimated pixel cluster count
  proportion: number // estimated percentage (0.0 to 1.0)
  role?: SwatchRole
  isManual?: boolean
}

export type PalettePreset = 'balanced' | 'dominant' | 'vibrant' | 'muted'

export type ExtractionQuality = 'fast' | 'balanced' | 'high'

export type ColorSpaceOption = 'oklch' | 'rgb'

export interface ExtractionConfig {
  colorCount: number // 2 - 20
  preset: PalettePreset
  quality: ExtractionQuality
  colorSpace: ColorSpaceOption
  ignoreTransparent: boolean
  compositingBg: string
}

export interface ImageSourceData {
  file: File | null
  url: string
  name: string
  width: number
  height: number
  sizeBytes: number
  aspectRatio: number
}

export type ExportFormat = 'png' | 'svg' | 'css' | 'json' | 'txt'

export type Theme = 'light' | 'dark'

export type Language = 'en' | 'id'

export interface EyedropperSample {
  x: number
  y: number
  hex: string
  rgb: RGB
  isTransparent: boolean
}
