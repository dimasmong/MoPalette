import React, { useState } from 'react'
import {
  Check,
  CheckCircle2,
  Copy,
  Eye,
  Info,
  Sparkles,
  XCircle,
} from 'lucide-react'
import {
  formatHslString,
  formatOklchString,
  formatRgbString,
} from '../lib/color/conversions'
import type { TranslationDictionary } from '../lib/i18n/translations'
import type { PaletteColor } from '../types'

interface ColorDetailPanelProps {
  t: TranslationDictionary
  color: PaletteColor | null
  onCopyText: (text: string, msg?: string) => void
}

export const ColorDetailPanel: React.FC<ColorDetailPanelProps> = ({
  t,
  color,
  onCopyText,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  if (!color) return null

  const handleCopy = (key: string, val: string) => {
    onCopyText(val, t.export.copied)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 1800)
  }

  const rgbStr = formatRgbString(color.rgb)
  const hslStr = formatHslString(color.hsl)
  const oklchStr = formatOklchString(color.oklch)

  const formatCards = [
    { key: 'HEX', label: t.colorDetail.hexLabel, value: color.hex },
    { key: 'RGB', label: t.colorDetail.rgbLabel, value: rgbStr },
    { key: 'HSL', label: t.colorDetail.hslLabel, value: hslStr },
    { key: 'OKLCH', label: t.colorDetail.oklchLabel, value: oklchStr },
  ]

  const { contrast } = color

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <Eye className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            {t.colorDetail.title}
          </h3>
        </div>

        {/* Selected Swatch Pill */}
        <div className="flex items-center gap-2">
          <div
            className="h-4 w-4 rounded-full border border-black/10 shadow-xs"
            style={{ backgroundColor: color.hex }}
          />
          <span className="font-mono text-xs font-bold text-slate-800 dark:text-slate-200">
            {color.hex}
          </span>
        </div>
      </div>

      {/* Formats Grid (HEX, RGB, HSL, OKLCH) */}
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {formatCards.map((fmt) => (
          <div
            key={fmt.key}
            onClick={() => handleCopy(fmt.key, fmt.value)}
            className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-slate-50/60 p-3 cursor-pointer hover:border-purple-300 hover:bg-purple-50/40 dark:border-slate-800 dark:bg-slate-800/40 dark:hover:border-purple-900 dark:hover:bg-purple-950/20 transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                {fmt.label}
              </span>
              <button
                className="text-slate-400 hover:text-slate-900 dark:hover:text-white"
                title={`Copy ${fmt.label}`}
              >
                {copiedKey === fmt.key ? (
                  <Check className="h-3 w-3 text-emerald-500" />
                ) : (
                  <Copy className="h-3 w-3" />
                )}
              </button>
            </div>
            <span className="mt-2 font-mono text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
              {fmt.value}
            </span>
          </div>
        ))}
      </div>

      {/* WCAG Contrast Assistance Section */}
      <div className="flex flex-col gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-950/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              {t.colorDetail.contrastTitle}
            </span>
          </div>

          <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
            {t.colorDetail.luminance}: {contrast.relativeLuminance}
          </span>
        </div>

        {/* Contrast Cards Row */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Against White */}
          <div className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                {t.colorDetail.againstWhite}
              </span>
              <span className="font-mono text-sm font-bold text-slate-900 dark:text-white">
                {contrast.whiteRatio} : 1
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              <span
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-bold ${
                  contrast.whiteAA
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                    : 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                }`}
              >
                {contrast.whiteAA ? (
                  <CheckCircle2 className="h-3 w-3" />
                ) : (
                  <XCircle className="h-3 w-3" />
                )}
                <span>Normal AA (≥4.5)</span>
              </span>

              <span
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-bold ${
                  contrast.whiteAAA
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                    : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                }`}
              >
                {contrast.whiteAAA ? (
                  <CheckCircle2 className="h-3 w-3" />
                ) : (
                  <XCircle className="h-3 w-3" />
                )}
                <span>Normal AAA (≥7.0)</span>
              </span>

              <span
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-bold ${
                  contrast.whiteAALarge
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                    : 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                }`}
              >
                {contrast.whiteAALarge ? (
                  <CheckCircle2 className="h-3 w-3" />
                ) : (
                  <XCircle className="h-3 w-3" />
                )}
                <span>Large AA (≥3.0)</span>
              </span>
            </div>
          </div>

          {/* Against Black */}
          <div className="flex flex-col gap-2 rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                {t.colorDetail.againstBlack}
              </span>
              <span className="font-mono text-sm font-bold text-slate-900 dark:text-white">
                {contrast.blackRatio} : 1
              </span>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-1">
              <span
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-bold ${
                  contrast.blackAA
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                    : 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                }`}
              >
                {contrast.blackAA ? (
                  <CheckCircle2 className="h-3 w-3" />
                ) : (
                  <XCircle className="h-3 w-3" />
                )}
                <span>Normal AA (≥4.5)</span>
              </span>

              <span
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-bold ${
                  contrast.blackAAA
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                    : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                }`}
              >
                {contrast.blackAAA ? (
                  <CheckCircle2 className="h-3 w-3" />
                ) : (
                  <XCircle className="h-3 w-3" />
                )}
                <span>Normal AAA (≥7.0)</span>
              </span>

              <span
                className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-[10px] font-bold ${
                  contrast.blackAALarge
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                    : 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                }`}
              >
                {contrast.blackAALarge ? (
                  <CheckCircle2 className="h-3 w-3" />
                ) : (
                  <XCircle className="h-3 w-3" />
                )}
                <span>Large AA (≥3.0)</span>
              </span>
            </div>
          </div>
        </div>

        {/* Suggested Foreground Text Banner */}
        <div
          className="flex items-center justify-between rounded-lg p-3 transition-colors shadow-inner"
          style={{ backgroundColor: color.hex }}
        >
          <span
            className="text-xs font-bold"
            style={{ color: contrast.suggestedForeground }}
          >
            {t.colorDetail.suggestedText}:
          </span>
          <span
            className="rounded px-2.5 py-1 font-mono text-xs font-bold shadow-xs"
            style={{
              backgroundColor: contrast.suggestedForeground === '#ffffff' ? '#000000' : '#ffffff',
              color: contrast.suggestedForeground === '#ffffff' ? '#ffffff' : '#000000',
            }}
          >
            {contrast.suggestedForeground === '#ffffff' ? 'White (#FFFFFF)' : 'Black (#000000)'}
          </span>
        </div>

        {/* Disclaimer */}
        <p className="flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500">
          <Info className="h-3.5 w-3.5 shrink-0" />
          <span>{t.colorDetail.contrastDesc}</span>
        </p>
      </div>
    </div>
  )
}
