import * as React from 'react';

type PaginationButtonProps = {
  children?: React.ReactNode;
  selected?: boolean;
  onSelect: () => void;
};

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  children,
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
            'bg-primary text-white dark:text-black border-custom-primary'
          : 'text-primary border-elements'
        }
        `}
    >
      <span className="flex items-center justify-center text-body leading-[36px] select-none">
        {children}
      </span>
    </a>
  );
};
