import { ChevronRight } from 'lucide-react';

type Props = {
  className?: string;
};

export const ArrowRightIcon: React.FC<Props> = ({ className = '' }) => {
  return (
    <ChevronRight
      className={`${className}`}
      size={16}
    />
  );
};
