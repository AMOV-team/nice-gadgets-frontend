import { Minus } from 'lucide-react';

type Props = {
  className?: string;
};

export const MinusIcon: React.FC<Props> = ({ className = '' }) => {
  return (
    <Minus
      className={`text-custom-primary ${className}`}
      size={16}
    />
  );
};
