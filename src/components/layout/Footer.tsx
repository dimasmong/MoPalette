import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Heart } from 'lucide-react';
import { GithubIcon } from '@/components/common/GithubIcon';

interface FooterProps {
  onNavigateSection: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  const { t } = useLanguage();

  return (
    <footer className="mt-20 border-t border-light-border dark:border-dark-border bg-light-bgSecondary/60 dark:bg-dark-bgSecondary/60 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-light-border/60 dark:border-dark-border/60">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-brand flex items-center justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-darkText" />
              </div>
              <span className="text-lg font-bold text-light-text dark:text-dark-text tracking-tight">
                MoPalette
              </span>
            </div>
            <p className="text-xs text-light-textSecondary dark:text-dark-textSecondary max-w-sm mt-1">
              {t('common.heroSubtitle')}
            </p>
          </div>

          {/* Useful Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-light-textSecondary dark:text-dark-textSecondary">
            <button
              onClick={() => onNavigateSection('generator')}
              className="hover:text-brand transition-colors"
            >
              {t('nav.generator')}
            </button>
            <button
              onClick={() => onNavigateSection('extractor')}
              className="hover:text-brand transition-colors"
            >
              {t('nav.extractor')}
            </button>
            <button
              onClick={() => onNavigateSection('faq')}
              className="hover:text-brand transition-colors"
            >
              {t('footer.faq')}
            </button>
            <button
              onClick={() => onNavigateSection('privacy')}
              className="hover:text-brand transition-colors"
            >
              {t('footer.privacy')}
            </button>
            <button
              onClick={() => onNavigateSection('attribution')}
              className="hover:text-brand transition-colors"
            >
              {t('footer.attribution')}
            </button>
            <a
              href="https://github.com/dimasmong/MoPalette"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-brand transition-colors"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
              <span>{t('footer.github')}</span>
            </a>
          </div>
        </div>

        {/* Required Attribution & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-light-textSecondary dark:text-dark-textSecondary gap-3 text-center sm:text-left">
          <p>© 2026 MoPalette. Licensed under the MIT License.</p>
          <p className="inline-flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>by Dimas Mong</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
