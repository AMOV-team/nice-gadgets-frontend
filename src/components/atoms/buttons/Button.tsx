import * as React from 'react';

type ButtonProps = {
  text: string;
  selected?: boolean;
  onSelect?: () => void;
};

export const ButtonsPrimary: React.FC<ButtonProps> = ({
  text,
  selected = false,
  onSelect: onSelect,
}) => {
  return (
    <button
      onClick={onSelect}
      className={`
        flex border border-transparent outline-none 
        w-44 h-10 items-center justify-center relative rounded-[48px] cursor-pointer 
        transition-all duration-200 
        ${
          selected ?
            'bg-white text-accent border-borderGray shadow-none'
          : 'bg-custom-accent text-white hover:shadow-[0px_3px_13px_0px_#17203166]'
        }
        active:scale-95
      `}
      type="button"
      aria-label="Primary button"
    >
      <span className="text-button">{text}</span>
    </button>
  );
};
