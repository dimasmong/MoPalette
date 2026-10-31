import {
  ColorRole,
  RoleAssignments,
  PreviewAppearance,
  PreviewContrastReport,
} from '@/types';
import {
  normalizeHex,
  isValidHex,
  getContrastRatio,
  getReadableTextColor,
  decomposeColor,
  oklchToHex,
} from './conversions';
import { wcagLuminance } from 'culori';

export const ALL_COLOR_ROLES: ColorRole[] = [
  'primary',
  'secondary',
  'background',
  'surface',
  'text',
  'mutedText',
  'accent',
  'border',
  'success',
  'warning',
  'danger',
];

export const ROLE_METADATA: Record<
  ColorRole,
  { label: string; description: string; defaultTarget: string }
> = {
  primary: {
    label: 'Primary',
    description: 'Main actions, prominent buttons, active elements',
    defaultTarget: 'Button text & focus rings',
  },
  secondary: {
    label: 'Secondary',
    description: 'Supporting actions, secondary tags, chart series',
    defaultTarget: 'Secondary buttons & pills',
  },
  background: {
    label: 'Background',
    description: 'Main canvas page background',
    defaultTarget: 'Base canvas',
  },
  surface: {
    label: 'Surface',
    description: 'Cards, elevated containers, modals',
    defaultTarget: 'Card & modal panels',
  },
  text: {
    label: 'Text',
    description: 'Primary headings and body copy',
    defaultTarget: 'High contrast against bg & surface',
  },
  mutedText: {
    label: 'Muted Text',
    description: 'Secondary labels, timestamps, placeholders',
    defaultTarget: 'Medium contrast against surface',
  },
  accent: {
    label: 'Accent',
    description: 'Highlight badges, key metrics, focus indicators',
    defaultTarget: 'Callout badges & chart highlights',
  },
  border: {
    label: 'Border',
    description: 'Card outlines, dividers, table borders',
    defaultTarget: 'Subtle separation',
  },
  success: {
    label: 'Success',
    description: 'Positive trends, completed status, approval',
    defaultTarget: 'Success alerts & positive badges',
  },
  warning: {
    label: 'Warning',
    description: 'Pending state, cautionary notifications',
    defaultTarget: 'Warning alerts & caution badges',
  },
  danger: {
    label: 'Danger',
    description: 'Negative metrics, error alerts, destructive actions',
    defaultTarget: 'Error alerts & negative badges',
  },
};

/**
 * Creates contrast-aware semantic role assignments for Live Preview.
 * Preserves user manual overrides.
 */
