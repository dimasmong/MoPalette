import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t('faq.q1'), a: t('faq.a1') },
    { q: t('faq.q2'), a: t('faq.a2') },
    { q: t('faq.q3'), a: t('faq.a3') },
    { q: t('faq.q4'), a: t('faq.a4') },
    { q: t('faq.q5'), a: t('faq.a5') },
    { q: t('faq.q6'), a: t('faq.a6') },
    { q: t('faq.q7'), a: t('faq.a7') },
    { q: t('faq.q8'), a: t('faq.a8') },
    { q: t('faq.q9'), a: t('faq.a9') },
    { q: t('faq.q10'), a: t('faq.a10') },
    { q: t('faq.q11'), a: t('faq.a11') },
    { q: t('faq.q12'), a: t('faq.a12') },
  ];

  return (
    <section id="faq-section" className="w-full space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-light-text dark:text-dark-text tracking-tight flex items-center justify-center gap-2">
          <HelpCircle className="w-6 h-6 text-brand" />
          <span>{t('faq.title')}</span>
        </h2>
        <p className="mt-2 text-sm text-light-textSecondary dark:text-dark-textSecondary">
          {t('faq.subtitle')}
        </p>
      </div>

      {/* Accordion List */}
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="rounded-2xl glass-card bg-light-bg/85 dark:bg-dark-bg/85 border border-light-glassBorder dark:border-dark-glassBorder overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-base text-light-text dark:text-dark-text hover:text-brand transition-colors"
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-light-textSecondary dark:text-dark-textSecondary shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-brand' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-sm text-light-textSecondary dark:text-dark-textSecondary leading-relaxed border-t border-light-border/40 dark:border-dark-border/40">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
