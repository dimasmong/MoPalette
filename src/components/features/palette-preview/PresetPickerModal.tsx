import React, { useState, useMemo, useEffect } from 'react';
import { PRESET_CATEGORIES, PRESET_PALETTES, PresetCategoryName } from '@/lib/presets/presets';
import { PalettePreset } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import { X, Search } from 'lucide-react';

interface PresetPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPreset: (preset: PalettePreset) => void;
}

export const PresetPickerModal: React.FC<PresetPickerModalProps> = ({
  isOpen,
  onClose,
  onSelectPreset,
}) => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<PresetCategoryName>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const filteredPresets = useMemo(() => {
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
          p.tags?.some((tag) => tag.toLowerCase().includes(q))
      );
    }
    return pool;
  }, [selectedCategory, searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-3xl max-h-[85vh] flex flex-col rounded-3xl bg-white dark:bg-[#16212D] text-light-text dark:text-dark-text shadow-2xl border border-light-border dark:border-dark-border overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="preset-picker-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-light-border dark:border-dark-border">
          <div>
            <h3 id="preset-picker-title" className="text-lg font-bold">
              {t('livePreview.choosePresetModalTitle') || 'Choose a Preset for Live Preview'}
            </h3>
            <p className="text-xs text-light-textSecondary dark:text-dark-textSecondary">
              {t('livePreview.choosePresetModalSubtitle') || 'Select from 480+ curated palettes to automatically map semantic roles'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-light-textSecondary dark:text-dark-textSecondary hover:bg-light-bgSecondary dark:hover:bg-dark-bgSecondary transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter bar */}
        <div className="p-4 space-y-3 border-b border-light-border dark:border-dark-border bg-light-bgSecondary/30 dark:bg-dark-bgSecondary/30">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-light-textSecondary dark:text-dark-textSecondary" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('presetsView.searchPlaceholder') || 'Search palettes...'}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-light-border dark:border-dark-border bg-white dark:bg-[#101820] text-xs focus:outline-none focus:ring-2 focus:ring-brand/40"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {PRESET_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-brand text-brand-darkText font-bold'
                    : 'border border-light-border dark:border-dark-border text-light-textSecondary dark:text-dark-textSecondary hover:bg-light-bgSecondary dark:hover:bg-dark-bgSecondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Preset List / Grid */}
        <div className="flex-1 overflow-y-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {filteredPresets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => {
                onSelectPreset(preset);
                onClose();
              }}
              className="p-3 rounded-2xl border border-light-border dark:border-dark-border bg-white dark:bg-[#1A2634] hover:border-brand hover:shadow-md transition-all text-left flex flex-col justify-between gap-2.5 group cursor-pointer"
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-xs font-bold truncate group-hover:text-brand transition-colors">
                  {preset.name}
                </span>
                <span className="text-[9px] uppercase px-1.5 py-0.5 rounded bg-light-bgSecondary dark:bg-dark-bgSecondary text-light-textSecondary dark:text-dark-textSecondary border border-light-border dark:border-dark-border">
                  {preset.category}
                </span>
              </div>

              {/* 5-color bar */}
              <div className="flex h-8 rounded-lg overflow-hidden border border-black/10 w-full">
                {preset.colors.map((hex, i) => (
                  <div key={i} className="flex-1" style={{ backgroundColor: hex }} />
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
