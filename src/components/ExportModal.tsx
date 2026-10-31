import React, { useEffect, useRef, useState } from 'react'
import {
  Check,
  Code2,
  Copy,
  Download,
  FileCode,
  FileJson,
  FileText,
  Image as ImageIcon,
  X,
} from 'lucide-react'
import { downloadPalette } from '../lib/export/downloadHelper'
import {
  generateCssExport,
  generateJsonExport,
  generateSvgExport,
  generateTxtExport,
  renderPaletteToCanvas,
} from '../lib/export/exportGenerators'
import type { TranslationDictionary } from '../lib/i18n/translations'
import type { ExportFormat, PaletteColor } from '../types'

interface ExportModalProps {
  isOpen: boolean
  onClose: () => void
  t: TranslationDictionary
  colors: PaletteColor[]
  paletteName?: string
  onCopyText: (text: string, msg?: string) => void
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  t,
  colors,
  paletteName = 'MoPalette',
  onCopyText,
}) => {
  const [activeTab, setActiveTab] = useState<ExportFormat>('png')
  const [copied, setCopied] = useState(false)
  const canvasContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen || activeTab !== 'png' || !canvasContainerRef.current) return

    try {
      const canvas = renderPaletteToCanvas(colors, paletteName, 800, 420)
      canvas.className = 'w-full h-auto rounded-lg shadow-sm'
      canvasContainerRef.current.innerHTML = ''
      canvasContainerRef.current.appendChild(canvas)
    } catch (e) {
      console.warn('Canvas render error in modal:', e)
    }
  }, [isOpen, activeTab, colors, paletteName])

  if (!isOpen) return null

  const getExportCode = (): string => {
    switch (activeTab) {
      case 'svg':
        return generateSvgExport(colors, paletteName)
      case 'css':
        return generateCssExport(colors)
      case 'json':
        return generateJsonExport(colors, paletteName)
      case 'txt':
        return generateTxtExport(colors)
      case 'png':
      default:
        return ''
    }
  }

  const handleCopyCode = () => {
    const code = getExportCode()
    if (!code) return
    onCopyText(code, t.export.copied)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  const handleDownload = () => {
    downloadPalette(activeTab, colors, paletteName)
  }

  const tabs: Array<{ id: ExportFormat; label: string; icon: React.ReactNode; desc: string }> = [
    {
      id: 'png',
      label: t.export.tabPng,
      icon: <ImageIcon className="h-4 w-4" />,
      desc: t.export.pngDesc,
    },
    {
      id: 'svg',
      label: t.export.tabSvg,
      icon: <FileCode className="h-4 w-4" />,
      desc: t.export.svgDesc,
    },
    {
      id: 'css',
      label: t.export.tabCss,
      icon: <Code2 className="h-4 w-4" />,
      desc: t.export.cssDesc,
    },
    {
      id: 'json',
      label: t.export.tabJson,
      icon: <FileJson className="h-4 w-4" />,
      desc: t.export.jsonDesc,
    },
    {
      id: 'txt',
      label: t.export.tabTxt,
      icon: <FileText className="h-4 w-4" />,
      desc: t.export.txtDesc,
    },
  ]

  const currentTab = tabs.find((tb) => tb.id === activeTab)!
  const codeContent = getExportCode()

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 dark:border-slate-800">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {t.export.title}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {colors.length} swatches ready for production export
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition-colors"
            title={t.export.close}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Format Selector Tabs */}
        <div className="flex overflow-x-auto border-b border-slate-100 bg-slate-50/50 px-6 pt-2 dark:border-slate-800 dark:bg-slate-950/40">
          {tabs.map((tb) => {
            const isSel = activeTab === tb.id
            return (
              <button
                key={tb.id}
                onClick={() => setActiveTab(tb.id)}
                className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-colors ${
                  isSel
                    ? 'border-purple-600 text-purple-700 dark:border-purple-500 dark:text-purple-300'
                    : 'border-transparent text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {tb.icon}
                <span>{tb.label}</span>
              </button>
            )
          })}
        </div>

        {/* Content Body */}
        <div className="flex flex-1 flex-col overflow-y-auto p-6 gap-4">
          <p className="text-xs text-slate-600 dark:text-slate-400">
            {currentTab.desc}
          </p>

          {/* Visual Canvas Preview for PNG */}
          {activeTab === 'png' ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-950 p-4 dark:border-slate-800">
              <div ref={canvasContainerRef} className="w-full max-w-lg" />
            </div>
          ) : (
            /* Code Preview Box */
            <div className="relative rounded-xl border border-slate-200 bg-slate-950 p-4 text-xs font-mono text-slate-100 dark:border-slate-800 overflow-x-auto max-h-[300px]">
              <pre className="whitespace-pre">{codeContent}</pre>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between border-t border-slate-100 bg-slate-50/50 px-6 py-4 dark:border-slate-800 dark:bg-slate-950/50">
          {activeTab !== 'png' ? (
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
            >
              {copied ? (
                <Check className="h-4 w-4 text-emerald-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span>{copied ? t.export.copied : t.export.copyCode}</span>
            </button>
          ) : (
            <div />
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="rounded-xl px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
            >
              {t.export.close}
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2 text-xs font-bold text-white shadow-md shadow-purple-600/20 hover:bg-purple-700 active:scale-95 transition-all"
            >
              <Download className="h-4 w-4" />
              <span>{t.export.download}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
