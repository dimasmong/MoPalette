import { ShadeStep } from '@/types';
import { normalizeHex, decomposeColor, oklchToHex, getReadableTextColor, getContrastRatio } from './conversions';
import { interpolate, formatHex } from 'culori';

const SHADE_STOPS = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

// Target lightness curve in OKLCH for each design token step
const TARGET_LIGHTNESS: Record<number, number> = {
  50: 97,
  100: 93,
  200: 86,
  300: 78,
  400: 68,
  500: 58,
  600: 48,
  700: 38,
  800: 28,
  900: 20,
  950: 12,
};

/**
 * Generates an 11-step design token scale (50-950) using perceptual OKLCH interpolation
 */
export function generateShadeScale(sourceHexInput: string): ShadeStep[] {
  const sourceHex = normalizeHex(sourceHexInput);
  const decomp = decomposeColor(sourceHex);
  const { l: sourceL, c: sourceC, h: sourceH } = decomp.oklch;

  // Find which stop is closest to source color's lightness
  let closestStop = 500;
  let minDiff = Infinity;
  for (const stop of SHADE_STOPS) {
    const diff = Math.abs(TARGET_LIGHTNESS[stop] - sourceL);
    if (diff < minDiff) {
      minDiff = diff;
      closestStop = stop;
    }
  }

  // Create perceptual interpolator in oklch
  // Light end: pure white tinted with hue; Dark end: very deep shade with hue
  const lightEnd = oklchToHex(98, Math.min(sourceC * 0.2, 4), sourceH);
  const darkEnd = oklchToHex(10, Math.min(sourceC * 0.4, 6), sourceH);

  // Interpolator between lightEnd -> sourceHex -> darkEnd
  const interpolatorLight = interpolate([lightEnd, sourceHex], 'oklch');
  const interpolatorDark = interpolate([sourceHex, darkEnd], 'oklch');

  const steps: ShadeStep[] = [];

  for (const stop of SHADE_STOPS) {
    let hex: string;

    if (stop === closestStop) {
      hex = sourceHex;
    } else if (stop < closestStop) {
      // 50..closestStop interpolates between lightEnd and sourceHex
      const factor = stop / closestStop;
      hex = (formatHex(interpolatorLight(factor)) || lightEnd).toUpperCase();
    } else {
      // closestStop..950 interpolates between sourceHex and darkEnd
      const factor = (stop - closestStop) / (950 - closestStop);
      hex = (formatHex(interpolatorDark(factor)) || darkEnd).toUpperCase();
    }

    const textColor = getReadableTextColor(hex);
    const contrastRatio = getContrastRatio(hex, textColor);

    steps.push({
      stop,
      hex: normalizeHex(hex),
      isSource: stop === closestStop,
      textColor,
      contrastRatio,
    });
  }

  return steps;
}
