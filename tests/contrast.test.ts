import { describe, it, expect } from 'vitest';
import { analyzeContrast } from '../src/lib/color/contrast';
import { simulateColorBlindness } from '../src/lib/color/blindness';
import { isValidHex } from '../src/lib/color/conversions';

describe('Contrast & Accessibility Checks', () => {
  it('correctly reports AA and AAA status for high-contrast pairs', () => {
    // Black text on white background (21:1) passes all
    const result = analyzeContrast('#000000', '#FFFFFF');
    expect(result.ratio).toBe(21);
    expect(result.normalTextAA).toBe(true);
    expect(result.normalTextAAA).toBe(true);
    expect(result.largeTextAA).toBe(true);
    expect(result.largeTextAAA).toBe(true);
    expect(result.uiComponentAA).toBe(true);
  });

  it('correctly fails low-contrast pairs and provides automatic fix suggestions', () => {
    // Light gray on white fails AA normal text (4.5:1)
    const result = analyzeContrast('#CCCCCC', '#FFFFFF');
    expect(result.normalTextAA).toBe(false);

    // Should suggest a darker fix that satisfies 4.5:1
    expect(result.suggestedTextDark).toBeDefined();
    if (result.suggestedTextDark) {
      const fixed = analyzeContrast(result.suggestedTextDark, '#FFFFFF');
      expect(fixed.normalTextAA).toBe(true);
    }
  });

  it('simulates color blindness without returning invalid or NaN colors', () => {
    const brand = '#A1E3F9';
    const protan = simulateColorBlindness(brand, 'protanopia');
    const deutan = simulateColorBlindness(brand, 'deuteranopia');
    const tritan = simulateColorBlindness(brand, 'tritanopia');
    const gray = simulateColorBlindness(brand, 'grayscale');

    expect(isValidHex(protan)).toBe(true);
    expect(isValidHex(deutan)).toBe(true);
    expect(isValidHex(tritan)).toBe(true);
    expect(isValidHex(gray)).toBe(true);

    // Grayscale simulation should have R == G == B
    const cleanGray = gray.replace('#', '');
    const r = cleanGray.substring(0, 2);
    const g = cleanGray.substring(2, 4);
    const b = cleanGray.substring(4, 6);
    expect(r).toBe(g);
    expect(g).toBe(b);
  });
});
