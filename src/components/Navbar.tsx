import React from 'react'
import {
  ExternalLink,
  Globe,
  Moon,
  Palette,
  ShieldCheck,
  Sparkles,
  Sun,
} from 'lucide-react'
import { GithubIcon } from './GithubIcon'
import type { TranslationDictionary } from '../lib/i18n/translations'
import type { Language, Theme } from '../types'

interface NavbarProps {
  t: TranslationDictionary
  theme: Theme
  lang: Language
  onToggleTheme: () => void
  onToggleLang: () => void
  onOpenOpenSource: () => void
  onOpenPrivacy: () => void
}

export const Navbar: React.FC<NavbarProps> = ({
  t,
  theme,
  lang,
  onToggleTheme,
  onToggleLang,
  onOpenOpenSource,
  onOpenPrivacy,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/90 transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-500 text-white shadow-md shadow-purple-500/20">
            <Palette className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                MoPalette
              </span>
              <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-semibold text-purple-700 dark:bg-purple-950/60 dark:text-purple-300">
                v1.0.0
              </span>
            </div>
            <p className="hidden text-xs text-slate-500 dark:text-slate-400 sm:block">
              {t.brand.tagline}
            </p>
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Open Source & Credits */}
          <button
            data-testid="open-source-nav"
            onClick={onOpenOpenSource}
            className="hidden items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white md:inline-flex transition-colors"
            title={t.nav.openSource}
          >
            <Sparkles className="h-4 w-4 text-purple-600 dark:text-purple-400" />
            <span>{t.nav.openSource}</span>
          </button>

          {/* Privacy */}
          <button
            data-testid="privacy-nav"
            onClick={onOpenPrivacy}
            className="hidden items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white md:inline-flex transition-colors"
            title={t.nav.privacy}
          >
            <ShieldCheck className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span>{t.nav.privacy}</span>
          </button>

          {/* Language Switcher */}
          <button
            data-testid="lang-toggle"
            onClick={onToggleLang}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
            aria-label={t.nav.langToggle}
            title={t.nav.langToggle}
          >
            <Globe className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span className="uppercase">{lang}</span>
          </button>

          {/* Light / Dark Mode Toggle */}
          <button
            data-testid="theme-toggle"
            onClick={onToggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
            aria-label={t.nav.themeToggle}
            title={t.nav.themeToggle}
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-purple-600" />
            )}
          </button>

          {/* GitHub Repository */}
          <a
            href="https://github.com/dimasmong/MoPalette"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">GitHub</span>
            <ExternalLink className="h-3 w-3 opacity-60" />
          </a>
        </div>
      </div>
    </header>
  )
}
