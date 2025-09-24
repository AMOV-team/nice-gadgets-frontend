import * as React from 'react';
import { CompareIconCounter } from '../icons/CompareIconCounter';

type Props = {
  selected: boolean;
  onSelect: () => void;
  className?: string;
};

export const CompareButton: React.FC<Props> = ({
  selected = false,
  onSelect,
  className,
}) => {
  return (
    <div
      className={`
        top-[20px] right-[22px]
        flex items-center justify-center
        w-[40px] h-[40px]
        min-w-[40px]
        bg-white dark:bg-surface
        rounded-full cursor-pointer
        box-border
        border border-elements
        transition-all duration-200
        hover:border-custom-primary
        ${className}
      `}
      onClick={onSelect}
    >
      <CompareIconCounter
        className={selected ? 'text-yellow-300' : 'text-custom-primary'}
      />
    </div>
  );
};
