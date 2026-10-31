import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

interface ToastMessage {
  id: string;
  text: string;
  type: ToastType;
}

interface ToastContextType {
  showToast: (text: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((text: string, type: ToastType = 'success') => {
    const id = `toast-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`;
    setToasts((prev) => [...prev, { id, text, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2800);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast floating container */}
      <div
        aria-live="polite"
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4 sm:px-0"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="status"
            className={`pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 rounded-xl shadow-glass border backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 ${
              toast.type === 'error'
                ? 'bg-red-500/10 border-red-500/30 text-red-700 dark:text-red-300'
                : toast.type === 'info'
                ? 'bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300'
                : 'bg-brand/15 border-brand/40 text-light-text dark:text-dark-text'
            }`}
          >
            <div className="flex items-center gap-2.5 text-sm font-medium">
              {toast.type === 'error' && <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />}
              {toast.type === 'info' && <Info className="w-4 h-4 text-blue-500 shrink-0" />}
              {toast.type === 'success' && <CheckCircle2 className="w-4 h-4 text-brand-700 dark:text-brand-300 shrink-0" />}
              <span>{toast.text}</span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-light-textSecondary dark:text-dark-textSecondary"
              aria-label="Dismiss notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextType {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
