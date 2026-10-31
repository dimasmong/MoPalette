import { hsl } from 'culori';
import { normalizeHex, hslToHex } from './conversions';
import { HarmonyMode } from '@/types';

export interface HarmonyNode {
  hue: number;
  hex: string;
  angleDeg: number; // 0 - 360
  label: string;
}

/**
 * Calculates genuine color harmony palettes based on base color
 */
export function generateHarmonyColors(
  baseHex: string,
  mode: HarmonyMode,
  count: number = 5
): string[] {
  const norm = normalizeHex(baseHex);
  const hslObj = hsl(norm) || { mode: 'hsl', h: 195, s: 0.8, l: 0.8 };
  const baseH = hslObj.h ?? 195;
  const baseS = (hslObj.s ?? 0.7) * 100;
  const baseL = (hslObj.l ?? 0.6) * 100;

  if (mode === 'none') {
    return [norm];
  }

  const result: string[] = [];

  switch (mode) {
    case 'complementary': {
      // Base and its opposite (+180°), with subtle variation for palette count
      const compH = (baseH + 180) % 360;
      for (let i = 0; i < count; i++) {
        if (i === 0) {
          result.push(norm);
        } else if (i === 1) {
          result.push(hslToHex(compH, baseS, baseL));
        } else {
          // Additional tints / shades of both poles
          const isComp = i % 2 !== 0;
          const h = isComp ? compH : baseH;
          const lOffset = ((i - 1) / (count - 1)) * 40 - 20;
          const l = Math.max(15, Math.min(92, baseL + lOffset));
          result.push(hslToHex(h, baseS * 0.9, l));
        }
      }
      break;
    }

    case 'analogous': {
      // Hues within adjacent 30°- 60° range
      const step = 60 / Math.max(count - 1, 1);
      const startH = (baseH - 30 + 360) % 360;
      for (let i = 0; i < count; i++) {
        const h = (startH + i * step) % 360;
        const l = Math.max(20, Math.min(88, baseL + (i % 2 === 0 ? 5 : -5)));
        result.push(hslToHex(h, baseS, l));
      }
      break;
    }

    case 'triadic': {
      // 3 evenly spaced hues: 0°, 120°, 240°
      const hues = [baseH, (baseH + 120) % 360, (baseH + 240) % 360];
      for (let i = 0; i < count; i++) {
        const h = hues[i % 3];
        const cycle = Math.floor(i / 3);
        const l = Math.max(20, Math.min(90, baseL + cycle * 15 * (cycle % 2 === 0 ? -1 : 1)));
        result.push(hslToHex(h, baseS, l));
      }
      break;
    }

    case 'tetradic': {
      // 4 hues at 90° intervals (or rectangle scheme 0, 60, 180, 240)
      const hues = [baseH, (baseH + 90) % 360, (baseH + 180) % 360, (baseH + 270) % 360];
      for (let i = 0; i < count; i++) {
        const h = hues[i % 4];
        const cycle = Math.floor(i / 4);
        const l = Math.max(20, Math.min(90, baseL + cycle * 12));
        result.push(hslToHex(h, baseS, l));
      }
      break;
    }

    case 'split-complementary': {
      // Base hue (0°) and the two colors adjacent to its complement (150° and 210°)
      const hues = [baseH, (baseH + 150) % 360, (baseH + 210) % 360];
      for (let i = 0; i < count; i++) {
        const h = hues[i % 3];
        const cycle = Math.floor(i / 3);
        const l = Math.max(20, Math.min(88, baseL + cycle * 14 * (cycle % 2 === 0 ? 1 : -1)));
        result.push(hslToHex(h, baseS, l));
      }
      break;
    }

    case 'monochromatic': {
      // Fixed hue, stepped luminance and saturation
      for (let i = 0; i < count; i++) {
        const factor = count > 1 ? i / (count - 1) : 0.5;
        // Lightness runs from 20% to 92%
        const l = 20 + factor * 72;
        // Saturation subtly curves
        const s = Math.max(15, Math.min(95, baseS * (0.6 + 0.4 * Math.sin(factor * Math.PI))));
        result.push(hslToHex(baseH, s, l));
      }
      break;
    }
  }

  return result.slice(0, count);
}

/**
 * Returns wheel nodes for visual representation of the active harmony
 */
export function getHarmonyWheelNodes(baseHex: string, mode: HarmonyMode): HarmonyNode[] {
  const norm = normalizeHex(baseHex);
  const hslObj = hsl(norm) || { mode: 'hsl', h: 195, s: 0.8, l: 0.8 };
  const baseH = Math.round(hslObj.h ?? 195);
  const baseS = (hslObj.s ?? 0.7) * 100;
  const baseL = (hslObj.l ?? 0.6) * 100;

  if (mode === 'none') {
    return [{ hue: baseH, hex: norm, angleDeg: baseH, label: 'Base' }];
  }

  const nodes: HarmonyNode[] = [
    { hue: baseH, hex: norm, angleDeg: baseH, label: 'Base' },
  ];

  const addNode = (angleOffset: number, label: string) => {
    const h = Math.round((baseH + angleOffset + 360) % 360);
    nodes.push({
      hue: h,
      hex: hslToHex(h, baseS, baseL),
      angleDeg: h,
      label,
    });
  };

  switch (mode) {
    case 'complementary':
      addNode(180, 'Complement');
      break;
    case 'analogous':
      addNode(-30, 'Analogous -30°');
      addNode(30, 'Analogous +30°');
      break;
    case 'triadic':
      addNode(120, 'Triad 120°');
      addNode(240, 'Triad 240°');
      break;
    case 'tetradic':
      addNode(90, 'Tetrad 90°');
      addNode(180, 'Tetrad 180°');
      addNode(270, 'Tetrad 270°');
      break;
    case 'split-complementary':
      addNode(150, 'Split 150°');
      addNode(210, 'Split 210°');
      break;
    case 'monochromatic':
      // Single hue node with different lightness labels
      break;
  }

  return nodes;
}
