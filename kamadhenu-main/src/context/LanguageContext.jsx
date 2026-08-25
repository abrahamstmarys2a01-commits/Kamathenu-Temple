import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('kamadhenu_lang') || 'ta';
  });

  const toggleLanguage = () => {
    const newLang = language === 'ta' ? 'en' : 'ta';
    setLanguage(newLang);
    localStorage.setItem('kamadhenu_lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
