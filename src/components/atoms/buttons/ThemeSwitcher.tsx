import { useEffect, useState } from 'react';
import { ThemeSwitch } from '../icons/ThemeSwitch';
import { useLoader } from '@/hooks/useLoader.ts';

export const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const { setIsLoading } = useLoader();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)',
      ).matches;
      const initialTheme = systemPrefersDark ? 'dark' : 'light';
      setTheme(initialTheme);
      document.documentElement.classList.toggle(
        'dark',
        initialTheme === 'dark',
      );
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setIsLoading(true);

    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');

    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-white dark:bg-black xl:w-16 xl:h-16 w-12 h-12 flex justify-center items-center flex-1"
    >
      <ThemeSwitch />
    </button>
  );
};
