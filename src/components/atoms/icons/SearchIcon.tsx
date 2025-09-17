import { Search } from 'lucide-react';

type Props = {
  className?: string;
};

export const SearchIcon: React.FC<Props> = ({ className = '' }) => {
  return (
    <Search
      className={`${className}`}
      size={16}
    />
  );
};
