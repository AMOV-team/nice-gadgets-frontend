import React from 'react';
import { FooterLink } from '../../atoms/text/FooterLink';
import { BackToTopButton } from '../../atoms/buttons/BackToTopButton';

// const footerLinks = [
//   { label: 'github', href: '#github' },
//   { label: 'contacts', href: '#contacts' },
//   { label: 'rights', href: '#rights' },
// ];

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-evenly px-4 py-8 gap-8 md:gap-[103px] lg:gap-72 bg-grayblack border-t [border-top-style:solid] border-grayelements">
      <a
        href="#"
        className="flex "
      >
        <img
          src="../public/img/footer-logo.png"
          alt="footer-logo"
        />
      </a>

      <div className="flex flex-col md:flex-row">
        <ul className="flex flex-col md:flex-row list-none items-start md:items-center gap-4 md:gap-[13.5px] lg:gap-28 p-0 m-0">
          <li>
            <FooterLink
              text="github"
              link="#"
            />
          </li>
          <li>
            <FooterLink
              text="contacts"
              link="#"
            />
          </li>
          <li>
            <FooterLink
              text="rights"
              link="#"
            />
          </li>
        </ul>
        {/* <ul className="flex flex-col md:flex-row list-none items-start md:items-center gap-4 md:gap-[13.5px] lg:gap-28 p-0 m-0 md:ml-20 lg:ml-72">
          <li>
            <a
              href="#"
              className="font-mont uppercase text-secondary text-small font-extrabold"
            >
              github
            </a>
          </li>
          <li>
            <a
              href="#"
              className="uppercase text-xs font-extrabold"
            >
              contacts
            </a>
          </li>
          <li>
            <a
              href="#"
              className="uppercase text-xs font-extrabold"
            >
              rights
            </a>
          </li>
        </ul> */}
      </div>

      <div className="flex flex-row justify-center gap-4">
        <p className="font-mont text-small text-secondary font-bold m-0 text-center self-center">
          Back to top
        </p>
        <BackToTopButton
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
      </div>
    </footer>
  );
};
