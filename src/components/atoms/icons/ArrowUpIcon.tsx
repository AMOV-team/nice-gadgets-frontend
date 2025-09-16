import { ChevronUp } from 'lucide-react';

type Props = {
  className?: string;
};

export const ArrowUpIcon: React.FC<Props> = ({ className = '' }) => {
  return (
    <ChevronUp
      className={`text-icons ${className}`}
      size={16}
    />
  );
};
