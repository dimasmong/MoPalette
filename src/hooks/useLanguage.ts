import { useEffect, useState } from 'react'
import type { TranslationDictionary } from '../lib/i18n/translations'
import { translations } from '../lib/i18n/translations'
import type { Language } from '../types'

const LANG_STORAGE_KEY = 'mopalette_lang'

export function useLanguage() {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'en'
    const saved = localStorage.getItem(LANG_STORAGE_KEY)
    if (saved === 'en' || saved === 'id') {
      return saved
    }
    return 'en'
  })

  useEffect(() => {
    localStorage.setItem(LANG_STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
  }

  const toggleLang = () => {
    setLangState((prev) => (prev === 'en' ? 'id' : 'en'))
  }

  const t: TranslationDictionary = translations[lang]

  return { lang, setLang, toggleLang, t }
}
