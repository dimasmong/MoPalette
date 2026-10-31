import React, { useState } from 'react';
import { usePalette } from '@/context/PaletteContext';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/components/common/Toast';
import { ExportFormat, CardLayout } from '@/types';
import {
  generateCssVariables,
  generateScssVariables,
  generateTailwindConfig,
  generateJsonExport,
  generateTxtList,
  generateGplPalette,
} from '@/lib/export/formats';
import { generateSvgCard, generatePngBlob } from '@/lib/export/cardRenderer';
import { downloadFile } from '@/lib/export/downloader';
import { Modal } from '@/components/common/Modal';
import { Copy, Download } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportModal: React.FC<ExportModalProps> = ({ isOpen, onClose }) => {
  const { colors, paletteName } = usePalette();
  const { t } = useLanguage();
  const { showToast } = useToast();

  const [format, setFormat] = useState<ExportFormat>('png');
  const [layout, setLayout] = useState<CardLayout>('horizontal');
  const [bgColor, setBgColor] = useState<'white' | 'dark' | 'brand' | 'transparent'>('white');
  const [includeLabels, setIncludeLabels] = useState<boolean>(true);
  const [includeNames, setIncludeNames] = useState<boolean>(true);
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  // Compute text content for code/text formats
  const getCodeContent = (): string => {
    switch (format) {
      case 'css':
        return generateCssVariables(colors, paletteName);
      case 'scss':
        return generateScssVariables(colors, paletteName);
      case 'tailwind':
        return generateTailwindConfig(colors, paletteName);
      case 'json':
        return generateJsonExport(colors, paletteName);
      case 'txt':
        return generateTxtList(colors);
      case 'gpl':
        return generateGplPalette(colors, paletteName);
      case 'svg':
        return generateSvgCard(colors, {
          layout,
          bgColor,
          includeLabels,
          includeNames,
          paletteName,
        });
      default:
        return '';
    }
  };

  const handleCopy = () => {
    const code = getCodeContent();
    if (code) {
      navigator.clipboard.writeText(code);
      showToast(t('exportModal.codeCopied'));
    }
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    const cleanName = (paletteName || 'mopalette')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-');

    try {
      if (format === 'png') {
        const blob = await generatePngBlob(colors, {
          layout,
          bgColor,
          includeLabels,
          includeNames,
          paletteName,
          width: 1200,
          height: 720,
        });
        downloadFile(blob, `${cleanName}-palette.png`, 'image/png');
        showToast('Downloaded PNG card.');
      } else if (format === 'svg') {
        const svgString = generateSvgCard(colors, {
          layout,
          bgColor,
          includeLabels,
          includeNames,
          paletteName,
          width: 1200,
          height: 720,
        });
        downloadFile(svgString, `${cleanName}-palette.svg`, 'image/svg+xml;charset=utf-8');
        showToast('Downloaded SVG card.');
      } else if (format === 'json') {
        downloadFile(getCodeContent(), `${cleanName}-colors.json`, 'application/json');
        showToast('Downloaded JSON file.');
      } else if (format === 'css') {
        downloadFile(getCodeContent(), `${cleanName}-variables.css`, 'text/css');
        showToast('Downloaded CSS variables.');
      } else if (format === 'scss') {
        downloadFile(getCodeContent(), `${cleanName}-variables.scss`, 'text/x-scss');
        showToast('Downloaded SCSS variables.');
      } else if (format === 'tailwind') {
        downloadFile(getCodeContent(), `${cleanName}-tailwind.json`, 'application/json');
        showToast('Downloaded Tailwind config.');
      } else if (format === 'txt') {
        downloadFile(getCodeContent(), `${cleanName}-colors.txt`, 'text/plain');
        showToast('Downloaded TXT list.');
      } else if (format === 'gpl') {
        downloadFile(getCodeContent(), `${cleanName}-palette.gpl`, 'text/plain');
        showToast('Downloaded GPL palette.');
      }
    } catch (err) {
      showToast(t('common.errorGeneric'), 'error');
    } finally {
      setIsDownloading(false);
    }
  };

  const formatButtons: { id: ExportFormat; label: string }[] = [
    { id: 'png', label: t('exportModal.formats.png') },
    { id: 'svg', label: t('exportModal.formats.svg') },
    { id: 'css', label: t('exportModal.formats.css') },
    { id: 'scss', label: t('exportModal.formats.scss') },
    { id: 'tailwind', label: t('exportModal.formats.tailwind') },
    { id: 'json', label: t('exportModal.formats.json') },
    { id: 'txt', label: t('exportModal.formats.txt') },
    { id: 'gpl', label: t('exportModal.formats.gpl') },
  ];

  const isVisualCard = format === 'png' || format === 'svg';

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t('exportModal.title')}
      subtitle={t('exportModal.subtitle')}
      maxWidth="3xl"
    >
      <div className="space-y-6">
        {/* Format Selector Pills */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-light-textSecondary dark:text-dark-textSecondary mb-2">
            {t('exportModal.formatLabel')}
          </label>
          <div className="flex flex-wrap gap-2">
            {formatButtons.map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFormat(btn.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  format === btn.id
                    ? 'bg-brand text-brand-darkText shadow-2xs'
                    : 'border border-light-border dark:border-dark-border text-light-textSecondary dark:text-dark-textSecondary hover:text-light-text dark:hover:text-dark-text hover:bg-light-bgSecondary dark:hover:bg-dark-bgSecondary'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Card Options (only visible for PNG and SVG) */}
        {isVisualCard && (
          <div className="p-4 rounded-xl border border-light-border dark:border-dark-border bg-light-bgSecondary/40 dark:bg-dark-bgSecondary/40 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            {/* Layout */}
            <div>
              <label className="block font-bold text-light-textSecondary dark:text-dark-textSecondary mb-1.5">
                {t('exportModal.cardLayout')}
              </label>
              <select
                value={layout}
                onChange={(e) => setLayout(e.target.value as CardLayout)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg text-xs font-semibold text-light-text dark:text-dark-text"
              >
                <option value="horizontal">{t('exportModal.layouts.horizontal')}</option>
                <option value="vertical">{t('exportModal.layouts.vertical')}</option>
                <option value="grid">{t('exportModal.layouts.grid')}</option>
              </select>
            </div>

            {/* Background Color */}
            <div>
              <label className="block font-bold text-light-textSecondary dark:text-dark-textSecondary mb-1.5">
                {t('exportModal.bgColorLabel')}
              </label>
              <select
                value={bgColor}
                onChange={(e) => setBgColor(e.target.value as any)}
                className="w-full px-2.5 py-1.5 rounded-lg border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg text-xs font-semibold text-light-text dark:text-dark-text"
              >
                <option value="white">{t('exportModal.bgColors.white')}</option>
                <option value="dark">{t('exportModal.bgColors.dark')}</option>
                <option value="brand">{t('exportModal.bgColors.brand')}</option>
                <option value="transparent">{t('exportModal.bgColors.transparent')}</option>
              </select>
            </div>

            {/* Checkbox Toggles */}
            <div className="space-y-1.5 pt-4">
              <label className="flex items-center gap-2 cursor-pointer font-medium text-light-text dark:text-dark-text">
                <input
                  type="checkbox"
                  checked={includeLabels}
                  onChange={(e) => setIncludeLabels(e.target.checked)}
                  className="rounded text-brand focus:ring-brand accent-brand w-3.5 h-3.5"
                />
                <span>{t('exportModal.showHex')}</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer font-medium text-light-text dark:text-dark-text">
                <input
                  type="checkbox"
                  checked={includeNames}
                  onChange={(e) => setIncludeNames(e.target.checked)}
                  className="rounded text-brand focus:ring-brand accent-brand w-3.5 h-3.5"
                />
                <span>{t('exportModal.showNames')}</span>
              </label>
            </div>
          </div>
        )}

        {/* Preview Container */}
        <div className="space-y-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-light-textSecondary dark:text-dark-textSecondary">
            {t('common.preview')}
          </label>

          {isVisualCard ? (
            /* Live Card Visual Preview */
            <div
              className="w-full rounded-2xl overflow-hidden border border-light-border dark:border-dark-border p-4 flex items-center justify-center bg-black/5 dark:bg-black/20"
              dangerouslySetInnerHTML={{
                __html: generateSvgCard(colors, {
                  layout,
                  bgColor,
                  includeLabels,
                  includeNames,
                  paletteName,
                  width: 800,
                  height: 480,
                }),
              }}
            />
          ) : (
            /* Code Preview Box */
            <div className="relative">
              <pre className="p-4 rounded-2xl border border-light-border dark:border-dark-border bg-light-bgSecondary dark:bg-dark-bgSecondary font-mono text-xs text-light-text dark:text-dark-text overflow-x-auto max-h-64 leading-relaxed">
                <code>{getCodeContent()}</code>
              </pre>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-light-border dark:border-dark-border">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-light-border dark:border-dark-border text-xs font-semibold text-light-text dark:text-dark-text hover:bg-light-bgSecondary dark:hover:bg-dark-bgSecondary"
          >
            {t('common.close')}
          </button>

          {!isVisualCard && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-light-border dark:border-dark-border hover:border-brand bg-light-bg dark:bg-dark-bg text-xs font-bold text-light-text dark:text-dark-text transition-colors"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>{t('exportModal.copyCode')}</span>
            </button>
          )}

          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex items-center gap-1.5 px-5 py-2 rounded-xl bg-brand text-brand-darkText text-xs font-bold shadow-sm hover:bg-brand-hover transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isDownloading ? t('common.loading') : t('exportModal.downloadFile')}</span>
          </button>
        </div>
      </div>
    </Modal>
  );
};
