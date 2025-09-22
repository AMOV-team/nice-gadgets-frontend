import { X } from 'lucide-react';

type Props = {
  className?: string;
};

export const CloseIcon: React.FC<Props> = ({ className = '' }) => {
  return (
    <X
      className={`${className}`}
      size={16}
    />
  );
};
