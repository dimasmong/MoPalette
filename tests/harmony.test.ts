import { describe, it, expect } from 'vitest';
import { generateHarmonyColors, getHarmonyWheelNodes } from '../src/lib/color/harmony';
import { hsl } from 'culori';

describe('Color Harmonies', () => {
  const base = '#A1E3F9'; // ~195° hue

  it('generates complementary palette with opposite hue ~180° offset', () => {
    const comp = generateHarmonyColors(base, 'complementary', 2);
    expect(comp.length).toBe(2);
    expect(comp[0]).toBe('#A1E3F9');

    const baseH = hsl(comp[0])?.h ?? 0;
    const compH = hsl(comp[1])?.h ?? 0;
    const diff = Math.abs(baseH - compH);
    // Difference should be ~180°
    expect(Math.abs(diff - 180)).toBeLessThan(5);
  });

  it('generates triadic palette with 120° offsets', () => {
    const triad = generateHarmonyColors(base, 'triadic', 3);
    expect(triad.length).toBe(3);

    const h0 = hsl(triad[0])?.h ?? 0;
    const h1 = hsl(triad[1])?.h ?? 0;
    const h2 = hsl(triad[2])?.h ?? 0;

    const diff1 = (h1 - h0 + 360) % 360;
    const diff2 = (h2 - h0 + 360) % 360;

    expect(Math.abs(diff1 - 120)).toBeLessThan(5);
    expect(Math.abs(diff2 - 240)).toBeLessThan(5);
  });

  it('generates analogous palette within neighboring 30° range', () => {
    const analogous = generateHarmonyColors(base, 'analogous', 3);
    expect(analogous.length).toBe(3);
    for (const hex of analogous) {
      const h = hsl(hex)?.h ?? 0;
      const baseH = hsl(base)?.h ?? 0;
      const diff = Math.min(Math.abs(h - baseH), 360 - Math.abs(h - baseH));
      expect(diff).toBeLessThanOrEqual(45);
    }
  });

  it('returns valid wheel nodes with labels for visual indicator', () => {
    const nodes = getHarmonyWheelNodes(base, 'triadic');
    expect(nodes.length).toBe(3);
    expect(nodes[0].label).toBe('Base');
    expect(nodes[1].label).toContain('Triad');
    expect(nodes[2].label).toContain('Triad');
  });
});
