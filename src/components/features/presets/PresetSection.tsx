import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { PRESET_CATEGORIES, PRESET_PALETTES, PresetCategoryName } from '@/lib/presets/presets';
import { PalettePreset } from '@/types';
import { usePalette } from '@/context/PaletteContext';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/components/common/Toast';
import {
  Send,
  Eye,
  Shuffle,
  Search,
  X,
  Copy,
  Check,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface PresetSectionProps {
  onLoadPreset: () => void;
  onUseInPreview?: (preset: PalettePreset) => void;
}

const ALL_DISPLAY_COUNT = 12;

/**
 * Fisher-Yates shuffle helper
 */
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const PresetSection: React.FC<PresetSectionProps> = ({
  onLoadPreset,
  onUseInPreview,
}) => {
  const { setPaletteFromColors } = usePalette();
  const { t } = useLanguage();
  const { showToast } = useToast();

  const [selectedCategory, setSelectedCategory] = useState<PresetCategoryName>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [allDisplayedPresets, setAllDisplayedPresets] = useState<PalettePreset[]>([]);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  // Category horizontal scroll container
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);

  // Check category scroll limits
  const updateScrollArrows = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    updateScrollArrows();
    el.addEventListener('scroll', updateScrollArrows, { passive: true });
    window.addEventListener('resize', updateScrollArrows);
    return () => {
      el.removeEventListener('scroll', updateScrollArrows);
      window.removeEventListener('resize', updateScrollArrows);
    };
  }, [updateScrollArrows]);

  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -260, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 260, behavior: 'smooth' });
    }
  };

  // Full pool filtered by category and search query
  const matchingPresets = useMemo(() => {
    let pool = PRESET_PALETTES;
    if (selectedCategory !== 'All') {
      pool = pool.filter((p) => p.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      pool = pool.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags?.some((tag) => tag.toLowerCase().includes(q)) ||
          p.colors.some((hex) => hex.toLowerCase().includes(q))
      );
    }
    return pool;
  }, [selectedCategory, searchQuery]);

  // Initial populate for "All" category (random diverse 12 cards)
  useEffect(() => {
    if (selectedCategory === 'All' && !searchQuery.trim()) {
      // Pick 12 diverse presets across different categories
      const shuffled = shuffleArray(PRESET_PALETTES);
      setAllDisplayedPresets(shuffled.slice(0, ALL_DISPLAY_COUNT));
    }
  }, [selectedCategory, searchQuery]);

  // Randomize 12 cards for "All" category with guaranteed non-repetition
  const handleRandomizeAll = useCallback(() => {
    const currentIds = new Set(allDisplayedPresets.map((p) => p.id));
    const nonRepeatingCandidates = PRESET_PALETTES.filter((p) => !currentIds.has(p.id));

    if (nonRepeatingCandidates.length >= ALL_DISPLAY_COUNT) {
      const shuffled = shuffleArray(nonRepeatingCandidates);
      setAllDisplayedPresets(shuffled.slice(0, ALL_DISPLAY_COUNT));
    } else {
      const shuffled = shuffleArray(PRESET_PALETTES);
      setAllDisplayedPresets(shuffled.slice(0, ALL_DISPLAY_COUNT));
    }

    showToast(t('presetsView.randomizedNotice') || 'Randomized 12 new presets');
  }, [allDisplayedPresets, showToast, t]);

  // Determine which cards to display
  // 1. If searching: show all matches
  // 2. If selectedCategory === 'All' and not searching: show allDisplayedPresets (12 cards)
  // 3. If selectedCategory !== 'All' and not searching: show ALL presets in that category! (52 cards!)
  const visiblePresets = useMemo(() => {
    if (searchQuery.trim()) {
      return matchingPresets;
    }
    if (selectedCategory === 'All') {
      return allDisplayedPresets;
    }
    return matchingPresets; // All presets in the chosen category
  }, [searchQuery, selectedCategory, matchingPresets, allDisplayedPresets]);

  const handleApplyPreset = (preset: PalettePreset) => {
    setPaletteFromColors(preset.colors, preset.name);
    showToast(t('presetsView.loadedNotice', { name: preset.name }) || `Loaded "${preset.name}" into editor`);
    onLoadPreset();
  };

  const handlePreviewPreset = (preset: PalettePreset) => {
    if (onUseInPreview) {
      onUseInPreview(preset);
    } else {
      setPaletteFromColors(preset.colors, preset.name);
      onLoadPreset();
    }
  };

  const handleCopyColor = async (hex: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      showToast(t('common.copiedToClipboard', { text: hex }) || `Copied ${hex}`);
      setTimeout(() => setCopiedHex(null), 1500);
    } catch {
      showToast(`Copied ${hex}`);
    }
  };

  const isAllCategoryActive = selectedCategory === 'All' && !searchQuery.trim();

  return (
    <section className="w-full space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-light-text dark:text-dark-text tracking-tight">
          {t('presetsView.title') || 'Curated Palette Presets'}
        </h2>
        <p className="text-sm text-light-textSecondary dark:text-dark-textSecondary">
          {t('presetsView.subtitle') || 'Explore over 1,000 hand-crafted palettes across 20 design categories'}
        </p>
      </div>

      {/* Controls: Search Bar & Categories with Navigation Arrows */}
      <div className="space-y-4 max-w-5xl mx-auto">
        {/* Search Bar */}
        <div className="max-w-md mx-auto relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-light-textSecondary dark:text-dark-textSecondary" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t('presetsView.searchPlaceholder') || 'Search 1,000+ palettes by name, tag, or hex...'}
            className="w-full pl-10 pr-9 py-2.5 rounded-2xl border border-light-border dark:border-dark-border bg-light-bgSecondary/60 dark:bg-dark-bgSecondary/60 text-xs text-light-text dark:text-dark-text placeholder:text-light-textSecondary/70 dark:placeholder:text-dark-textSecondary/70 focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-light-textSecondary dark:text-dark-textSecondary hover:text-light-text dark:hover:text-dark-text cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Category Navigation with Left and Right Arrows (No visible scrollbar) */}
        <div className="relative flex items-center gap-2">
          {/* Left Scroll Arrow */}
          <button
            type="button"
            onClick={handleScrollLeft}
            disabled={!canScrollLeft}
            aria-label="Scroll categories left"
            className={`p-2 rounded-xl border border-light-border dark:border-dark-border bg-white dark:bg-dark-bgSecondary transition-all shrink-0 cursor-pointer ${
              canScrollLeft
                ? 'text-light-text dark:text-dark-text hover:border-brand hover:bg-light-bgSecondary shadow-2xs'
                : 'text-light-textSecondary/30 dark:text-dark-textSecondary/30 opacity-40 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Horizontally Arranged Category Buttons (Scrollbar completely hidden) */}
          <div
            ref={scrollContainerRef}
            className="flex-1 flex items-center gap-1.5 overflow-x-auto scrollbar-none scroll-smooth py-1 px-1"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {PRESET_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-brand text-brand-darkText font-bold shadow-xs'
                      : 'border border-light-border dark:border-dark-border text-light-textSecondary dark:text-dark-textSecondary hover:bg-light-bgSecondary dark:hover:bg-dark-bgSecondary hover:text-light-text dark:hover:text-dark-text'
                  }`}
                >
                  {cat === 'All' ? (t('common.all') || 'All') : cat}
                </button>
              );
            })}
          </div>

          {/* Right Scroll Arrow */}
          <button
            type="button"
            onClick={handleScrollRight}
            disabled={!canScrollRight}
            aria-label="Scroll categories right"
            className={`p-2 rounded-xl border border-light-border dark:border-dark-border bg-white dark:bg-dark-bgSecondary transition-all shrink-0 cursor-pointer ${
              canScrollRight
                ? 'text-light-text dark:text-dark-text hover:border-brand hover:bg-light-bgSecondary shadow-2xs'
                : 'text-light-textSecondary/30 dark:text-dark-textSecondary/30 opacity-40 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Category Header Indicator & Count */}
      <div className="flex items-center justify-between text-xs text-light-textSecondary dark:text-dark-textSecondary max-w-7xl mx-auto px-1">
        <span className="font-bold text-light-text dark:text-dark-text">
          {selectedCategory === 'All' ? 'All Presets' : `${selectedCategory} Presets`}
        </span>
        <span className="font-mono">
          {visiblePresets.length} {visiblePresets.length === 1 ? 'palette' : 'palettes'}
        </span>
      </div>

      {/* Preset Cards Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
      {visiblePresets.length === 0 ? (
        <div className="p-12 text-center rounded-2xl border border-dashed border-light-border dark:border-dark-border text-light-textSecondary dark:text-dark-textSecondary text-sm max-w-md mx-auto">
          {t('presetsView.noResults') || 'No matching presets found. Try searching another keyword or category.'}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visiblePresets.map((preset) => (
            <div
              key={preset.id}
              className="group p-5 rounded-2xl glass-card bg-light-bg/85 dark:bg-dark-bg/85 border border-light-glassBorder dark:border-dark-glassBorder shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header: Title & Category badge */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-light-text dark:text-dark-text group-hover:text-brand transition-colors truncate pr-2">
                    {preset.name}
                  </h3>
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-md bg-light-bgSecondary dark:bg-dark-bgSecondary text-light-textSecondary dark:text-dark-textSecondary border border-light-border dark:border-dark-border shrink-0">
                    {preset.category}
                  </span>
                </div>

                {/* 5-Color Horizontal Preview Strip */}
                <div className="flex h-20 rounded-xl overflow-hidden shadow-inner border border-black/10">
                  {preset.colors.map((hex, i) => (
                    <div
                      key={i}
                      onClick={(e) => handleCopyColor(hex, e)}
                      className="flex-1 relative cursor-pointer group/swatch transition-transform hover:scale-105 flex items-center justify-center"
                      style={{ backgroundColor: hex }}
                      title={`${hex} — Click to copy`}
                    >
                      <div className="opacity-0 group-hover/swatch:opacity-100 transition-opacity bg-black/70 text-white rounded px-1.5 py-0.5 text-[10px] font-mono shadow-xs">
                        {copiedHex === hex ? (
                          <Check className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <Copy className="w-3 h-3" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Load Palette & Use in Preview */}
              <div className="mt-4 grid grid-cols-2 gap-2 pt-2 border-t border-light-border/60 dark:border-dark-border/60">
                <button
                  type="button"
                  onClick={() => handleApplyPreset(preset)}
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl border border-light-border dark:border-dark-border bg-light-bgSecondary/60 dark:bg-dark-bgSecondary/60 hover:bg-brand hover:text-brand-darkText hover:border-brand text-xs font-bold text-light-text dark:text-dark-text transition-all cursor-pointer"
                  title="Load into Main Generator"
                >
                  <Send className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{t('presetsView.loadPalette') || 'Load Palette'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handlePreviewPreset(preset)}
                  className="flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl border border-light-border dark:border-dark-border bg-light-bgSecondary/60 dark:bg-dark-bgSecondary/60 hover:bg-light-text hover:text-light-bg dark:hover:bg-dark-text dark:hover:text-dark-bg text-xs font-bold text-light-text dark:text-dark-text transition-all cursor-pointer"
                  title="Preview with this palette in Live Preview"
                >
                  <Eye className="w-3.5 h-3.5 shrink-0 text-brand" />
                  <span className="truncate">{t('presetsView.useInPreview') || 'Use in Preview'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Prominent Randomize Button: ONLY shown for 'All' category when no search is active */}
      {isAllCategoryActive && (
        <div className="flex flex-col items-center justify-center pt-2 gap-2">
          <button
            type="button"
            onClick={handleRandomizeAll}
            className="flex items-center gap-2 px-7 py-3 rounded-2xl bg-brand text-brand-darkText font-bold shadow-sm hover:shadow-md hover:brightness-105 active:scale-98 transition-all text-sm cursor-pointer"
          >
            <Shuffle className="w-4 h-4" />
            <span>{t('presetsView.randomizeButton') || 'Randomize'}</span>
          </button>
          <span className="text-[11px] text-light-textSecondary dark:text-dark-textSecondary">
            {t('presetsView.randomizeHintAll') || 'Replaces all 12 displayed cards with a different set of presets'}
          </span>
        </div>
      )}
    </section>
  );
};
