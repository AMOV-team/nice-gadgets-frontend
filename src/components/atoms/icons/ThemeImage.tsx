import { useEffect, useState } from 'react';

type ThemeImageProps = {
  light: string; // шлях до світлої версії
  dark: string; // шлях до темної версії
  alt: string;
  className?: string;
};

export const ThemeImage: React.FC<ThemeImageProps> = ({
  light,
  dark,
  alt,
  className,
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved =
      (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    setTheme(saved);

    const observer = new MutationObserver(() => {
      setTheme(
        document.documentElement.classList.contains('dark') ? 'dark' : 'light',
      );
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <img
      src={theme === 'light' ? light : dark}
      alt={alt}
      className={className}
    />
  );
};
