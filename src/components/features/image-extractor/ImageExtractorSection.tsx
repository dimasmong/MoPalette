import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { usePalette } from '@/context/PaletteContext';
import { useToast } from '@/components/common/Toast';
import { SAMPLE_IMAGES } from '@/lib/image/samples';
import { extractColorsFromImage, samplePixelFromImage } from '@/lib/image/extractor';
import { ExtractedColor, ExtractionMethod, ImageSortMode, SampleImage } from '@/types';
import {
  UploadCloud,
  RefreshCw,
  Pipette,
  Copy,
  Sliders,
  Send,
  X,
} from 'lucide-react';

interface ImageExtractorSectionProps {
  onSendToGenerator: () => void;
}

export const ImageExtractorSection: React.FC<ImageExtractorSectionProps> = ({
  onSendToGenerator,
}) => {
  const { t } = useLanguage();
  const { setPaletteFromColors } = usePalette();
  const { showToast } = useToast();

  const [imageSrc, setImageSrc] = useState<string | null>('/samples/nature-landscape.svg');
  const [imageName, setImageName] = useState<string>('nature-landscape.svg');
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number }>({
    width: 800,
    height: 600,
  });

  // Settings
  const [method, setMethod] = useState<ExtractionMethod>('dominant');
  const [sortMode, setSortMode] = useState<ImageSortMode>('prominence');
  const [colorCount, setColorCount] = useState<number>(6);
  const [ignoreNearWhite, setIgnoreNearWhite] = useState<boolean>(true);
  const [ignoreNearBlack, setIgnoreNearBlack] = useState<boolean>(true);
  const [removeDuplicates, setRemoveDuplicates] = useState<boolean>(true);

  // Results
  const [extractedColors, setExtractedColors] = useState<ExtractedColor[]>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [eyedropperColor, setEyedropperColor] = useState<string | null>(null);

  // Ref
  const imageElementRef = useRef<HTMLImageElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const activeBlobUrlRef = useRef<string | null>(null);

  // Clean up object URLs
  useEffect(() => {
    return () => {
      if (activeBlobUrlRef.current) {
        URL.revokeObjectURL(activeBlobUrlRef.current);
      }
    };
  }, []);

  // Perform extraction on loaded image
  const runExtraction = useCallback(() => {
    if (!imageElementRef.current) return;
    setIsProcessing(true);
    setErrorMsg(null);

    // Give UI a tick to show loading state if high-res
    setTimeout(() => {
      try {
        if (!imageElementRef.current) return;
        const results = extractColorsFromImage({
          imageElement: imageElementRef.current,
          maxColors: colorCount,
          method,
          sortMode,
          ignoreNearWhite,
          ignoreNearBlack,
          removeDuplicates,
        });

        if (results.length === 0) {
          setErrorMsg(t('extractor.readError'));
        } else {
          setExtractedColors(results);
        }
      } catch (err) {
        setErrorMsg(t('extractor.readError'));
      } finally {
        setIsProcessing(false);
      }
    }, 40);
  }, [colorCount, method, sortMode, ignoreNearWhite, ignoreNearBlack, removeDuplicates, t]);

  // Handle image load
  const handleImageLoaded = () => {
    if (imageElementRef.current) {
      setImageDimensions({
        width: imageElementRef.current.naturalWidth,
        height: imageElementRef.current.naturalHeight,
      });
      runExtraction();
    }
  };

  // Re-run extraction when settings change
  useEffect(() => {
    if (imageSrc) {
      runExtraction();
    }
  }, [method, sortMode, colorCount, ignoreNearWhite, ignoreNearBlack, removeDuplicates, runExtraction, imageSrc]);

  // Load a file
  const handleFileChange = (file: File) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/avif', 'image/svg+xml'];
    if (!validTypes.includes(file.type) && !file.name.match(/\.(jpe?g|png|webp|avif|svg)$/i)) {
      setErrorMsg(t('extractor.unsupportedFormat'));
      showToast(t('extractor.unsupportedFormat'), 'error');
      return;
    }

    if (activeBlobUrlRef.current) {
      URL.revokeObjectURL(activeBlobUrlRef.current);
    }

    const objectUrl = URL.createObjectURL(file);
    activeBlobUrlRef.current = objectUrl;
    setImageName(file.name);
    setImageSrc(objectUrl);
    setErrorMsg(null);
  };

  // Drag and drop handlers
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  // Clipboard paste listener
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (e.clipboardData && e.clipboardData.files && e.clipboardData.files.length > 0) {
        const file = e.clipboardData.files[0];
        if (file.type.startsWith('image/')) {
          e.preventDefault();
          handleFileChange(file);
          showToast('Image pasted from clipboard.');
        }
      }
    };

    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, []);

  // Sample image selection
  const handleSelectSample = (sample: SampleImage) => {
    if (activeBlobUrlRef.current) {
      URL.revokeObjectURL(activeBlobUrlRef.current);
      activeBlobUrlRef.current = null;
    }
    setImageName(sample.id);
    setImageSrc(sample.url);
    setErrorMsg(null);
  };

  // Reset image
  const handleClearImage = () => {
    if (activeBlobUrlRef.current) {
      URL.revokeObjectURL(activeBlobUrlRef.current);
      activeBlobUrlRef.current = null;
    }
    setImageSrc(null);
    setExtractedColors([]);
  };

  // Eyedropper click on image
  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!imageElementRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;

    try {
      const sampledHex = samplePixelFromImage(imageElementRef.current, relX, relY);
      setEyedropperColor(sampledHex);
      navigator.clipboard.writeText(sampledHex);
      showToast(t('extractor.pixelSampled', { hex: sampledHex }));
    } catch {
      // Ignored
    }
  };

  // Send extracted palette to generator
  const handleSendToGenerator = () => {
    if (extractedColors.length === 0) return;
    setPaletteFromColors(
      extractedColors.map((c) => ({
        id: `extracted-${c.hex}-${Date.now()}`,
        hex: c.hex,
        locked: false,
        name: c.name,
      })),
      `Extracted: ${imageName}`
    );
    showToast(t('common.paletteCopied'));
    onSendToGenerator();
  };

  return (
    <section className="w-full space-y-8 animate-in fade-in duration-300">
      {/* Header Info */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-light-text dark:text-dark-text tracking-tight">
          {t('extractor.title')}
        </h2>
        <p className="mt-2 text-sm text-light-textSecondary dark:text-dark-textSecondary">
          {t('extractor.subtitle')}
        </p>
      </div>

      {/* Main Extractor Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Image Dropzone & Preview (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {imageSrc ? (
            /* Active Image Preview Card */
            <div className="p-4 sm:p-5 rounded-2xl glass-card bg-light-bg/85 dark:bg-dark-bg/85 border border-light-glassBorder dark:border-dark-glassBorder shadow-sm space-y-4">
              <div className="flex items-center justify-between text-xs text-light-textSecondary dark:text-dark-textSecondary pb-2 border-b border-light-border dark:border-dark-border">
                <span className="font-semibold truncate max-w-[200px] sm:max-w-[320px]">
                  {t('extractor.imageInfo', {
                    name: imageName,
                    width: imageDimensions.width,
                    height: imageDimensions.height,
                  })}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="font-semibold text-brand hover:underline"
                  >
                    {t('extractor.replaceImage')}
                  </button>
                  <span>•</span>
                  <button
                    onClick={handleClearImage}
                    className="font-semibold text-red-500 hover:underline"
                  >
                    {t('extractor.clearImage')}
                  </button>
                </div>
              </div>

              {/* Eyedropper Hint Pill */}
              <div className="flex items-center justify-between px-3 py-1.5 rounded-xl bg-brand/10 dark:bg-brand/10 text-xs text-brand-darkText dark:text-brand font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <Pipette className="w-3.5 h-3.5 text-brand" />
                  <span>{t('extractor.eyedropperHint')}</span>
                </span>
                {eyedropperColor && (
                  <span className="inline-flex items-center gap-1 font-mono font-bold">
                    <span
                      className="w-3 h-3 rounded-full border border-black/10"
                      style={{ backgroundColor: eyedropperColor }}
                    />
                    {eyedropperColor}
                  </span>
                )}
              </div>

              {/* Responsive Image Container */}
              <div className="relative rounded-xl overflow-hidden bg-black/5 dark:bg-black/40 flex items-center justify-center min-h-[260px] max-h-[460px] border border-light-border dark:border-dark-border cursor-crosshair">
                <img
                  ref={imageElementRef}
                  src={imageSrc}
                  alt="Extraction preview"
                  onLoad={handleImageLoaded}
                  onClick={handleImageClick}
                  crossOrigin="anonymous"
                  className="max-w-full max-h-[460px] object-contain select-none transition-all duration-200"
                />
                {isProcessing && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-xs flex items-center justify-center text-white text-sm font-semibold gap-2">
                    <RefreshCw className="w-5 h-5 animate-spin text-brand" />
                    <span>{t('common.loading')}</span>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Upload Dropzone */
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className="p-8 sm:p-12 rounded-2xl glass-card bg-light-bg/70 dark:bg-dark-bg/70 border-2 border-dashed border-light-glassBorder dark:border-dark-glassBorder hover:border-brand dark:hover:border-brand flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-200 min-h-[300px]"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand/20 flex items-center justify-center mb-4 text-brand-darkText dark:text-brand">
                <UploadCloud className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-light-text dark:text-dark-text">
                {t('extractor.dropzoneTitle')}
              </h3>
              <p className="mt-1.5 text-xs text-light-textSecondary dark:text-dark-textSecondary max-w-sm">
                {t('extractor.dropzoneSubtitle')}
              </p>
              <button
                type="button"
                className="mt-5 px-5 py-2.5 rounded-xl bg-brand text-brand-darkText font-bold text-xs shadow-sm hover:bg-brand-hover transition-colors"
              >
                {t('extractor.browseFiles')}
              </button>
              <p className="mt-3 text-[11px] text-light-textSecondary dark:text-dark-textSecondary opacity-75">
                {t('extractor.pasteHint')}
              </p>
            </div>
          )}

          {/* Hidden File Input */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif,image/svg+xml"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFileChange(e.target.files[0]);
              }
            }}
          />

          {/* Error Message if any */}
          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-semibold flex items-center justify-between">
              <span>{errorMsg}</span>
              <button onClick={() => setErrorMsg(null)}>
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Sample Images Gallery */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-light-textSecondary dark:text-dark-textSecondary">
                {t('extractor.samplesTitle')}
              </h3>
              <span className="text-[11px] text-light-textSecondary dark:text-dark-textSecondary">
                {t('extractor.samplesSubtitle')}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {SAMPLE_IMAGES.map((sample) => (
                <button
                  key={sample.id}
                  onClick={() => handleSelectSample(sample)}
                  className={`group relative rounded-xl overflow-hidden border p-2 text-left transition-all duration-200 ${
                    imageName === sample.id || imageName.includes(sample.id)
                      ? 'border-brand ring-2 ring-brand/30 bg-brand/5'
                      : 'border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg hover:border-brand'
                  }`}
                >
                  <div className="w-full h-20 rounded-lg overflow-hidden bg-black/5 dark:bg-black/30 mb-2">
                    <img
                      src={sample.url}
                      alt={t(sample.titleKey)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <h4 className="text-xs font-bold text-light-text dark:text-dark-text truncate">
                    {t(sample.titleKey)}
                  </h4>
                  <p className="text-[10px] text-light-textSecondary dark:text-dark-textSecondary truncate">
                    {t(sample.categoryKey)}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Extraction Controls & Results (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Controls Card */}
          <div className="p-5 rounded-2xl glass-card bg-light-bg/85 dark:bg-dark-bg/85 border border-light-glassBorder dark:border-dark-glassBorder shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-light-text dark:text-dark-text flex items-center gap-2">
              <Sliders className="w-4 h-4 text-brand" />
              <span>{t('extractor.extractSettings')}</span>
            </h3>

            {/* Extraction Method */}
            <div>
              <label className="block text-xs font-semibold text-light-textSecondary dark:text-dark-textSecondary mb-1.5">
                {t('extractor.methodLabel')}
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {(['dominant', 'vibrant', 'muted', 'balanced'] as ExtractionMethod[]).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMethod(m)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                      method === m
                        ? 'bg-brand text-brand-darkText border-brand'
                        : 'border-light-border dark:border-dark-border text-light-text dark:text-dark-text hover:bg-light-bgSecondary dark:hover:bg-dark-bgSecondary'
                    }`}
                  >
                    {t(`extractor.methods.${m}`)}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Mode */}
            <div>
              <label className="block text-xs font-semibold text-light-textSecondary dark:text-dark-textSecondary mb-1.5">
                {t('extractor.sortLabel')}
              </label>
              <select
                value={sortMode}
                onChange={(e) => setSortMode(e.target.value as ImageSortMode)}
                className="w-full px-3 py-2 rounded-xl border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg text-xs font-medium text-light-text dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-brand"
              >
                <option value="prominence">{t('extractor.sortModes.prominence')}</option>
                <option value="luminance">{t('extractor.sortModes.luminance')}</option>
                <option value="hue">{t('extractor.sortModes.hue')}</option>
              </select>
            </div>

            {/* Color Count Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-light-textSecondary dark:text-dark-textSecondary mb-1">
                <span>{t('extractor.colorCountLabel')}</span>
                <span className="font-mono font-bold text-light-text dark:text-dark-text">
                  {colorCount}
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="12"
                value={colorCount}
                onChange={(e) => setColorCount(Number(e.target.value))}
                className="w-full h-2 bg-light-border dark:bg-dark-border rounded-lg appearance-none cursor-pointer accent-brand"
              />
            </div>

            {/* Filters / Toggles */}
            <div className="pt-2 border-t border-light-border/60 dark:border-dark-border/60 space-y-2">
              <label className="flex items-center gap-2.5 text-xs text-light-text dark:text-dark-text cursor-pointer">
                <input
                  type="checkbox"
                  checked={ignoreNearWhite}
                  onChange={(e) => setIgnoreNearWhite(e.target.checked)}
                  className="rounded text-brand focus:ring-brand accent-brand w-4 h-4"
                />
                <span>{t('extractor.ignoreNearWhite')}</span>
              </label>

              <label className="flex items-center gap-2.5 text-xs text-light-text dark:text-dark-text cursor-pointer">
                <input
                  type="checkbox"
                  checked={ignoreNearBlack}
                  onChange={(e) => setIgnoreNearBlack(e.target.checked)}
                  className="rounded text-brand focus:ring-brand accent-brand w-4 h-4"
                />
                <span>{t('extractor.ignoreNearBlack')}</span>
              </label>

              <label className="flex items-center gap-2.5 text-xs text-light-text dark:text-dark-text cursor-pointer">
                <input
                  type="checkbox"
                  checked={removeDuplicates}
                  onChange={(e) => setRemoveDuplicates(e.target.checked)}
                  className="rounded text-brand focus:ring-brand accent-brand w-4 h-4"
                />
                <span>{t('extractor.removeDuplicates')}</span>
              </label>
            </div>
          </div>

          {/* Extracted Swatches List */}
          <div className="p-5 rounded-2xl glass-card bg-light-bg/85 dark:bg-dark-bg/85 border border-light-glassBorder dark:border-dark-glassBorder shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-light-text dark:text-dark-text">
                Extracted Palette ({extractedColors.length})
              </h3>
              {extractedColors.length > 0 && (
                <button
                  onClick={handleSendToGenerator}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand text-brand-darkText font-bold text-xs shadow-sm hover:bg-brand-hover transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t('extractor.sendToGenerator')}</span>
                </button>
              )}
            </div>

            {extractedColors.length === 0 ? (
              <p className="text-xs text-light-textSecondary dark:text-dark-textSecondary py-6 text-center">
                {t('extractor.emptyNotice')}
              </p>
            ) : (
              <div className="space-y-2">
                {extractedColors.map((color, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 rounded-xl border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg hover:border-brand transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="w-9 h-9 rounded-lg shadow-sm border border-black/10 shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <div className="min-w-0">
                        <span className="font-mono text-xs font-bold text-light-text dark:text-dark-text block">
                          {color.hex}
                        </span>
                        <span className="text-[11px] text-light-textSecondary dark:text-dark-textSecondary truncate block">
                          {color.name}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-light-textSecondary dark:text-dark-textSecondary">
                        {t('extractor.occurrence', { percentage: color.percentage })}
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(color.hex);
                          showToast(t('common.colorCopied'));
                        }}
                        className="p-1.5 rounded-lg border border-light-border dark:border-dark-border text-light-textSecondary dark:text-dark-textSecondary hover:text-light-text dark:hover:text-dark-text transition-colors"
                        title={t('common.copy')}
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
