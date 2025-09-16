import React from 'react';

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
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-[hsl(var(--icons))] group-hover:fill-[hsl(var(--primary))] transition-colors"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.4721 4.47138C12.7324 4.21103 12.7324 3.78892 12.4721 3.52858C12.2117 3.26823 11.7896 3.26823 11.5292 3.52858L8.00065 7.05717L4.47206 3.52858C4.21171 3.26823 3.7896 3.26823 3.52925 3.52858C3.2689 3.78892 3.2689 4.21103 3.52925 4.47138L7.05784 7.99998L3.52925 11.5286C3.2689 11.7889 3.2689 12.211 3.52925 12.4714C3.7896 12.7317 4.21171 12.7317 4.47206 12.4714L8.00065 8.94279L11.5292 12.4714C11.7896 12.7317 12.2117 12.7317 12.4721 12.4714C12.7324 12.211 12.7324 11.7889 12.4721 11.5286L8.94346 7.99998L12.4721 4.47138Z"
      />
    </svg>
  </div>
);

export default DeleteButton;
