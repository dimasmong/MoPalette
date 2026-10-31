import React from 'react'
import { CheckCircle2, Lock, Sparkles, Zap } from 'lucide-react'
import type { TranslationDictionary } from '../lib/i18n/translations'

interface HeroProps {
  t: TranslationDictionary
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-6 text-center sm:pt-12 sm:pb-8">
      {/* Background ambient gradient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center opacity-30 dark:opacity-20">
        <div className="h-[280px] w-[500px] rounded-full bg-gradient-to-tr from-purple-500 via-indigo-400 to-pink-400 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-purple-200/80 bg-purple-50/80 px-3 py-1 text-xs font-semibold text-purple-700 shadow-xs dark:border-purple-900/60 dark:bg-purple-950/40 dark:text-purple-300">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Standalone Color Extraction & Palettes</span>
        </div>

        {/* Primary headline */}
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl dark:text-white">
          {t.brand.tagline}
        </h1>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 sm:text-lg dark:text-slate-300">
          {t.brand.description}
        </p>

        {/* Value pills */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-600 dark:text-slate-400">
          <div className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 dark:bg-slate-800/80">
            <Lock className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>100% In-Browser Privacy</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 dark:bg-slate-800/80">
            <Zap className="h-3.5 w-3.5 text-amber-500" />
            <span>Real-time Eyedropper & Loupe</span>
          </div>
          <div className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2.5 py-1 dark:bg-slate-800/80">
            <CheckCircle2 className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span>PNG, SVG, CSS, JSON & TXT Export</span>
          </div>
        </div>
      </div>
    </section>
  )
}
