import * as React from 'react';

type PaginationButtonProps = {
  text: string;
  selected?: boolean;
  onSelect: () => void;
};

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  text,
  selected = false,
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
        hover:border-primary
        ${
          selected ?
            'bg-primary text-white border-primary'
          : 'text-primary border-elements'
        }
        `}
    >
      <span className="text-body font-mont">{text}</span>
    </a>
  );
};
