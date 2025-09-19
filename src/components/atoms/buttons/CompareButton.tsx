import * as React from 'react';
import { CompareIconCounter } from '../icons/CompareIconCounter';

type Props = {
  selected?: boolean;
  onSelect?: () => void;
};

export const CompareButton: React.FC<Props> = ({
  selected = false,
  onSelect,
}) => {
  return (
    <div
      className="
        absolute top-[22px] right-[22px]
        flex items-center justify-center
        w-[40px] h-[40px]
        min-w-[40px]
        rounded-full cursor-pointer
        box-border
        border border-elements
        transition-all duration-200
        hover:border-custom-primary
      "
      onClick={onSelect}
    >
      <CompareIconCounter
        className={selected ? 'text-yellow-300' : 'text-custom-primary'}
      />
    </div>
  );
};
