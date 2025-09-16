import { Search } from 'lucide-react';

type Props = {
  className?: string;
};

export const SearchIcon: React.FC<Props> = ({ className = '' }) => {
  return (
    <Search
      className={`text-custom-primary ${className}`}
      size={16}
    />
  );
};
