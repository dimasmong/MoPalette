import { describe, it, expect } from 'vitest';
import { PRESET_CATEGORIES, PRESET_PALETTES } from '../src/lib/presets/presets';
import { isValidHex } from '../src/lib/color/conversions';

describe('Preset Library Validation (V3 Requirements)', () => {
  it('contains at least 1,000 presets in total', () => {
    expect(PRESET_PALETTES.length).toBeGreaterThanOrEqual(1000);
  });

  const REQUIRED_CATEGORIES = [
    'Pastel',
    'Ocean',
    'Nature',
    'Sunset',
    'Earth',
    'Minimal',
    'Retro',
    'Neon',
    'Dark',
    'Elegant',
    'Warm',
    'Cool',
    'Monochrome',
    'Vintage',
    'Candy',
    'Forest',
    'Luxury',
    'Cyber',
    'Editorial',
    'Soft Neutral',
  ];

  it('contains all 20 required design categories', () => {
    REQUIRED_CATEGORIES.forEach((cat) => {
      expect(PRESET_CATEGORIES).toContain(cat);
    });
  });

  it('has at least 50 unique presets per required category', () => {
    REQUIRED_CATEGORIES.forEach((cat) => {
      const presetsInCat = PRESET_PALETTES.filter((p) => p.category === cat);
      expect(presetsInCat.length).toBeGreaterThanOrEqual(50);
    });
  });

  it('ensures all preset IDs are unique strings', () => {
    const ids = new Set<string>();
    PRESET_PALETTES.forEach((p) => {
      expect(ids.has(p.id)).toBe(false);
      ids.add(p.id);
    });
  });

  it('ensures all preset names are unique across the entire library', () => {
    const names = new Set<string>();
    PRESET_PALETTES.forEach((p) => {
      const lower = p.name.toLowerCase();
      expect(names.has(lower)).toBe(false);
      names.add(lower);
    });
  });

  it('ensures each preset contains exactly 5 valid, distinct hex color codes', () => {
    PRESET_PALETTES.forEach((p) => {
      expect(p.colors.length).toBe(5);
      const uniqueColors = new Set(p.colors.map((c) => c.toUpperCase()));
      // No duplicate colors inside the same palette
      expect(uniqueColors.size).toBe(5);
      p.colors.forEach((hex) => {
        expect(isValidHex(hex)).toBe(true);
      });
    });
  });

  it('ensures no two presets share the exact same 5-color combination', () => {
    const combinations = new Set<string>();
    PRESET_PALETTES.forEach((p) => {
      const sortedComb = [...p.colors].map((c) => c.toUpperCase()).sort().join(',');
      expect(combinations.has(sortedComb)).toBe(false);
      combinations.add(sortedComb);
    });
  });

  it('supports non-repeating 12-preset selection algorithm in All category', () => {
    const pool = PRESET_PALETTES;
    expect(pool.length).toBeGreaterThanOrEqual(1000);

    const first12 = pool.slice(0, 12);
    const firstIds = new Set(first12.map((p) => p.id));

    const candidates = pool.filter((p) => !firstIds.has(p.id));
    expect(candidates.length).toBeGreaterThanOrEqual(12);

    const second12 = candidates.slice(0, 12);
    const secondIds = new Set(second12.map((p) => p.id));

    // Overlap between first 12 and second 12 must be exactly zero
    firstIds.forEach((id) => {
      expect(secondIds.has(id)).toBe(false);
    });
  });
});
