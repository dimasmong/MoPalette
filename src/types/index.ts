export type ColorFormat = 'hex' | 'rgb' | 'hsl' | 'hsv' | 'oklch' | 'lab';

export interface ColorItem {
  id: string;
  hex: string; // #RRGGBB
  locked: boolean;
  name?: string;
}

export type HarmonyMode =
  | 'none'
  | 'analogous'
  | 'complementary'
  | 'triadic'
  | 'tetradic'
  | 'split-complementary'
  | 'monochromatic';

export type GenerationMood =
  | 'random'
  | 'balanced'
  | 'vibrant'
  | 'pastel'
  | 'muted'
  | 'earthy'
  | 'monochromatic'
  | 'custom';

export interface Palette {
  id: string;
  name: string;
  colors: ColorItem[];
  createdAt: number;
  isFavorite?: boolean;
  tags?: string[];
}

export type ExtractionMethod = 'dominant' | 'vibrant' | 'muted' | 'balanced';
export type ImageSortMode = 'prominence' | 'luminance' | 'hue';

export interface ExtractedColor {
  hex: string;
  percentage: number;
  count: number;
  name?: string;
}

export interface SampleImage {
  id: string;
  titleKey: string;
  categoryKey: string;
  descriptionKey: string;
  url: string;
  attribution: string;
}

export type ExportFormat =
  | 'png'
  | 'svg'
  | 'json'
  | 'css'
  | 'scss'
  | 'tailwind'
  | 'txt'
  | 'gpl';

export type CardLayout = 'horizontal' | 'vertical' | 'grid';

export interface ExportOptions {
  format: ExportFormat;
  layout: CardLayout;
  includeLabels: boolean;
  includeNames: boolean;
  bgColor: 'transparent' | 'white' | 'dark' | 'brand';
  resolutionMultiplier: number;
}

export type Language = 'en' | 'id';

export type ColorBlindnessType =
  | 'normal'
  | 'protanopia'
  | 'deuteranopia'
  | 'tritanopia'
  | 'grayscale';

// --- Semantic Color System for Live Preview (V2) ---
export type ColorRole =
  | 'primary'
  | 'secondary'
  | 'background'
  | 'surface'
  | 'text'
  | 'mutedText'
  | 'accent'
  | 'border'
  | 'success'
  | 'warning'
  | 'danger';

export type ColorSource = 'palette' | 'preset' | 'manual' | 'derived';

export interface RoleAssignment {
  color: string;
  source: ColorSource;
  isManualOverride: boolean;
}

export type RoleAssignments = Record<ColorRole, RoleAssignment>;

export type PreviewAppearance = 'light' | 'dark' | 'app';

export interface RoleContrastInfo {
  ratio: number;
  passesAA: boolean;
  passesAAA: boolean;
  readableForeground: string;
  suggestedColor?: string;
  warning?: string;
}

export type PreviewContrastReport = Partial<Record<ColorRole, RoleContrastInfo>>;

export interface RoleMapping {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: string;
  accent: string;
}

export interface ContrastAnalysis {
  ratio: number;
  textColor: string;
  bgColor: string;
  normalTextAA: boolean;
  normalTextAAA: boolean;
  largeTextAA: boolean;
  largeTextAAA: boolean;
  uiComponentAA: boolean;
  suggestedTextLight?: string;
  suggestedTextDark?: string;
}

export interface ShadeStep {
  stop: number; // 50, 100, 200 ... 950
  hex: string;
  isSource: boolean;
  textColor: '#FFFFFF' | '#16242E';
  contrastRatio: number;
}

export interface PalettePreset {
  id: string;
  name: string;
  category: string;
  colors: string[];
  tags?: string[];
}
