import * as React from 'react';

type ButtonProps = {
  text: string;
  selected?: boolean;
  onSelect?: () => void;
};

export const AddItemToCartButton: React.FC<ButtonProps> = ({
  text,
  selected = false,
  onSelect,
}) => {
  return (
    <button
      onClick={onSelect}
      className={`
          flex items-center justify-center relative
          px-[91px] py-[13.5px] 
          border rounded-[48px]
          transition-all duration-200 cursor-pointer
          ${
            selected ?
              'bg-white text-accent border-elements border-solid'
            : 'bg-custom-accent text-white border-none hover:shadow-[0px_3px_13px_0px_#17203166]'
          }
          active:scale-95
        `}
      type="button"
    >
      <span className="text-button font-mont font-bold">{text}</span>
    </button>
  );
};
