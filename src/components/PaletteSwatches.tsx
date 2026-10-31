import React, { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Copy,
  GripVertical,
  Info,
  Lock,
  Plus,
  Trash2,
  Unlock,
} from 'lucide-react'
import type { TranslationDictionary } from '../lib/i18n/translations'
import type { PaletteColor } from '../types'

interface PaletteSwatchesProps {
  t: TranslationDictionary
  colors: PaletteColor[]
  activeId: string | null
  onSelectSwatch: (id: string) => void
  onToggleLock: (id: string) => void
  onRemoveSwatch: (id: string) => void
  onAddSwatch: () => void
  onMoveSwatch: (fromIndex: number, toIndex: number) => void
  onCopyText: (text: string, msg?: string) => void
  onOpenExport: () => void
}

export const PaletteSwatches: React.FC<PaletteSwatchesProps> = ({
  t,
  colors,
  activeId,
  onSelectSwatch,
  onToggleLock,
  onRemoveSwatch,
  onAddSwatch,
  onMoveSwatch,
  onCopyText,
  onOpenExport,
}) => {
  const [draggedIdx, setDraggedIdx] = useState<number | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [copiedAll, setCopiedAll] = useState(false)

  const handleCopySingle = (e: React.MouseEvent, col: PaletteColor) => {
    e.stopPropagation()
    onCopyText(col.hex, t.export.copied)
    setCopiedId(col.id)
    setTimeout(() => setCopiedId(null), 1800)
  }

  const handleCopyAll = () => {
    const allHex = colors.map((c) => c.hex).join(', ')
    onCopyText(allHex, t.export.copied)
    setCopiedAll(true)
    setTimeout(() => setCopiedAll(false), 1800)
  }

  // HTML5 Drag and drop handlers
  const handleDragStart = (index: number) => {
    setDraggedIdx(index)
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    if (draggedIdx === null || draggedIdx === index) return
    onMoveSwatch(draggedIdx, index)
    setDraggedIdx(index)
  }

  const handleDragEnd = () => {
    setDraggedIdx(null)
  }

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
      {/* Palette Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {t.palette.title}
            </h3>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              {colors.length} {t.palette.swatchCount}
            </span>
          </div>
          <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
            {t.palette.lockedNotice}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {/* Copy All */}
          <button
            onClick={handleCopyAll}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 transition-colors"
            title={t.palette.copyAll}
          >
            {copiedAll ? (
              <Check className="h-3.5 w-3.5 text-emerald-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
            <span>{copiedAll ? t.export.copied : t.palette.copyAll}</span>
          </button>

          {/* Export Palette Button */}
          <button
            onClick={onOpenExport}
            className="inline-flex items-center gap-1.5 rounded-lg bg-purple-600 px-3.5 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-purple-700 transition-colors"
          >
            <span>{t.export.button}</span>
          </button>
        </div>
      </div>

      {/* Swatches Container - Responsive Flex / Grid */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-2.5">
        {colors.map((col, idx) => {
          const isActive = col.id === activeId
          const textColor = col.contrast.suggestedForeground

          return (
            <div
              key={col.id}
              draggable
              onDragStart={() => handleDragStart(idx)}
              onDragOver={(e) => handleDragOver(e, idx)}
              onDragEnd={handleDragEnd}
              onClick={() => onSelectSwatch(col.id)}
              className={`group relative flex flex-1 min-w-[120px] sm:min-w-[100px] flex-col justify-between overflow-hidden rounded-xl border p-2.5 cursor-pointer transition-all ${
                isActive
                  ? 'ring-2 ring-purple-600 shadow-md scale-[1.02] border-transparent'
                  : 'border-slate-200 hover:border-purple-300 hover:shadow-xs dark:border-slate-800 dark:hover:border-slate-700'
              }`}
              style={{
                backgroundColor: col.hex,
                minHeight: '140px',
              }}
            >
              {/* Top Bar inside swatch: Lock & Drag Handle & Population */}
              <div className="flex items-center justify-between text-xs">
                {/* Lock Toggle */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onToggleLock(col.id)
                  }}
                  className={`rounded-md p-1 backdrop-blur-xs transition-colors ${
                    col.locked
                      ? 'bg-amber-500/90 text-white shadow-xs'
                      : 'bg-black/20 text-white/80 hover:bg-black/40 hover:text-white'
                  }`}
                  title={col.locked ? t.palette.unlockColor : t.palette.lockColor}
                >
                  {col.locked ? (
                    <Lock className="h-3 w-3" />
                  ) : (
                    <Unlock className="h-3 w-3 opacity-60" />
                  )}
                </button>

                {/* Population Share */}
                {col.proportion > 0 && (
                  <span
                    className="rounded-md bg-black/25 px-1.5 py-0.5 font-mono text-[10px] font-medium text-white/90 backdrop-blur-xs"
                    title={t.palette.clusterDisclosure}
                  >
                    {Math.round(col.proportion * 100)}%
                  </span>
                )}

                {/* Remove button (if > 2 colors) */}
                {colors.length > 2 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onRemoveSwatch(col.id)
                    }}
                    className="rounded-md p-1 bg-black/20 text-white/70 hover:bg-rose-600 hover:text-white transition-colors"
                    title={t.palette.removeSwatch}
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                )}
              </div>

              {/* Center / Role Badge if any */}
              {col.role && (
                <div className="text-center">
                  <span className="rounded-md bg-black/25 px-1.5 py-0.5 text-[9px] font-semibold text-white/90 uppercase tracking-wider backdrop-blur-xs">
                    {col.role}
                  </span>
                </div>
              )}

              {/* Bottom Bar: Reorder buttons & HEX code & Copy */}
              <div className="mt-4 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-xs font-bold tracking-wider"
                    style={{ color: textColor }}
                  >
                    {col.hex}
                  </span>

                  <button
                    onClick={(e) => handleCopySingle(e, col)}
                    className="rounded-md p-1 bg-black/20 text-white hover:bg-black/40 transition-colors"
                    title={t.palette.copyHex}
                  >
                    {copiedId === col.id ? (
                      <Check className="h-3 w-3 text-emerald-400" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </button>
                </div>

                {/* Reorder Buttons (Move left / right) */}
                <div className="flex items-center justify-between opacity-80 group-hover:opacity-100 transition-opacity">
                  <button
                    disabled={idx === 0}
                    onClick={(e) => {
                      e.stopPropagation()
                      onMoveSwatch(idx, idx - 1)
                    }}
                    className="rounded bg-black/25 p-1 text-white disabled:opacity-30 hover:bg-black/40"
                    title={t.palette.moveLeft}
                  >
                    <ArrowLeft className="h-2.5 w-2.5" />
                  </button>

                  <div className="text-white/60">
                    <GripVertical className="h-3 w-3" />
                  </div>

                  <button
                    disabled={idx === colors.length - 1}
                    onClick={(e) => {
                      e.stopPropagation()
                      onMoveSwatch(idx, idx + 1)
                    }}
                    className="rounded bg-black/25 p-1 text-white disabled:opacity-30 hover:bg-black/40"
                    title={t.palette.moveRight}
                  >
                    <ArrowRight className="h-2.5 w-2.5" />
                  </button>
                </div>
              </div>
            </div>
          )
        })}

        {/* Add Color Card */}
        {colors.length < 20 && (
          <button
            onClick={onAddSwatch}
            className="flex min-w-[100px] flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/60 p-4 text-slate-500 hover:border-purple-400 hover:bg-purple-50/50 hover:text-purple-700 dark:border-slate-800 dark:bg-slate-900/40 dark:text-slate-400 dark:hover:border-purple-800 dark:hover:text-purple-300 transition-all"
            style={{ minHeight: '140px' }}
            title={t.palette.addSwatch}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-xs dark:bg-slate-800">
              <Plus className="h-4 w-4" />
            </div>
            <span className="text-xs font-semibold">{t.palette.addSwatch}</span>
          </button>
        )}
      </div>

      {/* Honest cluster disclosure footer */}
      <div className="flex items-start gap-1.5 text-[11px] text-slate-400 dark:text-slate-500">
        <Info className="h-3.5 w-3.5 shrink-0 mt-0.5 text-purple-600 dark:text-purple-400" />
        <span>{t.palette.clusterDisclosure}</span>
      </div>
    </div>
  )
}
