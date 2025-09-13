import * as React from 'react';

type ButtonProps = {
  text: string;
};

export const ButtonsPrimary: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button
      className="
        flex border border-transparent outline-none 
        text-white w-44 h-10 items-center justify-center 
        relative bg-accent rounded-[48px] cursor-pointer 
        transition-all duration-200 
        hover:bg-white hover:text-accent hover:border-borderGray hover:shadow-[0px_3px_13px_0px_#17203166] 
        focus:outline-none 
        active:scale-95
      "
      type="button"
      aria-label="Primary button"
    >
      <span className="font-mont font-semibold text-[14px] leading-[21px] tracking-[0]">
        {text}
      </span>
    </button>
  );
};
