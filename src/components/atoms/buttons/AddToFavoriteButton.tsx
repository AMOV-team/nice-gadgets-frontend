import * as React from 'react';

type AddToFavoriteButtonProps = {
  selected?: boolean;
  onSelect?: () => void;
};

export const AddToFavoriteButton: React.FC<AddToFavoriteButtonProps> = ({
  selected = true,
  onSelect,
}) => {
  return (
    <div
      className="
        flex items-center justify-center
        w-[36px] h-[36px]
        rounded-full cursor-pointer
        box-border
        border-solid
        border border-elements
        transition-all duration-200 
        hover:border-custom-primary
        disabled:border-elements
      "
    >
      <img
        onClick={onSelect}
        className="w-[16px] h-[16px] object-contain select-none"
        src={selected ? '/img/heart-filled.png' : '/img/heart-outline.png'}
      ></img>
    </div>
  );
};
