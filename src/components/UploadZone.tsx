import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  AlertCircle,
  FileImage,
  ImageIcon,
  Sparkles,
  UploadCloud,
} from 'lucide-react'
import type { TranslationDictionary } from '../lib/i18n/translations'
import type { ImageSourceData } from '../types'

interface UploadZoneProps {
  t: TranslationDictionary
  onImageLoaded: (imageData: ImageSourceData, imgElement: HTMLImageElement) => void
  onError: (msg: string) => void
}

const SAMPLE_PRESETS = [
  {
    id: 'sunset',
    name: 'Sunset Glow',
    render: (ctx: CanvasRenderingContext2D, w: number, h: number) => {
      const grad = ctx.createLinearGradient(0, 0, w, h)
      grad.addColorStop(0, '#f97316')
      grad.addColorStop(0.35, '#ec4899')
      grad.addColorStop(0.7, '#8b5cf6')
      grad.addColorStop(1, '#1e1b4b')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      ctx.beginPath()
      ctx.arc(w * 0.45, h * 0.4, Math.min(w, h) * 0.22, 0, Math.PI * 2)
      ctx.fillStyle = '#fbbf24'
      ctx.fill()
    },
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk Neon',
    render: (ctx: CanvasRenderingContext2D, w: number, h: number) => {
      ctx.fillStyle = '#09090b'
      ctx.fillRect(0, 0, w, h)
      ctx.fillStyle = '#06b6d4'
      ctx.fillRect(w * 0.1, h * 0.2, w * 0.35, h * 0.6)
      ctx.fillStyle = '#f43f5e'
      ctx.fillRect(w * 0.4, h * 0.15, w * 0.45, h * 0.5)
      ctx.fillStyle = '#a855f7'
      ctx.fillRect(w * 0.25, h * 0.45, w * 0.55, h * 0.4)
    },
  },
  {
    id: 'earthy',
    name: 'Forest Earth',
    render: (ctx: CanvasRenderingContext2D, w: number, h: number) => {
      ctx.fillStyle = '#2d3748'
      ctx.fillRect(0, 0, w, h)
      ctx.fillStyle = '#2f855a'
      ctx.fillRect(0, 0, w * 0.5, h)
      ctx.fillStyle = '#d69e2e'
      ctx.fillRect(w * 0.5, 0, w * 0.5, h * 0.6)
      ctx.fillStyle = '#c53030'
      ctx.fillRect(w * 0.5, h * 0.6, w * 0.5, h * 0.4)
    },
  },
]

export const UploadZone: React.FC<UploadZoneProps> = ({ t, onImageLoaded, onError }) => {
  const [isDragging, setIsDragging] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const processImageFile = useCallback(
    (file: File) => {
      const allowedTypes = [
        'image/jpeg',
        'image/png',
        'image/webp',
        'image/avif',
        'image/gif',
        'image/bmp',
        'image/svg+xml',
      ]

      if (!allowedTypes.includes(file.type) && !/\.(jpe?g|png|webp|avif|gif|bmp|svg)$/i.test(file.name)) {
        const msg = t.upload.errorUnsupported
        setErrorMessage(msg)
        onError(msg)
        return
      }

      setLoading(true)
      setErrorMessage(null)

      const objectUrl = URL.createObjectURL(file)
      const img = new Image()

      img.onload = () => {
        setLoading(false)
        if (img.naturalWidth === 0 || img.naturalHeight === 0) {
          URL.revokeObjectURL(objectUrl)
          const msg = t.upload.errorCorrupted
          setErrorMessage(msg)
          onError(msg)
          return
        }

        const sourceData: ImageSourceData = {
          file,
          url: objectUrl,
          name: file.name,
          width: img.naturalWidth,
          height: img.naturalHeight,
          sizeBytes: file.size,
          aspectRatio: img.naturalWidth / img.naturalHeight,
        }

        onImageLoaded(sourceData, img)
      }

      img.onerror = () => {
        setLoading(false)
        URL.revokeObjectURL(objectUrl)
        const msg = t.upload.errorCorrupted
        setErrorMessage(msg)
        onError(msg)
      }

      img.src = objectUrl
    },
    [t, onImageLoaded, onError]
  )

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processImageFile(e.dataTransfer.files[0])
    }
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processImageFile(e.target.files[0])
    }
  }

  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (e.clipboardData && e.clipboardData.items) {
        for (const item of Array.from(e.clipboardData.items)) {
          if (item.type.startsWith('image/')) {
            const file = item.getAsFile()
            if (file) {
              processImageFile(file)
              break
            }
          }
        }
      }
    }

    window.addEventListener('paste', handlePaste)
    return () => window.removeEventListener('paste', handlePaste)
  }, [processImageFile])

  const loadPreset = (preset: (typeof SAMPLE_PRESETS)[0]) => {
    setLoading(true)
    const canvas = document.createElement('canvas')
    canvas.width = 800
    canvas.height = 600
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    preset.render(ctx, canvas.width, canvas.height)

    canvas.toBlob((blob) => {
      if (blob) {
        const file = new File([blob], `${preset.id}.png`, { type: 'image/png' })
        processImageFile(file)
      }
    }, 'image/png')
  }

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`group relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 sm:p-12 text-center transition-all duration-200 ${
          isDragging
            ? 'border-purple-500 bg-purple-50/60 dark:border-purple-400 dark:bg-purple-950/30 ring-4 ring-purple-500/20'
            : 'border-slate-300 bg-white hover:border-purple-400 hover:bg-slate-50/50 dark:border-slate-800 dark:bg-slate-900/60 dark:hover:border-purple-600 dark:hover:bg-slate-900'
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,image/jpeg,image/webp,image/avif,image/*"
          className="hidden"
          onChange={handleFileInputChange}
          onClick={(e) => {
            ;(e.target as HTMLInputElement).value = ''
          }}
        />

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-purple-700 shadow-sm transition-transform duration-200 group-hover:scale-105 dark:bg-purple-950/60 dark:text-purple-300">
          <UploadCloud className="h-8 w-8" />
        </div>

        <h3 className="mt-4 text-lg font-bold text-slate-900 sm:text-xl dark:text-white">
          {t.upload.dropTitle}
        </h3>
        <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
          {t.upload.dropSubtitle}
        </p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-purple-600/20 transition-all hover:bg-purple-700 active:scale-95">
          <FileImage className="h-4 w-4" />
          <span>{t.upload.browseButton}</span>
        </div>

        <p className="mt-3 text-xs text-slate-400 dark:text-slate-500">
          {t.upload.pasteHint}
        </p>

        {errorMessage && (
          <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-700 dark:bg-red-950/50 dark:text-red-300">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Sparkles className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
          Or try a sample image:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {SAMPLE_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={(e) => {
                e.stopPropagation()
                loadPreset(preset)
              }}
              disabled={loading}
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-xs hover:border-purple-300 hover:bg-purple-50 hover:text-purple-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-purple-800 dark:hover:bg-purple-950/40 dark:hover:text-purple-300 transition-colors"
            >
              <ImageIcon className="h-3.5 w-3.5 opacity-60" />
              <span>{preset.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
