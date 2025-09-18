import { useEffect, useState } from 'react';

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
      className="h-16 sm:h-full flex justify-center items-center shadow-[-1px_0px_0px_0px_hsl(var(--elements))] flex-1 bg-white"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.058 19.9999C9.83532 19.9999 7.94632 19.2223 6.39098 17.6669C4.83565 16.1116 4.05798 14.2226 4.05798 11.9999C4.05798 9.97395 4.71798 8.21728 6.03798 6.72995C7.35798 5.24261 8.99265 4.36461 10.942 4.09595C10.996 4.09595 11.049 4.09795 11.101 4.10195C11.153 4.10595 11.204 4.11161 11.254 4.11895C10.9166 4.58961 10.6497 5.11295 10.453 5.68895C10.2563 6.26495 10.158 6.86861 10.158 7.49995C10.158 9.27795 10.78 10.7889 12.024 12.0329C13.268 13.2769 14.7793 13.8993 16.558 13.8999C17.192 13.8999 17.7963 13.8016 18.371 13.6049C18.9456 13.4083 19.4617 13.1413 19.919 12.8039C19.927 12.8539 19.9327 12.9049 19.936 12.9569C19.9393 13.0089 19.9413 13.0619 19.942 13.1159C19.686 15.0646 18.8143 16.6989 17.327 18.0189C15.8396 19.3389 14.084 19.9993 12.058 19.9999Z"
          fill="hsl(var(--custom-primary))"
        />
      </svg>
    </button>
  );
};
