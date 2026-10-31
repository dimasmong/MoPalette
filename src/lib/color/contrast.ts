import { ContrastAnalysis } from '@/types';
import { getContrastRatio, normalizeHex, oklchToHex, decomposeColor } from './conversions';

/**
 * Analyzes contrast between text and background color according to WCAG 2.2
 */
export function analyzeContrast(textHexInput: string, bgHexInput: string): ContrastAnalysis {
  const textColor = normalizeHex(textHexInput, '#16242E');
  const bgColor = normalizeHex(bgHexInput, '#FFFFFF');
  const ratio = getContrastRatio(textColor, bgColor);

  const normalTextAA = ratio >= 4.5;
  const normalTextAAA = ratio >= 7.0;
  const largeTextAA = ratio >= 3.0;
  const largeTextAAA = ratio >= 4.5;
  const uiComponentAA = ratio >= 3.0;

  let suggestedTextLight: string | undefined;
  let suggestedTextDark: string | undefined;

  // If normal text fails AA, calculate suggested fixes by adjusting lightness in OKLCH
  if (!normalTextAA) {
    const textDecomp = decomposeColor(textColor);
    const { c, h } = textDecomp.oklch;

    // Search for a lighter text color that achieves 4.5:1 contrast
    for (let l = 95; l >= 50; l -= 2) {
      const candidate = oklchToHex(l, c, h);
      if (getContrastRatio(candidate, bgColor) >= 4.5) {
        suggestedTextLight = candidate;
        break;
      }
    }

    // Search for a darker text color that achieves 4.5:1 contrast
    for (let l = 10; l <= 60; l += 2) {
      const candidate = oklchToHex(l, c, h);
      if (getContrastRatio(candidate, bgColor) >= 4.5) {
        suggestedTextDark = candidate;
        break;
      }
    }
  }

  return {
    ratio,
    textColor,
    bgColor,
    normalTextAA,
    normalTextAAA,
    largeTextAA,
    largeTextAAA,
    uiComponentAA,
    suggestedTextLight,
    suggestedTextDark,
  };
}
