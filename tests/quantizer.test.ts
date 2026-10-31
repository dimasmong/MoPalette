import { describe, it, expect } from 'vitest';
import { quantizeImageData } from '../src/lib/image/quantizer';

describe('Image Color Quantizer', () => {
  it('extracts dominant colors and accurate percentages from ImageData', () => {
    // Create synthetic 10x10 ImageData (100 pixels)
    // 70 pixels of brand color #A1E3F9 (RGB: 161, 227, 249)
    // 30 pixels of dark color #16242E (RGB: 22, 36, 46)
    const width = 10;
    const height = 10;
    const buffer = new Uint8ClampedArray(width * height * 4);

    for (let i = 0; i < 100; i++) {
      const idx = i * 4;
      if (i < 70) {
        buffer[idx] = 161;
        buffer[idx + 1] = 227;
        buffer[idx + 2] = 249;
        buffer[idx + 3] = 255;
      } else {
        buffer[idx] = 22;
        buffer[idx + 1] = 36;
        buffer[idx + 2] = 46;
        buffer[idx + 3] = 255;
      }
    }

    const mockImageData = {
      data: buffer,
      width,
      height,
      colorSpace: 'srgb' as PredefinedColorSpace,
    } as ImageData;

    const extracted = quantizeImageData(mockImageData, {
      maxColors: 4,
      method: 'dominant',
      sortMode: 'prominence',
      ignoreNearWhite: false,
      ignoreNearBlack: false,
      removeDuplicates: true,
      sampleStep: 1,
    });

    expect(extracted.length).toBe(2);
    // Dominant color should be #A1E3F9 with ~70%
    expect(extracted[0].hex).toBe('#A1E3F9');
    expect(extracted[0].percentage).toBeGreaterThanOrEqual(65);
    expect(extracted[0].percentage).toBeLessThanOrEqual(75);

    // Second color should be #16242E with ~30%
    expect(extracted[1].hex).toBe('#16242E');
    expect(extracted[1].percentage).toBeGreaterThanOrEqual(25);
    expect(extracted[1].percentage).toBeLessThanOrEqual(35);
  });

  it('skips transparent pixels', () => {
    // 50 fully transparent pixels + 50 opaque pixels
    const width = 10;
    const height = 10;
    const buffer = new Uint8ClampedArray(width * height * 4);

    for (let i = 0; i < 100; i++) {
      const idx = i * 4;
      buffer[idx] = 161;
      buffer[idx + 1] = 227;
      buffer[idx + 2] = 249;
      buffer[idx + 3] = i < 50 ? 0 : 255; // First 50 transparent
    }

    const mockImageData = {
      data: buffer,
      width,
      height,
      colorSpace: 'srgb' as PredefinedColorSpace,
    } as ImageData;

    const extracted = quantizeImageData(mockImageData, {
      maxColors: 3,
      method: 'dominant',
      sortMode: 'prominence',
      ignoreNearWhite: false,
      ignoreNearBlack: false,
      removeDuplicates: true,
      sampleStep: 1,
    });

    expect(extracted.length).toBe(1);
    // Valid pixels should be 50, so percentage of valid pixels is 100%
    expect(extracted[0].percentage).toBe(100);
  });
});
