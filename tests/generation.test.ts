import { describe, it, expect } from 'vitest';
import { generatePalette, createPrng } from '../src/lib/color/generation';
import { ColorItem } from '../src/types';

describe('Palette Generation Engine', () => {
  it('creates reproducible palettes when given the exact same seed', () => {
    const seed = 'test-seed-123';
    const p1 = generatePalette({ mood: 'balanced', harmony: 'none', count: 5, seed });
    const p2 = generatePalette({ mood: 'balanced', harmony: 'none', count: 5, seed });

    expect(p1.map((c) => c.hex)).toEqual(p2.map((c) => c.hex));
  });

  it('regenerates the first color (including #A1E3F9) when it is unlocked', () => {
    // Initial palette starting with #A1E3F9, all unlocked
    const initialColors: ColorItem[] = [
      { id: '1', hex: '#A1E3F9', locked: false, name: 'Ice Blue' },
      { id: '2', hex: '#73D3F5', locked: false, name: 'Sky Blue' },
      { id: '3', hex: '#3BBEEF', locked: false, name: 'Deep Sky Blue' },
      { id: '4', hex: '#1EA0D5', locked: false, name: 'Cerulean' },
      { id: '5', hex: '#16242E', locked: false, name: 'Deep Navy' },
    ];

    const next = generatePalette({
      mood: 'random',
      harmony: 'none',
      count: 5,
      currentColors: initialColors,
      seed: 'fresh-seed-456',
    });

    // Swatch 0 was unlocked, so it MUST NOT remain #A1E3F9!
    expect(next[0].hex).not.toBe('#A1E3F9');
    expect(next.length).toBe(5);
  });

  it('regenerates all unlocked colors across generations', () => {
    const initialColors: ColorItem[] = [
      { id: '1', hex: '#111111', locked: false },
      { id: '2', hex: '#222222', locked: false },
      { id: '3', hex: '#333333', locked: false },
    ];

    const next = generatePalette({
      mood: 'random',
      harmony: 'none',
      count: 3,
      currentColors: initialColors,
      seed: 'another-seed-789',
    });

    // Every unlocked color should change
    expect(next[0].hex).not.toBe('#111111');
    expect(next[1].hex).not.toBe('#222222');
    expect(next[2].hex).not.toBe('#333333');
  });

  it('preserves explicitly locked colors while regenerating unlocked ones', () => {
    const current: ColorItem[] = [
      { id: 'locked-1', hex: '#FF5733', locked: true, name: 'Persimmon' },
      { id: 'unlocked-2', hex: '#123456', locked: false },
      { id: 'unlocked-3', hex: '#654321', locked: false },
    ];

    const next = generatePalette({
      mood: 'vibrant',
      harmony: 'none',
      count: 3,
      currentColors: current,
      seed: 'locked-test-seed',
    });

    // Swatch 0 is locked: must remain exactly unchanged
    expect(next[0].hex).toBe('#FF5733');
    expect(next[0].locked).toBe(true);
    expect(next[0].id).toBe('locked-1');

    // Swatch 1 and 2 were unlocked: must change
    expect(next[1].hex).not.toBe('#123456');
    expect(next[2].hex).not.toBe('#654321');
  });

  it('allows an unlocked swatch that was previously locked to regenerate', () => {
    // User unlocked swatch 0
    const current: ColorItem[] = [
      { id: 'previously-locked-1', hex: '#FF5733', locked: false },
      { id: 'unlocked-2', hex: '#123456', locked: false },
    ];

    const next = generatePalette({
      mood: 'random',
      harmony: 'none',
      count: 2,
      currentColors: current,
      seed: 'unlocked-eligibility-seed',
    });

    // Now eligible for regeneration
    expect(next[0].hex).not.toBe('#FF5733');
  });

  it('preserves all colors when all colors are locked', () => {
    const allLocked: ColorItem[] = [
      { id: '1', hex: '#FF0000', locked: true },
      { id: '2', hex: '#00FF00', locked: true },
      { id: '3', hex: '#0000FF', locked: true },
    ];

    const next = generatePalette({
      mood: 'random',
      harmony: 'none',
      count: 3,
      currentColors: allLocked,
      seed: 'all-locked-seed',
    });

    expect(next.map((c) => c.hex)).toEqual(['#FF0000', '#00FF00', '#0000FF']);
    expect(next.every((c) => c.locked)).toBe(true);
  });

  it('preserves custom base color only in custom mode', () => {
    const customBase = '#FF8800';

    // 1. In Custom Base Color mode: swatch 0 is the custom base color
    const customPalette = generatePalette({
      mood: 'custom',
      harmony: 'none',
      baseColor: customBase,
      count: 4,
      seed: 'custom-base-seed',
    });
    expect(customPalette[0].hex).toBe('#FF8800');

    // 2. In Random mode with baseColor passed: baseColor is NOT pinned!
    const randomPalette = generatePalette({
      mood: 'random',
      harmony: 'none',
      baseColor: undefined, // Random mode does not pass base color
      count: 4,
      seed: 'random-no-pin-seed',
    });
    // In random mode, swatch 0 is random, not pinned to #FF8800 or #A1E3F9
    expect(randomPalette[0].hex).not.toBe('#FF8800');
    expect(randomPalette[0].hex).not.toBe('#A1E3F9');
  });

  it('generates palettes within requested bounds (2 to 12)', () => {
    const minPalette = generatePalette({ mood: 'pastel', harmony: 'none', count: 2 });
    expect(minPalette.length).toBe(2);

    const maxPalette = generatePalette({ mood: 'earthy', harmony: 'none', count: 12 });
    expect(maxPalette.length).toBe(12);

    // Below 2 clamps to 2
    const clampedUnder = generatePalette({ mood: 'random', harmony: 'none', count: 1 });
    expect(clampedUnder.length).toBe(2);

    // Above 12 clamps to 12
    const clampedOver = generatePalette({ mood: 'random', harmony: 'none', count: 15 });
    expect(clampedOver.length).toBe(12);
  });

  it('PRNG generates deterministic pseudo-random sequence', () => {
    const prng1 = createPrng('seed-abc');
    const prng2 = createPrng('seed-abc');

    const seq1 = [prng1(), prng1(), prng1()];
    const seq2 = [prng2(), prng2(), prng2()];

    expect(seq1).toEqual(seq2);
  });
});
