import { rgb, differenceEuclidean } from 'culori';
import { normalizeHex } from './conversions';

interface NamedColor {
  name: string;
  hex: string;
}

// Curated comprehensive palette of standard design and CSS named colors
const COLOR_NAMES: NamedColor[] = [
  { name: 'Pure White', hex: '#FFFFFF' },
  { name: 'Snow', hex: '#FFFAFA' },
  { name: 'Ghost White', hex: '#F8F8FF' },
  { name: 'Floral White', hex: '#FFFAF0' },
  { name: 'Alabaster', hex: '#F2F0EB' },
  { name: 'Ice Blue', hex: '#A1E3F9' },
  { name: 'Light Cyan', hex: '#E0FFFF' },
  { name: 'Pale Turquoise', hex: '#AFEEEE' },
  { name: 'Aquamarine', hex: '#7FFFD4' },
  { name: 'Sky Blue', hex: '#87CEEB' },
  { name: 'Light Sky Blue', hex: '#87CEFA' },
  { name: 'Deep Sky Blue', hex: '#00BFFF' },
  { name: 'Dodger Blue', hex: '#1E90FF' },
  { name: 'Cornflower Blue', hex: '#6495ED' },
  { name: 'Steel Blue', hex: '#4682B4' },
  { name: 'Cerulean', hex: '#007BA7' },
  { name: 'Cobalt Blue', hex: '#0047AB' },
  { name: 'Royal Blue', hex: '#4169E1' },
  { name: 'Navy Blue', hex: '#000080' },
  { name: 'Midnight Blue', hex: '#191970' },
  { name: 'Teal', hex: '#008080' },
  { name: 'Dark Cyan', hex: '#008B8B' },
  { name: 'Cadet Blue', hex: '#5F9EA0' },
  { name: 'Turquoise', hex: '#40E0D0' },
  { name: 'Mint', hex: '#3EB489' },
  { name: 'Sea Green', hex: '#2E8B57' },
  { name: 'Medium Sea Green', hex: '#3CB371' },
  { name: 'Emerald', hex: '#50C878' },
  { name: 'Forest Green', hex: '#228B22' },
  { name: 'Dark Green', hex: '#006400' },
  { name: 'Lime Green', hex: '#32CD32' },
  { name: 'Pale Green', hex: '#98FB98' },
  { name: 'Olive Green', hex: '#556B2F' },
  { name: 'Olive Drab', hex: '#6B8E23' },
  { name: 'Sage', hex: '#9DC183' },
  { name: 'Moss Green', hex: '#8A9A5B' },
  { name: 'Khaki', hex: '#F0E68C' },
  { name: 'Beige', hex: '#F5F5DC' },
  { name: 'Wheat', hex: '#F5DEB3' },
  { name: 'Sand', hex: '#C2B280' },
  { name: 'Bisque', hex: '#FFE4C4' },
  { name: 'Peach', hex: '#FFDAB9' },
  { name: 'Apricot', hex: '#FBCEB1' },
  { name: 'Coral', hex: '#FF7F50' },
  { name: 'Light Salmon', hex: '#FFA07A' },
  { name: 'Salmon', hex: '#FA8072' },
  { name: 'Dark Salmon', hex: '#E9967A' },
  { name: 'Tomato', hex: '#FF6347' },
  { name: 'Tangerine', hex: '#F28500' },
  { name: 'Orange', hex: '#FFA500' },
  { name: 'Dark Orange', hex: '#FF8C00' },
  { name: 'Amber', hex: '#FFBF00' },
  { name: 'Gold', hex: '#FFD700' },
  { name: 'Goldenrod', hex: '#DAA520' },
  { name: 'Ochre', hex: '#CC7722' },
  { name: 'Sienna', hex: '#A0522D' },
  { name: 'Burnt Sienna', hex: '#E97451' },
  { name: 'Terracotta', hex: '#E2725B' },
  { name: 'Rust', hex: '#B7410E' },
  { name: 'Chocolate', hex: '#D2691E' },
  { name: 'Saddle Brown', hex: '#8B4513' },
  { name: 'Coffee', hex: '#6F4E37' },
  { name: 'Espresso', hex: '#3B2F2F' },
  { name: 'Crimson', hex: '#DC143C' },
  { name: 'Firebrick', hex: '#B22222' },
  { name: 'Dark Red', hex: '#8B0000' },
  { name: 'Ruby', hex: '#9B111E' },
  { name: 'Maroon', hex: '#800000' },
  { name: 'Wine', hex: '#722F37' },
  { name: 'Burgundy', hex: '#800020' },
  { name: 'Indian Red', hex: '#CD5C5C' },
  { name: 'Rose', hex: '#FF007F' },
  { name: 'Hot Pink', hex: '#FF69B4' },
  { name: 'Deep Pink', hex: '#FF1493' },
  { name: 'Blush Pink', hex: '#FE828C' },
  { name: 'Light Pink', hex: '#FFB6C1' },
  { name: 'Thistle', hex: '#D8BFD8' },
  { name: 'Plum', hex: '#DDA0DD' },
  { name: 'Violet', hex: '#EE82EE' },
  { name: 'Orchid', hex: '#DA70D6' },
  { name: 'Magenta', hex: '#FF00FF' },
  { name: 'Medium Orchid', hex: '#BA55D3' },
  { name: 'Dark Orchid', hex: '#9932CC' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Indigo', hex: '#4B0082' },
  { name: 'Slate Blue', hex: '#6A5ACD' },
  { name: 'Medium Purple', hex: '#9370DB' },
  { name: 'Lavender', hex: '#E6E6FA' },
  { name: 'Periwinkle', hex: '#CCCCFF' },
  { name: 'Mauve', hex: '#E0B0FF' },
  { name: 'Gainsboro', hex: '#DCDCDC' },
  { name: 'Light Gray', hex: '#D3D3D3' },
  { name: 'Silver', hex: '#C0C0C0' },
  { name: 'Dark Gray', hex: '#A9A9A9' },
  { name: 'Gray', hex: '#808080' },
  { name: 'Dim Gray', hex: '#696969' },
  { name: 'Light Slate Gray', hex: '#778899' },
  { name: 'Slate Gray', hex: '#708090' },
  { name: 'Dark Slate Gray', hex: '#2F4F4F' },
  { name: 'Charcoal', hex: '#36454F' },
  { name: 'Gunmetal', hex: '#2A3439' },
  { name: 'Deep Navy', hex: '#16242E' },
  { name: 'Obsidian', hex: '#101820' },
  { name: 'Pure Black', hex: '#000000' },
];

/**
 * Returns the nearest human-readable color name for any given hex code
 */
export function getApproximateColorName(hexInput: string): string {
  const hex = normalizeHex(hexInput);
  const targetRgb = rgb(hex);
  if (!targetRgb) return 'Custom Color';

  let bestDistance = Infinity;
  let bestName = 'Color';

  for (const item of COLOR_NAMES) {
    const itemRgb = rgb(item.hex);
    if (!itemRgb) continue;

    const diffFn = differenceEuclidean('rgb');
    const dist = diffFn(targetRgb, itemRgb);

    if (dist < bestDistance) {
      bestDistance = dist;
      bestName = item.name;
      if (dist === 0) break;
    }
  }

  return bestName;
}
