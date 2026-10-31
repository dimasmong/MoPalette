import React, { useState, useEffect, useRef } from 'react';
import { Palette } from '@/types';
import {
  getSavedPalettes,
  deleteSavedPalette,
  toggleFavoritePalette,
  renameSavedPalette,
  getHistory,
  clearHistory,
  importPalettesFromJson,
  exportAllSavedPalettesJson,
} from '@/lib/storage/storage';
import { usePalette } from '@/context/PaletteContext';
import { useLanguage } from '@/context/LanguageContext';
import { useToast } from '@/components/common/Toast';
import { Modal } from '@/components/common/Modal';
import { downloadFile } from '@/lib/export/downloader';
import {
  Bookmark,
  Star,
  Trash2,
  Send,
  Upload,
  Download,
  Edit2,
  Check,
  History,
} from 'lucide-react';

interface SavedPalettesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SavedPalettesModal: React.FC<SavedPalettesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { setPaletteFromColors } = usePalette();
  const { t } = useLanguage();
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState<'saved' | 'history'>('saved');
  const [savedPalettes, setSavedPalettes] = useState<Palette[]>([]);
  const [historyList, setHistoryList] = useState<Palette[]>([]);

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState<string>('');

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const refreshData = () => {
    setSavedPalettes(getSavedPalettes());
    setHistoryList(getHistory());
  };

  useEffect(() => {
    if (isOpen) {
      refreshData();
    }
  }, [isOpen]);

  const handleToggleFavorite = (id: string) => {
    const updated = toggleFavoritePalette(id);
    setSavedPalettes(updated);
  };

  const handleDelete = (id: string) => {
    const updated = deleteSavedPalette(id);
    setSavedPalettes(updated);
    showToast('Palette deleted.');
  };

  const handleStartRename = (palette: Palette) => {
    setEditingId(palette.id);
    setEditingName(palette.name);
  };

  const handleSaveRename = (id: string) => {
    const updated = renameSavedPalette(id, editingName);
    setSavedPalettes(updated);
    setEditingId(null);
  };

  const handleLoadPalette = (palette: Palette) => {
    setPaletteFromColors(palette.colors, palette.name);
    showToast(`Loaded "${palette.name}".`);
    onClose();
  };

  const handleClearHistory = () => {
    if (window.confirm(t('saved.confirmClearHistory'))) {
      clearHistory();
      setHistoryList([]);
      showToast('History cleared.');
    }
  };

  const handleExportBackup = () => {
    const jsonStr = exportAllSavedPalettesJson();
    downloadFile(jsonStr, 'mopalette-backup.json', 'application/json');
    showToast('Exported backup JSON.');
  };

  const handleImportJsonFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const res = importPalettesFromJson(content);
      if (res.success) {
        showToast(t('saved.importedCount', { count: res.count }));
        refreshData();
      } else {
        showToast(t('saved.importError', { error: res.error || 'Invalid file' }), 'error');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t('saved.title')}
      subtitle={t('saved.subtitle')}
      maxWidth="2xl"
    >
      <div className="space-y-5">
        {/* Top Tab Bar & Backup Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-light-border dark:border-dark-border">
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-light-bgSecondary dark:bg-dark-bgSecondary border border-light-border dark:border-dark-border">
            <button
              onClick={() => setActiveTab('saved')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                activeTab === 'saved'
                  ? 'bg-brand text-brand-darkText shadow-2xs'
                  : 'text-light-textSecondary dark:text-dark-textSecondary hover:text-light-text dark:hover:text-dark-text'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>{t('saved.savedTab', { count: savedPalettes.length })}</span>
            </button>
            <button
              onClick={() => setActiveTab('history')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                activeTab === 'history'
                  ? 'bg-brand text-brand-darkText shadow-2xs'
                  : 'text-light-textSecondary dark:text-dark-textSecondary hover:text-light-text dark:hover:text-dark-text'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              <span>{t('saved.historyTab', { count: historyList.length })}</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-light-border dark:border-dark-border text-xs font-semibold text-light-text dark:text-dark-text hover:border-brand transition-colors"
            >
              <Upload className="w-3.5 h-3.5 text-brand" />
              <span>{t('saved.importJson')}</span>
            </button>
            <button
              onClick={handleExportBackup}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-light-border dark:border-dark-border text-xs font-semibold text-light-text dark:text-dark-text hover:border-brand transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-brand" />
              <span>{t('saved.exportBackup')}</span>
            </button>
          </div>
        </div>

        {/* Hidden Import File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".json,application/json"
          onChange={handleImportJsonFile}
          className="hidden"
        />

        {/* Tab 1: Saved Palettes */}
        {activeTab === 'saved' && (
          <div className="space-y-3">
            {savedPalettes.length === 0 ? (
              <p className="text-center py-10 text-xs text-light-textSecondary dark:text-dark-textSecondary">
                {t('saved.noSaved')}
              </p>
            ) : (
              savedPalettes.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl border border-light-border dark:border-dark-border bg-light-bgSecondary/40 dark:bg-dark-bgSecondary/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-brand transition-colors"
                >
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      {editingId === item.id ? (
                        <div className="flex items-center gap-1">
                          <input
                            type="text"
                            value={editingName}
                            onChange={(e) => setEditingName(e.target.value)}
                            className="px-2 py-0.5 rounded border border-brand text-xs font-bold text-light-text dark:text-dark-text bg-transparent"
                            autoFocus
                          />
                          <button
                            onClick={() => handleSaveRename(item.id)}
                            className="p-1 text-emerald-500"
                          >
                            <Check className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs font-bold text-light-text dark:text-dark-text truncate">
                          {item.name}
                        </span>
                      )}

                      <button
                        onClick={() => handleToggleFavorite(item.id)}
                        className={`p-1 transition-colors ${
                          item.isFavorite ? 'text-amber-400 fill-amber-400' : 'text-light-textSecondary/40 hover:text-amber-400'
                        }`}
                      >
                        <Star className={`w-3.5 h-3.5 ${item.isFavorite ? 'fill-amber-400' : ''}`} />
                      </button>

                      {editingId !== item.id && (
                        <button
                          onClick={() => handleStartRename(item)}
                          className="p-1 text-light-textSecondary dark:text-dark-textSecondary hover:text-light-text dark:hover:text-dark-text"
                        >
                          <Edit2 className="w-3 h-3" />
                        </button>
                      )}
                    </div>

                    {/* Color Swatches Strip */}
                    <div className="flex h-7 rounded-lg overflow-hidden border border-black/10 max-w-sm">
                      {item.colors.map((c, i) => (
                        <div
                          key={i}
                          className="flex-1"
                          style={{ backgroundColor: c.hex }}
                          title={c.hex}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button
                      onClick={() => handleLoadPalette(item)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-brand text-brand-darkText text-xs font-bold hover:bg-brand-hover shadow-2xs transition-colors"
                    >
                      <Send className="w-3 h-3" />
                      <span>{t('saved.load')}</span>
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-1.5 rounded-lg border border-light-border dark:border-dark-border text-light-textSecondary dark:text-dark-textSecondary hover:text-red-500 hover:border-red-400 transition-colors"
                      title={t('common.delete')}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {/* Tab 2: History List */}
        {activeTab === 'history' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs text-light-textSecondary dark:text-dark-textSecondary">
                Last 20 generated palettes
              </span>
              {historyList.length > 0 && (
                <button
                  onClick={handleClearHistory}
                  className="text-xs font-semibold text-red-500 hover:underline"
                >
                  {t('saved.clearHistoryBtn')}
                </button>
              )}
            </div>

            {historyList.length === 0 ? (
              <p className="text-center py-10 text-xs text-light-textSecondary dark:text-dark-textSecondary">
                {t('saved.noHistory')}
              </p>
            ) : (
              historyList.map((item) => (
                <div
                  key={item.id}
                  className="p-3 rounded-xl border border-light-border dark:border-dark-border bg-light-bgSecondary/30 dark:bg-dark-bgSecondary/30 flex items-center justify-between gap-3 hover:border-brand transition-colors"
                >
                  <div className="flex-1 min-w-0 space-y-1">
                    <span className="text-xs font-semibold text-light-text dark:text-dark-text truncate block">
                      {item.name}
                    </span>
                    <div className="flex h-6 rounded-lg overflow-hidden border border-black/10 max-w-sm">
                      {item.colors.map((c, i) => (
                        <div
                          key={i}
                          className="flex-1"
                          style={{ backgroundColor: c.hex }}
                          title={c.hex}
                        />
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleLoadPalette(item)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-light-border dark:border-dark-border text-xs font-bold text-light-text dark:text-dark-text hover:border-brand transition-colors"
                  >
                    <Send className="w-3 h-3 text-brand" />
                    <span>{t('saved.load')}</span>
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};
