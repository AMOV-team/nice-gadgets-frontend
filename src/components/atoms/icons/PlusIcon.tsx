import { Plus } from 'lucide-react';

type Props = {
  className?: string;
};

export const PlusIcon: React.FC<Props> = ({ className = '' }) => {
  return (
    <Plus
      className={`text-custom-primary ${className}`}
      size={16}
    />
  );
};
