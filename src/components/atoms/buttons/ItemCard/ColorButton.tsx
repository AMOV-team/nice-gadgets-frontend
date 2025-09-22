import * as React from 'react';
import cn from 'classnames';

type Props = {
  handleSelectColor: (color: string) => void;
  color: string;
  isSelected: boolean;
};

export const ColorButton: React.FC<Props> = ({
  handleSelectColor,
  color,
  isSelected,
}) => {
  const formattedColor = '--picker-' + color.replace(' ', '');

  return (
    <button
      onClick={(event) => {
        event.preventDefault();

        handleSelectColor(color.replace('picker', ' ').replace('-', ' '));
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
          'border-primary': isSelected,
          'hover:border-icons': !isSelected,
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
        style={{ backgroundColor: `hsl(var(${formattedColor}))` }}
      ></div>
    </button>
  );
};
