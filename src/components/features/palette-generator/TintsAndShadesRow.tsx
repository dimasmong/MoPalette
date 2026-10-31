import React, { useState, useEffect } from 'react';
import { ColorItem } from '@/types';
import { generateShadeScale } from '@/lib/color/shades';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/components/common/Toast';
import {
  Layers,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  ArrowUpCircle,
} from 'lucide-react';

interface TintsAndShadesRowProps {
  colors: ColorItem[];
  onApplyShade: (swatchId: string, hex: string) => void;
}

const STORAGE_KEY = 'mopalette_show_tints_shades';

export const TintsAndShadesRow: React.FC<TintsAndShadesRowProps> = ({
  colors,
  onApplyShade,
}) => {
  const { t } = useLanguage();
  const { showToast } = useToast();

  const [isVisible, setIsVisible] = useState<boolean>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored !== null ? stored === 'true' : true;
    } catch {
      return true;
    }
  });

  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, String(isVisible));
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, [isVisible]);

  const handleCopy = async (hex: string, stop: number) => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      showToast(t('common.copiedToClipboard', { text: `${hex} (${stop})` }) || `Copied ${hex} to clipboard`);
      setTimeout(() => setCopiedHex(null), 1500);
    } catch {
      showToast(`Copied ${hex}`);
    }
  };

  const handleApply = (swatchId: string, hex: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onApplyShade(swatchId, hex);
    showToast(t('shadesView.appliedToSwatch', { hex }) || `Applied ${hex} to swatch`);
  };

  return (
    <div className="w-full mt-4 space-y-3">
      {/* Toggle Header Bar */}
      <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-light-bgSecondary/60 dark:bg-dark-bgSecondary/60 border border-light-border dark:border-dark-border">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-brand" />
          <span className="text-xs font-bold text-light-text dark:text-dark-text tracking-wide">
            {t('shadesView.integratedTitle') || 'Tints & Shades Scale (OKLCH 50–950)'}
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-brand/15 text-brand-darkText dark:text-brand border border-brand/30">
            11 Steps
          </span>
        </div>

        <button
          type="button"
          onClick={() => setIsVisible((prev) => !prev)}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-light-textSecondary dark:text-dark-textSecondary hover:text-light-text dark:hover:text-dark-text hover:bg-light-bg/80 dark:hover:bg-dark-bg/80 transition-all"
          aria-expanded={isVisible}
        >
          <span>{isVisible ? (t('common.hide') || 'Hide') : (t('common.show') || 'Show')}</span>
          {isVisible ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Expanded Scale Columns */}
      {isVisible && (
        <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row gap-3 sm:gap-4 w-full animate-in fade-in slide-in-from-top-1 duration-200">
          {colors.map((color, index) => {
            const steps = generateShadeScale(color.hex);

            return (
              <div
                key={`shades-col-${color.id || index}`}
                className="lg:flex-1 w-full min-w-0 p-2.5 rounded-2xl bg-white/70 dark:bg-dark-bgSecondary/70 border border-light-border dark:border-dark-border shadow-xs flex flex-col justify-between"
              >
                {/* Column Swatch Reference */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-light-border/60 dark:border-dark-border/60">
                  <div className="flex items-center gap-1.5 min-w-0">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/15 shrink-0"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-[11px] font-bold font-mono text-light-text dark:text-dark-text truncate">
                      {color.hex}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-light-textSecondary dark:text-dark-textSecondary">
                    #{index + 1}
                  </span>
                </div>

                {/* 11-Step Tonal Scale */}
                <div className="flex flex-col gap-1 w-full">
                  {steps.map((step) => {
                    const isCopied = copiedHex === step.hex;

                    return (
                      <div
                        key={step.stop}
                        onClick={() => handleCopy(step.hex, step.stop)}
                        title={`Stop ${step.stop} (${step.hex})\nClick to copy\nClick icon to apply to swatch #${index + 1}`}
                        className={`group relative flex items-center justify-between px-2.5 py-1 rounded-lg cursor-pointer transition-all duration-150 select-none shadow-2xs hover:scale-[1.02] ${
                          step.isSource ? 'ring-2 ring-brand ring-offset-1 ring-offset-white dark:ring-offset-dark-bg' : ''
                        }`}
                        style={{
                          backgroundColor: step.hex,
                          color: step.textColor,
                        }}
                      >
                        <div className="flex items-center gap-1.5 min-w-0">
                          <span className="text-[10px] font-extrabold font-mono opacity-80 shrink-0">
                            {step.stop}
                          </span>
                          <span className="text-[10px] font-mono font-medium truncate">
                            {step.hex}
                          </span>
                        </div>

                        {/* Actions on hover */}
                        <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                          {/* Apply to Parent Swatch */}
                          <button
                            type="button"
                            onClick={(e) => handleApply(color.id, step.hex, e)}
                            title={`Apply ${step.hex} to Swatch #${index + 1}`}
                            className="p-1 rounded-md bg-black/20 hover:bg-black/35 text-inherit transition-transform hover:scale-110"
                          >
                            <ArrowUpCircle className="w-3 h-3" />
                          </button>

                          {/* Copy Indicator */}
                          <div className="p-1 rounded-md bg-black/20 text-inherit">
                            {isCopied ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
