import * as React from 'react';

type PaginationButtonProps = {
  text: string;
  selected?: boolean;
  onSelect: () => void;
};

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  text,
  selected = true,
  onSelect,
}) => {
  return (
    <a
      onClick={onSelect}
      className={`
        flex items-center justify-center
        w-[36px] h-[36px]
        rounded-full cursor-pointer
        box-border
        border-solid border-[1px] 
        transition-all duration-200 
        hover:border-custom-primary
        ${
          selected ?
            'bg-primary text-white border-custom-primary'
          : 'text-primary border-elements'
        }
        `}
    >
      <span className="flex items-center justify-center text-body  leading-[36px]">
        {text}
      </span>
    </a>
  );
};
