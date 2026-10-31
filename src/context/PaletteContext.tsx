import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import { ColorItem, GenerationMood, HarmonyMode } from '@/types';
import {
  generatePalette,
  regenerateSingleColor,
  generateRandomSeed,
} from '@/lib/color/generation';
import { normalizeHex, isValidHex } from '@/lib/color/conversions';
import { getApproximateColorName } from '@/lib/color/names';
import { addToHistory } from '@/lib/storage/storage';
import { useToast } from '@/components/common/Toast';
import { useLanguage } from '@/context/LanguageContext';

interface PaletteContextType {
  colors: ColorItem[];
  paletteName: string;
  setPaletteName: (name: string) => void;
  mood: GenerationMood;
  setMood: (mood: GenerationMood) => void;
  harmony: HarmonyMode;
  setHarmony: (harmony: HarmonyMode) => void;
  baseColor: string;
  setBaseColor: (hex: string) => void;
  seed: string;
  setSeed: (seed: string) => void;
  randomizeSeed: () => void;
  paletteSize: number;
  setPaletteSize: (size: number) => void;

  generateNewPalette: (overrideSeed?: string) => void;
  regenerateUnlocked: () => void;
  unlockAllAndGenerate: () => void;
  regenerateSingleSwatch: (id: string) => void;
  toggleLock: (id: string) => void;
  updateSwatchColor: (id: string, newHex: string) => void;
  addSwatch: (hex?: string) => void;
  removeSwatch: (id: string) => void;
  reorderSwatches: (startIndex: number, endIndex: number) => void;
  shuffleUnlocked: () => void;
  reversePalette: () => void;

  canUndo: boolean;
  canRedo: boolean;
  undo: () => void;
  redo: () => void;
  resetPalette: () => void;

  setPaletteFromColors: (newColors: (string | ColorItem)[], name?: string) => void;

  activeColorForEditor: ColorItem | null;
  setActiveColorForEditor: (color: ColorItem | null) => void;
}

const PaletteContext = createContext<PaletteContextType | undefined>(undefined);

// Default initial palette featuring #A1E3F9 primary brand color
const INITIAL_COLORS: ColorItem[] = [
  { id: 'init-1', hex: '#A1E3F9', locked: false, name: 'Ice Blue' },
  { id: 'init-2', hex: '#73D3F5', locked: false, name: 'Sky Blue' },
  { id: 'init-3', hex: '#3BBEEF', locked: false, name: 'Deep Sky Blue' },
  { id: 'init-4', hex: '#1EA0D5', locked: false, name: 'Cerulean' },
  { id: 'init-5', hex: '#16242E', locked: false, name: 'Deep Navy' },
];

