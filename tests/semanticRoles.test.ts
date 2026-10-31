import { describe, it, expect } from 'vitest';
import {
  ALL_COLOR_ROLES,
  createDefaultRoleAssignments,
  evaluatePreviewContrast,
  findSuggestedContrastFix,
} from '../src/lib/color/semanticRoles';
import { isValidHex, getContrastRatio } from '../src/lib/color/conversions';

describe('Semantic Roles & Live Preview Engine', () => {
  const samplePalette = ['#2563EB', '#7C3AED', '#059669', '#D97706', '#DC2626'];

  it('contains exactly 11 defined semantic roles', () => {
    expect(ALL_COLOR_ROLES.length).toBe(11);
    expect(ALL_COLOR_ROLES).toEqual([
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
    ]);
  });

  it('assigns valid hex colors to all 11 roles in light mode', () => {
    const roles = createDefaultRoleAssignments(samplePalette, 'light', false);
    ALL_COLOR_ROLES.forEach((role) => {
      expect(roles[role]).toBeDefined();
      expect(isValidHex(roles[role].color)).toBe(true);
    });
    // In light mode, background should be light
    expect(roles.background.color.toUpperCase()).toBe('#F8FAFC');
    expect(roles.surface.color.toUpperCase()).toBe('#FFFFFF');
  });

  it('assigns valid hex colors and prevents collision in dark mode', () => {
    const roles = createDefaultRoleAssignments(samplePalette, 'dark', true);
    ALL_COLOR_ROLES.forEach((role) => {
      expect(roles[role]).toBeDefined();
      expect(isValidHex(roles[role].color)).toBe(true);
    });
    // Background and surface must not be identical in dark mode
    expect(roles.background.color.toLowerCase()).not.toBe(roles.surface.color.toLowerCase());
  });

  it('preserves user manual overrides when updating defaults', () => {
    const initial = createDefaultRoleAssignments(samplePalette, 'light', false);
    // User overrides primary with custom red
    initial.primary = {
      color: '#FF0000',
      source: 'manual',
      isManualOverride: true,
    };

    const updated = createDefaultRoleAssignments(
      ['#00FF00', '#0000FF'],
      'dark',
      true,
      initial
    );

    // Primary manual override should be preserved
    expect(updated.primary.color).toBe('#FF0000');
    expect(updated.primary.isManualOverride).toBe(true);

    // Other non-overridden roles should follow new dark mode defaults
    expect(updated.secondary.isManualOverride).toBe(false);
  });

  it('evaluates preview contrast and flags low contrast combinations', () => {
    const roles = createDefaultRoleAssignments(samplePalette, 'light', false);
    const report = evaluatePreviewContrast(roles);

    expect(report.text).toBeDefined();
    expect(report.text?.passesAA).toBe(true);
    expect(report.primary).toBeDefined();
  });

  it('finds suggested contrast fix that meets target contrast ratio', () => {
    const darkBg = '#0F172A';
    const lowContrastBlue = '#1E3A8A';

    const fixedColor = findSuggestedContrastFix(lowContrastBlue, darkBg, 4.5);
    expect(isValidHex(fixedColor)).toBe(true);
    const newRatio = getContrastRatio(fixedColor, darkBg);
    expect(newRatio).toBeGreaterThanOrEqual(4.5);
  });
});
