import { NavbarLink } from '../../atoms/link/NavbarLink';
import { useTranslation } from 'react-i18next';

export const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav
      data-cy="nav"
      className="hidden sm:flex justify-start gap-8 h-full flex items-center text-sm text-black no-underline"
      role="navigation"
      aria-label="main navigation"
    >
      <NavbarLink
        text={t('home')}
        link="/"
      />
      <NavbarLink
        text={t('phones')}
        link="/phones"
      />
      <NavbarLink
        text={t('tablets')}
        link="/tablets"
      />
      <NavbarLink
        text={t('accessories')}
        link="/accessories"
      />
    </nav>
  );
};
