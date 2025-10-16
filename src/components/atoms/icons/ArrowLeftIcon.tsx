import { ChevronLeft } from 'lucide-react';

type Props = {
  className?: string;
};

export const ArrowLeftIcon: React.FC<Props> = ({ className = '' }) => {
  return (
    <ChevronLeft
      className={`${className}`}
      size={16}
    />
  );
};
