import React, { useState } from 'react';
import { ColorItem } from '@/types';
import { getReadableTextColor } from '@/lib/color/conversions';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/components/common/Toast';
import {
  Lock,
  Unlock,
  RefreshCw,
  X,
  Sliders,
  ChevronLeft,
  ChevronRight,
  Copy,
  Check,
} from 'lucide-react';

interface SwatchItemProps {
  color: ColorItem;
  index: number;
  totalCount: number;
  onToggleLock: (id: string) => void;
  onRegenerate: (id: string) => void;
  onRemove: (id: string) => void;
  onMoveLeft: (index: number) => void;
  onMoveRight: (index: number) => void;
  onOpenEditor: (color: ColorItem) => void;
}

export const SwatchItem: React.FC<SwatchItemProps> = ({
  color,
  index,
  totalCount,
  onToggleLock,
  onRegenerate,
  onRemove,
  onMoveLeft,
  onMoveRight,
  onOpenEditor,
}) => {
  const { t } = useLanguage();
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);

  const textColor = getReadableTextColor(color.hex);
  const isLightText = textColor === '#FFFFFF';

  const handleCopyHex = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(color.hex);
    setCopied(true);
    showToast(t('common.colorCopied'));
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      className="group relative flex flex-col justify-between p-4 sm:p-5 rounded-2xl transition-all duration-300 min-h-[220px] sm:min-h-[380px] shadow-sm hover:shadow-lg border border-black/5 dark:border-white/10 select-none overflow-hidden"
      style={{ backgroundColor: color.hex }}
    >
      {/* Top toolbar actions */}
      <div className="flex items-center justify-between gap-1 z-10">
        {/* Lock / Unlock Toggle */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleLock(color.id);
          }}
          title={color.locked ? t('common.unlockColor') : t('common.lockColor')}
          aria-label={color.locked ? t('common.unlockColor') : t('common.lockColor')}
          className={`transition-all duration-200 ${
            color.locked
              ? 'flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-400 text-stone-950 font-bold shadow-md ring-2 ring-black/20 hover:bg-amber-300'
              : `p-2 rounded-xl backdrop-blur-md ${
                  isLightText
                    ? 'bg-black/15 text-white/80 hover:bg-black/30 hover:text-white'
                    : 'bg-white/30 text-black/80 hover:bg-white/50 hover:text-black'
                }`
          }`}
        >
          {color.locked ? (
            <>
              <Lock className="w-3.5 h-3.5 fill-stone-950 shrink-0" />
              <span className="text-[11px] font-extrabold uppercase tracking-wider">
                {t('generator.locked')}
              </span>
            </>
          ) : (
            <Unlock className="w-4 h-4" />
          )}
        </button>

        {/* Action icons group */}
        <div className="flex items-center gap-1 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
          {/* Regenerate Single */}
          {!color.locked && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRegenerate(color.id);
              }}
              title={t('common.edit')}
              aria-label="Regenerate single color"
              className={`p-2 rounded-xl backdrop-blur-md transition-all ${
                isLightText
                  ? 'bg-black/20 text-white/90 hover:bg-black/40 hover:text-white'
                  : 'bg-white/40 text-black/90 hover:bg-white/60 hover:text-black'
              }`}
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Detailed Color Editor */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenEditor(color);
            }}
            title={t('editor.title')}
            aria-label="Edit color in detailed panel"
            className={`p-2 rounded-xl backdrop-blur-md transition-all ${
              isLightText
                ? 'bg-black/20 text-white/90 hover:bg-black/40 hover:text-white'
                : 'bg-white/40 text-black/90 hover:bg-white/60 hover:text-black'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
          </button>

          {/* Remove Swatch (if count > 2) */}
          {totalCount > 2 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemove(color.id);
              }}
              title={t('common.removeColor')}
              aria-label={t('common.removeColor')}
              className={`p-2 rounded-xl backdrop-blur-md transition-all ${
                isLightText
                  ? 'bg-black/20 text-white/90 hover:bg-red-600 hover:text-white'
                  : 'bg-white/40 text-black/90 hover:bg-red-600 hover:text-white'
              }`}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Middle hover reorder arrows */}
      <div className="hidden sm:flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity z-10">
        {index > 0 ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMoveLeft(index);
            }}
            title="Move left"
            aria-label="Move color left"
            className={`p-1.5 rounded-lg backdrop-blur-md transition-all ${
              isLightText ? 'bg-black/25 text-white hover:bg-black/40' : 'bg-white/50 text-black hover:bg-white/70'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        ) : (
          <span />
        )}

        {index < totalCount - 1 ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMoveRight(index);
            }}
            title="Move right"
            aria-label="Move color right"
            className={`p-1.5 rounded-lg backdrop-blur-md transition-all ${
              isLightText ? 'bg-black/25 text-white hover:bg-black/40' : 'bg-white/50 text-black hover:bg-white/70'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <span />
        )}
      </div>

      {/* Bottom Color Info & Click to Copy */}
      <div className="z-10 flex flex-col items-center sm:items-start text-center sm:text-left">
        {color.name && (
          <span
            className="text-xs font-semibold tracking-wide uppercase opacity-80 mb-0.5"
            style={{ color: textColor }}
          >
            {color.name}
          </span>
        )}

        <button
          onClick={handleCopyHex}
          className="group/btn flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono font-bold text-base sm:text-lg tracking-wider transition-all backdrop-blur-md hover:scale-105"
          style={{
            color: textColor,
            backgroundColor: isLightText ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.4)',
          }}
          title={t('common.copy')}
        >
          <span>{color.hex}</span>
          {copied ? (
            <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
          ) : (
            <Copy className="w-3.5 h-3.5 opacity-60 group-hover/btn:opacity-100" />
          )}
        </button>
      </div>
    </div>
  );
};
