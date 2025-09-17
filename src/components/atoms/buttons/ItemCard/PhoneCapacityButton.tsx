import * as React from 'react';
import cn from 'classnames';

type Props = {
  capacity: string;
  selectCapacityHandler: (selected: string) => void;
  isSelected: boolean;
};

export const PhoneCapacityButton: React.FC<Props> = ({
  capacity,
  selectCapacityHandler,
  isSelected,
}) => {
  return (
    <button
      onClick={(event) => {
        event.preventDefault();

        selectCapacityHandler(capacity.replace(' ', ''));
      }}
      className={cn(
        {
          'bg-custom-primary text-white dark:text-black border-none':
            isSelected,
          'border border-solid border-custom-icons bg-white dark:bg-black text-primary':
            !isSelected,
        },
        `
          font-mont font-medium
          text-sm
          leading-[21px]
          rounded
          pt-[7px] pr-2 pl-2 pb-1
          cursor-pointer
        `,
      )}
    >
      {capacity}
    </button>
  );
};
