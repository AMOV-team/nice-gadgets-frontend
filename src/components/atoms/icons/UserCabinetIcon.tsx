import { User } from 'lucide-react';

type Props = {
  className?: string;
};

export const UserCabinetIcon: React.FC<Props> = ({ className = '' }) => {
  return (
    <User
      className={`${className}`}
      size={16}
    />
  );
};
