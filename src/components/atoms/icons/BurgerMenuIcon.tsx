import { Menu } from 'lucide-react';

type Props = {
  className?: string;
};

export const BurgerMenuIcon: React.FC<Props> = ({ className = '' }) => {
  return (
    <Menu
      className={`${className}`}
      size={16}
    />
  );
};
<Menu />;
