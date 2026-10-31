import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ColorDetailPanel } from './components/ColorDetailPanel'
import { ExportModal } from './components/ExportModal'
import { FAQSection } from './components/FAQSection'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { ImageWorkspace } from './components/ImageWorkspace'
import { Navbar } from './components/Navbar'
import { OpenSourceModal } from './components/OpenSourceModal'
import { PaletteControls } from './components/PaletteControls'
import { PaletteSwatches } from './components/PaletteSwatches'
import { PrivacyModal } from './components/PrivacyModal'
import { UploadZone } from './components/UploadZone'
import { UsageExplanation } from './components/UsageExplanation'
import { useClipboard } from './hooks/useClipboard'
import { useLanguage } from './hooks/useLanguage'
import { usePaletteState } from './hooks/usePaletteState'
import { useTheme } from './hooks/useTheme'
import { extractPaletteFromSource } from './lib/color/extractor'
import type { EyedropperSample, ImageSourceData, RGB } from './types'

export const App: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  const { lang, toggleLang, t } = useLanguage()
  const { feedback, copyToClipboard } = useClipboard()

  const {
    colors,
    activeId,
    activeColor,
    config,
    setActiveId,
    setPalette,
    toggleLock,
    removeSwatch,
    addSwatch,
    replaceSwatch,
    moveSwatch,
    resetPalette,
    updateConfig,
  } = usePaletteState()

  // Image Source State
  const [currentImage, setCurrentImage] = useState<ImageSourceData | null>(null)
  const [currentImgElement, setCurrentImgElement] = useState<HTMLImageElement | null>(null)
  const [isExtracting, setIsExtracting] = useState(false)
  const [notification, setNotification] = useState<string | null>(null)

  // Modals
  const [isExportOpen, setIsExportOpen] = useState(false)
  const [isOpenSourceOpen, setIsOpenSourceOpen] = useState(false)
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)

  const hiddenReplaceInputRef = useRef<HTMLInputElement>(null)

  // Show a temporary banner notification
  const showNotification = useCallback((msg: string) => {
    setNotification(msg)
    setTimeout(() => setNotification(null), 3000)
  }, [])

  // Execute actual Color Thief palette extraction
  const performExtraction = useCallback(
    (
      imgEl: HTMLImageElement,
      currentCfg = config,
      isFresh = false
    ) => {
      setIsExtracting(true)
      try {
        const extracted = extractPaletteFromSource(
          imgEl,
          currentCfg,
          isFresh ? [] : colors
        )
        setPalette(extracted, isFresh)
      } catch (err) {
        console.error('Palette extraction failed:', err)
        showNotification('Extraction warning. Please try another image or preset.')
      } finally {
        setIsExtracting(false)
      }
    },
    [config, colors, setPalette, showNotification]
  )

  // Handle image load
  const handleImageLoaded = useCallback(
    (imageData: ImageSourceData, imgElement: HTMLImageElement) => {
      if (currentImage?.url && currentImage.url.startsWith('blob:')) {
        URL.revokeObjectURL(currentImage.url)
      }
      setCurrentImage(imageData)
      setCurrentImgElement(imgElement)
      performExtraction(imgElement, config, true)
    },
    [currentImage, config, performExtraction]
  )

  // Handle re-triggering extraction when configuration changes
  const handleConfigChange = (partial: Partial<typeof config>) => {
    updateConfig(partial)
    const newConfig = { ...config, ...partial }
    if (currentImgElement) {
      performExtraction(currentImgElement, newConfig, false)
    }
  }

  // Handle manual eyedropper sample pick
  const handleSampleColorPicked = useCallback(
    (_sample: EyedropperSample) => {
      // Eyedropper sample tracked
    },
    []
  )

  // Eyedropper action: replace active swatch
  const handleReplaceActiveSwatch = (newRgb: RGB) => {
    if (activeId) {
      replaceSwatch(activeId, newRgb)
      showNotification('Active swatch updated')
    }
  }

  // Eyedropper action: add as new swatch
  const handleAddSampleSwatch = (newRgb: RGB) => {
    addSwatch(newRgb)
    showNotification('Color added to palette')
  }

  // Remove image
  const handleRemoveImage = () => {
    if (currentImage?.url && currentImage.url.startsWith('blob:')) {
      URL.revokeObjectURL(currentImage.url)
    }
    setCurrentImage(null)
    setCurrentImgElement(null)
    setPalette([])
  }

  // Trigger hidden replace input
  const handleReplaceClick = () => {
    hiddenReplaceInputRef.current?.click()
  }

  const handleHiddenFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      const objectUrl = URL.createObjectURL(file)
      const img = new Image()
      img.onload = () => {
        handleImageLoaded(
          {
            file,
            url: objectUrl,
            name: file.name,
            width: img.naturalWidth,
            height: img.naturalHeight,
            sizeBytes: file.size,
            aspectRatio: img.naturalWidth / img.naturalHeight,
          },
          img
        )
      }
      img.src = objectUrl
    }
  }

  // Support URL hashes: #open-source and #privacy
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#open-source') {
        setIsOpenSourceOpen(true)
      } else if (window.location.hash === '#privacy') {
        setIsPrivacyOpen(true)
      }
    }
    checkHash()
    window.addEventListener('hashchange', checkHash)
    return () => window.removeEventListener('hashchange', checkHash)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-purple-500 selection:text-white dark:bg-[#0b0a10] dark:text-slate-100 transition-colors">
      {/* Hidden file input for replacing image */}
      <input
        ref={hiddenReplaceInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/avif,image/*"
        className="hidden"
        onChange={handleHiddenFileInput}
        onClick={(e) => {
          ;(e.target as HTMLInputElement).value = ''
        }}
      />

      {/* Global Toast Feedback */}
      {(feedback || notification) && (
        <div className="fixed bottom-6 right-6 z-50 rounded-xl bg-slate-900/90 px-4 py-2.5 text-xs font-semibold text-white shadow-xl backdrop-blur-md dark:bg-white/95 dark:text-slate-950 animate-in fade-in slide-in-from-bottom-2 duration-150">
          {feedback || notification}
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        t={t}
        theme={theme}
        lang={lang}
        onToggleTheme={toggleTheme}
        onToggleLang={toggleLang}
        onOpenOpenSource={() => setIsOpenSourceOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {!currentImage ? (
          /* Empty / Upload State */
          <div className="flex flex-col gap-8">
            <Hero t={t} />
            <UploadZone
              t={t}
              onImageLoaded={handleImageLoaded}
              onError={showNotification}
            />
          </div>
        ) : (
          /* Active Workspace (Two-column desktop layout, one-column mobile layout) */
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              {/* Left Column (5/12 on large screens): Image preview & Eyedropper */}
              <div className="lg:col-span-5">
                <ImageWorkspace
                  t={t}
                  imageData={currentImage}
                  imgElement={currentImgElement!}
                  onReplaceImageClick={handleReplaceClick}
                  onRemoveImage={handleRemoveImage}
                  onSampleColorPicked={handleSampleColorPicked}
                  onReplaceActiveSwatch={handleReplaceActiveSwatch}
                  onAddSwatch={handleAddSampleSwatch}
                  onCopyText={copyToClipboard}
                  activeSwatchHex={activeColor?.hex}
                />
              </div>

              {/* Right Column (7/12 on large screens): Controls, Swatches, Details */}
              <div className="flex flex-col gap-6 lg:col-span-7">
                {/* Extraction Configuration Controls */}
                <PaletteControls
                  t={t}
                  config={config}
                  onChangeConfig={handleConfigChange}
                  onRegenerate={() => {
                    if (currentImgElement) {
                      performExtraction(currentImgElement, config, false)
                    }
                  }}
                  onReset={resetPalette}
                  isRegenerating={isExtracting}
                />

                {/* Interactive Palette Swatches */}
                <PaletteSwatches
                  t={t}
                  colors={colors}
                  activeId={activeId}
                  onSelectSwatch={setActiveId}
                  onToggleLock={toggleLock}
                  onRemoveSwatch={removeSwatch}
                  onAddSwatch={() => addSwatch()}
                  onMoveSwatch={moveSwatch}
                  onCopyText={copyToClipboard}
                  onOpenExport={() => setIsExportOpen(true)}
                />

                {/* Selected Color Inspector & Contrast Assistance */}
                <ColorDetailPanel
                  t={t}
                  color={activeColor}
                  onCopyText={copyToClipboard}
                />
              </div>
            </div>
          </div>
        )}

        {/* Informational Sections */}
        <div className="mt-16 border-t border-slate-200/60 pt-8 dark:border-slate-800/60">
          <UsageExplanation t={t} />
          <FAQSection t={t} />
        </div>
      </main>

      {/* Modals */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        t={t}
        colors={colors}
        paletteName={currentImage?.name.replace(/\.[^/.]+$/, '') || 'MoPalette'}
        onCopyText={copyToClipboard}
      />

      <OpenSourceModal
        isOpen={isOpenSourceOpen}
        onClose={() => setIsOpenSourceOpen(false)}
        t={t}
      />

      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        t={t}
      />

      {/* Footer */}
      <Footer
        t={t}
        onOpenOpenSource={() => setIsOpenSourceOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />
    </div>
  )
}

export default App
