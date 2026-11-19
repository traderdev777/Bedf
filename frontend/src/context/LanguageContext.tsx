'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'en' | 'kn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (en: string, kn: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('bedf-lang') as Language | null;
    if (saved === 'en' || saved === 'kn') {
      setLanguageState(saved);
      if (typeof document !== 'undefined') {
        document.documentElement.lang = saved;
        document.documentElement.setAttribute('data-lang', saved);
      }
    } else if (typeof document !== 'undefined') {
      document.documentElement.lang = 'en';
      document.documentElement.setAttribute('data-lang', 'en');
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('bedf-lang', lang);
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.setAttribute('data-lang', lang);
    }
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'kn' : 'en';
    setLanguage(next);
  };

  const t = (en: string, kn: string) => {
    return language === 'kn' ? kn : en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

