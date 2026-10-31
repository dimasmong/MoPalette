import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Cpu, Code2, ExternalLink } from 'lucide-react';

export const AttributionSection: React.FC = () => {
  const { t } = useLanguage();

  const dependencies = [
    {
      name: 'React',
      purpose: 'Declarative component rendering & reactive UI state architecture',
      version: '^18.3.1',
      license: 'MIT License',
      link: 'https://react.dev',
    },
    {
      name: 'Vite',
      purpose: 'Modern frontend tooling, fast ESM bundling & build pipeline',
      version: '^6.0.7',
      license: 'MIT License',
      link: 'https://vitejs.dev',
    },
    {
      name: 'Tailwind CSS',
      purpose: 'Utility-first CSS framework for responsive design token system',
      version: '^3.4.17',
      license: 'MIT License',
      link: 'https://tailwindcss.com',
    },
    {
      name: 'Culori',
      purpose: 'Comprehensive color science library for OKLCH, LAB, RGB, HSL conversions & gamut clamping',
      version: '^4.0.2',
      license: 'MIT License',
      link: 'https://culorijs.org',
    },
    {
      name: 'Lucide React',
      purpose: 'Accessible, clean open-source iconography system',
      version: '^1.16.0',
      license: 'ISC License',
      link: 'https://lucide.dev',
    },
  ];

  return (
    <section id="attribution-section" className="w-full space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-light-text dark:text-dark-text tracking-tight flex items-center justify-center gap-2">
          <Code2 className="w-6 h-6 text-brand" />
          <span>{t('attribution.title')}</span>
        </h2>
        <p className="mt-2 text-sm text-light-textSecondary dark:text-dark-textSecondary">
          {t('attribution.subtitle')}
        </p>
      </div>

      {/* AI Model Statement Callout */}
      <div className="max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl glass-card bg-brand/10 dark:bg-brand/5 border border-brand/40 shadow-sm flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-brand text-brand-darkText flex items-center justify-center shrink-0">
          <Cpu className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-extrabold text-light-text dark:text-dark-text">
            {t('attribution.aiModelDeclaration')}
          </h3>
          <p className="text-xs sm:text-sm text-light-textSecondary dark:text-dark-textSecondary leading-relaxed">
            {t('attribution.aiModelDetails')}
          </p>
        </div>
      </div>

      {/* Dependencies Table */}
      <div className="max-w-3xl mx-auto rounded-2xl glass-card bg-light-bg/85 dark:bg-dark-bg/85 border border-light-glassBorder dark:border-dark-glassBorder overflow-hidden shadow-sm">
        <div className="p-4 sm:p-5 border-b border-light-border dark:border-dark-border">
          <h3 className="text-sm font-bold text-light-text dark:text-dark-text">
            {t('attribution.dependenciesTitle')}
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-light-bgSecondary/60 dark:bg-dark-bgSecondary/60 text-light-textSecondary dark:text-dark-textSecondary uppercase font-bold text-[10px] tracking-wider border-b border-light-border dark:border-dark-border">
              <tr>
                <th className="py-3 px-4">{t('attribution.depName')}</th>
                <th className="py-3 px-4">{t('attribution.depPurpose')}</th>
                <th className="py-3 px-4">{t('attribution.depLicense')}</th>
                <th className="py-3 px-4 text-right">{t('attribution.depLink')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-light-border/60 dark:divide-dark-border/60">
              {dependencies.map((dep) => (
                <tr
                  key={dep.name}
                  className="hover:bg-light-bgSecondary/40 dark:hover:bg-dark-bgSecondary/40 transition-colors"
                >
                  <td className="py-3.5 px-4 font-bold text-light-text dark:text-dark-text whitespace-nowrap">
                    {dep.name}{' '}
                    <span className="font-mono font-normal opacity-60 ml-1">{dep.version}</span>
                  </td>
                  <td className="py-3.5 px-4 text-light-textSecondary dark:text-dark-textSecondary">
                    {dep.purpose}
                  </td>
                  <td className="py-3.5 px-4 font-mono text-light-textSecondary dark:text-dark-textSecondary whitespace-nowrap">
                    {dep.license}
                  </td>
                  <td className="py-3.5 px-4 text-right whitespace-nowrap">
                    <a
                      href={dep.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-brand hover:underline"
                    >
                      <span>Visit</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
