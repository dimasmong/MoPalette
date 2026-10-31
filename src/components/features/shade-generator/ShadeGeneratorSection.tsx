import React, { useState } from 'react';
import { usePalette } from '@/context/PaletteContext';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/components/common/Toast';
import { generateShadeScale } from '@/lib/color/shades';
import { normalizeHex, isValidHex } from '@/lib/color/conversions';
import { Copy, Check, ArrowDownToLine } from 'lucide-react';
import { downloadFile } from '@/lib/export/downloader';

export const ShadeGeneratorSection: React.FC = () => {
  const { colors } = usePalette();
  const { t } = useLanguage();
  const { showToast } = useToast();

  const [sourceHex, setSourceHex] = useState<string>(colors[0]?.hex || '#A1E3F9');
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const shades = generateShadeScale(sourceHex);

  const handleCopySingle = (hex: string, stop: number) => {
    navigator.clipboard.writeText(hex);
    setCopiedStep(stop);
    showToast(t('common.colorCopied'));
    setTimeout(() => setCopiedStep(null), 1500);
  };

  const handleCopyCompleteScale = () => {
    const scaleObj: Record<string, string> = {};
    shades.forEach((s) => {
      scaleObj[s.stop] = s.hex;
    });
    navigator.clipboard.writeText(JSON.stringify(scaleObj, null, 2));
    showToast(t('shades.copiedScale'));
  };

  const handleDownloadScaleJson = () => {
    const scaleObj: Record<string, string> = {};
    shades.forEach((s) => {
      scaleObj[s.stop] = s.hex;
    });
    const payload = JSON.stringify({ sourceColor: sourceHex, tokens: scaleObj }, null, 2);
    downloadFile(payload, `mopalette-shades-${sourceHex.replace('#', '')}.json`, 'application/json');
    showToast('Downloaded shade scale JSON.');
  };

  return (
    <section className="w-full space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-light-text dark:text-dark-text tracking-tight">
          {t('shades.title')}
        </h2>
        <p className="mt-2 text-sm text-light-textSecondary dark:text-dark-textSecondary">
          {t('shades.subtitle')}
        </p>
      </div>

      {/* Source Selector & Actions Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl glass-card bg-light-bg/85 dark:bg-dark-bg/85 border border-light-glassBorder dark:border-dark-glassBorder shadow-sm">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-light-textSecondary dark:text-dark-textSecondary">
            {t('shades.sourceColor')}:
          </span>
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-xl border border-light-border dark:border-dark-border shadow-inner shrink-0 relative overflow-hidden"
              style={{ backgroundColor: sourceHex }}
            >
              <input
                type="color"
                value={sourceHex}
                onChange={(e) => setSourceHex(normalizeHex(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
            </div>
            <input
              type="text"
              value={sourceHex}
              onChange={(e) => isValidHex(e.target.value) && setSourceHex(normalizeHex(e.target.value))}
              className="w-28 px-3 py-1.5 rounded-xl border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg text-sm font-mono font-bold uppercase text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-brand"
              maxLength={7}
            />
          </div>

          {/* Quick Swatches from current palette */}
          <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-light-border dark:border-dark-border">
            {colors.map((c) => (
              <button
                key={c.id}
                onClick={() => setSourceHex(c.hex)}
                className={`w-6 h-6 rounded-lg border transition-transform hover:scale-110 ${
                  sourceHex === c.hex ? 'ring-2 ring-brand' : 'border-black/10'
                }`}
                style={{ backgroundColor: c.hex }}
                title={c.hex}
              />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyCompleteScale}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-light-border dark:border-dark-border hover:border-brand bg-light-bgSecondary dark:bg-dark-bgSecondary text-xs font-bold text-light-text dark:text-dark-text transition-colors"
          >
            <Copy className="w-3.5 h-3.5 text-brand" />
            <span>{t('shades.copyScale')}</span>
          </button>
          <button
            onClick={handleDownloadScaleJson}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand text-brand-darkText font-bold text-xs shadow-sm hover:bg-brand-hover transition-colors"
          >
            <ArrowDownToLine className="w-3.5 h-3.5" />
            <span>{t('shades.exportTokens')}</span>
          </button>
        </div>
      </div>

      {/* Design Token Steps Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-11 gap-2.5">
        {shades.map((step) => {
          const isCopied = copiedStep === step.stop;
          return (
            <div
              key={step.stop}
              onClick={() => handleCopySingle(step.hex, step.stop)}
              className={`group relative flex flex-col justify-between p-3.5 rounded-xl transition-all duration-200 cursor-pointer min-h-[140px] shadow-2xs hover:scale-105 hover:shadow-md border ${
                step.isSource ? 'ring-2 ring-brand border-white' : 'border-black/5 dark:border-white/10'
              }`}
              style={{ backgroundColor: step.hex }}
              title={`Click to copy ${step.hex}`}
            >
              {/* Top Stop & Source Badge */}
              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-xs font-bold"
                  style={{ color: step.textColor }}
                >
                  {step.stop}
                </span>
                {step.isSource && (
                  <span
                    className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded shadow-2xs"
                    style={{
                      backgroundColor: step.textColor === '#FFFFFF' ? '#000000' : '#FFFFFF',
                      color: step.textColor === '#FFFFFF' ? '#FFFFFF' : '#000000',
                    }}
                  >
                    {t('shades.sourceBadge')}
                  </span>
                )}
              </div>

              {/* Bottom Hex & Copy Icon */}
              <div className="flex items-center justify-between mt-auto pt-4">
                <span
                  className="font-mono text-[11px] font-bold"
                  style={{ color: step.textColor }}
                >
                  {step.hex}
                </span>
                {isCopied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
                ) : (
                  <Copy
                    className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: step.textColor }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
