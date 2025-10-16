import classNames from 'classnames';
import React from 'react';
import { PlusIcon } from '../icons/PlusIcon';

type AddButtonProps = {
  onAdd: () => void;
  disabled: boolean;
};

const AddButton: React.FC<AddButtonProps> = ({
  onAdd: onAdd,
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
    onClick={onAdd}
  >
    <PlusIcon className={disabled ? 'text-icons' : 'text-custom-primary'} />
  </div>
);

export default AddButton;
