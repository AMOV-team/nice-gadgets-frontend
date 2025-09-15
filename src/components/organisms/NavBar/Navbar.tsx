import { NavbarLink } from '../../atoms/link/NavbarLink';

export const Navbar = () => {
  return (
    <nav
      data-cy="nav"
      className="hidden sm:flex justify-start gap-8 h-full flex items-center text-sm text-black no-underline"
      role="navigation"
      aria-label="main navigation"
    >
      <NavbarLink
        text="Home"
        link="/"
      />
      <NavbarLink
        text="Phones"
        link="/phones"
      />
      <NavbarLink
        text="Tablets"
        link="/tablets"
      />
      <NavbarLink
        text="Accessories"
        link="/accessories"
      />
    </nav>
  );
};
