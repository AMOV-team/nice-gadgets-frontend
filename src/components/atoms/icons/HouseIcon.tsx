import { Home } from 'lucide-react';

type Props = {
  className?: string;
};

export const HouseIcon: React.FC<Props> = ({ className = '' }) => {
  return (
    <Home
      className={`${className}`}
      size={16}
    />
  );
};
