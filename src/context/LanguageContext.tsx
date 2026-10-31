import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language } from '@/types';
import { en } from '@/locales/en';
import { id } from '@/locales/id';
import { getSavedLanguage, saveLanguage } from '@/lib/storage/storage';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (path: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, typeof en> = { en, id };

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(getSavedLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    saveLanguage(lang);
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (path: string, params?: Record<string, string | number>): string => {
    const dict = translations[language] || en;
    const parts = path.split('.');
    let curr: any = dict;

    for (const part of parts) {
      if (curr && typeof curr === 'object' && part in curr) {
        curr = curr[part];
      } else {
        // Fallback to English dictionary if missing
        let fallbackCurr: any = en;
        for (const p of parts) {
          if (fallbackCurr && typeof fallbackCurr === 'object' && p in fallbackCurr) {
            fallbackCurr = fallbackCurr[p];
          } else {
            return path;
          }
        }
        curr = fallbackCurr;
        break;
      }
    }

    if (typeof curr !== 'string') return path;

    if (params) {
      let result = curr;
      for (const [key, val] of Object.entries(params)) {
        result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), String(val));
      }
      return result;
    }

    return curr;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
