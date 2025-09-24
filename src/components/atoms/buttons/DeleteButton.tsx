import React from 'react';
import { CloseIcon } from '../icons/CloseIcon';

type DeleteButtonProps = {
  onDelete?: () => void;
  className?: string;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete, className }) => (
  <div
    className="
        group
        flex items-center justify-center
        size-[16px]
        rounded-full cursor-pointer
        box-border
        transition-all duration-200
      "
    onClick={onDelete}
  >
    <CloseIcon
      className={`transition-all duration-200 text-icons hover:text-custom-primary ${className}`}
    />
  </div>
);

export default DeleteButton;
