import React from 'react';

const footerLinks = [
  { label: 'GITHUB', href: '#github' },
  { label: 'CONTACTS', href: '#contacts' },
  { label: 'RIGHTS', href: '#rights' },
];

export const Footer: React.FC = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="flex flex-col items-center justify-center gap-8 px-4 py-8 relative bg-grayblack border-t [border-top-style:solid] border-grayelements">
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-[89px] h-8">
          <div className="relative h-8">Logo</div>
        </div>
      </div>

      <nav
        className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]"
        role="navigation"
        aria-label="Footer navigation"
      >
        {footerLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="relative w-fit mt-[-1.00px] font-uppercase font-[number:var(--uppercase-font-weight)] text-graywhite text-[length:var(--uppercase-font-size)] tracking-[var(--uppercase-letter-spacing)] leading-[var(--uppercase-line-height)] whitespace-nowrap [font-style:var(--uppercase-font-style)] hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-grayblack"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit font-small-text-12 font-[number:var(--small-text-12-font-weight)] text-graysecondary text-[length:var(--small-text-12-font-size)] text-right tracking-[var(--small-text-12-letter-spacing)] leading-[var(--small-text-12-line-height)] [font-style:var(--small-text-12-font-style)]">
          Back to top
        </div>

        <button
          onClick={handleBackToTop}
          className="relative w-8 h-8 bg-graysurface-2 hover:bg-grayelements transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-grayblack cursor-pointer"
          aria-label="Back to top"
        >
          ⬆
        </button>
      </div>
    </footer>
  );
};
