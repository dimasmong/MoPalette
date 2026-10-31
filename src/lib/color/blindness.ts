import { ColorBlindnessType } from '@/types';
import { normalizeHex } from './conversions';
import { rgb, formatHex, clampRgb } from 'culori';

// Brettel / Machado linear RGB transformation matrices
const MATRICES: Record<Exclude<ColorBlindnessType, 'normal' | 'grayscale'>, number[][]> = {
  protanopia: [
    [0.56667, 0.43333, 0.0],
    [0.55833, 0.44167, 0.0],
    [0.0, 0.24167, 0.75833],
  ],
  deuteranopia: [
    [0.625, 0.375, 0.0],
    [0.7, 0.3, 0.0],
    [0.0, 0.3, 0.7],
  ],
  tritanopia: [
    [0.95, 0.05, 0.0],
    [0.0, 0.43333, 0.56667],
    [0.0, 0.475, 0.525],
  ],
};

function srgbToLinear(c: number): number {
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function linearToSrgb(c: number): number {
  return c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(Math.max(0, c), 1 / 2.4) - 0.055;
}

/**
 * Simulates color vision deficiency for a single hex code
 */
export function simulateColorBlindness(hexInput: string, type: ColorBlindnessType): string {
  const hex = normalizeHex(hexInput);
  if (type === 'normal') return hex;

  const rgbObj = rgb(hex);
  if (!rgbObj) return hex;

  const rLin = srgbToLinear(rgbObj.r ?? 0);
  const gLin = srgbToLinear(rgbObj.g ?? 0);
  const bLin = srgbToLinear(rgbObj.b ?? 0);

  if (type === 'grayscale') {
    // Standard relative luminance weights in linear space
    const yLin = 0.2126 * rLin + 0.7152 * gLin + 0.0722 * bLin;
    const ySrgb = linearToSrgb(yLin);
    const clamped = clampRgb({ mode: 'rgb', r: ySrgb, g: ySrgb, b: ySrgb });
    return formatHex(clamped).toUpperCase();
  }

  const m = MATRICES[type];
  const simRlin = m[0][0] * rLin + m[0][1] * gLin + m[0][2] * bLin;
  const simGlin = m[1][0] * rLin + m[1][1] * gLin + m[1][2] * bLin;
  const simBlin = m[2][0] * rLin + m[2][1] * gLin + m[2][2] * bLin;

  const simR = linearToSrgb(simRlin);
  const simG = linearToSrgb(simGlin);
  const simB = linearToSrgb(simBlin);

  const clamped = clampRgb({ mode: 'rgb', r: simR, g: simG, b: simB });
  return formatHex(clamped).toUpperCase();
}
