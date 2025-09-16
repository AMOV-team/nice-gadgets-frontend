import * as React from 'react';
import cn from 'classnames';

type Props = {
  handleSelectColor: (color: string) => void;
  color: string;
  selected: string;
  selectHandler: (color: string) => void;
};

export const ColorButton: React.FC<Props> = ({
  handleSelectColor,
  color,
  selected,
  selectHandler,
}) => {
  return (
    <button
      onClick={(event) => {
        event.preventDefault();

        handleSelectColor(color);
        selectHandler(color);
      }}
      className={cn(
        `
        flex items-center justify-center
        w-[32px] h-[32px]
        rounded-full cursor-pointer
        box-border
        border-solid
        border border-elements
        active:border-primary
        p-0.5
        bg-transparent
        transition-all duration-200 
      `,
        {
          'border-primary': selected === color,
          'hover:border-icons': selected !== color,
        },
      )}
    >
      <div
        className={`
        w-full
        h-full
        rounded-full
        transition-all duration-200 
      `}
        style={{ backgroundColor: color }}
      ></div>
    </button>
  );
};
