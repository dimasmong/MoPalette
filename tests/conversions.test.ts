import { describe, it, expect } from 'vitest';
import {
  isValidHex,
  normalizeHex,
  decomposeColor,
  getContrastRatio,
  getReadableTextColor,
  hslToHex,
  oklchToHex,
  formatColorString,
} from '../src/lib/color/conversions';

describe('Color Conversions & Validation', () => {
  it('validates 3-digit and 6-digit hex codes', () => {
    expect(isValidHex('#A1E3F9')).toBe(true);
    expect(isValidHex('A1E3F9')).toBe(true);
    expect(isValidHex('#FFF')).toBe(true);
    expect(isValidHex('123')).toBe(true);
    expect(isValidHex('#GGG')).toBe(false);
    expect(isValidHex('#12345')).toBe(false);
    expect(isValidHex('')).toBe(false);
  });

  it('normalizes hex strings correctly', () => {
    expect(normalizeHex('a1e3f9')).toBe('#A1E3F9');
    expect(normalizeHex('#fff')).toBe('#FFFFFF');
    expect(normalizeHex('invalid', '#16242E')).toBe('#16242E');
  });

  it('decomposes brand color #A1E3F9 into supported color spaces', () => {
    const comp = decomposeColor('#A1E3F9');
    expect(comp.hex).toBe('#A1E3F9');
    expect(comp.rgb.r).toBe(161);
    expect(comp.rgb.g).toBe(227);
    expect(comp.rgb.b).toBe(249);
    expect(comp.hsl.h).toBeGreaterThanOrEqual(190);
    expect(comp.hsl.h).toBeLessThanOrEqual(200);
    expect(comp.luminance).toBeGreaterThan(0.6);
  });

  it('calculates WCAG contrast ratio accurately', () => {
    // Pure Black vs Pure White is exactly 21:1
    const blackWhiteRatio = getContrastRatio('#000000', '#FFFFFF');
    expect(blackWhiteRatio).toBe(21);

    // Same color contrast is 1:1
    const sameRatio = getContrastRatio('#A1E3F9', '#A1E3F9');
    expect(sameRatio).toBe(1);

    // Primary brand color #A1E3F9 vs dark text #16242E should have high contrast (>= 7:1)
    const brandDarkRatio = getContrastRatio('#A1E3F9', '#16242E');
    expect(brandDarkRatio).toBeGreaterThan(8);
  });

  it('suggests dark readable text over light primary #A1E3F9', () => {
    const textColor = getReadableTextColor('#A1E3F9');
    expect(textColor).toBe('#16242E');
  });

  it('suggests white readable text over deep navy #101820', () => {
    const textColor = getReadableTextColor('#101820');
    expect(textColor).toBe('#FFFFFF');
  });

  it('formats color strings for CSS outputs', () => {
    expect(formatColorString('#FFFFFF', 'hex')).toBe('#FFFFFF');
    expect(formatColorString('#000000', 'rgb')).toBe('rgb(0, 0, 0)');
    expect(formatColorString('#FFFFFF', 'hsl')).toBe('hsl(0, 0%, 100%)');
  });

  it('clamps HSL and OKLCH conversions safely', () => {
    const hexFromHsl = hslToHex(195, 80, 80);
    expect(isValidHex(hexFromHsl)).toBe(true);

    const hexFromOklch = oklchToHex(80, 15, 195);
    expect(isValidHex(hexFromOklch)).toBe(true);
  });
});
