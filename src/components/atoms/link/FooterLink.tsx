import * as React from 'react';
import { Link } from 'react-router-dom';

type FooterLinkProps = {
  text: string;
  link: string;
  external?: boolean;
};

export const FooterLink: React.FC<FooterLinkProps> = ({
  text,
  link,
  external,
}) => {
  if (external) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="uppercase text-small text-custom-secondary tracking-[.04em] font-bold hover:text-custom-primary"
      >
        {text}
      </a>
    );
  }

  return (
    <Link
      to={link}
      className="uppercase text-small text-custom-secondary tracking-[.04em] font-bold hover:text-custom-primary"
    >
      {text}
    </Link>
  );
};
