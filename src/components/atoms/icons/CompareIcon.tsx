import { Scale } from 'lucide-react';

type Props = {
  className?: string;
};

export const ShoppingBagIcon: React.FC<Props> = ({ className = '' }) => {
  return (
    <Scale
      className={`${className}`}
      size={16}
    />
  );
};
