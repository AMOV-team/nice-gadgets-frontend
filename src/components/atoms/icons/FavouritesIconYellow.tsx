import { Heart } from 'lucide-react';

type Props = {
  className?: string;
};

export const FavouritesIconYellow: React.FC<Props> = ({ className = '' }) => {
  return (
    <Heart
      className={`stroke-none fill-custom-accent-secondary ${className}`}
      size={16}
    />
  );
};
