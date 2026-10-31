import React, { useState, useEffect } from 'react';
import { ColorItem, ColorFormat } from '@/types';
import {
  decomposeColor,
  normalizeHex,
  isValidHex,
  hslToHex,
  oklchToHex,
  formatColorString,
  getContrastRatio,
  getReadableTextColor,
} from '@/lib/color/conversions';
import { getApproximateColorName } from '@/lib/color/names';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/components/common/Toast';
import { Modal } from '@/components/common/Modal';
import { Copy, Check } from 'lucide-react';

interface ColorEditorModalProps {
  color: ColorItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (id: string, newHex: string) => void;
}

export const ColorEditorModal: React.FC<ColorEditorModalProps> = ({
  color,
  isOpen,
  onClose,
  onSave,
}) => {
  const { t } = useLanguage();
  const { showToast } = useToast();

  const [currentHex, setCurrentHex] = useState<string>('#A1E3F9');
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  // Synchronize when active color changes
  useEffect(() => {
    if (color && isValidHex(color.hex)) {
      setCurrentHex(normalizeHex(color.hex));
    }
  }, [color]);

  if (!color) return null;

  const decomp = decomposeColor(currentHex);
  const { h: hue, s: sat, l: light } = decomp.hsl;
  const { l: oklchL, c: oklchC, h: oklchH } = decomp.oklch;
  const approxName = getApproximateColorName(currentHex);

  const contrastWhite = getContrastRatio(currentHex, '#FFFFFF');
  const contrastBlack = getContrastRatio(currentHex, '#101820');
  const readableTextColor = getReadableTextColor(currentHex);

  // Handlers for sliders
  const handleHslChange = (newH: number, newS: number, newL: number) => {
    const nextHex = hslToHex(newH, newS, newL);
    setCurrentHex(nextHex);
  };

  const handleOklchChange = (newL: number, newC: number, newH: number) => {
    const nextHex = oklchToHex(newL, newC, newH);
    setCurrentHex(nextHex);
  };

  const handleHexInputChange = (val: string) => {
    if (isValidHex(val)) {
      setCurrentHex(normalizeHex(val));
    }
  };

  const handleCopyFormat = (format: ColorFormat) => {
    const str = formatColorString(currentHex, format);
    navigator.clipboard.writeText(str);
    setCopiedFormat(format);
    showToast(`${format.toUpperCase()} ${t('common.colorCopied')}`);
    setTimeout(() => setCopiedFormat(null), 1500);
  };

  const handleApplyAndClose = () => {
    onSave(color.id, currentHex);
    onClose();
  };

  const formats: ColorFormat[] = ['hex', 'rgb', 'hsl', 'hsv', 'oklch', 'lab'];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t('editor.title')}
      subtitle={t('editor.subtitle')}
      maxWidth="2xl"
    >
      <div className="space-y-6">
        {/* Top Preview Banner */}
        <div
          className="w-full h-32 rounded-2xl p-5 flex flex-col justify-between shadow-inner border border-black/10 transition-colors duration-200"
          style={{ backgroundColor: currentHex }}
        >
          <div className="flex items-center justify-between">
            <span
              className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg backdrop-blur-md"
              style={{
                color: readableTextColor,
                backgroundColor: readableTextColor === '#FFFFFF' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.4)',
              }}
            >
              {approxName}
            </span>
            <span
              className="font-mono text-sm font-extrabold px-3 py-1 rounded-lg backdrop-blur-md"
              style={{
                color: readableTextColor,
                backgroundColor: readableTextColor === '#FFFFFF' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.4)',
              }}
            >
              {currentHex}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <p
              className="text-xs font-medium backdrop-blur-md px-2.5 py-1 rounded-lg"
              style={{
                color: readableTextColor,
                backgroundColor: readableTextColor === '#FFFFFF' ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.4)',
              }}
            >
              Readable text preview on this shade
            </p>
          </div>
        </div>

        {/* Sliders and Hex Input */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* HSL Controls */}
          <div className="space-y-4 p-4 rounded-xl border border-light-border dark:border-dark-border bg-light-bgSecondary/50 dark:bg-dark-bgSecondary/50">
            <h3 className="text-xs font-bold uppercase tracking-wider text-light-textSecondary dark:text-dark-textSecondary">
              HSL Color Model
            </h3>

            {/* Hue */}
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span>{t('editor.hue')}</span>
                <span className="font-mono">{hue}°</span>
              </div>
              <input
                type="range"
                min="0"
                max="360"
                value={hue}
                onChange={(e) => handleHslChange(Number(e.target.value), sat, light)}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background:
                    'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)',
                }}
              />
            </div>

            {/* Saturation */}
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span>{t('editor.saturation')}</span>
                <span className="font-mono">{sat}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sat}
                onChange={(e) => handleHslChange(hue, Number(e.target.value), light)}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-brand"
              />
            </div>

            {/* Lightness */}
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span>{t('editor.lightness')}</span>
                <span className="font-mono">{light}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={light}
                onChange={(e) => handleHslChange(hue, sat, Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-brand"
              />
            </div>
          </div>

          {/* OKLCH Perceptual Model & Hex Picker */}
          <div className="space-y-4 p-4 rounded-xl border border-light-border dark:border-dark-border bg-light-bgSecondary/50 dark:bg-dark-bgSecondary/50">
            <h3 className="text-xs font-bold uppercase tracking-wider text-light-textSecondary dark:text-dark-textSecondary">
              OKLCH Perceptual Model
            </h3>

            {/* OKLCH Lightness */}
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span>Perceptual Lightness</span>
                <span className="font-mono">{oklchL}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={oklchL}
                onChange={(e) => handleOklchChange(Number(e.target.value), oklchC, oklchH)}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-brand"
              />
            </div>

            {/* OKLCH Chroma */}
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span>Chroma (Vibrancy)</span>
                <span className="font-mono">{(oklchC / 100).toFixed(3)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="40"
                value={oklchC}
                onChange={(e) => handleOklchChange(oklchL, Number(e.target.value), oklchH)}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-brand"
              />
            </div>

            {/* Visual Color Input & Hex String */}
            <div className="pt-2 flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl border border-light-border dark:border-dark-border shadow-inner shrink-0 relative overflow-hidden"
                style={{ backgroundColor: currentHex }}
              >
                <input
                  type="color"
                  value={currentHex}
                  onChange={(e) => setCurrentHex(normalizeHex(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
              </div>
              <input
                type="text"
                value={currentHex}
                onChange={(e) => handleHexInputChange(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg text-sm font-mono font-bold uppercase text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-brand"
                maxLength={7}
              />
            </div>
          </div>
        </div>

        {/* Formats Copy List */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-light-textSecondary dark:text-dark-textSecondary">
            Color Formats (Click to copy)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {formats.map((fmt) => {
              const val = formatColorString(currentHex, fmt);
              const isCopied = copiedFormat === fmt;
              return (
                <button
                  key={fmt}
                  onClick={() => handleCopyFormat(fmt)}
                  className="flex items-center justify-between p-2.5 rounded-xl border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg hover:border-brand transition-colors text-left group"
                >
                  <div className="min-w-0 pr-2">
                    <span className="block text-[10px] font-bold uppercase text-light-textSecondary dark:text-dark-textSecondary">
                      {fmt}
                    </span>
                    <span className="block text-xs font-mono font-medium text-light-text dark:text-dark-text truncate">
                      {val}
                    </span>
                  </div>
                  {isCopied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-light-textSecondary dark:text-dark-textSecondary opacity-40 group-hover:opacity-100 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Contrast & Accessibility Metrics */}
        <div className="p-4 rounded-xl border border-light-border dark:border-dark-border bg-light-bgSecondary/30 dark:bg-dark-bgSecondary/30 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div>
            <span className="text-light-textSecondary dark:text-dark-textSecondary block">
              {t('editor.luminance')}:
            </span>
            <span className="font-mono font-bold text-light-text dark:text-dark-text text-sm">
              {decomp.luminance}
            </span>
          </div>
          <div>
            <span className="text-light-textSecondary dark:text-dark-textSecondary block">
              {t('editor.contrastWithWhite')}:
            </span>
            <span className="font-mono font-bold text-light-text dark:text-dark-text text-sm">
              {contrastWhite}:1
            </span>
          </div>
          <div>
            <span className="text-light-textSecondary dark:text-dark-textSecondary block">
              {t('editor.contrastWithBlack')}:
            </span>
            <span className="font-mono font-bold text-light-text dark:text-dark-text text-sm">
              {contrastBlack}:1
            </span>
          </div>
          <div>
            <span className="text-light-textSecondary dark:text-dark-textSecondary block">
              {t('editor.textColorRecommendation')}:
            </span>
            <span
              className="inline-block px-2 py-0.5 rounded font-mono font-bold text-xs"
              style={{
                backgroundColor: readableTextColor,
                color: readableTextColor === '#FFFFFF' ? '#101820' : '#FFFFFF',
              }}
            >
              {readableTextColor}
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-3 border-t border-light-border dark:border-dark-border">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-light-border dark:border-dark-border text-sm font-semibold text-light-text dark:text-dark-text hover:bg-light-bgSecondary dark:hover:bg-dark-bgSecondary"
          >
            {t('common.cancel')}
          </button>
          <button
            onClick={handleApplyAndClose}
            className="px-5 py-2 rounded-xl bg-brand text-brand-darkText text-sm font-bold shadow-sm hover:bg-brand-hover transition-colors"
          >
            {t('editor.saveColor')}
          </button>
        </div>
      </div>
    </Modal>
  );
};
