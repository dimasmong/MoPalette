import { ExtractedColor, ExtractionMethod, ImageSortMode } from '@/types';
import { quantizeImageData } from './quantizer';

export interface ImageExtractRequest {
  imageElement: HTMLImageElement | ImageBitmap;
  maxColors: number;
  method: ExtractionMethod;
  sortMode: ImageSortMode;
  ignoreNearWhite: boolean;
  ignoreNearBlack: boolean;
  removeDuplicates: boolean;
  region?: { x: number; y: number; width: number; height: number }; // In relative 0..1 scale
}

/**
 * Renders the image to a canvas (scaled down if necessary for performance) and extracts colors
 */
export function extractColorsFromImage(request: ImageExtractRequest): ExtractedColor[] {
  const {
    imageElement,
    maxColors,
    method,
    sortMode,
    ignoreNearWhite,
    ignoreNearBlack,
    removeDuplicates,
    region,
  } = request;

  const naturalWidth = 'naturalWidth' in imageElement ? imageElement.naturalWidth : imageElement.width;
  const naturalHeight = 'naturalHeight' in imageElement ? imageElement.naturalHeight : imageElement.height;

  if (!naturalWidth || !naturalHeight) {
    return [];
  }

  // Downsample to max dimension 600px for speed & low memory footprint
  const maxDim = 600;
  const scale = Math.min(1, maxDim / Math.max(naturalWidth, naturalHeight));
  const canvasWidth = Math.max(1, Math.round(naturalWidth * scale));
  const canvasHeight = Math.max(1, Math.round(naturalHeight * scale));

  const canvas = document.createElement('canvas');
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });

  if (!ctx) return [];

  ctx.drawImage(imageElement, 0, 0, canvasWidth, canvasHeight);

  // Region support
  let extractX = 0;
  let extractY = 0;
  let extractW = canvasWidth;
  let extractH = canvasHeight;

  if (region) {
    extractX = Math.max(0, Math.min(canvasWidth - 1, Math.round(region.x * canvasWidth)));
    extractY = Math.max(0, Math.min(canvasHeight - 1, Math.round(region.y * canvasHeight)));
    extractW = Math.max(1, Math.min(canvasWidth - extractX, Math.round(region.width * canvasWidth)));
    extractH = Math.max(1, Math.min(canvasHeight - extractY, Math.round(region.height * canvasHeight)));
  }

  const imageData = ctx.getImageData(extractX, extractY, extractW, extractH);

  return quantizeImageData(imageData, {
    maxColors,
    method,
    sortMode,
    ignoreNearWhite,
    ignoreNearBlack,
    removeDuplicates,
    sampleStep: 2,
  });
}

/**
 * Samples a single pixel from the canvas at relative coordinate (x: 0..1, y: 0..1)
 */
export function samplePixelFromImage(
  imageElement: HTMLImageElement | ImageBitmap,
  relX: number,
  relY: number
): string {
  const naturalWidth = 'naturalWidth' in imageElement ? imageElement.naturalWidth : imageElement.width;
  const naturalHeight = 'naturalHeight' in imageElement ? imageElement.naturalHeight : imageElement.height;

  const canvas = document.createElement('canvas');
  canvas.width = naturalWidth;
  canvas.height = naturalHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) return '#A1E3F9';

  ctx.drawImage(imageElement, 0, 0);

  const px = Math.max(0, Math.min(naturalWidth - 1, Math.round(relX * naturalWidth)));
  const py = Math.max(0, Math.min(naturalHeight - 1, Math.round(relY * naturalHeight)));

  const pixel = ctx.getImageData(px, py, 1, 1).data;
  const r = pixel[0];
  const g = pixel[1];
  const b = pixel[2];

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}
