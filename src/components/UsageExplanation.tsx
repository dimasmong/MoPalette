import React from 'react'
import { DownloadCloud, Pipette, UploadCloud } from 'lucide-react'
import type { TranslationDictionary } from '../lib/i18n/translations'

interface UsageExplanationProps {
  t: TranslationDictionary
}

export const UsageExplanation: React.FC<UsageExplanationProps> = ({ t }) => {
  const steps = [
    {
      num: '01',
      icon: <UploadCloud className="h-6 w-6 text-purple-600 dark:text-purple-400" />,
      title: t.guide.step1Title,
      desc: t.guide.step1Desc,
    },
    {
      num: '02',
      icon: <Pipette className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />,
      title: t.guide.step2Title,
      desc: t.guide.step2Desc,
    },
    {
      num: '03',
      icon: <DownloadCloud className="h-6 w-6 text-pink-600 dark:text-pink-400" />,
      title: t.guide.step3Title,
      desc: t.guide.step3Desc,
    },
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          {t.guide.title}
        </h2>
        <p className="mt-2 text-sm text-slate-500 sm:text-base dark:text-slate-400">
          {t.guide.subtitle}
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {steps.map((step) => (
          <div
            key={step.num}
            className="relative flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900 transition-all hover:border-purple-300 dark:hover:border-purple-900"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 dark:bg-purple-950/60">
              {step.icon}
            </div>
            <h3 className="mt-4 text-base font-bold text-slate-900 dark:text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
