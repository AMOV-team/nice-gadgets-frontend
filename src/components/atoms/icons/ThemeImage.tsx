import { useEffect, useState } from 'react';

type ThemeImageProps = {
  light: string;
  dark: string;
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
  }, []);

  return (
    <img
      src={theme === 'light' ? light : dark}
      alt={alt}
      className={className}
    />
  );
};
