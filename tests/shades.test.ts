import { describe, it, expect } from 'vitest';
import { generateShadeScale } from '../src/lib/color/shades';

describe('Design Token Shade Generator', () => {
  it('generates exactly 11 design token steps (50 to 950)', () => {
    const shades = generateShadeScale('#3BBEEF');
    expect(shades.length).toBe(11);
    expect(shades.map((s) => s.stop)).toEqual([
      50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
    ]);
  });

  it('marks exactly one step as source color', () => {
    const shades = generateShadeScale('#A1E3F9');
    const sourceSteps = shades.filter((s) => s.isSource);
    expect(sourceSteps.length).toBe(1);
  });

  it('provides readable text colors for each step', () => {
    const shades = generateShadeScale('#1EA0D5');
    // Step 50 (lightest) should use dark text #16242E
    expect(shades[0].textColor).toBe('#16242E');
    // Step 950 (darkest) should use white text #FFFFFF
    expect(shades[10].textColor).toBe('#FFFFFF');
  });
});
