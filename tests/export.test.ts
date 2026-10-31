import { describe, it, expect } from 'vitest';
import {
  generateCssVariables,
  generateScssVariables,
  generateTailwindConfig,
  generateJsonExport,
  generateTxtList,
  generateGplPalette,
} from '../src/lib/export/formats';
import { generateSvgCard } from '../src/lib/export/cardRenderer';
import { ColorItem } from '../src/types';

describe('Export Formats Generation', () => {
  const sampleColors: ColorItem[] = [
    { id: '1', hex: '#A1E3F9', locked: false, name: 'Ice Blue' },
    { id: '2', hex: '#16242E', locked: false, name: 'Deep Navy' },
  ];

  it('generates valid CSS variables snippet', () => {
    const css = generateCssVariables(sampleColors, 'MoPalette');
    expect(css).toContain(':root {');
    expect(css).toContain('--color-1: #A1E3F9;');
    expect(css).toContain('--color-2: #16242E;');
    expect(css).toContain('}');
  });

  it('generates valid SCSS variables', () => {
    const scss = generateScssVariables(sampleColors, 'MoPalette');
    expect(scss).toContain('$color-1: #A1E3F9;');
    expect(scss).toContain('$color-2: #16242E;');
  });

  it('generates valid Tailwind configuration string', () => {
    const tw = generateTailwindConfig(sampleColors, 'MoPalette');
    expect(tw).toContain('palette-1');
    expect(tw).toContain('#A1E3F9');
  });

  it('generates valid JSON export matching schema', () => {
    const jsonStr = generateJsonExport(sampleColors, 'MoPalette Test');
    const parsed = JSON.parse(jsonStr);
    expect(parsed.app).toBe('MoPalette');
    expect(parsed.version).toBe('1.0.0');
    expect(parsed.name).toBe('MoPalette Test');
    expect(parsed.colors.length).toBe(2);
    expect(parsed.colors[0].hex).toBe('#A1E3F9');
  });

  it('generates plain TXT list', () => {
    const txt = generateTxtList(sampleColors);
    expect(txt).toContain('#A1E3F9  Ice Blue');
    expect(txt).toContain('#16242E  Deep Navy');
  });

  it('generates GPL format palette for GIMP/Inkscape', () => {
    const gpl = generateGplPalette(sampleColors, 'MoPalette Test');
    expect(gpl).toContain('GIMP Palette');
    expect(gpl).toContain('Name: MoPalette Test');
    expect(gpl).toContain('Ice Blue');
  });

  it('generates SVG card containing all color swatches', () => {
    const svg = generateSvgCard(sampleColors, {
      layout: 'horizontal',
      bgColor: 'white',
      includeLabels: true,
      includeNames: true,
      paletteName: 'MoPalette Card',
    });
    expect(svg).toContain('<svg');
    expect(svg).toContain('#A1E3F9');
    expect(svg).toContain('#16242E');
    expect(svg).toContain('MoPalette Card');
  });
});
