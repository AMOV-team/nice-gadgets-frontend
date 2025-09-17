import { ShoppingBag } from 'lucide-react';

type Props = {
  className?: string;
};

export const ShoppingBagIcon: React.FC<Props> = ({ className = '' }) => {
  return (
    <ShoppingBag
      className={`${className}`}
      size={16}
    />
  );
};
