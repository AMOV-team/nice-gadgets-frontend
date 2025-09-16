import { X } from 'lucide-react';

type Props = {
  className?: string;
};

export const CloseIcon: React.FC<Props> = ({ className = '' }) => {
  return (
    <X
      className={`text-custom-primary ${className}`}
      size={16}
    />
  );
};
