import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  Check,
  Copy,
  Crosshair,
  Pipette,
  Plus,
  RefreshCw,
  RotateCcw,
  Trash2,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'
import {
  getMagnifierNeighborhood,
  mapElementToImageCoordinates,
  samplePixelFromImageData,
} from '../lib/color/eyedropper'
import type { TranslationDictionary } from '../lib/i18n/translations'
import type { EyedropperSample, ImageSourceData, RGB } from '../types'

interface ImageWorkspaceProps {
  t: TranslationDictionary
  imageData: ImageSourceData
  imgElement: HTMLImageElement
  onReplaceImageClick: () => void
  onRemoveImage: () => void
  onSampleColorPicked: (sample: EyedropperSample) => void
  onReplaceActiveSwatch: (rgb: RGB) => void
  onAddSwatch: (rgb: RGB) => void
  onCopyText: (text: string) => void
  activeSwatchHex?: string
}

export const ImageWorkspace: React.FC<ImageWorkspaceProps> = ({
  t,
  imageData,
  imgElement,
  onReplaceImageClick,
  onRemoveImage,
  onSampleColorPicked,
  onReplaceActiveSwatch,
  onAddSwatch,
  onCopyText,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const loupeCanvasRef = useRef<HTMLCanvasElement>(null)

  // Zoom / View state
  const [zoomLevel, setZoomLevel] = useState<number>(1)
  const [isEyedropperActive, setIsEyedropperActive] = useState<boolean>(true)

  // Current sampled color state
  const [sample, setSample] = useState<EyedropperSample | null>(null)
  const [cachedImageData, setCachedImageData] = useState<ImageData | null>(null)
  const [copiedNotification, setCopiedNotification] = useState(false)

  // Build Canvas ImageData once when image loads or changes
  useEffect(() => {
    if (!imgElement || imgElement.naturalWidth === 0) return

    const canvas = document.createElement('canvas')
    canvas.width = imgElement.naturalWidth
    canvas.height = imgElement.naturalHeight
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return

    ctx.drawImage(imgElement, 0, 0)
    try {
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height)
      setCachedImageData(data)

      // Initial sample in image center
      const centerX = Math.floor(canvas.width / 2)
      const centerY = Math.floor(canvas.height / 2)
      const initialSample = samplePixelFromImageData(data, centerX, centerY)
      setSample(initialSample)
      onSampleColorPicked(initialSample)
    } catch (e) {
      console.warn('Canvas imageData access issue:', e)
    }
  }, [imgElement, onSampleColorPicked])

  // Handle pointer / touch movement for sampling
  const handlePointerInteraction = useCallback(
    (clientX: number, clientY: number) => {
      if (!isEyedropperActive || !imgRef.current || !cachedImageData) return

      const rect = imgRef.current.getBoundingClientRect()
      const elementX = clientX - rect.left
      const elementY = clientY - rect.top

      const { imageX, imageY, isInside } = mapElementToImageCoordinates(
        elementX,
        elementY,
        rect.width,
        rect.height,
        imageData.width,
        imageData.height
      )

      if (!isInside) return

      const newSample = samplePixelFromImageData(cachedImageData, imageX, imageY)
      setSample(newSample)
      onSampleColorPicked(newSample)

      // Draw 11x11 magnifier canvas
      if (loupeCanvasRef.current) {
        const { grid } = getMagnifierNeighborhood(cachedImageData, imageX, imageY, 11)
        const canvas = loupeCanvasRef.current
        const ctx = canvas.getContext('2d')
        if (ctx) {
          const pixelSize = canvas.width / 11
          for (let r = 0; r < 11; r++) {
            for (let c = 0; c < 11; c++) {
              const col = grid[r][c]
              ctx.fillStyle = `rgb(${col.r}, ${col.g}, ${col.b})`
              ctx.fillRect(c * pixelSize, r * pixelSize, pixelSize, pixelSize)
            }
          }
          // Center pixel crosshair border
          const center = 5
          ctx.strokeStyle = '#ffffff'
          ctx.lineWidth = 2
          ctx.strokeRect(center * pixelSize, center * pixelSize, pixelSize, pixelSize)
          ctx.strokeStyle = '#000000'
          ctx.lineWidth = 1
          ctx.strokeRect(center * pixelSize, center * pixelSize, pixelSize, pixelSize)
        }
      }
    },
    [isEyedropperActive, cachedImageData, imageData.width, imageData.height, onSampleColorPicked]
  )

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    handlePointerInteraction(e.clientX, e.clientY)
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    if (e.touches.length > 0) {
      handlePointerInteraction(e.touches[0].clientX, e.touches[0].clientY)
    }
  }

  const handleCopySample = () => {
    if (!sample) return
    onCopyText(sample.hex)
    setCopiedNotification(true)
    setTimeout(() => setCopiedNotification(false), 1800)
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Top Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white p-2.5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-1.5">
          {/* Eyedropper mode toggle button */}
          <button
            onClick={() => setIsEyedropperActive(!isEyedropperActive)}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
              isEyedropperActive
                ? 'bg-purple-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
            title={t.eyedropper.title}
          >
            <Pipette className="h-3.5 w-3.5" />
            <span>{t.eyedropper.title}</span>
          </button>

          {/* Zoom controls */}
          <div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.5))}
              className="p-1.5 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 rounded-l-lg transition-colors"
              title="Zoom out"
            >
              <ZoomOut className="h-3.5 w-3.5" />
            </button>
            <span className="px-2 text-xs font-mono font-medium text-slate-700 dark:text-slate-300">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 3))}
              className="p-1.5 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors"
              title="Zoom in"
            >
              <ZoomIn className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setZoomLevel(1)}
              className="p-1.5 text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 rounded-r-lg border-l border-slate-200 dark:border-slate-800 transition-colors"
              title="Reset Zoom"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Replace & Remove buttons */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={onReplaceImageClick}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
            title={t.upload.replaceImage}
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{t.upload.replaceImage}</span>
          </button>
          <button
            onClick={onRemoveImage}
            className="inline-flex items-center gap-1.5 rounded-lg border border-rose-200 bg-rose-50 px-2.5 py-1.5 text-xs font-medium text-rose-700 hover:bg-rose-100 dark:border-rose-950 dark:bg-rose-950/40 dark:text-rose-300 dark:hover:bg-rose-950/80 transition-colors"
            title={t.upload.removeImage}
          >
            <Trash2 className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{t.upload.removeImage}</span>
          </button>
        </div>
      </div>

      {/* Main Image Canvas Viewport */}
      <div
        ref={containerRef}
        className="relative flex h-[360px] sm:h-[460px] w-full items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-100/80 dark:border-slate-800 dark:bg-slate-950 select-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(140, 140, 160, 0.15) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      >
        {/* Rendered Source Image */}
        <img
          ref={imgRef}
          src={imageData.url}
          alt={imageData.name}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onClick={handleMouseMove}
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'center center',
          }}
          className={`max-h-full max-w-full object-contain transition-transform duration-75 ${
            isEyedropperActive ? 'cursor-crosshair' : 'cursor-default'
          }`}
        />

        {/* Floating Magnifier Loupe in corner of image container */}
        {sample && isEyedropperActive && (
          <div className="absolute top-3 left-3 z-20 flex items-center gap-3 rounded-xl border border-slate-200 bg-white/95 p-2.5 shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95 transition-all">
            {/* 11x11 pixel zoomed canvas */}
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-slate-300 shadow-inner dark:border-slate-700">
              <canvas
                ref={loupeCanvasRef}
                width={88}
                height={88}
                className="h-full w-full image-rendering-pixelated"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <Crosshair className="h-4 w-4 text-white/90 drop-shadow" />
              </div>
            </div>

            {/* Color Info */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <div
                  className="h-4 w-4 rounded-full border border-black/10 shadow-xs"
                  style={{ backgroundColor: sample.hex }}
                />
                <span className="font-mono text-sm font-bold text-slate-900 dark:text-white">
                  {sample.hex}
                </span>
                <button
                  onClick={handleCopySample}
                  className="rounded p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  title="Copy HEX"
                >
                  {copiedNotification ? (
                    <Check className="h-3 w-3 text-emerald-500" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </button>
              </div>

              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                rgb({sample.rgb.r}, {sample.rgb.g}, {sample.rgb.b})
              </span>

              {sample.isTransparent && (
                <span className="text-[10px] font-medium text-amber-600 dark:text-amber-400">
                  {t.eyedropper.transparentPixel}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Instructions overlay at bottom */}
        <div className="pointer-events-none absolute bottom-3 inset-x-4 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
          <span className="rounded-md bg-white/80 px-2 py-1 backdrop-blur-xs shadow-xs dark:bg-slate-900/80">
            {t.eyedropper.instruction}
          </span>
          <span className="hidden sm:inline-block rounded-md bg-white/80 px-2 py-1 backdrop-blur-xs shadow-xs dark:bg-slate-900/80">
            {imageData.width} × {imageData.height} px
          </span>
        </div>
      </div>

      {/* Eyedropper Actions Bar */}
      {sample && (
        <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-purple-200/60 bg-purple-50/50 p-3 dark:border-purple-900/40 dark:bg-purple-950/20">
          <div className="flex items-center gap-2">
            <div
              className="h-8 w-8 rounded-lg border border-black/15 shadow-sm"
              style={{ backgroundColor: sample.hex }}
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-semibold text-slate-900 dark:text-white">
                  {t.eyedropper.sampledColor}:
                </span>
                <span className="font-mono text-xs font-bold text-purple-700 dark:text-purple-300">
                  {sample.hex}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Pixel at ({sample.x}, {sample.y})
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onReplaceActiveSwatch(sample.rgb)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-purple-300 bg-white px-3 py-1.5 text-xs font-semibold text-purple-700 shadow-xs hover:bg-purple-50 dark:border-purple-800 dark:bg-slate-900 dark:text-purple-300 dark:hover:bg-purple-950/50 transition-colors"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>{t.eyedropper.replaceSwatch}</span>
            </button>

            <button
              onClick={() => onAddSwatch(sample.rgb)}
              className="inline-flex items-center gap-1.5 rounded-lg bg-purple-600 px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-purple-700 transition-colors"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>{t.eyedropper.addToPalette}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
