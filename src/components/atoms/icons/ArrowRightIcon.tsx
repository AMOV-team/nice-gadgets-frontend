import { ChevronRight } from 'lucide-react';

type Props = {
  className?: string;
};

export const ArrowRightIcon: React.FC<Props> = ({ className = '' }) => {
  return (
    <ChevronRight
      className={`text-icons ${className}`}
      size={16}
    />
  );
};
