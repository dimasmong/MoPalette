import React, { useState } from 'react';
import { usePalette } from '@/context/PaletteContext';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/components/common/Toast';
import { analyzeContrast } from '@/lib/color/contrast';
import { simulateColorBlindness } from '@/lib/color/blindness';
import { normalizeHex, isValidHex } from '@/lib/color/conversions';
import { ColorBlindnessType } from '@/types';
import {
  ArrowLeftRight,
  CheckCircle,
  XCircle,
  Lightbulb,
  Eye,
  Check,
} from 'lucide-react';

export const ContrastCheckerSection: React.FC = () => {
  const { colors } = usePalette();
  const { t } = useLanguage();
  const { showToast } = useToast();

  const [textColor, setTextColor] = useState<string>(
    colors[colors.length - 1]?.hex || '#16242E'
  );
  const [bgColor, setBgColor] = useState<string>(
    colors[0]?.hex || '#A1E3F9'
  );

  const analysis = analyzeContrast(textColor, bgColor);

  const handleSwap = () => {
    const temp = textColor;
    setTextColor(bgColor);
    setBgColor(temp);
  };

  const handleApplySuggestion = (newHex: string) => {
    setTextColor(normalizeHex(newHex));
    showToast(`Applied ${newHex}`);
  };

  const visionTypes: ColorBlindnessType[] = [
    'normal',
    'protanopia',
    'deuteranopia',
    'tritanopia',
    'grayscale',
  ];

  return (
    <section className="w-full space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-light-text dark:text-dark-text tracking-tight">
          {t('contrast.title')}
        </h2>
        <p className="mt-2 text-sm text-light-textSecondary dark:text-dark-textSecondary">
          {t('contrast.subtitle')}
        </p>
      </div>

      {/* Main Grid: Picker & Contrast Ratio */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Color Controls & Quick Pickers (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          <div className="p-5 rounded-2xl glass-card bg-light-bg/85 dark:bg-dark-bg/85 border border-light-glassBorder dark:border-dark-glassBorder shadow-sm space-y-5">
            {/* Foreground Text Color */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-light-textSecondary dark:text-dark-textSecondary mb-2">
                {t('contrast.textColorLabel')}
              </label>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl border border-light-border dark:border-dark-border shadow-inner shrink-0 relative overflow-hidden"
                  style={{ backgroundColor: textColor }}
                >
                  <input
                    type="color"
                    value={textColor}
                    onChange={(e) => setTextColor(normalizeHex(e.target.value))}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                </div>
                <input
                  type="text"
                  value={textColor}
                  onChange={(e) => isValidHex(e.target.value) && setTextColor(normalizeHex(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg text-sm font-mono font-bold uppercase text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-brand"
                  maxLength={7}
                />
              </div>

              {/* Quick Swatches from active palette */}
              <div className="flex items-center gap-1.5 mt-2 overflow-x-auto py-1">
                {colors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setTextColor(c.hex)}
                    className="w-6 h-6 rounded-lg border border-black/15 shrink-0 transition-transform hover:scale-110"
                    style={{ backgroundColor: c.hex }}
                    title={`Set text to ${c.hex}`}
                  />
                ))}
              </div>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center">
              <button
                onClick={handleSwap}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-light-border dark:border-dark-border hover:border-brand bg-light-bgSecondary dark:bg-dark-bgSecondary text-xs font-bold text-light-text dark:text-dark-text transition-colors shadow-xs"
              >
                <ArrowLeftRight className="w-3.5 h-3.5 text-brand" />
                <span>{t('contrast.swapColors')}</span>
              </button>
            </div>

            {/* Background Color */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-light-textSecondary dark:text-dark-textSecondary mb-2">
                {t('contrast.bgColorLabel')}
              </label>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl border border-light-border dark:border-dark-border shadow-inner shrink-0 relative overflow-hidden"
                  style={{ backgroundColor: bgColor }}
                >
                  <input
                    type="color"
                    value={bgColor}
                    onChange={(e) => setBgColor(normalizeHex(e.target.value))}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                </div>
                <input
                  type="text"
                  value={bgColor}
                  onChange={(e) => isValidHex(e.target.value) && setBgColor(normalizeHex(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg text-sm font-mono font-bold uppercase text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-brand"
                  maxLength={7}
                />
              </div>

              {/* Quick Swatches from active palette */}
              <div className="flex items-center gap-1.5 mt-2 overflow-x-auto py-1">
                {colors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setBgColor(c.hex)}
                    className="w-6 h-6 rounded-lg border border-black/15 shrink-0 transition-transform hover:scale-110"
                    style={{ backgroundColor: c.hex }}
                    title={`Set background to ${c.hex}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Automatic Fix Suggestions */}
          {!analysis.normalTextAA && (
            <div className="p-5 rounded-2xl glass-card bg-amber-500/10 dark:bg-amber-500/5 border border-amber-500/30 shadow-sm space-y-3">
              <div className="flex items-start gap-2.5">
                <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-amber-800 dark:text-amber-200">
                    {t('contrast.autoFixTitle')}
                  </h4>
                  <p className="text-xs text-amber-700 dark:text-amber-300 mt-0.5">
                    {t('contrast.autoFixDesc')}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-1">
                {analysis.suggestedTextLight && (
                  <button
                    onClick={() => handleApplySuggestion(analysis.suggestedTextLight!)}
                    className="flex items-center justify-between px-3 py-2 rounded-xl bg-white dark:bg-stone-900 border border-amber-300 dark:border-amber-700/50 text-xs font-semibold text-light-text dark:text-dark-text hover:border-amber-500 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className="w-4 h-4 rounded-md border border-black/20"
                        style={{ backgroundColor: analysis.suggestedTextLight }}
                      />
                      <span>{t('contrast.applyLightSuggestion', { hex: analysis.suggestedTextLight })}</span>
                    </span>
                    <Check className="w-4 h-4 text-emerald-500" />
                  </button>
                )}

                {analysis.suggestedTextDark && (
                  <button
                    onClick={() => handleApplySuggestion(analysis.suggestedTextDark!)}
                    className="flex items-center justify-between px-3 py-2 rounded-xl bg-white dark:bg-stone-900 border border-amber-300 dark:border-amber-700/50 text-xs font-semibold text-light-text dark:text-dark-text hover:border-amber-500 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className="w-4 h-4 rounded-md border border-black/20"
                        style={{ backgroundColor: analysis.suggestedTextDark }}
                      />
                      <span>{t('contrast.applyDarkSuggestion', { hex: analysis.suggestedTextDark })}</span>
                    </span>
                    <Check className="w-4 h-4 text-emerald-500" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right: Results, WCAG AA/AAA Checklist & Text Preview (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Ratio Score Card */}
          <div className="p-6 rounded-2xl glass-card bg-light-bg/85 dark:bg-dark-bg/85 border border-light-glassBorder dark:border-dark-glassBorder shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-light-textSecondary dark:text-dark-textSecondary block">
                {t('contrast.ratioLabel')}
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl sm:text-5xl font-extrabold font-mono text-light-text dark:text-dark-text tracking-tight">
                  {analysis.ratio}:1
                </span>
                <span
                  className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                    analysis.normalTextAA
                      ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                      : 'bg-red-500/15 text-red-600 dark:text-red-400'
                  }`}
                >
                  {analysis.normalTextAA ? t('contrast.pass') : t('contrast.fail')}
                </span>
              </div>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 gap-2 text-xs font-medium w-full sm:w-auto">
              {/* Normal Text AA */}
              <div
                className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${
                  analysis.normalTextAA
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300'
                    : 'bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-300'
                }`}
              >
                {analysis.normalTextAA ? (
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                )}
                <span>Normal AA</span>
              </div>

              {/* Normal Text AAA */}
              <div
                className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${
                  analysis.normalTextAAA
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300'
                    : 'bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-300'
                }`}
              >
                {analysis.normalTextAAA ? (
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                )}
                <span>Normal AAA</span>
              </div>

              {/* Large Text AA */}
              <div
                className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${
                  analysis.largeTextAA
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300'
                    : 'bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-300'
                }`}
              >
                {analysis.largeTextAA ? (
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                )}
                <span>Large AA</span>
              </div>

              {/* UI Graphics AA */}
              <div
                className={`flex items-center gap-2 px-3 py-2 rounded-xl border ${
                  analysis.uiComponentAA
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300'
                    : 'bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-300'
                }`}
              >
                {analysis.uiComponentAA ? (
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                )}
                <span>UI Icons AA</span>
              </div>
            </div>
          </div>

          {/* Live Preview Box */}
          <div
            className="p-6 sm:p-8 rounded-2xl shadow-sm border border-black/10 transition-colors duration-200"
            style={{ backgroundColor: bgColor }}
          >
            <h3
              className="text-xl sm:text-2xl font-extrabold tracking-tight"
              style={{ color: textColor }}
            >
              {t('contrast.previewHeadline')}
            </h3>
            <p
              className="mt-3 text-sm sm:text-base leading-relaxed opacity-90"
              style={{ color: textColor }}
            >
              {t('contrast.previewBody')}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                className="px-4 py-2 rounded-xl font-bold text-xs shadow-sm transition-transform hover:scale-105"
                style={{
                  backgroundColor: textColor,
                  color: bgColor,
                }}
              >
                Primary Button
              </button>
              <button
                className="px-4 py-2 rounded-xl font-bold text-xs border transition-transform hover:scale-105"
                style={{
                  borderColor: textColor,
                  color: textColor,
                }}
              >
                Outline Button
              </button>
            </div>
          </div>

          {/* Color Vision Deficiency Simulation */}
          <div className="p-5 rounded-2xl glass-card bg-light-bg/85 dark:bg-dark-bg/85 border border-light-glassBorder dark:border-dark-glassBorder shadow-sm space-y-4">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-brand" />
              <h3 className="text-sm font-bold text-light-text dark:text-dark-text">
                {t('contrast.visionSimulationTitle')}
              </h3>
            </div>
            <p className="text-xs text-light-textSecondary dark:text-dark-textSecondary">
              {t('contrast.visionSimulationDesc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {visionTypes.map((type) => {
                const simText = simulateColorBlindness(textColor, type);
                const simBg = simulateColorBlindness(bgColor, type);

                return (
                  <div
                    key={type}
                    className="p-3 rounded-xl border border-light-border dark:border-dark-border flex flex-col justify-between min-h-[90px] shadow-2xs"
                    style={{ backgroundColor: simBg }}
                  >
                    <span
                      className="text-[11px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded backdrop-blur-xs self-start"
                      style={{
                        color: simText,
                        backgroundColor: 'rgba(0,0,0,0.15)',
                      }}
                    >
                      {t(`contrast.visionTypes.${type}`)}
                    </span>
                    <span className="text-sm font-bold mt-2" style={{ color: simText }}>
                      Preview Text
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
