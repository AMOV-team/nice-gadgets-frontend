import * as React from 'react';

type BackToTopButtonProps = {
  onClick: () => void;
};

export const BackToTopButton: React.FC<BackToTopButtonProps> = ({
  onClick,
}) => {
  return (
    <a
      onClick={onClick}
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
        src="img/slider-button.png"
        alt="slider-button"
        className="w-[16px] h-[16px] object-contain select-none"
      />
    </a>
  );
};
