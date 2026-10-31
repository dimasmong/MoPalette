import { ColorItem, GenerationMood, HarmonyMode } from '@/types';
import { hslToHex, oklchToHex, normalizeHex, isValidHex, decomposeColor } from './conversions';
import { generateHarmonyColors } from './harmony';
import { getApproximateColorName } from './names';

/**
 * Fast Mulberry32 32-bit PRNG for reproducible seeded generation
 */
export function createPrng(seed: number | string): () => number {
  let s: number;
  if (typeof seed === 'string') {
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = Math.imul(31, hash) + seed.charCodeAt(i) | 0;
    }
    s = hash >>> 0;
  } else {
    s = seed >>> 0;
  }

  return function next(): number {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Generates an initial random seed string
 */
export function generateRandomSeed(): string {
  return Math.random().toString(36).substring(2, 9);
}

export interface GenerationOptions {
  mood: GenerationMood;
  harmony: HarmonyMode;
  baseColor?: string;
  seed?: string | number;
  count: number; // 2 to 12
  currentColors?: ColorItem[];
}

/**
 * Generates a color based on mood and random values.
 * Never defaults to a fixed brand hue.
 */
function generateMoodColor(mood: GenerationMood, prng: () => number, baseH?: number): string {
  switch (mood) {
    case 'custom': {
      // In custom mood, if called standalone, generate a balanced color
      const h = baseH !== undefined ? (baseH + (prng() * 60 - 30) + 360) % 360 : prng() * 360;
      const s = 35 + prng() * 50;
      const l = 35 + prng() * 45;
      return hslToHex(h, s, l);
    }
    case 'vibrant': {
      const h = baseH !== undefined ? (baseH + (prng() * 60 - 30) + 360) % 360 : prng() * 360;
      const s = 75 + prng() * 25; // 75 - 100%
      const l = 45 + prng() * 20; // 45 - 65%
      return hslToHex(h, s, l);
    }
    case 'pastel': {
      const h = baseH !== undefined ? (baseH + (prng() * 60 - 30) + 360) % 360 : prng() * 360;
      const s = 25 + prng() * 30; // 25 - 55%
      const l = 80 + prng() * 12; // 80 - 92%
      return hslToHex(h, s, l);
    }
    case 'muted': {
      const h = baseH !== undefined ? (baseH + (prng() * 60 - 30) + 360) % 360 : prng() * 360;
      const s = 15 + prng() * 25; // 15 - 40%
      const l = 35 + prng() * 35; // 35 - 70%
      return hslToHex(h, s, l);
    }
    case 'earthy': {
      // Earthy hues: warm oranges, browns, sage greens, sand, terracotta, olive (20 - 150)
      const earthyHues = [25, 35, 45, 65, 85, 110, 140, 205];
      const selectedHue = earthyHues[Math.floor(prng() * earthyHues.length)];
      const h = (selectedHue + prng() * 20 - 10 + 360) % 360;
      const s = 25 + prng() * 35; // 25 - 60%
      const l = 28 + prng() * 42; // 28 - 70%
      return hslToHex(h, s, l);
    }
    case 'monochromatic': {
      // Use baseH if provided; otherwise pick a fresh random hue (never hardcode 195)
      const h = baseH !== undefined ? baseH : prng() * 360;
      const s = 20 + prng() * 60;
      const l = 20 + prng() * 68;
      return hslToHex(h, s, l);
    }
    case 'balanced': {
      // Perceptual OKLCH balance
      const h = baseH !== undefined ? (baseH + (prng() * 90 - 45) + 360) % 360 : prng() * 360;
      const lPercent = 40 + prng() * 45; // 40 - 85%
      const cPercent = 8 + prng() * 16;  // 8 - 24% chroma
      return oklchToHex(lPercent, cPercent, h);
    }
    case 'random':
    default: {
      const h = prng() * 360;
      const s = 30 + prng() * 65; // 30 - 95%
      const l = 25 + prng() * 60; // 25 - 85%
      return hslToHex(h, s, l);
    }
  }
}

/**
 * Main palette generator supporting locked items, seed, mood, and harmony.
 *
 * Rules:
 * - All unlocked colors (including swatch 0) regenerate.
 * - Explicitly locked colors remain unchanged.
 * - Base color is preserved ONLY when mode === 'custom' or when a locked color exists.
 * - In Random and other standard modes, no color is automatically fixed.
 */
export function generatePalette(options: GenerationOptions): ColorItem[] {
  const {
    mood,
    harmony,
    baseColor,
    seed = generateRandomSeed(),
    count = 5,
    currentColors = [],
  } = options;

  const prng = createPrng(seed);
  const clampedCount = Math.max(2, Math.min(12, count));

  // If ALL swatches are already locked, preserve them entirely
  const allLocked =
    currentColors.length > 0 &&
    currentColors.length === clampedCount &&
    currentColors.every((c) => c.locked);

  if (allLocked) {
    return currentColors.map((c) => ({
      ...c,
      name: c.name || getApproximateColorName(c.hex),
    }));
  }

  // Check if user explicitly locked any color
  const firstLockedColor = currentColors.find((c) => c.locked);

  // Determine harmony anchor:
  // 1. If any color is locked by user, use that locked color as the harmony anchor.
  // 2. Else if mood === 'custom', use the user-selected base color.
  // 3. Otherwise (in Random, Balanced, etc.), generate a fresh random anchor so harmony
  //    regenerates completely on every click rather than freezing on a fixed color!
  let harmonyAnchor: string | undefined = undefined;
  if (harmony !== 'none') {
    if (firstLockedColor) {
      harmonyAnchor = firstLockedColor.hex;
    } else if (mood === 'custom' && baseColor && isValidHex(baseColor)) {
      harmonyAnchor = normalizeHex(baseColor);
    } else {
      // Fresh randomized anchor for this generation
      harmonyAnchor = generateMoodColor(mood, prng);
    }
  }

  // Pre-calculate harmony colors if a harmony mode is selected
  let harmonyColors: string[] = [];
  if (harmony !== 'none' && harmonyAnchor) {
    harmonyColors = generateHarmonyColors(harmonyAnchor, harmony, clampedCount);
  }

  // Determine Custom Base Color parameters
  const isCustomBaseMode = mood === 'custom';
  const customBaseHex =
    isCustomBaseMode && baseColor && isValidHex(baseColor) ? normalizeHex(baseColor) : undefined;
  const customBaseHsl = customBaseHex ? decomposeColor(customBaseHex).hsl : undefined;

  const result: ColorItem[] = [];

  for (let i = 0; i < clampedCount; i++) {
    const existing = currentColors[i];

    // If swatch exists and is locked, preserve it exactly!
    if (existing && existing.locked) {
      result.push({
        ...existing,
        name: existing.name || getApproximateColorName(existing.hex),
      });
      continue;
    }

    let hex: string;

    if (harmony !== 'none' && harmonyColors[i]) {
      hex = harmonyColors[i];
    } else if (isCustomBaseMode && customBaseHex) {
      // Custom Base Color mode: swatch 0 uses the specified base color (if unlocked)
      // Subsequent swatches generate harmonious shifts around that base color
      if (i === 0) {
        hex = customBaseHex;
      } else {
        const baseH = customBaseHsl?.h ?? 0;
        const shiftH = (baseH + i * 36 + (prng() * 20 - 10) + 360) % 360;
        const s = Math.max(20, Math.min(95, (customBaseHsl?.s ?? 70) + (prng() * 25 - 12)));
        const l = Math.max(
          20,
          Math.min(90, 25 + (i / Math.max(clampedCount - 1, 1)) * 60 + (prng() * 10 - 5))
        );
        hex = hslToHex(shiftH, s, l);
      }
    } else {
      // In all standard modes (Random, Balanced, Vibrant, Pastel, Muted, Earthy, Monochromatic):
      // Every unlocked swatch, including swatch 0, regenerates freely!
      hex = generateMoodColor(mood, prng);
    }

    result.push({
      id: existing ? existing.id : `color-${Date.now()}-${i}-${Math.random().toString(36).substr(2, 4)}`,
      hex: normalizeHex(hex),
      locked: false,
      name: getApproximateColorName(hex),
    });
  }

  return result;
}

/**
 * Regenerates an individual unlocked color
 */
export function regenerateSingleColor(
  item: ColorItem,
  mood: GenerationMood,
  seed?: string
): ColorItem {
  if (item.locked) return item;
  const prng = createPrng(seed || Math.random());
  const newHex = generateMoodColor(mood, prng);
  return {
    ...item,
    hex: normalizeHex(newHex),
    name: getApproximateColorName(newHex),
  };
}
