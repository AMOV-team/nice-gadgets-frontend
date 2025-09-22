import { Heart } from 'lucide-react';

type Props = {
  className?: string;
};

export const FavouritesIcon: React.FC<Props> = ({ className = '' }) => {
  return (
    <Heart
      className={`text-custom-primary ${className}`}
      size={16}
    />
  );
};
