import React, { useState } from 'react';
import { usePalette } from '@/context/PaletteContext';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/components/common/Toast';
import { savePalette } from '@/lib/storage/storage';
import { WheelIndicator } from '@/components/common/WheelIndicator';
import { GenerationMood, HarmonyMode } from '@/types';
import {
  Sparkles,
  Unlock,
  Undo2,
  Redo2,
  Shuffle,
  ArrowLeftRight,
  RotateCcw,
  BookmarkPlus,
  Share2,
  SlidersHorizontal,
  Plus,
  Minus,
  Download,
  Hash,
  Library,
} from 'lucide-react';

interface PaletteToolbarProps {
  onOpenExport: () => void;
  onOpenSaved: () => void;
}

export const PaletteToolbar: React.FC<PaletteToolbarProps> = ({
  onOpenExport,
  onOpenSaved,
}) => {
  const {
    colors,
    paletteName,
    setPaletteName,
    mood,
    setMood,
    harmony,
    setHarmony,
    baseColor,
    setBaseColor,
    seed,
    setSeed,
    randomizeSeed,
    paletteSize,
    setPaletteSize,
    generateNewPalette,
    unlockAllAndGenerate,
    addSwatch,
    removeSwatch,
    shuffleUnlocked,
    reversePalette,
    canUndo,
    canRedo,
    undo,
    redo,
    resetPalette,
  } = usePalette();

  const { t } = useLanguage();
  const { showToast } = useToast();

  const [showWheel, setShowWheel] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSaveCurrent = () => {
    savePalette({
      id: `palette-${Date.now()}`,
      name: paletteName || 'Saved Palette',
      colors,
      createdAt: Date.now(),
      isFavorite: false,
    });
    showToast(t('common.saved'));
  };

  const handleShareUrl = () => {
    try {
      const hexList = colors.map((c) => c.hex.replace('#', '')).join('-');
      const shareUrl = `${window.location.origin}${window.location.pathname}#palette=${hexList}`;

      if (navigator.share) {
        navigator
          .share({
            title: `MoPalette — ${paletteName}`,
            text: `Check out this color palette created with MoPalette: ${colors.map((c) => c.hex).join(', ')}`,
            url: shareUrl,
          })
          .catch(() => {
            navigator.clipboard.writeText(shareUrl);
            showToast(t('common.urlCopied'));
          });
      } else {
        navigator.clipboard.writeText(shareUrl);
        showToast(t('common.urlCopied'));
      }
    } catch {
      navigator.clipboard.writeText(colors.map((c) => c.hex).join(', '));
      showToast(t('common.paletteCopied'));
    }
  };

  const handleRemoveLastSwatch = () => {
    if (colors.length > 2) {
      removeSwatch(colors[colors.length - 1].id);
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* Top primary controls row */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl glass-card bg-light-bg/85 dark:bg-dark-bg/85 border border-light-glassBorder dark:border-dark-glassBorder shadow-sm">
        {/* Left: Palette Name & Primary Generation Buttons */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {/* Editable Palette Name */}
          <input
            type="text"
            value={paletteName}
            onChange={(e) => setPaletteName(e.target.value)}
            className="px-3 py-1.5 rounded-xl border border-transparent hover:border-light-border dark:hover:border-dark-border focus:border-brand bg-transparent text-sm font-bold text-light-text dark:text-dark-text max-w-[160px] sm:max-w-[200px] truncate"
            placeholder={t('saved.paletteNamePlaceholder')}
          />

          {/* Group 1: Primary Actions */}
          <div className="flex items-center gap-2">
            {/* Primary Generate Button (Spacebar) */}
            <button
              onClick={() => generateNewPalette()}
              title="Generate new colors for unlocked swatches (Press Spacebar)"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand text-brand-darkText font-bold text-xs sm:text-sm shadow-sm hover:bg-brand-hover hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-brand-darkText" />
              <span>{t('generator.generateButton') || 'Generate (Spacebar)'}</span>
            </button>

            {/* Unlock All & Generate (Secondary action) */}
            <button
              onClick={unlockAllAndGenerate}
              title={t('generator.unlockAllAndGenerateTooltip') || 'Unlock all colors and generate an entirely fresh palette'}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-light-border dark:border-dark-border hover:border-brand bg-light-bgSecondary/80 dark:bg-dark-bgSecondary/80 hover:bg-light-bgSecondary dark:hover:bg-dark-bgSecondary text-xs font-semibold text-light-text dark:text-dark-text transition-all cursor-pointer shadow-2xs"
            >
              <Unlock className="w-3.5 h-3.5 text-brand" />
              <span>{t('generator.unlockAllAndGenerate') || 'Unlock All & Generate'}</span>
            </button>
          </div>
        </div>

        {/* Right: History, Palette Operations & Management */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Group 2: History (Undo / Redo) */}
          <div className="flex items-center gap-1 bg-light-bgSecondary/50 dark:bg-dark-bgSecondary/50 p-1 rounded-xl border border-light-border dark:border-dark-border">
            <button
              onClick={undo}
              disabled={!canUndo}
              title={t('common.undo')}
              aria-label={t('common.undo')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                canUndo
                  ? 'text-light-text dark:text-dark-text hover:bg-light-bg dark:hover:bg-dark-bg'
                  : 'text-light-textSecondary/40 dark:text-dark-textSecondary/40 cursor-not-allowed'
              }`}
            >
              <Undo2 className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={redo}
              disabled={!canRedo}
              title={t('common.redo')}
              aria-label={t('common.redo')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                canRedo
                  ? 'text-light-text dark:text-dark-text hover:bg-light-bg dark:hover:bg-dark-bg'
                  : 'text-light-textSecondary/40 dark:text-dark-textSecondary/40 cursor-not-allowed'
              }`}
            >
              <Redo2 className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="hidden sm:block w-[1px] h-6 bg-light-border dark:bg-dark-border" />

          {/* Group 3: Palette Operations */}
          <div className="flex items-center gap-1 bg-light-bgSecondary/50 dark:bg-dark-bgSecondary/50 p-1 rounded-xl border border-light-border dark:border-dark-border">
            {/* Shuffle Unlocked */}
            <button
              onClick={shuffleUnlocked}
              title={t('common.shuffle')}
              aria-label={t('common.shuffle')}
              className="p-1.5 rounded-lg text-light-text dark:text-dark-text hover:bg-light-bg dark:hover:bg-dark-bg transition-colors cursor-pointer"
            >
              <Shuffle className="w-3.5 h-3.5" />
            </button>

            {/* Reverse Palette */}
            <button
              onClick={reversePalette}
              title={t('common.reverse')}
              aria-label={t('common.reverse')}
              className="p-1.5 rounded-lg text-light-text dark:text-dark-text hover:bg-light-bg dark:hover:bg-dark-bg transition-colors cursor-pointer"
            >
              <ArrowLeftRight className="w-3.5 h-3.5" />
            </button>

            {/* Reset Palette */}
            <button
              onClick={resetPalette}
              title={t('common.reset')}
              aria-label={t('common.reset')}
              className="p-1.5 rounded-lg text-light-text dark:text-dark-text hover:bg-light-bg dark:hover:bg-dark-bg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            {/* Add Swatch */}
            <button
              onClick={() => addSwatch()}
              disabled={colors.length >= 12}
              title={t('common.addColor')}
              aria-label={t('common.addColor')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                colors.length < 12
                  ? 'text-light-text dark:text-dark-text hover:bg-light-bg dark:hover:bg-dark-bg text-brand'
                  : 'text-light-textSecondary/40 dark:text-dark-textSecondary/40 cursor-not-allowed'
              }`}
            >
              <Plus className="w-3.5 h-3.5" />
            </button>

            {/* Remove Swatch */}
            <button
              onClick={handleRemoveLastSwatch}
              disabled={colors.length <= 2}
              title={t('common.removeColor')}
              aria-label={t('common.removeColor')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                colors.length > 2
                  ? 'text-light-text dark:text-dark-text hover:bg-light-bg dark:hover:bg-dark-bg'
                  : 'text-light-textSecondary/40 dark:text-dark-textSecondary/40 cursor-not-allowed'
              }`}
            >
              <Minus className="w-3.5 h-3.5" />
            </button>

            {/* Palette Settings Toggle */}
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              title={t('generator.editSettings') || 'Palette Settings & Harmony'}
              aria-label={t('generator.editSettings') || 'Palette Settings'}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                showAdvanced
                  ? 'bg-brand text-brand-darkText'
                  : 'text-light-text dark:text-dark-text hover:bg-light-bg dark:hover:bg-dark-bg'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="hidden sm:block w-[1px] h-6 bg-light-border dark:bg-dark-border" />

          {/* Group 4: Palette Management */}
          <div className="flex items-center gap-1.5">
            {/* Save Palette */}
            <button
              onClick={handleSaveCurrent}
              title={t('common.save')}
              aria-label={t('common.save')}
              className="p-2 rounded-xl border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:border-brand hover:text-brand transition-colors cursor-pointer"
            >
              <BookmarkPlus className="w-4 h-4" />
            </button>

            {/* Saved Library Modal Trigger */}
            <button
              onClick={onOpenSaved}
              title={t('common.library')}
              aria-label={t('common.library')}
              className="p-2 rounded-xl border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:border-brand hover:text-brand transition-colors cursor-pointer"
            >
              <Library className="w-4 h-4 text-brand" />
            </button>

            {/* Share / Copy URL */}
            <button
              onClick={handleShareUrl}
              title={t('common.copy')}
              aria-label={t('common.copy')}
              className="p-2 rounded-xl border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:border-brand hover:text-brand transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
            </button>

            {/* Export Modal Trigger */}
            <button
              onClick={onOpenExport}
              title={t('common.export')}
              aria-label={t('common.export')}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-brand bg-brand/15 text-brand-darkText dark:text-brand hover:bg-brand/25 font-bold text-xs transition-all shadow-2xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t('common.export')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Advanced generation settings panel */}
      {showAdvanced && (
        <div className="p-5 rounded-2xl glass-card bg-light-bg/85 dark:bg-dark-bg/85 border border-light-glassBorder dark:border-dark-glassBorder shadow-sm space-y-5 animate-in fade-in duration-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Generation Mood */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-light-text dark:text-dark-text flex items-center justify-between">
                <span>{t('generator.moodLabel')}</span>
              </label>
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value as GenerationMood)}
                className="w-full px-3 py-2 rounded-xl border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg text-xs font-semibold text-light-text dark:text-dark-text focus:outline-none focus:ring-1 focus:ring-brand"
              >
                <option value="random">{t('generator.moods.random')}</option>
                <option value="warm">{t('generator.moods.warm')}</option>
                <option value="cool">{t('generator.moods.cool')}</option>
                <option value="pastel">{t('generator.moods.pastel')}</option>
                <option value="vibrant">{t('generator.moods.vibrant')}</option>
                <option value="earthy">{t('generator.moods.earthy')}</option>
                <option value="monochrome">{t('generator.moods.monochrome')}</option>
                <option value="neon">{t('generator.moods.neon')}</option>
                <option value="dark">{t('generator.moods.dark')}</option>
                <option value="custom">{t('generator.moods.custom')}</option>
              </select>
            </div>

            {/* Harmony Mode */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-light-text dark:text-dark-text flex items-center justify-between">
                <span>{t('generator.harmonyLabel')}</span>
                <button
                  type="button"
                  onClick={() => setShowWheel(!showWheel)}
                  className="text-[10px] text-brand hover:underline font-semibold"
                >
                  {showWheel ? t('generator.hideWheel') : t('generator.showWheel')}
                </button>
              </label>
              <select
                value={harmony}
                onChange={(e) => setHarmony(e.target.value as HarmonyMode)}
                className="w-full px-3 py-2 rounded-xl border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg text-xs font-semibold text-light-text dark:text-dark-text focus:outline-none focus:ring-1 focus:ring-brand"
              >
                <option value="none">{t('generator.harmonies.none')}</option>
                <option value="analogous">{t('generator.harmonies.analogous')}</option>
                <option value="monochromatic">{t('generator.harmonies.monochromatic')}</option>
                <option value="triadic">{t('generator.harmonies.triadic')}</option>
                <option value="complementary">{t('generator.harmonies.complementary')}</option>
                <option value="split-complementary">
                  {t('generator.harmonies.splitComplementary')}
                </option>
                <option value="tetradic">{t('generator.harmonies.tetradic')}</option>
              </select>
            </div>

            {/* Swatch Count Slider */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-light-text dark:text-dark-text flex items-center justify-between">
                <span>{t('generator.paletteSize')}</span>
                <span className="font-mono text-brand font-bold">{paletteSize}</span>
              </label>
              <input
                type="range"
                min="2"
                max="12"
                value={paletteSize}
                onChange={(e) => setPaletteSize(parseInt(e.target.value, 10))}
                className="w-full accent-brand cursor-pointer"
              />
            </div>

            {/* PRNG Seed */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-light-text dark:text-dark-text flex items-center justify-between">
                <span>{t('generator.seedLabel')}</span>
                <button
                  type="button"
                  onClick={randomizeSeed}
                  className="text-[10px] text-brand hover:underline font-semibold"
                >
                  {t('generator.randomizeSeed')}
                </button>
              </label>
              <div className="relative">
                <Hash className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-light-textSecondary dark:text-dark-textSecondary" />
                <input
                  type="text"
                  value={seed}
                  onChange={(e) => setSeed(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg text-xs font-mono font-semibold text-light-text dark:text-dark-text focus:outline-none focus:ring-1 focus:ring-brand"
                />
              </div>
            </div>
          </div>

          {/* Custom base color picker if mood is custom */}
          {mood === 'custom' && (
            <div className="p-4 rounded-xl border border-light-border dark:border-dark-border bg-light-bgSecondary/40 dark:bg-dark-bgSecondary/40 flex items-center gap-3">
              <div
                className="w-7 h-7 rounded-lg border border-black/15 shadow-2xs relative overflow-hidden"
                style={{ backgroundColor: baseColor }}
              >
                <input
                  type="color"
                  value={baseColor}
                  onChange={(e) => setBaseColor(e.target.value)}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
              </div>
              <div>
                <span className="block text-xs font-bold text-light-text dark:text-dark-text">
                  {t('generator.baseColorLabel')}
                </span>
                <span className="text-[11px] text-light-textSecondary dark:text-dark-textSecondary">
                  {t('generator.baseColorHelp')}
                </span>
              </div>
            </div>
          )}

          {/* Color wheel visualization */}
          {showWheel && (
            <div className="flex flex-col items-center justify-center p-4 border border-light-border dark:border-dark-border rounded-xl bg-light-bgSecondary/30 dark:bg-dark-bgSecondary/30">
              <WheelIndicator baseHex={baseColor} harmony={harmony} size={150} />
              <p className="mt-2 text-[11px] text-light-textSecondary dark:text-dark-textSecondary">
                {t('generator.wheelDescription')}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
