import React from 'react';
import { useTranslation } from 'react-i18next';

export const LangButton: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ua' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="bg-white dark:bg-black w-12 h-12 xl:w-16 xl:h-16 flex justify-center items-center shadow-[-1px_0_0_0_hsl(var(--elements))] flex-1"
    >
      {i18n.language === 'ua' ? 'UA' : 'EN'}
    </button>
  );
};
