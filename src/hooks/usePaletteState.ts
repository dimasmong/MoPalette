import { useCallback, useState } from 'react'
import { createPaletteColor } from '../lib/color/extractor'
import type { ExtractionConfig, PaletteColor, RGB } from '../types'

const DEFAULT_CONFIG: ExtractionConfig = {
  colorCount: 6,
  preset: 'balanced',
  quality: 'balanced',
  colorSpace: 'oklch',
  ignoreTransparent: true,
  compositingBg: '#ffffff',
}

export function usePaletteState() {
  const [colors, setColors] = useState<PaletteColor[]>([])
  const [initialColors, setInitialColors] = useState<PaletteColor[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [config, setConfig] = useState<ExtractionConfig>(DEFAULT_CONFIG)

  // Initialize or re-extract palette
  const setPalette = useCallback((newColors: PaletteColor[], isFreshExtraction = false) => {
    setColors(newColors)
    if (isFreshExtraction) {
      setInitialColors(newColors)
    }
    setActiveId((prev) => {
      if (prev && newColors.some((c) => c.id === prev)) {
        return prev
      }
      return newColors[0]?.id || null
    })
  }, [])

  // Toggle lock state
  const toggleLock = useCallback((id: string) => {
    setColors((prev) =>
      prev.map((col) => (col.id === id ? { ...col, locked: !col.locked } : col))
    )
  }, [])

  // Remove a swatch (minimum 2 swatches preserved)
  const removeSwatch = useCallback((id: string) => {
    setColors((prev) => {
      if (prev.length <= 2) return prev
      const filtered = prev.filter((col) => col.id !== id)
      return filtered
    })
    setActiveId((prev) => {
      if (prev === id) {
        return colors.find((c) => c.id !== id)?.id || null
      }
      return prev
    })
  }, [colors])

  // Add a new swatch (maximum 20 swatches)
  const addSwatch = useCallback((rgb?: RGB) => {
    setColors((prev) => {
      if (prev.length >= 20) return prev
      const newColorRgb: RGB = rgb || { r: 124, g: 58, b: 237 }
      const newColor = createPaletteColor(newColorRgb, {
        isManual: true,
        role: 'Manual',
        population: 0,
        proportion: 0,
      })
      return [...prev, newColor]
    })
  }, [])

  // Replace a swatch with a new color
  const replaceSwatch = useCallback((id: string, newRgb: RGB) => {
    setColors((prev) =>
      prev.map((col) => {
        if (col.id !== id) return col
        return createPaletteColor(newRgb, {
          id: col.id,
          locked: col.locked,
          isManual: true,
          role: 'Manual',
          population: 0,
          proportion: 0,
        })
      })
    )
  }, [])

  // Move swatch for reordering
  const moveSwatch = useCallback((fromIndex: number, toIndex: number) => {
    setColors((prev) => {
      if (
        fromIndex < 0 ||
        fromIndex >= prev.length ||
        toIndex < 0 ||
        toIndex >= prev.length ||
        fromIndex === toIndex
      ) {
        return prev
      }
      const updated = [...prev]
      const [moved] = updated.splice(fromIndex, 1)
      updated.splice(toIndex, 0, moved)
      return updated
    })
  }, [])

  // Reset to original extraction
  const resetPalette = useCallback(() => {
    if (initialColors.length > 0) {
      setColors(initialColors)
      setActiveId(initialColors[0]?.id || null)
    }
  }, [initialColors])

  // Update configuration
  const updateConfig = useCallback((partial: Partial<ExtractionConfig>) => {
    setConfig((prev) => ({ ...prev, ...partial }))
  }, [])

  // Active color helper
  const activeColor = colors.find((c) => c.id === activeId) || colors[0] || null

  return {
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
  }
}
