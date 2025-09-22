import { Minus } from 'lucide-react';

type Props = {
  className?: string;
};

export const MinusIcon: React.FC<Props> = ({ className = '' }) => {
  return (
    <Minus
      className={`${className}`}
      size={16}
    />
  );
};
