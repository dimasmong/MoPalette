import { ExtractedColor, ExtractionMethod, ImageSortMode } from '@/types';
import { normalizeHex } from '../color/conversions';
import { getApproximateColorName } from '../color/names';
import { hsl, wcagLuminance, rgb, differenceEuclidean } from 'culori';

export interface QuantizeOptions {
  maxColors: number; // 2 to 12
  method: ExtractionMethod;
  sortMode: ImageSortMode;
  ignoreNearWhite: boolean;
  ignoreNearBlack: boolean;
  removeDuplicates: boolean;
  sampleStep: number; // 1 to 8
}

interface PixelCluster {
  r: number;
  g: number;
  b: number;
  count: number;
  hex: string;
}

/**
 * Extracts and quantizes colors from raw canvas ImageData
 */
export function quantizeImageData(
  imageData: ImageData,
  options: QuantizeOptions
): ExtractedColor[] {
  const { data, width, height } = imageData;
  const {
    maxColors = 6,
    method = 'dominant',
    sortMode = 'prominence',
    ignoreNearWhite = true,
    ignoreNearBlack = true,
    removeDuplicates = true,
    sampleStep = 2,
  } = options;

  // Use a 5-bit color binning map (32x32x32 = 32,768 bins)
  // This produces crisp, natural color clustering
  const bins = new Map<number, { rSum: number; gSum: number; bSum: number; count: number }>();
  let totalValidPixels = 0;

  const step = Math.max(1, Math.floor(sampleStep));

  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      const idx = (y * width + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      const a = data[idx + 3];

      // Skip transparent or semi-transparent pixels
      if (a < 128) continue;

      // Ignore near-white
      if (ignoreNearWhite && r > 245 && g > 245 && b > 245) continue;

      // Ignore near-black
      if (ignoreNearBlack && r < 15 && g < 15 && b < 15) continue;

      totalValidPixels++;

      // 5-bit per channel quantization key: 0..31
      const r5 = r >> 3;
      const g5 = g >> 3;
      const b5 = b >> 3;
      const key = (r5 << 10) | (g5 << 5) | b5;

      const existing = bins.get(key);
      if (existing) {
        existing.rSum += r;
        existing.gSum += g;
        existing.bSum += b;
        existing.count++;
      } else {
        bins.set(key, { rSum: r, gSum: g, bSum: b, count: 1 });
      }
    }
  }

  if (totalValidPixels === 0 || bins.size === 0) {
    return [];
  }

  // Convert bins into initial clusters
  const clusters: PixelCluster[] = [];
  for (const [, bin] of bins.entries()) {
    const r = Math.round(bin.rSum / bin.count);
    const g = Math.round(bin.gSum / bin.count);
    const b = Math.round(bin.bSum / bin.count);
    const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
    clusters.push({ r, g, b, count: bin.count, hex });
  }

  // Score each cluster depending on extraction method
  interface ScoredCluster extends PixelCluster {
    score: number;
    hslH: number;
    hslS: number;
    hslL: number;
  }

  const scoredClusters: ScoredCluster[] = clusters.map((c) => {
    const hslObj = hsl(c.hex) || { mode: 'hsl', h: 0, s: 0, l: 0 };
    const h = hslObj.h ?? 0;
    const s = hslObj.s ?? 0;
    const l = hslObj.l ?? 0;

    let score = c.count;

    if (method === 'vibrant') {
      // Strongly reward saturation and midtone lightness
      const lightnessWeight = Math.sin(l * Math.PI); // Peaks at 0.5
      score = c.count * (1 + s * 4) * (0.5 + lightnessWeight);
    } else if (method === 'muted') {
      // Reward lower-to-medium saturation and balanced lightness
      const saturationPenalty = 1 - Math.abs(s - 0.25);
      score = c.count * (0.5 + saturationPenalty * 2);
    } else if (method === 'balanced') {
      // Blend of frequency and saturation spread
      score = c.count * (0.8 + s * 1.5);
    }

    return {
      ...c,
      score,
      hslH: h,
      hslS: s,
      hslL: l,
    };
  });

  // Sort by score descending
  scoredClusters.sort((a, b) => b.score - a.score);

  // Deduplicate visually close colors
  const deduplicated: ScoredCluster[] = [];
  const diffFn = differenceEuclidean('rgb');

  for (const candidate of scoredClusters) {
    if (deduplicated.length >= maxColors * 2) break;

    if (!removeDuplicates) {
      deduplicated.push(candidate);
      continue;
    }

    const candidateRgb = rgb(candidate.hex);
    if (!candidateRgb) continue;

    // Delta-E / RGB euclidean distance check
    let isTooClose = false;
    for (const existing of deduplicated) {
      const existingRgb = rgb(existing.hex);
      if (!existingRgb) continue;
      const distance = diffFn(candidateRgb, existingRgb);
      // Distance threshold: ~0.16 in normalized RGB space prevents identical swatches
      if (distance < 0.16) {
        // Merge pixel count so percentage remains accurate
        existing.count += candidate.count;
        isTooClose = true;
        break;
      }
    }

    if (!isTooClose) {
      deduplicated.push(candidate);
    }
  }

  // Trim to requested color count
  const finalClusters = deduplicated.slice(0, maxColors);

  // Calculate occurrences and format output
  let extracted: ExtractedColor[] = finalClusters.map((c) => {
    const percentage = Number(((c.count / totalValidPixels) * 100).toFixed(1));
    return {
      hex: normalizeHex(c.hex),
      count: c.count,
      percentage: Math.max(0.5, percentage),
      name: getApproximateColorName(c.hex),
    };
  });

  // Apply sorting
  if (sortMode === 'luminance') {
    extracted.sort((a, b) => (wcagLuminance(b.hex) ?? 0) - (wcagLuminance(a.hex) ?? 0));
  } else if (sortMode === 'hue') {
    extracted.sort((a, b) => {
      const hA = hsl(a.hex)?.h ?? 0;
      const hB = hsl(b.hex)?.h ?? 0;
      return hA - hB;
    });
  } else {
    // Prominence / count
    extracted.sort((a, b) => b.count - a.count);
  }

  return extracted;
}