export function createDefaultRoleAssignments(
  palette: string[],
  appearance: PreviewAppearance = 'app',
  isDarkTheme: boolean = false,
  existingAssignments?: Partial<RoleAssignments>
): RoleAssignments {
  const isDark = appearance === 'dark' || (appearance === 'app' && isDarkTheme);
  const cleanPalette = palette.filter(isValidHex).map((h) => normalizeHex(h));

  // Determine palette colors or defaults
  const p1 = cleanPalette[0] || (isDark ? '#38BDF8' : '#0284C7');
  const p2 = cleanPalette[1] || (isDark ? '#818CF8' : '#4F46E5');
  const p3 = cleanPalette[2] || (isDark ? '#34D399' : '#059669');

  // Background & Surface separation with guaranteed distinction
  let defaultBg = isDark ? '#0F172A' : '#F8FAFC';
  let defaultSurface = isDark ? '#1E293B' : '#FFFFFF';
  let defaultText = isDark ? '#F8FAFC' : '#0F172A';
  let defaultMutedText = isDark ? '#94A3B8' : '#64748B';
  let defaultBorder = isDark ? '#334155' : '#E2E8F0';

  // If palette has very dark or very light tones that can naturally serve as bg/surface
  if (cleanPalette.length >= 4) {
    // Sort by luminance
    const sortedByLum = [...cleanPalette].sort(
      (a, b) => (wcagLuminance(a) ?? 0) - (wcagLuminance(b) ?? 0)
    );
    const darkest = sortedByLum[0];
    const lightest = sortedByLum[sortedByLum.length - 1];

    if (isDark) {
      if ((wcagLuminance(darkest) ?? 0) < 0.12) {
        defaultBg = darkest;
        const decomp = decomposeColor(darkest);
        defaultSurface = oklchToHex(22, 4, decomp.oklch.h);
        defaultBorder = oklchToHex(30, 4, decomp.oklch.h);
      }
    } else {
      if ((wcagLuminance(lightest) ?? 0) > 0.85) {
        defaultBg = lightest;
        defaultSurface = '#FFFFFF';
        defaultBorder = '#E2E8F0';
      }
    }
  }

  // Ensure text has at least 4.5:1 contrast on surface
  if (getContrastRatio(defaultText, defaultSurface) < 4.5) {
    defaultText = getReadableTextColor(defaultSurface);
  }

  const baseDefaults: Record<ColorRole, string> = {
    primary: p1,
    secondary: p2,
    background: defaultBg,
    surface: defaultSurface,
    text: defaultText,
    mutedText: defaultMutedText,
    accent: p3,
    border: defaultBorder,
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
  };

  const result = {} as RoleAssignments;

  for (const role of ALL_COLOR_ROLES) {
    const existing = existingAssignments?.[role];
    if (existing && existing.isManualOverride && isValidHex(existing.color)) {
      result[role] = {
        color: normalizeHex(existing.color),
        source: 'manual',
        isManualOverride: true,
      };
    } else {
      result[role] = {
        color: baseDefaults[role],
        source: ['primary', 'secondary', 'accent'].includes(role) && cleanPalette.length > 0 ? 'palette' : 'derived',
        isManualOverride: false,
      };
    }
  }

  return result;
}

/**
 * Searches for a modified shade in OKLCH that meets target contrast against background
 */
export function findSuggestedContrastFix(
  colorHex: string,
  bgHex: string,
  targetRatio: number = 4.5
): string {
  const decomp = decomposeColor(colorHex);
  const { c, h } = decomp.oklch;

  // Try going darker
  for (let l = 8; l <= 60; l += 2) {
    const candidate = oklchToHex(l, c, h);
    if (getContrastRatio(candidate, bgHex) >= targetRatio) {
      return candidate;
    }
  }

  // Try going lighter
  for (let l = 98; l >= 50; l -= 2) {
    const candidate = oklchToHex(l, c, h);
    if (getContrastRatio(candidate, bgHex) >= targetRatio) {
      return candidate;
    }
  }

  return getReadableTextColor(bgHex);
}

/**
 * Evaluates contrast between related semantic roles and identifies any WCAG issues
 */
