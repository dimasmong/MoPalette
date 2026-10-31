import {
  formatHex,
  rgb,
  hsl,
  hsv,
  oklch,
  lab,
  wcagLuminance,
  wcagContrast,
  clampRgb,
} from 'culori';

/**
 * Validates whether a string is a valid 3-digit or 6-digit hex color
 */
export function isValidHex(hex: string): boolean {
  if (!hex || typeof hex !== 'string') return false;
  const clean = hex.trim().replace(/^#/, '');
  return /^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/.test(clean);
}

/**
 * Normalizes hex to standard uppercase #RRGGBB
 */
export function normalizeHex(input: string, fallback = '#16242E'): string {
  if (!isValidHex(input)) return fallback;
  let clean = input.trim().replace(/^#/, '');
  if (clean.length === 3) {
    clean = clean
      .split('')
      .map((c) => c + c)
      .join('');
  }
  return `#${clean.toUpperCase()}`;
}

export interface ColorComponents {
  hex: string;
  rgb: { r: number; g: number; b: number };
  hsl: { h: number; s: number; l: number };
  hsv: { h: number; s: number; v: number };
  oklch: { l: number; c: number; h: number };
  lab: { l: number; a: number; b: number };
  luminance: number;
}

/**
 * Decomposes any valid hex into all major supported color spaces
 */
export function decomposeColor(hexInput: string): ColorComponents {
  const hex = normalizeHex(hexInput);
  const rgbObj = rgb(hex) || { mode: 'rgb', r: 0, g: 0, b: 0 };
  const hslObj = hsl(hex) || { mode: 'hsl', h: 0, s: 0, l: 0 };
  const hsvObj = hsv(hex) || { mode: 'hsv', h: 0, s: 0, v: 0 };
  const oklchObj = oklch(hex) || { mode: 'oklch', l: 0, c: 0, h: 0 };
  const labObj = lab(hex) || { mode: 'lab', l: 0, a: 0, b: 0 };

  const luminance = wcagLuminance(hex) ?? 0;

  return {
    hex,
    rgb: {
      r: Math.round((rgbObj.r ?? 0) * 255),
      g: Math.round((rgbObj.g ?? 0) * 255),
      b: Math.round((rgbObj.b ?? 0) * 255),
    },
    hsl: {
      h: Math.round(hslObj.h ?? 0),
      s: Math.round((hslObj.s ?? 0) * 100),
      l: Math.round((hslObj.l ?? 0) * 100),
    },
    hsv: {
      h: Math.round(hsvObj.h ?? 0),
      s: Math.round((hsvObj.s ?? 0) * 100),
      v: Math.round((hsvObj.v ?? 0) * 100),
    },
    oklch: {
      l: Number(((oklchObj.l ?? 0) * 100).toFixed(1)),
      c: Number(((oklchObj.c ?? 0) * 100).toFixed(2)),
      h: Math.round(oklchObj.h ?? 0),
    },
    lab: {
      l: Math.round(labObj.l ?? 0),
      a: Math.round(labObj.a ?? 0),
      b: Math.round(labObj.b ?? 0),
    },
    luminance: Number(luminance.toFixed(4)),
  };
}

/**
 * Formats color for specific output format string
 */
export function formatColorString(
  hexInput: string,
  format: 'hex' | 'rgb' | 'hsl' | 'hsv' | 'oklch' | 'lab'
): string {
  const hex = normalizeHex(hexInput);
  const comp = decomposeColor(hex);

  switch (format) {
    case 'hex':
      return hex;
    case 'rgb':
      return `rgb(${comp.rgb.r}, ${comp.rgb.g}, ${comp.rgb.b})`;
    case 'hsl':
      return `hsl(${comp.hsl.h}, ${comp.hsl.s}%, ${comp.hsl.l}%)`;
    case 'hsv':
      return `hsv(${comp.hsv.h}, ${comp.hsv.s}%, ${comp.hsv.v}%)`;
    case 'oklch':
      return `oklch(${(comp.oklch.l / 100).toFixed(2)} ${(comp.oklch.c / 100).toFixed(3)} ${comp.oklch.h})`;
    case 'lab':
      return `lab(${comp.lab.l}% ${comp.lab.a} ${comp.lab.b})`;
    default:
      return hex;
  }
}

/**
 * Calculates WCAG 2.2 contrast ratio between two colors
 */
export function getContrastRatio(colorA: string, colorB: string): number {
  try {
    const ratio = wcagContrast(colorA, colorB);
    return Number((ratio || 1).toFixed(2));
  } catch {
    return 1;
  }
}

/**
 * Returns suggested readable foreground text color: dark (#16242E) or light (#FFFFFF)
 */
export function getReadableTextColor(bgHex: string): '#16242E' | '#FFFFFF' {
  const contrastWithWhite = getContrastRatio(bgHex, '#FFFFFF');
  const contrastWithDark = getContrastRatio(bgHex, '#16242E');
  return contrastWithDark >= contrastWithWhite ? '#16242E' : '#FFFFFF';
}

/**
 * Constructs a clamped hex from HSL values
 */
export function hslToHex(h: number, s: number, l: number): string {
  const color = {
    mode: 'hsl' as const,
    h: ((h % 360) + 360) % 360,
    s: Math.max(0, Math.min(1, s / 100)),
    l: Math.max(0, Math.min(1, l / 100)),
  };
  const clamped = clampRgb(rgb(color));
  return formatHex(clamped).toUpperCase();
}

/**
 * Constructs a clamped hex from OKLCH values
 */
export function oklchToHex(lPercent: number, cPercent: number, h: number): string {
  const color = {
    mode: 'oklch' as const,
    l: Math.max(0, Math.min(1, lPercent / 100)),
    c: Math.max(0, Math.min(0.4, cPercent / 100)),
    h: ((h % 360) + 360) % 360,
  };
  const clamped = clampRgb(rgb(color));
  return formatHex(clamped).toUpperCase();
}
