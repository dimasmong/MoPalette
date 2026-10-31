import React from 'react'
import {
  RotateCcw,
  Sliders,
  Sparkles,
} from 'lucide-react'
import type { TranslationDictionary } from '../lib/i18n/translations'
import type {
  ExtractionConfig,
  ExtractionQuality,
  PalettePreset,
} from '../types'

interface PaletteControlsProps {
  t: TranslationDictionary
  config: ExtractionConfig
  onChangeConfig: (partial: Partial<ExtractionConfig>) => void
  onRegenerate: () => void
  onReset: () => void
  isRegenerating?: boolean
}

export const PaletteControls: React.FC<PaletteControlsProps> = ({
  t,
  config,
  onChangeConfig,
  onRegenerate,
  onReset,
  isRegenerating = false,
}) => {
  const presets: Array<{ id: PalettePreset; label: string; desc: string }> = [
    {
      id: 'balanced',
      label: t.controls.presetBalanced,
      desc: t.controls.presetBalancedDesc,
    },
    {
      id: 'dominant',
      label: t.controls.presetDominant,
      desc: t.controls.presetDominantDesc,
    },
    {
      id: 'vibrant',
      label: t.controls.presetVibrant,
      desc: t.controls.presetVibrantDesc,
    },
    {
      id: 'muted',
      label: t.controls.presetMuted,
      desc: t.controls.presetMutedDesc,
    },
  ]

  const qualities: Array<{ id: ExtractionQuality; label: string }> = [
    { id: 'fast', label: t.controls.accuracyFast },
    { id: 'balanced', label: t.controls.accuracyBalanced },
    { id: 'high', label: t.controls.accuracyHigh },
  ]

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <Sliders className="h-4 w-4 text-purple-600 dark:text-purple-400" />
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            {t.controls.title}
          </h3>
        </div>

        {/* Reset button */}
        <button
          onClick={onReset}
          className="inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white transition-colors"
          title={t.controls.reset}
        >
          <RotateCcw className="h-3 w-3" />
          <span>{t.controls.reset}</span>
        </button>
      </div>

      {/* Color Count Slider */}
      <div>
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            {t.controls.colorCount}
          </label>
          <span className="rounded-full bg-purple-100 px-2 py-0.5 font-mono text-xs font-bold text-purple-700 dark:bg-purple-950/60 dark:text-purple-300">
            {config.colorCount}
          </span>
        </div>
        <input
          type="range"
          min={2}
          max={20}
          value={config.colorCount}
          onChange={(e) => onChangeConfig({ colorCount: Number(e.target.value) })}
          className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-purple-600 dark:bg-slate-700"
        />
        <div className="mt-1 flex justify-between text-[10px] text-slate-400">
          <span>Min: 2</span>
          <span>Default: 6</span>
          <span>Max: 20</span>
        </div>
      </div>

      {/* Preset Modes */}
      <div>
        <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
          {t.controls.preset}
        </label>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {presets.map((preset) => {
            const isSelected = config.preset === preset.id
            return (
              <button
                key={preset.id}
                onClick={() => onChangeConfig({ preset: preset.id })}
                className={`flex flex-col items-start rounded-xl border p-2.5 text-left transition-all ${
                  isSelected
                    ? 'border-purple-600 bg-purple-50/80 ring-2 ring-purple-600/20 dark:border-purple-500 dark:bg-purple-950/40'
                    : 'border-slate-200 bg-slate-50/50 hover:border-slate-300 hover:bg-slate-100/60 dark:border-slate-800 dark:bg-slate-800/40 dark:hover:border-slate-700'
                }`}
              >
                <span
                  className={`text-xs font-bold ${
                    isSelected
                      ? 'text-purple-700 dark:text-purple-300'
                      : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {preset.label}
                </span>
                <span className="mt-1 text-[10px] leading-tight text-slate-500 dark:text-slate-400 line-clamp-2">
                  {preset.desc}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Advanced Settings Row: Precision & Color Space */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {/* Sampling Precision */}
        <div>
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            {t.controls.accuracy}
          </label>
          <select
            value={config.quality}
            onChange={(e) =>
              onChangeConfig({ quality: e.target.value as ExtractionQuality })
            }
            className="mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs text-slate-700 shadow-xs focus:border-purple-500 focus:outline-hidden dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
          >
            {qualities.map((q) => (
              <option key={q.id} value={q.id}>
                {q.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-[10px] text-slate-400 dark:text-slate-500">
            {t.controls.accuracyNote}
          </p>
        </div>

        {/* Quantization Color Space */}
        <div>
          <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            {t.controls.colorSpace}
          </label>
          <div className="mt-1.5 flex rounded-lg border border-slate-200 p-0.5 dark:border-slate-800">
            <button
              onClick={() => onChangeConfig({ colorSpace: 'oklch' })}
              className={`flex-1 rounded-md py-1 text-xs font-medium transition-colors ${
                config.colorSpace === 'oklch'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              OKLCH
            </button>
            <button
              onClick={() => onChangeConfig({ colorSpace: 'rgb' })}
              className={`flex-1 rounded-md py-1 text-xs font-medium transition-colors ${
                config.colorSpace === 'rgb'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
              }`}
            >
              RGB
            </button>
          </div>
          <p className="mt-1 text-[10px] text-slate-400 dark:text-slate-500">
            OKLCH provides perceptual uniformity.
          </p>
        </div>
      </div>

      {/* Transparent Pixels Toggle */}
      <div className="flex items-center justify-between pt-1">
        <label className="flex cursor-pointer items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
          <input
            type="checkbox"
            checked={config.ignoreTransparent}
            onChange={(e) =>
              onChangeConfig({ ignoreTransparent: e.target.checked })
            }
            className="h-4 w-4 rounded border-slate-300 text-purple-600 focus:ring-purple-500 dark:border-slate-700"
          />
          <span>{t.controls.ignoreTransparent}</span>
        </label>
      </div>

      {/* Regenerate Action Button */}
      <button
        onClick={onRegenerate}
        disabled={isRegenerating}
        className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-2.5 text-xs font-bold text-white shadow-md shadow-purple-600/20 hover:from-purple-700 hover:to-indigo-700 active:scale-[0.99] disabled:opacity-60 transition-all"
        title={t.controls.regenerateTooltip}
      >
        <Sparkles className={`h-4 w-4 ${isRegenerating ? 'animate-spin' : ''}`} />
        <span>{t.controls.regenerate}</span>
      </button>
    </div>
  )
}
