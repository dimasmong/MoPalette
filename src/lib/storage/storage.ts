import { Palette, ColorItem } from '@/types';
import { normalizeHex, isValidHex } from '../color/conversions';

const SAVED_PALETTES_KEY = 'mopalette_saved_palettes_v1';
const HISTORY_KEY = 'mopalette_history_v1';
const THEME_KEY = 'mopalette_theme_pref';
const LANG_KEY = 'mopalette_lang_pref';

/**
 * Loads saved palettes from local storage safely
 */
export function getSavedPalettes(): Palette[] {
  try {
    const raw = localStorage.getItem(SAVED_PALETTES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isValidPaletteObject);
  } catch {
    return [];
  }
}

/**
 * Saves a palette to persistent storage
 */
export function savePalette(palette: Palette): Palette[] {
  try {
    const current = getSavedPalettes();
    const index = current.findIndex((p) => p.id === palette.id);
    let updated: Palette[];
    if (index >= 0) {
      updated = [...current];
      updated[index] = palette;
    } else {
      updated = [palette, ...current];
    }
    localStorage.setItem(SAVED_PALETTES_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return getSavedPalettes();
  }
}

/**
 * Deletes a saved palette by ID
 */
export function deleteSavedPalette(id: string): Palette[] {
  try {
    const current = getSavedPalettes();
    const updated = current.filter((p) => p.id !== id);
    localStorage.setItem(SAVED_PALETTES_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return getSavedPalettes();
  }
}

/**
 * Toggles favorite state of a saved palette
 */
export function toggleFavoritePalette(id: string): Palette[] {
  try {
    const current = getSavedPalettes();
    const updated = current.map((p) => (p.id === id ? { ...p, isFavorite: !p.isFavorite } : p));
    localStorage.setItem(SAVED_PALETTES_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return getSavedPalettes();
  }
}

/**
 * Renames a saved palette
 */
export function renameSavedPalette(id: string, newName: string): Palette[] {
  try {
    const current = getSavedPalettes();
    const updated = current.map((p) => (p.id === id ? { ...p, name: newName.trim() || p.name } : p));
    localStorage.setItem(SAVED_PALETTES_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return getSavedPalettes();
  }
}

/**
 * Gets generation history
 */
export function getHistory(): Palette[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(isValidPaletteObject);
  } catch {
    return [];
  }
}

/**
 * Pushes a newly generated palette to history (keeps last 20)
 */
export function addToHistory(palette: Palette): Palette[] {
  try {
    const current = getHistory();
    // Avoid exact duplicate adjacent history entries
    if (current.length > 0) {
      const lastColors = current[0].colors.map((c) => c.hex).join(',');
      const newColors = palette.colors.map((c) => c.hex).join(',');
      if (lastColors === newColors) return current;
    }

    const updated = [palette, ...current].slice(0, 20);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return getHistory();
  }
}

/**
 * Clears history
 */
export function clearHistory(): void {
  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch {}
}

/**
 * Validates untrusted imported JSON data
 */
export function isValidPaletteObject(item: unknown): item is Palette {
  if (!item || typeof item !== 'object') return false;
  const p = item as Record<string, unknown>;
  if (typeof p.id !== 'string' || typeof p.name !== 'string' || !Array.isArray(p.colors)) {
    return false;
  }
  if (p.colors.length === 0 || p.colors.length > 30) return false;

  for (const c of p.colors) {
    if (!c || typeof c !== 'object') return false;
    const colorObj = c as Record<string, unknown>;
    if (typeof colorObj.hex !== 'string' || !isValidHex(colorObj.hex)) {
      return false;
    }
  }

  return true;
}

/**
 * Imports and validates JSON backup file
 */
export function importPalettesFromJson(jsonString: string): { success: boolean; count: number; error?: string } {
  try {
    const parsed = JSON.parse(jsonString);
    let itemsToImport: Palette[] = [];

    if (Array.isArray(parsed)) {
      itemsToImport = parsed.filter(isValidPaletteObject);
    } else if (parsed && typeof parsed === 'object') {
      // Check if it's a single palette export
      if (isValidPaletteObject(parsed)) {
        itemsToImport = [parsed];
      } else if (Array.isArray(parsed.palettes)) {
        itemsToImport = parsed.palettes.filter(isValidPaletteObject);
      } else if (Array.isArray(parsed.colors)) {
        // Individual color array
        const colors: ColorItem[] = parsed.colors
          .filter((c: unknown) => c && typeof c === 'object' && typeof (c as Record<string, unknown>).hex === 'string' && isValidHex((c as Record<string, unknown>).hex as string))
          .map((c: Record<string, unknown>, i: number) => ({
            id: `imported-${i}`,
            hex: normalizeHex(c.hex as string),
            locked: false,
            name: typeof c.name === 'string' ? c.name : undefined,
          }));

        if (colors.length > 0) {
          itemsToImport = [
            {
              id: `imported-palette-${Date.now()}`,
              name: typeof parsed.name === 'string' ? parsed.name : 'Imported Palette',
              colors,
              createdAt: Date.now(),
            },
          ];
        }
      }
    }

    if (itemsToImport.length === 0) {
      return { success: false, count: 0, error: 'No valid palettes found in this file' };
    }

    const current = getSavedPalettes();
    const existingIds = new Set(current.map((p) => p.id));
    const merged = [...current];

    for (const item of itemsToImport) {
      if (existingIds.has(item.id)) {
        item.id = `palette-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
      }
      merged.unshift(item);
    }

    localStorage.setItem(SAVED_PALETTES_KEY, JSON.stringify(merged));
    return { success: true, count: itemsToImport.length };
  } catch (err) {
    return { success: false, count: 0, error: 'Malformed JSON file' };
  }
}

/**
 * Exports all saved palettes as a backup JSON string
 */
export function exportAllSavedPalettesJson(): string {
  const palettes = getSavedPalettes();
  const exportPayload = {
    app: 'MoPalette',
    version: '1.0.0',
    exportedAt: new Date().toISOString(),
    palettes,
  };
  return JSON.stringify(exportPayload, null, 2);
}

/**
 * Storage helpers for theme and language
 */
export function getSavedTheme(): 'light' | 'dark' {
  try {
    const val = localStorage.getItem(THEME_KEY);
    return val === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

export function saveTheme(theme: 'light' | 'dark'): void {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {}
}

export function getSavedLanguage(): 'en' | 'id' {
  try {
    const val = localStorage.getItem(LANG_KEY);
    return val === 'id' ? 'id' : 'en';
  } catch {
    return 'en';
  }
}

export function saveLanguage(lang: 'en' | 'id'): void {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {}
}
