import React, { useState } from 'react';
import { usePalette } from '@/context/PaletteContext';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/components/common/Toast';
import { normalizeHex } from '@/lib/color/conversions';
import { downloadFile } from '@/lib/export/downloader';
import {
  Copy,
  ArrowLeftRight,
  Plus,
  Trash2,
  Sparkles,
  Download,
} from 'lucide-react';

interface GradientStop {
  id: string;
  hex: string;
  position: number; // 0 to 100
}

export const GradientGeneratorSection: React.FC = () => {
  const { colors } = usePalette();
  const { t } = useLanguage();
  const { showToast } = useToast();

  const [type, setType] = useState<'linear' | 'radial'>('linear');
  const [angle, setAngle] = useState<number>(135);
  const [stops, setStops] = useState<GradientStop[]>([
    { id: '1', hex: colors[0]?.hex || '#A1E3F9', position: 0 },
    { id: '2', hex: colors[Math.min(1, colors.length - 1)]?.hex || '#3BBEEF', position: 50 },
    { id: '3', hex: colors[Math.min(2, colors.length - 1)]?.hex || '#16242E', position: 100 },
  ]);

  // Generate CSS string
  const sortedStops = [...stops].sort((a, b) => a.position - b.position);
  const stopsCss = sortedStops.map((s) => `${s.hex} ${s.position}%`).join(', ');
  const gradientCss =
    type === 'linear'
      ? `linear-gradient(${angle}deg, ${stopsCss})`
      : `radial-gradient(circle at center, ${stopsCss})`;

  const fullCssRule = `background: ${gradientCss};`;

  const handleCopyCss = () => {
    navigator.clipboard.writeText(fullCssRule);
    showToast(t('gradient.copiedCss'));
  };

  const handleReverseStops = () => {
    setStops((prev) =>
      prev.map((s) => ({
        ...s,
        position: 100 - s.position,
      }))
    );
  };

  const handleAddStop = () => {
    if (stops.length >= 6) return;
    const nextHex = colors[stops.length % colors.length]?.hex || '#A1E3F9';
    const newStop: GradientStop = {
      id: `stop-${Date.now()}`,
      hex: normalizeHex(nextHex),
      position: Math.round(100 / (stops.length + 1)),
    };
    setStops([...stops, newStop]);
  };

  const handleRemoveStop = (id: string) => {
    if (stops.length <= 2) return;
    setStops(stops.filter((s) => s.id !== id));
  };

  const handleExportPng = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1600;
    canvas.height = 900;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (type === 'linear') {
      const rad = ((angle - 90) * Math.PI) / 180;
      const x1 = canvas.width / 2 - (Math.cos(rad) * canvas.width) / 2;
      const y1 = canvas.height / 2 - (Math.sin(rad) * canvas.height) / 2;
      const x2 = canvas.width / 2 + (Math.cos(rad) * canvas.width) / 2;
      const y2 = canvas.height / 2 + (Math.sin(rad) * canvas.height) / 2;
      const grad = ctx.createLinearGradient(x1, y1, x2, y2);
      sortedStops.forEach((s) => grad.addColorStop(s.position / 100, s.hex));
      ctx.fillStyle = grad;
    } else {
      const grad = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      );
      sortedStops.forEach((s) => grad.addColorStop(s.position / 100, s.hex));
      ctx.fillStyle = grad;
    }

    ctx.fillRect(0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      if (blob) {
        downloadFile(blob, 'mopalette-gradient.png', 'image/png');
        showToast('Downloaded gradient PNG.');
      }
    });
  };

  const handleExportSvg = () => {
    const stopsSvg = sortedStops
      .map((s) => `<stop offset="${s.position}%" stop-color="${s.hex}" />`)
      .join('\n      ');

    let gradDef = '';
    if (type === 'linear') {
      // Approximate angle in svg coordinates
      gradDef = `<linearGradient id="moGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      ${stopsSvg}
    </linearGradient>`;
    } else {
      gradDef = `<radialGradient id="moGrad" cx="50%" cy="50%" r="50%">
      ${stopsSvg}
    </radialGradient>`;
    }

    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="1600" height="900">
  <defs>
    ${gradDef}
  </defs>
  <rect width="1600" height="900" fill="url(#moGrad)" />
</svg>`;

    downloadFile(svgContent, 'mopalette-gradient.svg', 'image/svg+xml;charset=utf-8');
    showToast('Downloaded gradient SVG.');
  };

  return (
    <section className="w-full space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-light-text dark:text-dark-text tracking-tight">
          {t('gradient.title')}
        </h2>
        <p className="mt-2 text-sm text-light-textSecondary dark:text-dark-textSecondary">
          {t('gradient.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Controls Column (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          <div className="p-5 rounded-2xl glass-card bg-light-bg/85 dark:bg-dark-bg/85 border border-light-glassBorder dark:border-dark-glassBorder shadow-sm space-y-5">
            {/* Type & Angle */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-light-textSecondary dark:text-dark-textSecondary mb-1.5">
                  {t('gradient.gradientType')}
                </label>
                <div className="inline-flex rounded-xl p-1 bg-light-bgSecondary dark:bg-dark-bgSecondary border border-light-border dark:border-dark-border">
                  <button
                    onClick={() => setType('linear')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      type === 'linear'
                        ? 'bg-brand text-brand-darkText shadow-2xs'
                        : 'text-light-textSecondary dark:text-dark-textSecondary hover:text-light-text dark:hover:text-dark-text'
                    }`}
                  >
                    {t('gradient.linear')}
                  </button>
                  <button
                    onClick={() => setType('radial')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                      type === 'radial'
                        ? 'bg-brand text-brand-darkText shadow-2xs'
                        : 'text-light-textSecondary dark:text-dark-textSecondary hover:text-light-text dark:hover:text-dark-text'
                    }`}
                  >
                    {t('gradient.radial')}
                  </button>
                </div>
              </div>

              {type === 'linear' && (
                <div className="flex-1 max-w-[150px]">
                  <div className="flex justify-between text-xs font-semibold text-light-textSecondary dark:text-dark-textSecondary mb-1">
                    <span>{t('gradient.angle')}</span>
                    <span className="font-mono">{angle}°</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={angle}
                    onChange={(e) => setAngle(Number(e.target.value))}
                    className="w-full h-2 bg-light-border dark:bg-dark-border rounded-lg appearance-none cursor-pointer accent-brand"
                  />
                </div>
              )}
            </div>

            {/* Stops List */}
            <div className="space-y-3 pt-2 border-t border-light-border/60 dark:border-dark-border/60">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-light-textSecondary dark:text-dark-textSecondary">
                  {t('gradient.stops')} ({stops.length})
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleReverseStops}
                    title={t('gradient.reverseStops')}
                    className="p-1.5 rounded-lg border border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:bg-light-bgSecondary dark:hover:bg-dark-bgSecondary transition-colors"
                  >
                    <ArrowLeftRight className="w-3.5 h-3.5" />
                  </button>
                  {stops.length < 6 && (
                    <button
                      onClick={handleAddStop}
                      className="inline-flex items-center gap-1 text-xs font-bold text-brand hover:underline"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{t('gradient.addStop')}</span>
                    </button>
                  )}
                </div>
              </div>

              {stops.map((stop) => (
                <div
                  key={stop.id}
                  className="flex items-center gap-3 p-2.5 rounded-xl border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg"
                >
                  <div
                    className="w-8 h-8 rounded-lg border border-black/15 shadow-2xs relative shrink-0 overflow-hidden"
                    style={{ backgroundColor: stop.hex }}
                  >
                    <input
                      type="color"
                      value={stop.hex}
                      onChange={(e) =>
                        setStops(
                          stops.map((s) => (s.id === stop.id ? { ...s, hex: e.target.value } : s))
                        )
                      }
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                  </div>
                  <input
                    type="text"
                    value={stop.hex}
                    onChange={(e) =>
                      setStops(
                        stops.map((s) => (s.id === stop.id ? { ...s, hex: e.target.value } : s))
                      )
                    }
                    className="w-20 font-mono text-xs font-bold uppercase bg-transparent text-light-text dark:text-dark-text focus:outline-none"
                    maxLength={7}
                  />

                  {/* Position Slider */}
                  <div className="flex-1 flex items-center gap-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={stop.position}
                      onChange={(e) =>
                        setStops(
                          stops.map((s) =>
                            s.id === stop.id ? { ...s, position: Number(e.target.value) } : s
                          )
                        )
                      }
                      className="w-full h-1.5 bg-light-border dark:bg-dark-border rounded-lg appearance-none cursor-pointer accent-brand"
                    />
                    <span className="font-mono text-[11px] text-light-textSecondary dark:text-dark-textSecondary w-7">
                      {stop.position}%
                    </span>
                  </div>

                  {stops.length > 2 && (
                    <button
                      onClick={() => handleRemoveStop(stop.id)}
                      className="text-light-textSecondary dark:text-dark-textSecondary hover:text-red-500 p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Export & Copy Row */}
            <div className="pt-3 border-t border-light-border/60 dark:border-dark-border/60 flex flex-wrap gap-2">
              <button
                onClick={handleCopyCss}
                className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-brand text-brand-darkText font-bold text-xs shadow-sm hover:bg-brand-hover transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{t('gradient.copyCss')}</span>
              </button>
              <button
                onClick={handleExportPng}
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg text-xs font-bold text-light-text dark:text-dark-text hover:border-brand transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PNG</span>
              </button>
              <button
                onClick={handleExportSvg}
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg text-xs font-bold text-light-text dark:text-dark-text hover:border-brand transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>SVG</span>
              </button>
            </div>
          </div>
        </div>

        {/* Live Gradient Preview Box (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div
            className="w-full h-[360px] sm:h-[440px] rounded-2xl shadow-glass border border-black/10 dark:border-white/10 flex flex-col justify-between p-6 sm:p-8 transition-all duration-300"
            style={{ background: gradientCss }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 backdrop-blur-md text-white text-xs font-bold self-start">
              <Sparkles className="w-3.5 h-3.5 text-brand" />
              <span>Live Gradient Preview</span>
            </div>

            <div className="bg-black/35 backdrop-blur-md rounded-xl p-4 text-white text-xs font-mono break-all max-w-lg border border-white/15">
              {fullCssRule}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
