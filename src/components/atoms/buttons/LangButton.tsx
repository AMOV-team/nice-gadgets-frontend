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
      className="size-[48px] flex justify-center items-center shadow-[-1px_0px_0px_0px_hsl(var(--elements))]"
    >
      {i18n.language === 'ua' ? 'UA' : 'EN'}
    </button>
  );
};
