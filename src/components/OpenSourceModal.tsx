import React from 'react'
import { ExternalLink, Heart, Shield, Sparkles, X } from 'lucide-react'
import type { TranslationDictionary } from '../lib/i18n/translations'

interface OpenSourceModalProps {
  isOpen: boolean
  onClose: () => void
  t: TranslationDictionary
}

export const OpenSourceModal: React.FC<OpenSourceModalProps> = ({
  isOpen,
  onClose,
  t,
}) => {
  if (!isOpen) return null

  const thirdPartyPackages = [
    {
      name: 'colorthief',
      author: 'Lokesh Dhakar',
      version: '3.5.0',
      purpose: 'Core palette extraction engine, dominant color discovery & OKLCH quantization',
      license: 'MIT',
      repoUrl: 'https://github.com/lokesh/color-thief',
      licenseUrl: 'https://github.com/lokesh/color-thief/blob/master/LICENSE',
    },
    {
      name: 'lucide-react',
      author: 'Lucide Contributors',
      version: '^1.16.0',
      purpose: 'Accessible, clean SVG icons for UI and controls',
      license: 'ISC',
      repoUrl: 'https://github.com/lucide-icons/lucide',
      licenseUrl: 'https://github.com/lucide-icons/lucide/blob/main/LICENSE',
    },
    {
      name: 'react & react-dom',
      author: 'Meta Platforms & React Contributors',
      version: '^19.3.0',
      purpose: 'Declarative component rendering & reactive UI state management',
      license: 'MIT',
      repoUrl: 'https://github.com/facebook/react',
      licenseUrl: 'https://github.com/facebook/react/blob/main/LICENSE',
    },
    {
      name: 'tailwindcss',
      author: 'Tailwind Labs, Inc.',
      version: '^4.0.0',
      purpose: 'Modern utility-first styling system and responsive tokens',
      license: 'MIT',
      repoUrl: 'https://github.com/tailwindlabs/tailwindcss',
      licenseUrl: 'https://github.com/tailwindlabs/tailwindcss/blob/main/LICENSE',
    },
    {
      name: 'vite',
      author: 'Evan You & Vite Contributors',
      version: '^8.3.0',
      purpose: 'High-speed frontend development tooling and production bundler',
      license: 'MIT',
      repoUrl: 'https://github.com/vitejs/vite',
      licenseUrl: 'https://github.com/vitejs/vite/blob/main/LICENSE',
    },
    {
      name: 'vitest',
      author: 'Vitest Core Team',
      version: '^5.0.0',
      purpose: 'Automated unit test runner for color conversions, WCAG formulas and exports',
      license: 'MIT',
      repoUrl: 'https://github.com/vitest-dev/vitest',
      licenseUrl: 'https://github.com/vitest-dev/vitest/blob/main/LICENSE',
    },
    {
      name: '@playwright/test',
      author: 'Microsoft Corporation',
      version: '^1.50.0',
      purpose: 'Browser end-to-end automated testing for image upload, eyedropper & file exports',
      license: 'Apache-2.0',
      repoUrl: 'https://github.com/microsoft/playwright',
      licenseUrl: 'https://github.com/microsoft/playwright/blob/main/LICENSE',
    },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {t.openSource.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
            title={t.openSource.close}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex flex-1 flex-col overflow-y-auto p-6 gap-6">
          {/* Main Extraction Engine Feature Card */}
          <div className="rounded-xl border border-purple-200/80 bg-purple-50/50 p-5 dark:border-purple-900/50 dark:bg-purple-950/30">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300">
                {t.openSource.mainEngine}
              </span>
              <span className="rounded-full bg-purple-200/80 px-2.5 py-0.5 text-xs font-bold text-purple-800 dark:bg-purple-900/60 dark:text-purple-200">
                Color Thief v3.5.0 • MIT License
              </span>
            </div>

            <h4 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
              Color Thief by Lokesh Dhakar
            </h4>
            <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {t.openSource.mainEngineDesc}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-medium">
              <a
                href="https://github.com/lokesh/color-thief"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-purple-700 hover:underline dark:text-purple-300"
              >
                <span>GitHub Repository</span>
                <ExternalLink className="h-3 w-3" />
              </a>
              <a
                href="https://github.com/lokesh/color-thief/blob/master/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-purple-700 hover:underline dark:text-purple-300"
              >
                <span>MIT License Terms</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Third party packages list */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              {t.openSource.packagesTitle}
            </h4>

            <div className="mt-3 divide-y divide-slate-100 rounded-xl border border-slate-200 dark:divide-slate-800 dark:border-slate-800">
              {thirdPartyPackages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3.5 text-xs"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900 dark:text-white">
                        {pkg.name}
                      </span>
                      <span className="rounded bg-slate-100 px-1.5 py-0.2 font-mono text-[10px] text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                        {pkg.version}
                      </span>
                      <span className="rounded bg-purple-100 px-1.5 py-0.2 font-mono text-[10px] text-purple-700 dark:bg-purple-950/60 dark:text-purple-300">
                        {pkg.license}
                      </span>
                    </div>
                    <p className="mt-1 text-slate-500 dark:text-slate-400">
                      {pkg.purpose} • By {pkg.author}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={pkg.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-purple-600 hover:underline dark:text-purple-400"
                    >
                      <span>Repo</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upstream Copyright & License notice */}
          <div className="flex items-start gap-2 rounded-xl bg-slate-50 p-4 text-xs text-slate-600 dark:bg-slate-950/40 dark:text-slate-400">
            <Shield className="h-4 w-4 shrink-0 mt-0.5 text-emerald-600 dark:text-emerald-400" />
            <p className="leading-relaxed">{t.openSource.notice}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-6 py-4 dark:border-slate-800 dark:bg-slate-950/50">
          <span className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500">
            Built with <Heart className="h-3 w-3 text-rose-500 fill-rose-500 inline" /> for creators
          </span>

          <button
            onClick={onClose}
            className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white transition-colors"
          >
            {t.openSource.close}
          </button>
        </div>
      </div>
    </div>
  )
}
