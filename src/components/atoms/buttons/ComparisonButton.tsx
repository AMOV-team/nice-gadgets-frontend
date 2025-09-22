import * as React from 'react';
import { FavouritesIconYellow } from '../icons/FavouritesIconYellow';
import { FavouritesIcon } from '../icons/FavouritesIcon';

type AddToFavoriteButtonProps = {
  selected?: boolean;
  onSelect?: () => void;
};

export const AddToFavoriteButton: React.FC<AddToFavoriteButtonProps> = ({
  selected = false,
  onSelect,
}) => {
  return (
    <div
      className="
        flex items-center justify-center
        w-[40px] h-[40px]
        min-w-[40px]
        rounded-full cursor-pointer
        box-border
        border border-elements
        transition-all duration-200
        hover:border-custom-primary
      "
      onClick={onSelect}
    >
      {selected ?
        <FavouritesIconYellow />
      : <FavouritesIcon />}
    </div>
  );
};
