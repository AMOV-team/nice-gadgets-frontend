import React, { useRef } from 'react';
import cn from 'classnames';
import { ArrowLeftIcon } from '../icons/ArrowLeftIcon';

type SliderButtonLeftProps = {
  onClick: () => void;
  disabled: boolean;
};

export const SliderButtonLeft: React.FC<SliderButtonLeftProps> = ({
  onClick,
  disabled,
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      className={cn(
        `
        flex items-center justify-center
        w-[32px] h-[32px]
        cursor-pointer
        box-border
        border-solid
        rounded-full
        border border-elements
        transition-all duration-200
        disabled:border-elements
        bg-transparent
        self-center
        `,
        { 'hover:border-custom-primary': !disabled },
      )}
    >
      <ArrowLeftIcon
        className={disabled ? 'text-icons' : 'text-custom-primary'}
      />
    </button>
  );
};
