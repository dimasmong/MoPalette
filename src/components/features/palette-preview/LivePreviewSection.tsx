import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { usePalette } from '@/context/PaletteContext';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import { useToast } from '@/components/common/Toast';
import {
  ColorRole,
  RoleAssignments,
  PreviewAppearance,
  PalettePreset,
} from '@/types';
import {
  ALL_COLOR_ROLES,
  ROLE_METADATA,
  createDefaultRoleAssignments,
  evaluatePreviewContrast,
} from '@/lib/color/semanticRoles';
import {
  normalizeHex,
  isValidHex,
  getReadableTextColor,
} from '@/lib/color/conversions';
import { RoleSelect, SelectOption } from '@/components/common/RoleSelect';
import { PresetPickerModal } from './PresetPickerModal';
import {
  Wand2,
  RotateCcw,
  Palette,
  BookOpen,
  Save,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Layers,
  Sun,
  Moon,
  Monitor,
  CheckCircle,
  AlertCircle,
  Send,
} from 'lucide-react';

interface LivePreviewSectionProps {
  initialPreset?: PalettePreset | null;
  onClearInitialPreset?: () => void;
}

const PREVIEW_STORAGE_KEY = 'mopalette_saved_preview_roles';

export const LivePreviewSection: React.FC<LivePreviewSectionProps> = ({
  initialPreset,
  onClearInitialPreset,
}) => {
  const { colors, setPaletteFromColors } = usePalette();
  const { theme } = useTheme();
  const { t } = useLanguage();
  const { showToast } = useToast();

  const [appearance, setAppearance] = useState<PreviewAppearance>('app');
  const [autoReadableText, setAutoReadableText] = useState<boolean>(true);
  const [isPresetModalOpen, setIsPresetModalOpen] = useState<boolean>(false);

  // Semantic role assignments
  const [roles, setRoles] = useState<RoleAssignments>(() => {
    const paletteHexes = colors.map((c) => c.hex);
    return createDefaultRoleAssignments(paletteHexes, 'app', theme === 'dark');
  });

  const isDarkActive =
    appearance === 'dark' || (appearance === 'app' && theme === 'dark');

  // Handle preset passed from Presets tab
  useEffect(() => {
    if (initialPreset && initialPreset.colors.length > 0) {
      const newAssignments = createDefaultRoleAssignments(
        initialPreset.colors,
        appearance,
        theme === 'dark'
      );
      setRoles(newAssignments);
      showToast(
        t('livePreview.presetAppliedNotice', { name: initialPreset.name }) ||
          `Applied "${initialPreset.name}" preset to Live Preview`
      );
      if (onClearInitialPreset) {
        onClearInitialPreset();
      }
    }
  }, [initialPreset, appearance, theme, showToast, t, onClearInitialPreset]);

  // Recalculate auto text when background or surface changes if autoReadableText is enabled
  useEffect(() => {
    if (!autoReadableText) return;

    setRoles((prev) => {
      let changed = false;
      const next = { ...prev };

      // Calculate readable text for surface & background
      const readableText = getReadableTextColor(next.surface.color);
      const readableMuted = isDarkActive ? '#94A3B8' : '#64748B';

      if (!next.text.isManualOverride && next.text.color !== readableText) {
        next.text = { ...next.text, color: readableText };
        changed = true;
      }
      if (!next.mutedText.isManualOverride && next.mutedText.color !== readableMuted) {
        next.mutedText = { ...next.mutedText, color: readableMuted };
        changed = true;
      }

      return changed ? next : prev;
    });
  }, [roles.surface.color, roles.background.color, autoReadableText, isDarkActive]);

  // Evaluate WCAG contrast for all roles
  const contrastReport = useMemo(() => {
    return evaluatePreviewContrast(roles);
  }, [roles]);

  // Palette swatch options for the role selectors
  const paletteOptions: SelectOption[] = useMemo(() => {
    return colors.map((c, idx) => ({
      value: c.hex,
      label: `Swatch ${idx + 1} (${c.hex})`,
      colorPreview: c.hex,
      sublabel: c.name,
    }));
  }, [colors]);

  // Action: Auto-Map roles using current palette & appearance
  const handleAutoMap = useCallback(() => {
    const paletteHexes = colors.map((c) => c.hex);
    const newAssignments = createDefaultRoleAssignments(
      paletteHexes,
      appearance,
      theme === 'dark'
    );
    setRoles(newAssignments);
    showToast(t('livePreview.autoMappedNotice') || 'Auto-mapped semantic roles from palette');
  }, [colors, appearance, theme, showToast, t]);

  // Action: Reset Mapping to defaults
  const handleResetMapping = useCallback(() => {
    const paletteHexes = colors.map((c) => c.hex);
    const newAssignments = createDefaultRoleAssignments(
      paletteHexes,
      'app',
      theme === 'dark'
    );
    setRoles(newAssignments);
    setAutoReadableText(true);
    showToast(t('livePreview.resetNotice') || 'Reset all roles to defaults');
  }, [colors, theme, showToast, t]);

  // Action: Apply Current Generator Palette
  const handleApplyCurrentPalette = useCallback(() => {
    const paletteHexes = colors.map((c) => c.hex);
    const newAssignments = createDefaultRoleAssignments(
      paletteHexes,
      appearance,
      theme === 'dark',
      roles
    );
    setRoles(newAssignments);
    showToast(t('livePreview.paletteAppliedNotice') || 'Pulled current generator swatches');
  }, [colors, appearance, theme, roles, showToast, t]);

  // Action: Save Preview Configuration to localStorage
  const handleSaveConfiguration = useCallback(() => {
    try {
      const config = {
        roles,
        appearance,
        savedAt: new Date().toISOString(),
      };
      localStorage.setItem(PREVIEW_STORAGE_KEY, JSON.stringify(config));
      showToast(t('livePreview.configSavedNotice') || 'Preview configuration saved to local storage');
    } catch {
      showToast('Failed to save configuration to local storage');
    }
  }, [roles, appearance, showToast, t]);

  // Action: Apply Changes from Live Preview to Main Generator Palette
  const handleApplyToPalette = useCallback(() => {
    // Extract primary, secondary, accent, surface, background
    const keyColors = [
      roles.primary.color,
      roles.secondary.color,
      roles.accent.color,
      roles.surface.color,
      roles.background.color,
    ];
    setPaletteFromColors(keyColors, 'Live Preview Custom Theme');
    showToast(t('livePreview.appliedToGeneratorNotice') || 'Applied preview colors to main palette generator');
  }, [roles, setPaletteFromColors, showToast, t]);

  // Select Preset handler from modal
  const handleSelectPreset = (preset: PalettePreset) => {
    const newAssignments = createDefaultRoleAssignments(
      preset.colors,
      appearance,
      theme === 'dark'
    );
    setRoles(newAssignments);
    showToast(t('livePreview.presetAppliedNotice', { name: preset.name }) || `Loaded "${preset.name}" into preview`);
  };

  // Change individual role color
  const handleUpdateRoleColor = (role: ColorRole, hex: string, isManual = true) => {
    const cleanHex = normalizeHex(hex);
    setRoles((prev) => ({
      ...prev,
      [role]: {
        color: cleanHex,
        source: isManual ? 'manual' : 'palette',
        isManualOverride: isManual,
      },
    }));
  };

  // Reset single role back to auto
  const handleResetSingleRole = (role: ColorRole) => {
    const paletteHexes = colors.map((c) => c.hex);
    const defaults = createDefaultRoleAssignments(
      paletteHexes,
      appearance,
      theme === 'dark'
    );
    setRoles((prev) => ({
      ...prev,
      [role]: defaults[role],
    }));
  };

  // Switch Appearance Mode
  const handleAppearanceChange = (mode: PreviewAppearance) => {
    setAppearance(mode);
    const paletteHexes = colors.map((c) => c.hex);
    setRoles((prev) =>
      createDefaultRoleAssignments(paletteHexes, mode, theme === 'dark', prev)
    );
  };

  return (
    <section className="w-full space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-light-text dark:text-dark-text tracking-tight">
          {t('livePreview.title') || 'Live UI Preview & Semantic Design Tokens'}
        </h2>
        <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
          {t('livePreview.subtitle') || 'Simulate realistic dashboards with real-time WCAG 2.2 AA contrast verification'}
        </p>
      </div>

      {/* Main Action Toolbar */}
      <div className="p-4 rounded-2xl glass-card bg-light-bg/85 dark:bg-dark-bg/85 border border-light-glassBorder dark:border-dark-glassBorder shadow-xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Appearance Mode Segmented Control */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-light-bgSecondary dark:bg-dark-bgSecondary border border-light-border dark:border-dark-border text-xs font-semibold">
            <button
              onClick={() => handleAppearanceChange('light')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                appearance === 'light'
                  ? 'bg-white text-light-text shadow-2xs font-bold'
                  : 'text-light-textSecondary dark:text-dark-textSecondary hover:text-light-text'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>{t('livePreview.appearanceLight') || 'Light'}</span>
            </button>
            <button
              onClick={() => handleAppearanceChange('dark')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                appearance === 'dark'
                  ? 'bg-[#101820] text-dark-text shadow-2xs font-bold'
                  : 'text-light-textSecondary dark:text-dark-textSecondary hover:text-dark-text'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>{t('livePreview.appearanceDark') || 'Dark'}</span>
            </button>
            <button
              onClick={() => handleAppearanceChange('app')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                appearance === 'app'
                  ? 'bg-brand text-brand-darkText shadow-2xs font-bold'
                  : 'text-light-textSecondary dark:text-dark-textSecondary hover:text-light-text'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>{t('livePreview.appearanceApp') || 'App Theme'}</span>
            </button>
          </div>

          {/* Auto-Readable Text Toggle */}
          <label className="flex items-center gap-2 cursor-pointer select-none text-xs font-semibold text-light-textSecondary dark:text-dark-textSecondary hover:text-light-text dark:hover:text-dark-text">
            <input
              type="checkbox"
              checked={autoReadableText}
              onChange={(e) => setAutoReadableText(e.target.checked)}
              className="w-4 h-4 rounded text-brand focus:ring-brand/40 accent-brand cursor-pointer"
            />
            <span>{t('livePreview.autoReadableToggle') || 'Auto-Readable Text (AA Target)'}</span>
          </label>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-light-border/60 dark:border-dark-border/60 text-xs font-bold">
          <button
            type="button"
            onClick={handleAutoMap}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-brand/15 text-brand-darkText dark:text-brand border border-brand/30 hover:bg-brand/25 transition-all"
          >
            <Wand2 className="w-3.5 h-3.5" />
            <span>{t('livePreview.autoMap') || 'Auto Map'}</span>
          </button>

          <button
            type="button"
            onClick={handleApplyCurrentPalette}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-light-border dark:border-dark-border bg-white dark:bg-dark-bgSecondary hover:border-brand transition-all text-light-text dark:text-dark-text"
          >
            <Palette className="w-3.5 h-3.5" />
            <span>{t('livePreview.applyCurrentPalette') || 'Apply Current Palette'}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsPresetModalOpen(true)}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-light-border dark:border-dark-border bg-white dark:bg-dark-bgSecondary hover:border-brand transition-all text-light-text dark:text-dark-text"
          >
            <BookOpen className="w-3.5 h-3.5 text-brand" />
            <span>{t('livePreview.choosePreset') || 'Choose Preset'}</span>
          </button>

          <button
            type="button"
            onClick={handleSaveConfiguration}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-light-border dark:border-dark-border bg-white dark:bg-dark-bgSecondary hover:border-brand transition-all text-light-text dark:text-dark-text"
          >
            <Save className="w-3.5 h-3.5" />
            <span>{t('livePreview.saveConfig') || 'Save Configuration'}</span>
          </button>

          <button
            type="button"
            onClick={handleApplyToPalette}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-brand bg-brand text-brand-darkText hover:brightness-105 transition-all shadow-2xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{t('livePreview.applyToPalette') || 'Apply to Generator'}</span>
          </button>

          <button
            type="button"
            onClick={handleResetMapping}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-light-border dark:border-dark-border text-light-textSecondary dark:text-dark-textSecondary hover:text-rose-500 hover:border-rose-300 ml-auto transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{t('livePreview.resetMapping') || 'Reset'}</span>
          </button>
        </div>
      </div>

      {/* 11 Semantic Roles Editable Grid */}
      <div className="p-5 rounded-2xl glass-card bg-light-bg/85 dark:bg-dark-bg/85 border border-light-glassBorder dark:border-dark-glassBorder shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-brand" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-light-text dark:text-dark-text">
              {t('livePreview.roleAssignments') || 'Semantic Role Assignments (11 Roles)'}
            </h3>
          </div>
          <span className="text-[11px] text-light-textSecondary dark:text-dark-textSecondary">
            {t('livePreview.rolesHelp') || 'Assign palette colors, customize hex, and review WCAG AA status'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          {ALL_COLOR_ROLES.map((roleKey) => {
            const assignment = roles[roleKey];
            const meta = ROLE_METADATA[roleKey];
            const contrast = contrastReport[roleKey];

            return (
              <div
                key={roleKey}
                className="p-3 rounded-2xl border border-light-border dark:border-dark-border bg-white dark:bg-[#1A2634] shadow-xs flex flex-col justify-between gap-2.5"
              >
                {/* Role Header */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-light-text dark:text-dark-text capitalize">
                    {meta.label}
                  </span>
                  {assignment.isManualOverride && (
                    <button
                      type="button"
                      onClick={() => handleResetSingleRole(roleKey)}
                      title="Reset role to auto-mapped"
                      className="text-[10px] text-brand hover:underline font-semibold"
                    >
                      {t('common.reset') || 'Auto'}
                    </button>
                  )}
                </div>

                {/* Color Swatch & Manual Hex Input */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-lg border border-black/15 shadow-2xs shrink-0 relative overflow-hidden"
                    style={{ backgroundColor: assignment.color }}
                  >
                    <input
                      type="color"
                      value={assignment.color}
                      onChange={(e) => handleUpdateRoleColor(roleKey, e.target.value, true)}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      title="Open color picker"
                    />
                  </div>

                  <input
                    type="text"
                    value={assignment.color}
                    maxLength={7}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (isValidHex(val)) {
                        handleUpdateRoleColor(roleKey, val, true);
                      }
                    }}
                    className="w-full px-2 py-1 rounded-lg border border-light-border dark:border-dark-border bg-light-bgSecondary/60 dark:bg-dark-bgSecondary/60 text-xs font-mono font-bold uppercase focus:outline-none focus:ring-1 focus:ring-brand text-light-text dark:text-dark-text"
                  />
                </div>

                {/* Custom Listbox Source Selector */}
                <div>
                  <RoleSelect
                    value={assignment.color}
                    options={paletteOptions}
                    onChange={(val) => handleUpdateRoleColor(roleKey, val, false)}
                    ariaLabel={`Source for ${meta.label}`}
                  />
                </div>

                {/* WCAG Contrast Status & Warning Fix */}
                {contrast && (
                  <div className="pt-1.5 border-t border-light-border/60 dark:border-dark-border/60 space-y-1">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-mono text-light-textSecondary dark:text-dark-textSecondary">
                        {contrast.ratio}:1
                      </span>
                      <span
                        className={`font-bold px-1.5 py-0.2 rounded ${
                          contrast.passesAA
                            ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                            : 'bg-rose-500/15 text-rose-600 dark:text-rose-400'
                        }`}
                      >
                        {contrast.passesAA ? 'AA Pass' : 'AA Fail'}
                      </span>
                    </div>

                    {contrast.warning && contrast.suggestedColor && (
                      <button
                        type="button"
                        onClick={() => handleUpdateRoleColor(roleKey, contrast.suggestedColor!, true)}
                        className="w-full text-left text-[9px] text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 font-medium"
                      >
                        <AlertTriangle className="w-2.5 h-2.5 shrink-0" />
                        <span className="truncate">Fix to {contrast.suggestedColor}</span>
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Realistic Web Mockup Container */}
      <div
        className="w-full rounded-3xl p-6 sm:p-10 shadow-glass border transition-all duration-300"
        style={{
          backgroundColor: roles.background.color,
          borderColor: roles.border.color,
          color: roles.text.color,
        }}
      >
        {/* Mockup Top Navigation Bar */}
        <div
          className="flex items-center justify-between pb-5 border-b transition-colors"
          style={{ borderColor: roles.border.color }}
        >
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold shadow-sm text-sm"
              style={{
                backgroundColor: roles.primary.color,
                color: getReadableTextColor(roles.primary.color),
              }}
            >
              M
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight block">
                MoPalette Studio
              </span>
              <span
                className="text-[11px] block -mt-0.5"
                style={{ color: roles.mutedText.color }}
              >
                Design System V2
              </span>
            </div>
          </div>

          {/* Links & Avatar */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-4 text-xs font-semibold">
              <span className="cursor-pointer hover:opacity-80">Dashboard</span>
              <span
                className="cursor-pointer hover:opacity-80"
                style={{ color: roles.mutedText.color }}
              >
                Analytics
              </span>
              <span
                className="cursor-pointer hover:opacity-80"
                style={{ color: roles.mutedText.color }}
              >
                Tokens
              </span>
            </nav>

            <button
              type="button"
              className="px-3.5 py-1.5 rounded-xl text-xs font-bold shadow-xs transition-transform hover:scale-105"
              style={{
                backgroundColor: roles.primary.color,
                color: getReadableTextColor(roles.primary.color),
              }}
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Mockup Hero Banner */}
        <div
          className="mt-8 p-6 sm:p-8 rounded-3xl border shadow-xs transition-all"
          style={{
            backgroundColor: roles.surface.color,
            borderColor: roles.border.color,
          }}
        >
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold"
              style={{
                backgroundColor: roles.accent.color,
                color: getReadableTextColor(roles.accent.color),
              }}
            >
              <span>Featured Component Release</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Design systems that scale across every surface
            </h3>

            <p
              className="text-sm leading-relaxed"
              style={{ color: roles.mutedText.color }}
            >
              MoPalette guarantees accessibility standards across all 11 semantic tokens, ensuring contrast fidelity in dark and light workspaces alike.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                className="px-4 py-2 rounded-xl text-xs font-bold shadow-xs flex items-center gap-1.5 transition-transform hover:scale-105"
                style={{
                  backgroundColor: roles.primary.color,
                  color: getReadableTextColor(roles.primary.color),
                }}
              >
                <span>Launch Workspace</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                className="px-4 py-2 rounded-xl text-xs font-bold border transition-colors hover:opacity-90"
                style={{
                  borderColor: roles.border.color,
                  color: roles.text.color,
                }}
              >
                Documentation
              </button>
            </div>
          </div>
        </div>

        {/* 3 Metric Cards with Success & Danger Trends */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Metric 1 */}
          <div
            className="p-5 rounded-2xl border shadow-xs flex flex-col justify-between"
            style={{
              backgroundColor: roles.surface.color,
              borderColor: roles.border.color,
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold" style={{ color: roles.mutedText.color }}>
                Weekly Contrast Pass
              </span>
              <div
                className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md"
                style={{
                  backgroundColor: `${roles.success.color}25`,
                  color: roles.success.color,
                }}
              >
                <TrendingUp className="w-3 h-3" />
                <span>+14.2%</span>
              </div>
            </div>
            <div className="text-2xl font-extrabold tracking-tight">99.8%</div>
            <span className="text-[11px] mt-1" style={{ color: roles.mutedText.color }}>
              Target WCAG 2.2 Level AA
            </span>
          </div>

          {/* Metric 2 */}
          <div
            className="p-5 rounded-2xl border shadow-xs flex flex-col justify-between"
            style={{
              backgroundColor: roles.surface.color,
              borderColor: roles.border.color,
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold" style={{ color: roles.mutedText.color }}>
                Active Tokens
              </span>
              <div
                className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md"
                style={{
                  backgroundColor: `${roles.accent.color}25`,
                  color: roles.text.color,
                }}
              >
                <span>11 Roles</span>
              </div>
            </div>
            <div className="text-2xl font-extrabold tracking-tight">480 Palettes</div>
            <span className="text-[11px] mt-1" style={{ color: roles.mutedText.color }}>
              Synchronized across 20 categories
            </span>
          </div>

          {/* Metric 3 */}
          <div
            className="p-5 rounded-2xl border shadow-xs flex flex-col justify-between"
            style={{
              backgroundColor: roles.surface.color,
              borderColor: roles.border.color,
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold" style={{ color: roles.mutedText.color }}>
                Surface Collision Rate
              </span>
              <div
                className="flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md"
                style={{
                  backgroundColor: `${roles.danger.color}20`,
                  color: roles.danger.color,
                }}
              >
                <TrendingDown className="w-3 h-3" />
                <span>-0.00%</span>
              </div>
            </div>
            <div className="text-2xl font-extrabold tracking-tight">0 Collisions</div>
            <span className="text-[11px] mt-1" style={{ color: roles.mutedText.color }}>
              Separation guaranteed by OKLCH
            </span>
          </div>
        </div>

        {/* Visual Chart Block & Content Column */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Multi-Bar Chart (2 cols) */}
          <div
            className="lg:col-span-2 p-6 rounded-2xl border shadow-xs flex flex-col justify-between"
            style={{
              backgroundColor: roles.surface.color,
              borderColor: roles.border.color,
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-sm font-bold">Luminance Balance Analytics</h4>
                <p className="text-xs" style={{ color: roles.mutedText.color }}>
                  Continuous harmonic distribution across design components
                </p>
              </div>

              {/* Chart Legend */}
              <div className="flex items-center gap-3 text-xs font-semibold">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: roles.primary.color }} />
                  <span style={{ color: roles.mutedText.color }}>Primary</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: roles.secondary.color }} />
                  <span style={{ color: roles.mutedText.color }}>Secondary</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: roles.accent.color }} />
                  <span style={{ color: roles.mutedText.color }}>Accent</span>
                </div>
              </div>
            </div>

            {/* Bars */}
            <div className="flex items-end gap-3 h-36 pt-4 border-t" style={{ borderColor: roles.border.color }}>
              {[
                { h1: 45, h2: 30, h3: 20 },
                { h1: 65, h2: 50, h3: 35 },
                { h1: 35, h2: 70, h3: 40 },
                { h1: 85, h2: 60, h3: 75 },
                { h1: 95, h2: 80, h3: 65 },
                { h1: 60, h2: 45, h3: 50 },
                { h1: 75, h2: 90, h3: 60 },
              ].map((item, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                  <div className="w-full flex items-end justify-center gap-1 h-full">
                    <div
                      className="w-1/3 rounded-t-sm transition-all"
                      style={{
                        height: `${item.h1}%`,
                        backgroundColor: roles.primary.color,
                      }}
                      title={`Primary: ${item.h1}%`}
                    />
                    <div
                      className="w-1/3 rounded-t-sm transition-all"
                      style={{
                        height: `${item.h2}%`,
                        backgroundColor: roles.secondary.color,
                      }}
                      title={`Secondary: ${item.h2}%`}
                    />
                    <div
                      className="w-1/3 rounded-t-sm transition-all"
                      style={{
                        height: `${item.h3}%`,
                        backgroundColor: roles.accent.color,
                      }}
                      title={`Accent: ${item.h3}%`}
                    />
                  </div>
                  <span className="text-[10px] font-mono" style={{ color: roles.mutedText.color }}>
                    Day {idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form & Input Section (1 col) */}
          <div
            className="p-6 rounded-2xl border shadow-xs flex flex-col justify-between gap-4"
            style={{
              backgroundColor: roles.surface.color,
              borderColor: roles.border.color,
            }}
          >
            <div>
              <h4 className="text-sm font-bold mb-1">Interactive Form</h4>
              <p className="text-xs mb-4" style={{ color: roles.mutedText.color }}>
                Test interactive inputs against surface background
              </p>

              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-semibold mb-1" style={{ color: roles.mutedText.color }}>
                    Palette Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Nordic Aurora"
                    className="w-full px-3 py-2 rounded-xl text-xs font-medium border focus:outline-none"
                    style={{
                      backgroundColor: roles.background.color,
                      borderColor: roles.border.color,
                      color: roles.text.color,
                    }}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded"
                    style={{ accentColor: roles.primary.color }}
                  />
                  <span className="text-xs font-medium">Verify AA standard compliance</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="w-full py-2.5 rounded-xl font-bold text-xs shadow-xs transition-transform hover:scale-[1.02]"
              style={{
                backgroundColor: roles.secondary.color,
                color: getReadableTextColor(roles.secondary.color),
              }}
            >
              Submit Configuration
            </button>
          </div>
        </div>

        {/* Status / Alert Banners */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Success Banner */}
          <div
            className="p-3.5 rounded-2xl border flex items-center gap-2.5 text-xs font-semibold"
            style={{
              backgroundColor: `${roles.success.color}15`,
              borderColor: `${roles.success.color}40`,
              color: roles.text.color,
            }}
          >
            <CheckCircle className="w-4 h-4 shrink-0" style={{ color: roles.success.color }} />
            <span>Success: All component contrast thresholds verified</span>
          </div>

          {/* Warning Banner */}
          <div
            className="p-3.5 rounded-2xl border flex items-center gap-2.5 text-xs font-semibold"
            style={{
              backgroundColor: `${roles.warning.color}15`,
              borderColor: `${roles.warning.color}40`,
              color: roles.text.color,
            }}
          >
            <AlertCircle className="w-4 h-4 shrink-0" style={{ color: roles.warning.color }} />
            <span>Caution: High ambient contrast recommended</span>
          </div>

          {/* Danger Banner */}
          <div
            className="p-3.5 rounded-2xl border flex items-center gap-2.5 text-xs font-semibold"
            style={{
              backgroundColor: `${roles.danger.color}15`,
              borderColor: `${roles.danger.color}40`,
              color: roles.text.color,
            }}
          >
            <ShieldCheck className="w-4 h-4 shrink-0" style={{ color: roles.danger.color }} />
            <span>Zero Color Collisions in Active Preview</span>
          </div>
        </div>

        {/* Footer */}
        <div
          className="mt-8 pt-5 border-t flex flex-wrap items-center justify-between text-xs"
          style={{ borderColor: roles.border.color, color: roles.mutedText.color }}
        >
          <span>MoPalette Realistic Mockup Engine • WCAG 2.2 AA Certified</span>
          <div className="flex items-center gap-4">
            <span className="hover:underline cursor-pointer">Privacy</span>
            <span className="hover:underline cursor-pointer">Terms</span>
            <span className="hover:underline cursor-pointer">Export CSS</span>
          </div>
        </div>
      </div>

      {/* Preset Picker Modal */}
      <PresetPickerModal
        isOpen={isPresetModalOpen}
        onClose={() => setIsPresetModalOpen(false)}
        onSelectPreset={handleSelectPreset}
      />
    </section>
  );
};
