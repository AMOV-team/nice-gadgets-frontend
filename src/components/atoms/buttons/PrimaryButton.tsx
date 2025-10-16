import * as React from 'react';

type ButtonProps = {
  text: string;
  onSelect?: () => void;
};

export const PrimaryButton: React.FC<ButtonProps> = ({ text, onSelect }) => {
  return (
    <button
      onClick={onSelect}
      className={`
          flex items-center justify-center relative
          min-w-[100px]
          w-full h-[40px]
          border rounded-[48px]
          transition-all duration-200 cursor-pointer
          bg-custom-accent text-white border-none dark:hover:shadow-[0px_3px_13px_0px_hsl(var(--hover)/0.4)] hover:shadow-[0px_3px_13px_0px_#17203166]
          active:scale-95
        `}
      type="button"
    >
      <span className="text-button font-bold">{text}</span>
    </button>
  );
};
