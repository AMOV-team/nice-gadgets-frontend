import React, { useRef } from 'react';
import cn from 'classnames';

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="10"
        viewBox="0 0 6 10"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.47124 0.528606C5.21089 0.268256 4.78878 0.268256 4.52843 0.528606L0.528427 4.52861C0.268077 4.78896 0.268077 5.21107 0.528427 5.47141L4.52843 9.47141C4.78878 9.73176 5.21089 9.73176 5.47124 9.47141C5.73159 9.21107 5.73159 8.78896 5.47124 8.52861L1.94265 5.00001L5.47124 1.47141C5.73159 1.21107 5.73159 0.788955 5.47124 0.528606Z"
          fill={disabled ? 'hsl(var(--icons))' : 'hsl(var(--primary))'}
        />
      </svg>
    </button>
  );
};