export function evaluatePreviewContrast(roles: RoleAssignments): PreviewContrastReport {
  const report: PreviewContrastReport = {};

  const bg = roles.background.color;
  const surface = roles.surface.color;
  const text = roles.text.color;
  const mutedText = roles.mutedText.color;
  const primary = roles.primary.color;
  const secondary = roles.secondary.color;
  const accent = roles.accent.color;
  const border = roles.border.color;
  const success = roles.success.color;
  const warning = roles.warning.color;
  const danger = roles.danger.color;

  // 1. Text on Background
  const textBgRatio = getContrastRatio(text, bg);
  const textSurfaceRatio = getContrastRatio(text, surface);
  const textPassesAA = textBgRatio >= 4.5 && textSurfaceRatio >= 4.5;
  report.text = {
    ratio: Math.min(textBgRatio, textSurfaceRatio),
    passesAA: textPassesAA,
    passesAAA: textBgRatio >= 7.0 && textSurfaceRatio >= 7.0,
    readableForeground: getReadableTextColor(surface),
    warning: !textPassesAA
      ? `Text has low contrast (${Math.min(textBgRatio, textSurfaceRatio)}:1) on surface/background.`
      : undefined,
    suggestedColor: !textPassesAA ? getReadableTextColor(surface) : undefined,
  };

  // 2. Muted Text on Surface
  const mutedSurfaceRatio = getContrastRatio(mutedText, surface);
  report.mutedText = {
    ratio: mutedSurfaceRatio,
    passesAA: mutedSurfaceRatio >= 3.0,
    passesAAA: mutedSurfaceRatio >= 4.5,
    readableForeground: getReadableTextColor(surface),
    warning: mutedSurfaceRatio < 3.0
      ? `Muted text has low contrast (${mutedSurfaceRatio}:1) on surface.`
      : undefined,
    suggestedColor: mutedSurfaceRatio < 3.0
      ? findSuggestedContrastFix(mutedText, surface, 4.5)
      : undefined,
  };

  // 3. Primary Action text readability
  const primaryFg = getReadableTextColor(primary);
  const primaryContrast = getContrastRatio(primaryFg, primary);
  report.primary = {
    ratio: primaryContrast,
    passesAA: primaryContrast >= 4.5,
    passesAAA: primaryContrast >= 7.0,
    readableForeground: primaryFg,
    warning: primaryContrast < 4.5
      ? `Primary action has low internal contrast (${primaryContrast}:1).`
      : undefined,
    suggestedColor: primaryContrast < 4.5
      ? findSuggestedContrastFix(primary, surface, 4.5)
      : undefined,
  };

  // 4. Secondary Action text readability
  const secondaryFg = getReadableTextColor(secondary);
  const secondaryContrast = getContrastRatio(secondaryFg, secondary);
  report.secondary = {
    ratio: secondaryContrast,
    passesAA: secondaryContrast >= 4.5,
    passesAAA: secondaryContrast >= 7.0,
    readableForeground: secondaryFg,
  };

  // 5. Accent readability
  const accentFg = getReadableTextColor(accent);
  const accentContrast = getContrastRatio(accentFg, accent);
  report.accent = {
    ratio: accentContrast,
    passesAA: accentContrast >= 3.0,
    passesAAA: accentContrast >= 4.5,
    readableForeground: accentFg,
  };

  // 6. Surface on Background separation
  const surfaceBgRatio = getContrastRatio(surface, bg);
  const borderBgRatio = getContrastRatio(border, bg);
  // If contrast between surface and bg is low, a visible border rescues separation
  const isSeparated = surfaceBgRatio >= 1.15 || borderBgRatio >= 1.25;
  report.surface = {
    ratio: surfaceBgRatio,
    passesAA: isSeparated,
    passesAAA: surfaceBgRatio >= 1.35,
    readableForeground: text,
    warning: !isSeparated
      ? `Surface blends into Background (${surfaceBgRatio}:1). Increase lightness difference or contrast border.`
      : undefined,
    suggestedColor: !isSeparated
      ? findSuggestedContrastFix(surface, bg, 1.3)
      : undefined,
  };

  // 7. Border separation against background
  report.border = {
    ratio: borderBgRatio,
    passesAA: borderBgRatio >= 1.15,
    passesAAA: borderBgRatio >= 1.4,
    readableForeground: text,
  };

  // 8. Success text readability
  const successFg = getReadableTextColor(success);
  report.success = {
    ratio: getContrastRatio(successFg, success),
    passesAA: getContrastRatio(successFg, success) >= 4.5,
    passesAAA: getContrastRatio(successFg, success) >= 7.0,
    readableForeground: successFg,
  };

  // 9. Warning text readability
  const warningFg = getReadableTextColor(warning);
  report.warning = {
    ratio: getContrastRatio(warningFg, warning),
    passesAA: getContrastRatio(warningFg, warning) >= 4.5,
    passesAAA: getContrastRatio(warningFg, warning) >= 7.0,
    readableForeground: warningFg,
  };

  // 10. Danger text readability
  const dangerFg = getReadableTextColor(danger);
  report.danger = {
    ratio: getContrastRatio(dangerFg, danger),
    passesAA: getContrastRatio(dangerFg, danger) >= 4.5,
    passesAAA: getContrastRatio(dangerFg, danger) >= 7.0,
    readableForeground: dangerFg,
  };

  return report;
}
