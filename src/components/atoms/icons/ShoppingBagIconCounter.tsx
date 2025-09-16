import { ShoppingBag } from 'lucide-react';
import React from 'react';

type Props = {
  count?: number;
  className?: string;
};

export const ShoppingBagIconCounter: React.FC<Props> = ({
  count = 77,
  className = '',
}) => {
  return (
    <div
      className={`relative w-[28px] h-[28px] flex items-center justify-center ${className}`}
    >
      <ShoppingBag
        className="text-[#0F0F11]"
        size={16}
      />
      {count > 0 && (
        <span className="absolute top-[0.5px] right-[2px] w-[14px] h-[14px] bg-[#4219D0] text-white text-[8px] font-semibold rounded-full flex items-center justify-center border border-white">
          {count}
        </span>
      )}
    </div>
  );
};
