import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, HardDrive, Lock, Globe } from 'lucide-react';

export const PrivacySection: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    {
      icon: HardDrive,
      title: t('privacy.p1Title'),
      desc: t('privacy.p1Desc'),
    },
    {
      icon: Lock,
      title: t('privacy.p2Title'),
      desc: t('privacy.p2Desc'),
    },
    {
      icon: ShieldCheck,
      title: t('privacy.p3Title'),
      desc: t('privacy.p3Desc'),
    },
    {
      icon: Globe,
      title: t('privacy.p4Title'),
      desc: t('privacy.p4Desc'),
    },
  ];

  return (
    <section id="privacy-section" className="w-full space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-light-text dark:text-dark-text tracking-tight flex items-center justify-center gap-2">
          <ShieldCheck className="w-6 h-6 text-brand" />
          <span>{t('privacy.title')}</span>
        </h2>
        <p className="mt-2 text-sm text-light-textSecondary dark:text-dark-textSecondary">
          {t('privacy.subtitle')}
        </p>
      </div>

      {/* Grid of Privacy Commitments */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="p-5 sm:p-6 rounded-2xl glass-card bg-light-bg/85 dark:bg-dark-bg/85 border border-light-glassBorder dark:border-dark-glassBorder shadow-sm space-y-2.5"
            >
              <div className="w-10 h-10 rounded-xl bg-brand/20 dark:bg-brand/10 text-brand-darkText dark:text-brand flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-light-text dark:text-dark-text">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
