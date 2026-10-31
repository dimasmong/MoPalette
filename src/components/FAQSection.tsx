import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import type { TranslationDictionary } from '../lib/i18n/translations'

interface FAQSectionProps {
  t: TranslationDictionary
}

export const FAQSection: React.FC<FAQSectionProps> = ({ t }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const items = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
  ]

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <div className="text-center">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700 dark:bg-purple-950/60 dark:text-purple-300">
          <HelpCircle className="h-3.5 w-3.5" />
          <span>FAQ</span>
        </div>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          {t.faq.title}
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          {t.faq.subtitle}
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx
          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 bg-white transition-all dark:border-slate-800 dark:bg-slate-900 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(idx)}
                className="flex w-full items-center justify-between p-4 text-left font-semibold text-sm text-slate-900 dark:text-white hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors"
              >
                <span>{item.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-purple-600 dark:text-purple-400' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-slate-100 p-4 pt-3 text-xs sm:text-sm leading-relaxed text-slate-600 dark:border-slate-800/80 dark:text-slate-300 animate-in fade-in duration-150">
                  {item.a}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
