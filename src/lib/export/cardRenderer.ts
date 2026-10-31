import { ColorItem, CardLayout } from '@/types';
import { getReadableTextColor } from '../color/conversions';
import { getApproximateColorName } from '../color/names';

export interface CardRenderOptions {
  layout: CardLayout;
  bgColor: 'transparent' | 'white' | 'dark' | 'brand';
  includeLabels: boolean;
  includeNames: boolean;
  paletteName?: string;
  width?: number;
  height?: number;
}

/**
 * Generates an SVG string representation of the palette card
 */
export function generateSvgCard(colors: ColorItem[], options: CardRenderOptions): string {
  const {
    layout = 'horizontal',
    bgColor = 'white',
    includeLabels = true,
    includeNames = true,
    paletteName = 'MoPalette',
    width = 1000,
    height = 600,
  } = options;

  let bgFill = '#FFFFFF';
  let titleColor = '#16242E';
  let subtitleColor = '#50616C';

  if (bgColor === 'dark') {
    bgFill = '#101820';
    titleColor = '#F3F8FC';
    subtitleColor = '#B8C7D1';
  } else if (bgColor === 'brand') {
    bgFill = '#F5FAFD';
    titleColor = '#0B2938';
    subtitleColor = '#165573';
  } else if (bgColor === 'transparent') {
    bgFill = 'none';
  }

  const padding = 40;
  const headerHeight = 80;
  const contentWidth = width - padding * 2;
  const contentHeight = height - headerHeight - padding * 2;
  const contentX = padding;
  const contentY = padding + headerHeight;

  let swatchesSvg = '';

  if (layout === 'horizontal') {
    const swatchWidth = contentWidth / colors.length;
    colors.forEach((c, i) => {
      const x = contentX + i * swatchWidth;
      const y = contentY;
      const textColor = getReadableTextColor(c.hex);
      const name = c.name || getApproximateColorName(c.hex);

      swatchesSvg += `
        <rect x="${x}" y="${y}" width="${swatchWidth}" height="${contentHeight}" fill="${c.hex}" />
        ${
          includeLabels
            ? `
          <g transform="translate(${x + swatchWidth / 2}, ${y + contentHeight - 40})">
            <text text-anchor="middle" font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="16" fill="${textColor}">
              ${c.hex}
            </text>
            ${
              includeNames
                ? `<text text-anchor="middle" y="22" font-family="Plus Jakarta Sans, sans-serif" font-size="13" fill="${textColor}" opacity="0.85">${name}</text>`
                : ''
            }
          </g>
        `
            : ''
        }
      `;
    });
  } else if (layout === 'vertical') {
    const swatchHeight = contentHeight / colors.length;
    colors.forEach((c, i) => {
      const x = contentX;
      const y = contentY + i * swatchHeight;
      const textColor = getReadableTextColor(c.hex);
      const name = c.name || getApproximateColorName(c.hex);

      swatchesSvg += `
        <rect x="${x}" y="${y}" width="${contentWidth}" height="${swatchHeight}" fill="${c.hex}" />
        ${
          includeLabels
            ? `
          <g transform="translate(${x + 24}, ${y + swatchHeight / 2 + 6})">
            <text font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="16" fill="${textColor}">
              ${c.hex}
            </text>
            ${
              includeNames
                ? `<text x="90" font-family="Plus Jakarta Sans, sans-serif" font-size="14" fill="${textColor}" opacity="0.85">${name}</text>`
                : ''
            }
          </g>
        `
            : ''
        }
      `;
    });
  } else {
    // Grid layout: 2 columns if <= 6, 3 columns if > 6
    const cols = colors.length > 6 ? 3 : 2;
    const rows = Math.ceil(colors.length / cols);
    const swatchWidth = contentWidth / cols;
    const swatchHeight = contentHeight / rows;

    colors.forEach((c, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = contentX + col * swatchWidth;
      const y = contentY + row * swatchHeight;
      const textColor = getReadableTextColor(c.hex);
      const name = c.name || getApproximateColorName(c.hex);

      swatchesSvg += `
        <rect x="${x}" y="${y}" width="${swatchWidth}" height="${swatchHeight}" fill="${c.hex}" />
        ${
          includeLabels
            ? `
          <g transform="translate(${x + 16}, ${y + swatchHeight - 24})">
            <text font-family="Plus Jakarta Sans, sans-serif" font-weight="700" font-size="15" fill="${textColor}">
              ${c.hex}
            </text>
            ${
              includeNames
                ? `<text y="-18" font-family="Plus Jakarta Sans, sans-serif" font-size="12" fill="${textColor}" opacity="0.85">${name}</text>`
                : ''
            }
          </g>
        `
            : ''
        }
      `;
    });
  }

  return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  ${bgFill !== 'none' ? `<rect width="${width}" height="${height}" fill="${bgFill}"/>` : ''}

  <!-- Header -->
  <g transform="translate(${padding}, ${padding + 28})">
    <circle cx="12" cy="-6" r="12" fill="#A1E3F9" />
    <text x="34" y="0" font-family="Plus Jakarta Sans, sans-serif" font-weight="800" font-size="22" fill="${titleColor}">
      ${paletteName}
    </text>
    <text x="${width - padding * 2}" y="0" text-anchor="end" font-family="Plus Jakarta Sans, sans-serif" font-size="14" font-weight="600" fill="${subtitleColor}">
      MoPalette Color Engine
    </text>
  </g>

  <!-- Color Swatches Container with rounded clip -->
  <clipPath id="cardClip">
    <rect x="${contentX}" y="${contentY}" width="${contentWidth}" height="${contentHeight}" rx="12" ry="12"/>
  </clipPath>
  <g clip-path="url(#cardClip)">
    ${swatchesSvg}
  </g>
</svg>`.trim();
}

/**
 * Draws the palette card to an HTML5 canvas and converts to PNG blob
 */
export async function generatePngBlob(
  colors: ColorItem[],
  options: CardRenderOptions
): Promise<Blob> {
  const width = options.width || 1200;
  const height = options.height || 720;
  const svgString = generateSvgCard(colors, { ...options, width, height });

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Canvas 2D context unavailable');
  }

  return new Promise((resolve, reject) => {
    const img = new Image();
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      canvas.toBlob(
        (blob) => {
          if (blob) resolve(blob);
          else reject(new Error('Failed to generate PNG blob'));
        },
        'image/png'
      );
    };

    img.onerror = (err) => {
      URL.revokeObjectURL(url);
      reject(err);
    };

    img.src = url;
  });
}
