import { useEffect, useState } from 'react';
import { ThemeSwitch } from '../icons/ThemeSwitch';

export const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-white dark:bg-black h-16 sm:h-full flex justify-center items-center shadow-[-1px_0px_0px_0px_hsl(var(--elements))] flex-1"
    >
      <ThemeSwitch />
    </button>
  );
};
