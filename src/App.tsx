import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { PaletteProvider, usePalette } from './context/PaletteContext';
import { ToastProvider } from './components/common/Toast';
import { Header } from './components/layout/Header';
import { Hero } from './components/layout/Hero';
import { Footer } from './components/layout/Footer';

// Feature Sections
import { PaletteToolbar } from './components/features/palette-generator/PaletteToolbar';
import { PaletteGrid } from './components/features/palette-generator/PaletteGrid';
import { ImageExtractorSection } from './components/features/image-extractor/ImageExtractorSection';
import { ContrastCheckerSection } from './components/features/contrast-checker/ContrastCheckerSection';
import { ShadeGeneratorSection } from './components/features/shade-generator/ShadeGeneratorSection';
import { GradientGeneratorSection } from './components/features/gradient-generator/GradientGeneratorSection';
import { LivePreviewSection } from './components/features/palette-preview/LivePreviewSection';
import { PresetSection } from './components/features/presets/PresetSection';
import { FAQSection } from './components/features/info/FAQSection';
import { AttributionSection } from './components/features/info/AttributionSection';
import { PrivacySection } from './components/features/info/PrivacySection';

// Modals
import { ColorEditorModal } from './components/features/color-editor/ColorEditorModal';
import { ExportModal } from './components/features/export/ExportModal';
import { SavedPalettesModal } from './components/features/saved-palettes/SavedPalettesModal';
import { ColorItem, PalettePreset } from './types';

const MainAppContent: React.FC = () => {
  const { activeColorForEditor, setActiveColorForEditor, updateSwatchColor, generateNewPalette } =
    usePalette();

  const [activeTab, setActiveTab] = useState<string>('generator');
  const [isExportOpen, setIsExportOpen] = useState<boolean>(false);
  const [isSavedOpen, setIsSavedOpen] = useState<boolean>(false);
  const [previewPreset, setPreviewPreset] = useState<PalettePreset | null>(null);

  const handleOpenEditor = (color: ColorItem) => {
    setActiveColorForEditor(color);
  };

  const handleCloseEditor = () => {
    setActiveColorForEditor(null);
  };

  // Global Spacebar shortcut for Generator tab
  React.useEffect(() => {
    if (activeTab !== 'generator') return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code !== 'Space' && e.key !== ' ') return;
      if (e.repeat) return;

      if (isExportOpen || isSavedOpen || !!activeColorForEditor) return;

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const tagName = target.tagName ? target.tagName.toUpperCase() : '';
      if (tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT') return;
      if (target.isContentEditable || target.closest('[contenteditable="true"]')) return;
      if (
        target.closest('[role="dialog"]') ||
        target.closest('[role="listbox"]') ||
        target.closest('[role="menu"]') ||
        target.closest('[role="combobox"]') ||
        target.closest('dialog')
      ) {
        return;
      }
      if (tagName === 'BUTTON') return;

      e.preventDefault();
      generateNewPalette();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, isExportOpen, isSavedOpen, activeColorForEditor, generateNewPalette]);

  return (
    <div className="min-h-screen flex flex-col bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text selection:bg-brand selection:text-brand-darkText">
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSaved={() => setIsSavedOpen(true)}
        onOpenExport={() => setIsExportOpen(true)}
      />

      {/* Hero Section (Displayed on Generator tab) */}
      {activeTab === 'generator' && (
        <Hero
          onGenerateClick={() => generateNewPalette()}
          onExtractClick={() => setActiveTab('extractor')}
        />
      )}

      {/* Main Content Workspace Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'generator' && (
          <div className="space-y-6">
            <PaletteToolbar
              onOpenExport={() => setIsExportOpen(true)}
              onOpenSaved={() => setIsSavedOpen(true)}
            />
            <PaletteGrid onOpenEditor={handleOpenEditor} />
          </div>
        )}

        {activeTab === 'extractor' && (
          <ImageExtractorSection onSendToGenerator={() => setActiveTab('generator')} />
        )}

        {activeTab === 'contrast' && <ContrastCheckerSection />}

        {activeTab === 'shades' && <ShadeGeneratorSection />}

        {activeTab === 'gradient' && <GradientGeneratorSection />}

        {activeTab === 'preview' && (
          <LivePreviewSection
            initialPreset={previewPreset}
            onClearInitialPreset={() => setPreviewPreset(null)}
          />
        )}

        {activeTab === 'presets' && (
          <PresetSection
            onLoadPreset={() => setActiveTab('generator')}
            onUseInPreview={(preset) => {
              setPreviewPreset(preset);
              setActiveTab('preview');
            }}
          />
        )}

        {activeTab === 'faq' && <FAQSection />}

        {activeTab === 'attribution' && <AttributionSection />}

        {activeTab === 'privacy' && <PrivacySection />}
      </main>

      {/* Footer */}
      <Footer onNavigateSection={(sec) => setActiveTab(sec)} />

      {/* Modals */}
      <ColorEditorModal
        color={activeColorForEditor}
        isOpen={!!activeColorForEditor}
        onClose={handleCloseEditor}
        onSave={updateSwatchColor}
      />

      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
      />

      <SavedPalettesModal
        isOpen={isSavedOpen}
        onClose={() => setIsSavedOpen(false)}
      />
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ToastProvider>
          <PaletteProvider>
            <MainAppContent />
          </PaletteProvider>
        </ToastProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
