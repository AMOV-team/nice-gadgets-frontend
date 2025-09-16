import { ChevronDown } from 'lucide-react';

type Props = {
  className?: string;
};

export const ArrowDownIcon: React.FC<Props> = ({ className = '' }) => {
  return (
    <ChevronDown
      className={`text-icons ${className}`}
      size={16}
    />
  );
};
