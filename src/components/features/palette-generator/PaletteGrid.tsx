import React from 'react';
import { usePalette } from '@/context/PaletteContext';
import { SwatchItem } from './SwatchItem';
import { TintsAndShadesRow } from './TintsAndShadesRow';
import { ColorItem } from '@/types';

interface PaletteGridProps {
  onOpenEditor: (color: ColorItem) => void;
}

export const PaletteGrid: React.FC<PaletteGridProps> = ({ onOpenEditor }) => {
  const {
    colors,
    toggleLock,
    regenerateSingleSwatch,
    removeSwatch,
    reorderSwatches,
    updateSwatchColor,
  } = usePalette();

  const handleMoveLeft = (index: number) => {
    if (index > 0) {
      reorderSwatches(index, index - 1);
    }
  };

  const handleMoveRight = (index: number) => {
    if (index < colors.length - 1) {
      reorderSwatches(index, index + 1);
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* Primary Swatches Strip */}
      <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row gap-3 sm:gap-4 w-full">
        {colors.map((color, index) => (
          <div key={color.id} className="lg:flex-1 w-full min-w-0">
            <SwatchItem
              color={color}
              index={index}
              totalCount={colors.length}
              onToggleLock={toggleLock}
              onRegenerate={regenerateSingleSwatch}
              onRemove={removeSwatch}
              onMoveLeft={handleMoveLeft}
              onMoveRight={handleMoveRight}
              onOpenEditor={onOpenEditor}
            />
          </div>
        ))}
      </div>

      {/* Integrated 11-step Tonal Scale Columns (OKLCH 50–950) */}
      <TintsAndShadesRow
        colors={colors}
        onApplyShade={updateSwatchColor}
      />
    </div>
  );
};
