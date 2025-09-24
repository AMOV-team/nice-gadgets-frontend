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
    }
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
      className="bg-white dark:bg-black xl:w-16 xl:h-16 w-12 h-12 flex justify-center items-center sm:shadow-[-1px_0_0_0_hsl(var(--elements))] flex-1"
    >
      <ThemeSwitch />
    </button>
  );
};
