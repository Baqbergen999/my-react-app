import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

const translations = {
  kk: {
    hi: 'Салем!',
    choose: 'Тіл танда',
  },
  ru: {
    hi: 'Привет!',
    choose: 'Выбери язык',
  },
  en: {
    hi: 'Hello!',
    choose: 'Choose language',
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('kk');

  const changeLanguage = (lang: any) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
