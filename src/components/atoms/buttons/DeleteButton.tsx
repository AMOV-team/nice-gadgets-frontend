import React from 'react';
import { CloseIcon } from '../icons/CloseIcon';

type DeleteButtonProps = {
  onDelete: () => void;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ onDelete }) => (
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
    <CloseIcon className="transition-all duration-200 text-icons hover:text-custom-primary" />
  </div>
);

export default DeleteButton;
