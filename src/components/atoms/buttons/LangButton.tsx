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
      className="w-[48px] h-[48px] flex justify-center items-center shadow-[-1px_0_0_0_hsl(var(--elements))]"
    >
      {i18n.language === 'ua' ? 'UA' : 'EN'}
    </button>
  );
};
