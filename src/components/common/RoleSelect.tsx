import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
  colorPreview?: string;
  sublabel?: string;
}

interface RoleSelectProps {
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  className?: string;
  ariaLabel?: string;
}

export const RoleSelect: React.FC<RoleSelectProps> = ({
  value,
  options,
  onChange,
  className = '',
  ariaLabel = 'Select option',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);

  const selectedOption = options.find((o) => o.value.toLowerCase() === value.toLowerCase()) || {
    value,
    label: value,
    colorPreview: value,
  };

  // Close on outside click
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
        return;
      }
      const currentIndex = options.findIndex((o) => o.value.toLowerCase() === value.toLowerCase());
      const nextIndex =
        e.key === 'ArrowDown'
          ? Math.min(options.length - 1, currentIndex + 1)
          : Math.max(0, currentIndex - 1);
      if (options[nextIndex]) {
        onChange(options[nextIndex].value);
      }
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div ref={containerRef} className={`relative inline-block text-left w-full ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={ariaLabel}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-xl border border-light-border dark:border-dark-border bg-white dark:bg-[#1A2634] text-light-text dark:text-[#F3F8FC] text-xs font-semibold shadow-xs hover:border-brand focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all"
      >
        <div className="flex items-center gap-2 min-w-0">
          {selectedOption.colorPreview && (
            <span
              className="w-4 h-4 rounded-md border border-black/15 shadow-2xs shrink-0"
              style={{ backgroundColor: selectedOption.colorPreview }}
            />
          )}
          <span className="truncate font-mono">{selectedOption.label}</span>
        </div>
        <ChevronDown
          className={`w-3.5 h-3.5 text-light-textSecondary dark:text-dark-textSecondary shrink-0 transition-transform ${
            isOpen ? 'rotate-180 text-brand' : ''
          }`}
        />
      </button>

      {/* Accessible Floating Options Menu */}
      {isOpen && (
        <ul
          ref={listboxRef}
          role="listbox"
          tabIndex={-1}
          className="absolute z-50 mt-1.5 w-full min-w-[160px] max-h-60 overflow-y-auto rounded-xl p-1 shadow-glass border border-light-border dark:border-dark-border bg-white dark:bg-[#16222F] text-light-text dark:text-[#F3F8FC] backdrop-blur-md animate-in fade-in zoom-in-95 duration-150"
        >
          {options.map((option) => {
            const isSelected = option.value.toLowerCase() === value.toLowerCase();
            return (
              <li
                key={option.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg text-xs cursor-pointer select-none transition-colors ${
                  isSelected
                    ? 'bg-brand/15 text-brand-darkText dark:text-brand font-bold'
                    : 'hover:bg-light-bgSecondary dark:hover:bg-[#203040] text-light-text dark:text-[#E2E8F0]'
                }`}
              >
                <div className="flex items-center gap-2 min-w-0">
                  {option.colorPreview && (
                    <span
                      className="w-3.5 h-3.5 rounded-md border border-black/15 shadow-2xs shrink-0"
                      style={{ backgroundColor: option.colorPreview }}
                    />
                  )}
                  <div className="min-w-0">
                    <span className="font-mono block truncate">{option.label}</span>
                    {option.sublabel && (
                      <span className="text-[10px] text-light-textSecondary dark:text-dark-textSecondary block truncate">
                        {option.sublabel}
                      </span>
                    )}
                  </div>
                </div>

                {isSelected && <Check className="w-3.5 h-3.5 text-brand shrink-0" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
