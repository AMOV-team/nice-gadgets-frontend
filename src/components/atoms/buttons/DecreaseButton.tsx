import classNames from 'classnames';
import React from 'react';

type AddButtonProps = {
  onDecrease: () => void;
  disabled: boolean;
};

const DecreaseButton: React.FC<AddButtonProps> = ({
  onDecrease: onDecrease,
  disabled = false,
}) => (
  <div
    className={classNames(
      `
        flex items-center justify-center
        w-[32px] h-[32px]
        cursor-pointer
        box-border
        border-solid
        rounded-full
        border border-elements
        transition-all duration-200
        disabled:border-elements
        bg-transparent`,
      { 'hover:border-custom-primary': !disabled },
    )}
    onClick={onDecrease}
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.66602 7.99998C2.66602 7.63179 2.96449 7.33331 3.33268 7.33331H12.666C13.0342 7.33331 13.3327 7.63179 13.3327 7.99998C13.3327 8.36817 13.0342 8.66665 12.666 8.66665H3.33268C2.96449 8.66665 2.66602 8.36817 2.66602 7.99998Z"
        fill={disabled ? 'hsl(var(--icons))' : 'hsl(var(--primary))'}
      />
    </svg>
  </div>
);

export default DecreaseButton;
