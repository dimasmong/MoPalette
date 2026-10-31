import React from 'react'
import { ExternalLink, Palette, ShieldCheck, Sparkles } from 'lucide-react'
import { GithubIcon } from './GithubIcon'
import type { TranslationDictionary } from '../lib/i18n/translations'

interface FooterProps {
  t: TranslationDictionary
  onOpenOpenSource: () => void
  onOpenPrivacy: () => void
}

export const Footer: React.FC<FooterProps> = ({
  t,
  onOpenOpenSource,
  onOpenPrivacy,
}) => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950 transition-colors">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        {/* Brand & Copyright */}
        <div className="flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-600 text-white shadow-xs">
            <Palette className="h-4 w-4" />
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {t.footer.copyright}
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-medium text-slate-600 dark:text-slate-400">
          <button
            data-testid="open-source-footer"
            onClick={onOpenOpenSource}
            className="inline-flex items-center gap-1 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span>{t.footer.credits}</span>
          </button>

          <button
            data-testid="privacy-footer"
            onClick={onOpenPrivacy}
            className="inline-flex items-center gap-1 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{t.footer.privacy}</span>
          </button>

          <a
            href="https://github.com/dimasmong/MoPalette"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <GithubIcon className="h-3.5 w-3.5" />
            <span>GitHub</span>
            <ExternalLink className="h-3 w-3 opacity-60" />
          </a>
        </div>
      </div>
    </footer>
  )
}
