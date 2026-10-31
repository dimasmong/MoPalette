import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';
import {
  Sun,
  Moon,
  Languages,
  Menu,
  X,
  Palette,
  Image as ImageIcon,
  CheckCircle2,
  Sliders,
  Sparkles,
  Layout,
  Bookmark,
} from 'lucide-react';
import { GithubIcon } from '@/components/common/GithubIcon';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSaved: () => void;
  onOpenExport: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenSaved,
  onOpenExport,
}) => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'generator', label: t('nav.generator'), icon: Palette },
    { id: 'extractor', label: t('nav.extractor'), icon: ImageIcon },
    { id: 'contrast', label: t('nav.contrast'), icon: CheckCircle2 },
    { id: 'shades', label: t('nav.shades'), icon: Sliders },
    { id: 'gradient', label: t('nav.gradient'), icon: Sparkles },
    { id: 'preview', label: t('nav.preview'), icon: Layout },
    { id: 'presets', label: t('nav.presets'), icon: Bookmark },
  ];

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full glass-card bg-light-bg/85 dark:bg-dark-bg/85 border-b border-light-glassBorder dark:border-dark-glassBorder transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo & Wordmark */}
        <div
          onClick={() => handleTabClick('generator')}
          className="flex items-center gap-2.5 cursor-pointer group shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-brand flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
            {/* Color-inspired geometric logo */}
            <svg
              className="w-5 h-5 text-brand-darkText"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
              <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
              <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
              <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
            </svg>
          </div>
          <span className="text-xl font-extrabold tracking-tight text-light-text dark:text-dark-text">
            Mo<span className="text-brand-600 dark:text-brand">Palette</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-brand text-brand-darkText font-semibold shadow-sm'
                    : 'text-light-textSecondary dark:text-dark-textSecondary hover:text-light-text dark:hover:text-dark-text hover:bg-light-bgSecondary dark:hover:bg-dark-bgSecondary'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-brand-darkText' : ''}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Saved library button */}
          <button
            onClick={onOpenSaved}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:border-brand transition-colors"
          >
            <Bookmark className="w-3.5 h-3.5 text-brand" />
            <span>{t('common.library')}</span>
          </button>

          {/* Export button */}
          <button
            onClick={onOpenExport}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-brand text-brand-darkText hover:bg-brand-hover shadow-sm transition-all"
          >
            <span>{t('common.export')}</span>
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            title={t('nav.toggleLanguage')}
            aria-label={t('nav.toggleLanguage')}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-light-border dark:border-dark-border text-xs font-bold text-light-textSecondary dark:text-dark-textSecondary hover:text-light-text dark:hover:text-dark-text hover:bg-light-bgSecondary dark:hover:bg-dark-bgSecondary transition-colors"
          >
            <Languages className="w-3.5 h-3.5" />
            <span className="uppercase">{language}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            title={t('nav.toggleTheme')}
            aria-label={t('nav.toggleTheme')}
            className="p-2 rounded-lg border border-light-border dark:border-dark-border text-light-textSecondary dark:text-dark-textSecondary hover:text-light-text dark:hover:text-dark-text hover:bg-light-bgSecondary dark:hover:bg-dark-bgSecondary transition-colors"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* GitHub link */}
          <a
            href="https://github.com/dimasmong/MoPalette"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Repository"
            aria-label="GitHub Repository"
            className="hidden sm:flex p-2 rounded-lg border border-light-border dark:border-dark-border text-light-textSecondary dark:text-dark-textSecondary hover:text-light-text dark:hover:text-dark-text hover:bg-light-bgSecondary dark:hover:bg-dark-bgSecondary transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-light-border dark:border-dark-border text-light-textSecondary dark:text-dark-textSecondary hover:bg-light-bgSecondary dark:hover:bg-dark-bgSecondary"
            aria-label="Toggle mobile navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg px-4 py-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand text-brand-darkText font-bold'
                    : 'text-light-text dark:text-dark-text hover:bg-light-bgSecondary dark:hover:bg-dark-bgSecondary'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-light-border dark:border-dark-border flex items-center justify-between">
            <button
              onClick={() => {
                onOpenSaved();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-light-text dark:text-dark-text"
            >
              <Bookmark className="w-4 h-4 text-brand" />
              <span>{t('common.library')}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
