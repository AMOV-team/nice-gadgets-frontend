import { Menu } from 'lucide-react';

type Props = {
  className?: string;
};

export const BurgerMenuIcon: React.FC<Props> = ({ className = '' }) => {
  return (
    <Menu
      className={`text-custom-primary ${className}`}
      size={16}
    />
  );
};
<Menu />;
