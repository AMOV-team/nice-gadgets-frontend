import * as React from 'react';

type SliderButtonLeftProps = {
  onClick: () => void;
};

export const SliderButtonLeft: React.FC<SliderButtonLeftProps> = ({
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
        src="/img/slider-button-left.png"
        alt="slider-button-left"
        className="w-[16px] h-[16px] object-contain select-none"
      />
    </a>
  );
};
