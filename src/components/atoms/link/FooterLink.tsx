import * as React from 'react';
import { Link } from 'react-router-dom';

type FooterLinkProps = {
  text: string;
  link: string;
};

export const FooterLink: React.FC<FooterLinkProps> = ({ text, link }) => {
  return (
    <Link
      to={link}
      className="uppercase text-small text-custom-secondary tracking-[.04em] font-bold hover:text-custom-primary"
    >
      {text}
    </Link>
  );
};
