import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Palette, Image as ImageIcon } from 'lucide-react';

interface HeroProps {
  onGenerateClick: () => void;
  onExtractClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGenerateClick, onExtractClick }) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-5 sm:py-7 text-center">
      {/* Subtle ice blue ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[220px] bg-brand/20 dark:bg-brand/10 blur-[80px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/20 dark:bg-brand/15 border border-brand/40 text-brand-darkText dark:text-brand text-xs font-semibold tracking-wide uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
          <span>MoPalette Studio V3</span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-light-text dark:text-dark-text tracking-tight leading-tight sm:leading-none">
          {t('common.tagline')}
        </h1>

        {/* Supporting description */}
        <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-light-textSecondary dark:text-dark-textSecondary max-w-2xl mx-auto font-normal leading-relaxed">
          {t('common.heroSubtitle')}
        </p>

        {/* Primary CTA Buttons */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
          <button
            onClick={onGenerateClick}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand text-brand-darkText font-bold text-xs sm:text-sm shadow-md hover:bg-brand-hover hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <Palette className="w-4 h-4 text-brand-darkText" />
            <span>{t('common.generatePalette')}</span>
          </button>

          <button
            onClick={onExtractClick}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-bold text-xs sm:text-sm hover:border-brand hover:scale-[1.02] active:scale-[0.98] transition-all shadow-2xs cursor-pointer"
          >
            <ImageIcon className="w-4 h-4 text-brand" />
            <span>{t('common.extractFromImage')}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
