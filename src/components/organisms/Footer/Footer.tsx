import React from 'react';
import { FooterLink } from '../../atoms/link/FooterLink';
import { BackToTopButton } from '../../atoms/buttons/BackToTopButton';
import { Link } from 'react-router-dom';
import { ThemeImage } from '../../atoms/icons/ThemeImage';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const footerLinks = [
    { label: 'github', href: '/github' },
    { label: t('contacts'), href: '/contacts' },
    { label: t('rights'), href: '/rights' },
  ];

  return (
    <footer className="flex flex-col md:flex-row flex-wrap justify-between px-4 py-8 md:px-8 xl:px-16 gap-8 md:gap-10 bg-grayblack border-t [border-top-style:solid] border-grayelements">
      <Link
        to="/"
        className="flex flex-shrink-0"
      >
        <ThemeImage
          light="img/logo-light-theme.png"
          dark="img/logo-dark-theme.png"
          alt="Nice gadgets logo"
          className="w-[89px] h-[32px] object-contain block"
        />
      </Link>

      <ul className="flex flex-col md:flex-row list-none items-start md:items-center gap-4 md:gap-8 lg:gap-12 p-0 m-0">
        {footerLinks.map((link) => (
          <li>
            <FooterLink
              text={`${link.label}`}
              link={`${link.href}`}
            />
          </li>
        ))}
      </ul>

      <div className="flex flex-row justify-center gap-4 flex-shrink-0">
        <p
          className="
          text-small text-center text-custom-secondary font-bold
          m-0 self-center font-mont"
        >
          {t('back-to-top')}
        </p>
        <BackToTopButton
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </div>
    </footer>
  );
};
