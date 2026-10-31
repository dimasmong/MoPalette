import React from 'react'
import { CheckCircle2, Lock, ShieldCheck, X } from 'lucide-react'
import type { TranslationDictionary } from '../lib/i18n/translations'

interface PrivacyModalProps {
  isOpen: boolean
  onClose: () => void
  t: TranslationDictionary
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose, t }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {t.privacy.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
            title={t.privacy.close}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex flex-1 flex-col overflow-y-auto p-6 gap-5">
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 dark:border-emerald-900/60 dark:bg-emerald-950/30">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
              <Lock className="h-4 w-4" />
              <span>{t.privacy.subtitle}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            {/* Section 1 */}
            <div className="flex flex-col gap-1.5">
              <h4 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t.privacy.section1Title}</span>
              </h4>
              <p className="leading-relaxed pl-6">{t.privacy.section1Text}</p>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col gap-1.5">
              <h4 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t.privacy.section2Title}</span>
              </h4>
              <p className="leading-relaxed pl-6">{t.privacy.section2Text}</p>
            </div>

            {/* Section 3 */}
            <div className="flex flex-col gap-1.5">
              <h4 className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t.privacy.section3Title}</span>
              </h4>
              <p className="leading-relaxed pl-6">{t.privacy.section3Text}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end border-t border-slate-100 bg-slate-50/50 px-6 py-4 dark:border-slate-800 dark:bg-slate-950/50">
          <button
            onClick={onClose}
            className="rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white transition-colors"
          >
            {t.privacy.close}
          </button>
        </div>
      </div>
    </div>
  )
}