export const PaletteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { showToast } = useToast();
  const { t } = useLanguage();

  const [colors, setColors] = useState<ColorItem[]>(INITIAL_COLORS);
  const [paletteName, setPaletteName] = useState<string>('MoPalette Ice Breeze');
  const [mood, setMood] = useState<GenerationMood>('random');
  const [harmony, setHarmony] = useState<HarmonyMode>('none');
  const [baseColor, setBaseColor] = useState<string>('#3BBEEF');
  const [seed, setSeed] = useState<string>(generateRandomSeed);
  const [paletteSize, setPaletteSizeState] = useState<number>(5);

  // Undo / Redo history stacks
  const [history, setHistory] = useState<ColorItem[][]>([INITIAL_COLORS]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);

  // Active color for detailed editor modal
  const [activeColorForEditor, setActiveColorForEditor] = useState<ColorItem | null>(null);

  // Push new state to undo stack
  const pushToUndoStack = useCallback((newColors: ColorItem[]) => {
    setHistory((prev) => {
      const upToCurrent = prev.slice(0, historyIndex + 1);
      return [...upToCurrent, newColors].slice(-30); // keep up to 30 states
    });
    setHistoryIndex((prev) => Math.min(prev + 1, 29));
  }, [historyIndex]);

  // Check URL hash for shared palette on initial mount
  useEffect(() => {
    try {
      const hash = window.location.hash;
      if (hash && hash.includes('palette=')) {
        const match = hash.match(/palette=([0-9a-fA-F-]+)/);
        if (match && match[1]) {
          const hexList = match[1].split('-').filter((h) => isValidHex(h));
          if (hexList.length >= 2) {
            const loaded: ColorItem[] = hexList.slice(0, 12).map((h, i) => {
              const fullHex = normalizeHex(h);
              return {
                id: `shared-${i}`,
                hex: fullHex,
                locked: false,
                name: getApproximateColorName(fullHex),
              };
            });
            setColors(loaded);
            setPaletteSizeState(loaded.length);
            setPaletteName('Shared Palette');
            setHistory([loaded]);
            setHistoryIndex(0);
          }
        }
      }
    } catch {
      // Fallback silently to initial palette
    }
  }, []);

  // Update history record in local storage
  const recordToStorageHistory = useCallback((colorsToRecord: ColorItem[], name: string) => {
    addToHistory({
      id: `history-${Date.now()}`,
      name,
      colors: colorsToRecord,
      createdAt: Date.now(),
    });
  }, []);

  // Generate complete or unlocked
  const generateNewPalette = useCallback(
    (overrideSeed?: string) => {
      // If ALL colors are locked, alert user that no unlocked colors exist to regenerate
      if (colors.length > 0 && colors.every((c) => c.locked)) {
        showToast(t('generator.allLockedNotice'), 'info');
        return;
      }

      const currentSeed = overrideSeed || generateRandomSeed();
      setSeed(currentSeed);

      const generated = generatePalette({
        mood,
        harmony,
        baseColor: mood === 'custom' ? baseColor : undefined,
        seed: currentSeed,
        count: paletteSize,
        currentColors: colors,
      });

      setColors(generated);
      pushToUndoStack(generated);
      recordToStorageHistory(generated, paletteName);
    },
    [mood, harmony, baseColor, paletteSize, colors, paletteName, pushToUndoStack, recordToStorageHistory, showToast, t]
  );

  const regenerateUnlocked = useCallback(() => {
    // If ALL colors are locked, alert user that no unlocked colors exist to regenerate
    if (colors.length > 0 && colors.every((c) => c.locked)) {
      showToast(t('generator.allLockedNotice'), 'info');
      return;
    }

    const currentSeed = generateRandomSeed();
    setSeed(currentSeed);

    const generated = generatePalette({
      mood,
      harmony,
      baseColor: mood === 'custom' ? baseColor : undefined,
      seed: currentSeed,
      count: colors.length,
      currentColors: colors,
    });

    setColors(generated);
    pushToUndoStack(generated);
  }, [mood, harmony, baseColor, colors, pushToUndoStack, showToast, t]);

  const unlockAllAndGenerate = useCallback(() => {
    const currentSeed = generateRandomSeed();
    setSeed(currentSeed);

    // 1. Unlock every locked swatch
    const unlocked = colors.map((c) => ({ ...c, locked: false }));

    // 2. Generate new colors for all swatches (none preserved)
    const generated = generatePalette({
      mood,
      harmony,
      baseColor: mood === 'custom' ? baseColor : undefined,
      seed: currentSeed,
      count: colors.length,
      currentColors: unlocked,
    });

    // 3. Ensure all generated colors are explicitly unlocked
    const allUnlocked = generated.map((c) => ({ ...c, locked: false }));

    setColors(allUnlocked);
    pushToUndoStack(allUnlocked);
    recordToStorageHistory(allUnlocked, paletteName);
    showToast(t('generator.unlockedAndGeneratedNotice') || 'Unlocked all swatches and generated new colors');
  }, [mood, harmony, baseColor, colors, paletteName, pushToUndoStack, recordToStorageHistory, showToast, t]);

  const regenerateSingleSwatch = useCallback(
    (id: string) => {
      setColors((prev) => {
        const next = prev.map((item) => {
          if (item.id === id && !item.locked) {
            return regenerateSingleColor(item, mood);
          }
          return item;
        });
        pushToUndoStack(next);
        return next;
      });
    },
    [mood, pushToUndoStack]
  );

  const toggleLock = useCallback((id: string) => {
    setColors((prev) => {
      const next = prev.map((item) => (item.id === id ? { ...item, locked: !item.locked } : item));
      setHistory((h) => {
        const copy = [...h];
        if (copy[historyIndex]) {
          copy[historyIndex] = next;
        }
        return copy;
      });
      return next;
    });
  }, [historyIndex]);

  const updateSwatchColor = useCallback(
    (id: string, newHex: string) => {
      if (!isValidHex(newHex)) return;
      const normalized = normalizeHex(newHex);
      setColors((prev) => {
        const next = prev.map((item) =>
          item.id === id
            ? { ...item, hex: normalized, name: getApproximateColorName(normalized) }
            : item
        );
        pushToUndoStack(next);
        return next;
      });
      // Also update activeColorForEditor if currently selected
      setActiveColorForEditor((prev) =>
        prev && prev.id === id
          ? { ...prev, hex: normalized, name: getApproximateColorName(normalized) }
          : prev
      );
    },
    [pushToUndoStack]
  );

  const addSwatch = useCallback(
    (hex?: string) => {
      if (colors.length >= 12) return;
      const baseHex = hex && isValidHex(hex) ? normalizeHex(hex) : normalizeHex(baseColor);
      const newSwatch: ColorItem = {
        id: `swatch-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
        hex: baseHex,
        locked: false,
        name: getApproximateColorName(baseHex),
      };
      const next = [...colors, newSwatch];
      setColors(next);
      setPaletteSizeState(next.length);
      pushToUndoStack(next);
    },
    [colors, baseColor, pushToUndoStack]
  );

  const removeSwatch = useCallback(
    (id: string) => {
      if (colors.length <= 2) return;
      const next = colors.filter((c) => c.id !== id);
      setColors(next);
      setPaletteSizeState(next.length);
      pushToUndoStack(next);
    },
    [colors, pushToUndoStack]
  );

  const reorderSwatches = useCallback(
    (startIndex: number, endIndex: number) => {
      if (
        startIndex < 0 ||
        startIndex >= colors.length ||
        endIndex < 0 ||
        endIndex >= colors.length ||
        startIndex === endIndex
      ) {
        return;
      }
      const next = [...colors];
      const [removed] = next.splice(startIndex, 1);
      next.splice(endIndex, 0, removed);
      setColors(next);
      pushToUndoStack(next);
    },
    [colors, pushToUndoStack]
  );

  const shuffleUnlocked = useCallback(() => {
    const unlocked = colors.filter((c) => !c.locked);
    if (unlocked.length <= 1) return;

    // Fisher-Yates shuffle
    const shuffledUnlocked = [...unlocked];
    for (let i = shuffledUnlocked.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledUnlocked[i], shuffledUnlocked[j]] = [shuffledUnlocked[j], shuffledUnlocked[i]];
    }

    let uIndex = 0;
    const next = colors.map((c) => {
      if (c.locked) return c;
      const replacement = shuffledUnlocked[uIndex++];
      return { ...c, hex: replacement.hex, name: replacement.name };
    });

    setColors(next);
    pushToUndoStack(next);
  }, [colors, pushToUndoStack]);

  const reversePalette = useCallback(() => {
    const next = [...colors].reverse();
    setColors(next);
    pushToUndoStack(next);
  }, [colors, pushToUndoStack]);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      const prevColors = history[newIndex];
      setColors(prevColors);
      setPaletteSizeState(prevColors.length);
    }
  }, [historyIndex, history]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      const nextColors = history[newIndex];
      setColors(nextColors);
      setPaletteSizeState(nextColors.length);
    }
  }, [historyIndex, history]);

  const resetPalette = useCallback(() => {
    // Reset to brand default palette, but all swatches unlocked!
    setColors(INITIAL_COLORS);
    setPaletteSizeState(INITIAL_COLORS.length);
    setPaletteName('MoPalette Ice Breeze');
    setMood('random');
    setHarmony('none');
    setBaseColor('#3BBEEF');
    pushToUndoStack(INITIAL_COLORS);
  }, [pushToUndoStack]);

  const setPaletteFromColors = useCallback(
    (newColors: (string | ColorItem)[], name: string = 'Imported Palette') => {
      const formatted: ColorItem[] = newColors.map((item, i) => {
        if (typeof item === 'string') {
          const hex = normalizeHex(item);
          return {
            id: `color-${Date.now()}-${i}`,
            hex,
            locked: false,
            name: getApproximateColorName(hex),
          };
        }
        return {
          ...item,
          hex: normalizeHex(item.hex),
          name: item.name || getApproximateColorName(item.hex),
        };
      });

      const clamped = formatted.slice(0, 12);
      setColors(clamped);
      setPaletteSizeState(clamped.length);
      setPaletteName(name);
      pushToUndoStack(clamped);
      recordToStorageHistory(clamped, name);
    },
    [pushToUndoStack, recordToStorageHistory]
  );

  const randomizeSeed = useCallback(() => {
    const newSeed = generateRandomSeed();
    setSeed(newSeed);
    generateNewPalette(newSeed);
  }, [generateNewPalette]);

  const setPaletteSize = useCallback(
    (size: number) => {
      const clamped = Math.max(2, Math.min(12, size));
      setPaletteSizeState(clamped);
      if (clamped > colors.length) {
        // Expand
        const addedCount = clamped - colors.length;
        const newItems: ColorItem[] = [];
        for (let i = 0; i < addedCount; i++) {
          newItems.push({
            id: `added-${Date.now()}-${i}`,
            hex: normalizeHex(baseColor),
            locked: false,
            name: getApproximateColorName(baseColor),
          });
        }
        const next = [...colors, ...newItems];
        setColors(next);
        pushToUndoStack(next);
      } else if (clamped < colors.length) {
        // Shrink
        const next = colors.slice(0, clamped);
        setColors(next);
        pushToUndoStack(next);
      }
    },
    [colors, baseColor, pushToUndoStack]
  );

  // Global spacebar keyboard shortcut for palette generation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input, textarea, or contentEditable
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable ||
        target.getAttribute('role') === 'textbox'
      ) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        generateNewPalette();
      } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
          redo();
        } else {
          undo();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [generateNewPalette, undo, redo]);

  return (
    <PaletteContext.Provider
      value={{
        colors,
        paletteName,
        setPaletteName,
        mood,
        setMood,
        harmony,
        setHarmony,
        baseColor,
        setBaseColor,
        seed,
        setSeed,
        randomizeSeed,
        paletteSize,
        setPaletteSize,
        generateNewPalette,
        regenerateUnlocked,
        unlockAllAndGenerate,
        regenerateSingleSwatch,
        toggleLock,
        updateSwatchColor,
        addSwatch,
        removeSwatch,
        reorderSwatches,
        shuffleUnlocked,
        reversePalette,
        canUndo: historyIndex > 0,
        canRedo: historyIndex < history.length - 1,
        undo,
        redo,
        resetPalette,
        setPaletteFromColors,
        activeColorForEditor,
        setActiveColorForEditor,
      }}
    >
      {children}
    </PaletteContext.Provider>
  );
};

export function usePalette(): PaletteContextType {
  const context = useContext(PaletteContext);
  if (!context) {
    throw new Error('usePalette must be used within a PaletteProvider');
  }
  return context;
}
