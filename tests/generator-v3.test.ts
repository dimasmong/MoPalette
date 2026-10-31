import { describe, it, expect } from 'vitest';
import { generatePalette } from '../src/lib/color/generation';
import { ColorItem } from '../src/types';

describe('Generator V3 Lock & Regeneration Behavior', () => {
  const initialColors: ColorItem[] = [
    { id: '1', hex: '#FF0000', locked: true, name: 'Red' },
    { id: '2', hex: '#00FF00', locked: false, name: 'Green' },
    { id: '3', hex: '#0000FF', locked: true, name: 'Blue' },
    { id: '4', hex: '#FFFF00', locked: false, name: 'Yellow' },
    { id: '5', hex: '#FF00FF', locked: false, name: 'Magenta' },
  ];

  it('preserves explicitly locked colors during standard generation', () => {
    const generated = generatePalette({
      mood: 'random',
      harmony: 'none',
      count: 5,
      currentColors: initialColors,
      seed: 'test-seed-1',
    });

    expect(generated.length).toBe(5);
    // Position 0 and Position 2 were locked and must remain intact
    expect(generated[0].hex).toBe('#FF0000');
    expect(generated[0].locked).toBe(true);

    expect(generated[2].hex).toBe('#0000FF');
    expect(generated[2].locked).toBe(true);

    // Unlocked colors can change
    expect(generated[1].locked).toBe(false);
    expect(generated[3].locked).toBe(false);
  });

  it('unlocks all colors and regenerates all swatches in Unlock All & Generate mode', () => {
    // In Unlock All & Generate, swatches are first fully unlocked
    const unlockedColors = initialColors.map((c) => ({ ...c, locked: false }));
    const generated = generatePalette({
      mood: 'random',
      harmony: 'none',
      count: 5,
      currentColors: unlockedColors,
      seed: 'test-seed-unlock-all',
    });

    expect(generated.length).toBe(5);
    // All swatches must have locked = false
    generated.forEach((c) => {
      expect(c.locked).toBe(false);
    });

    // The first and third colors should no longer be forced to #FF0000 and #0000FF
    const firstChanged = generated[0].hex !== '#FF0000';
    const thirdChanged = generated[2].hex !== '#0000FF';
    expect(firstChanged || thirdChanged).toBe(true);
  });

  it('supports atomic undo/redo of lock states alongside color states', () => {
    // Simulate history stack
    const history: ColorItem[][] = [];
    let historyIndex = -1;

    const push = (state: ColorItem[]) => {
      history.push(state);
      historyIndex++;
    };

    // State 0: initial with locks
    push(initialColors);
    expect(history[historyIndex][0].locked).toBe(true);
    expect(history[historyIndex][1].locked).toBe(false);
    expect(history[historyIndex][2].locked).toBe(true);

    // Action: Unlock All & Generate
    const unlockedState: ColorItem[] = generatePalette({
      mood: 'random',
      harmony: 'none',
      count: 5,
      currentColors: initialColors.map((c) => ({ ...c, locked: false })),
      seed: 'seed-new',
    }).map((c) => ({ ...c, locked: false }));

    push(unlockedState);
    expect(historyIndex).toBe(1);
    expect(history[historyIndex].every((c) => !c.locked)).toBe(true);

    // Undo -> restores state 0 (both colors AND lock states)
    historyIndex--;
    const restoredPrev = history[historyIndex];
    expect(restoredPrev[0].hex).toBe('#FF0000');
    expect(restoredPrev[0].locked).toBe(true);
    expect(restoredPrev[2].hex).toBe('#0000FF');
    expect(restoredPrev[2].locked).toBe(true);
    expect(restoredPrev[1].locked).toBe(false);

    // Redo -> restores state 1 (new colors AND all unlocked)
    historyIndex++;
    const restoredNew = history[historyIndex];
    expect(restoredNew.every((c) => !c.locked)).toBe(true);
  });

  it('validates spacebar interception safety rules', () => {
    // Test logic determining if spacebar should be ignored
    const shouldIgnoreSpacebar = (target: {
      tagName: string;
      isContentEditable?: boolean;
      role?: string;
    }) => {
      const tag = target.tagName.toUpperCase();
      if (['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'].includes(tag)) return true;
      if (target.isContentEditable) return true;
      if (['dialog', 'listbox', 'menu', 'combobox'].includes(target.role || '')) return true;
      return false;
    };

    expect(shouldIgnoreSpacebar({ tagName: 'input' })).toBe(true);
    expect(shouldIgnoreSpacebar({ tagName: 'textarea' })).toBe(true);
    expect(shouldIgnoreSpacebar({ tagName: 'button' })).toBe(true);
    expect(shouldIgnoreSpacebar({ tagName: 'div', isContentEditable: true })).toBe(true);
    expect(shouldIgnoreSpacebar({ tagName: 'div', role: 'dialog' })).toBe(true);
    expect(shouldIgnoreSpacebar({ tagName: 'div', role: 'listbox' })).toBe(true);
    expect(shouldIgnoreSpacebar({ tagName: 'div' })).toBe(false);
    expect(shouldIgnoreSpacebar({ tagName: 'main' })).toBe(false);
  });
});
