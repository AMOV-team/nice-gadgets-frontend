import React from 'react';

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
            <a
              href="#"
              className="uppercase text-xs font-extrabold"
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
        </ul>
      </div>

      <div className="flex flex-row justify-center gap-4">
        <p className="m-0 text-center self-center">Back to top</p>
        <a href="#">
          <img
            className="flex"
            src="../public/img/slider-button-default(right).png"
            alt="slider-button"
          />
        </a>
      </div>
    </footer>
  );
};
