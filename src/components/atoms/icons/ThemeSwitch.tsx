import { SunMoon } from 'lucide-react';

type Props = {
  className?: string;
};

export const ThemeSwitch: React.FC<Props> = ({ className = '' }) => {
  return (
    <SunMoon
      className={`${className}`}
      size={20}
    />
  );
};
