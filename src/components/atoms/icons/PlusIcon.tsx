import { Plus } from 'lucide-react';

type Props = {
  className?: string;
};

export const PlusIcon: React.FC<Props> = ({ className = '' }) => {
  return (
    <Plus
      className={`${className}`}
      size={16}
    />
  );
};
