import classNames from 'classnames';
import React from 'react';
import { MinusIcon } from '../icons/MinusIcon';

type Props = {
  onDecrease: () => void;
  disabled: boolean;
};

const DecreaseButton: React.FC<Props> = ({
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
    <MinusIcon className={disabled ? 'text-icons' : 'text-custom-primary'} />
  </div>
);

export default DecreaseButton;
