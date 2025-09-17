import { ShoppingBag } from 'lucide-react';
import React from 'react';

type Props = {
  count?: number;
  className?: string;
};

export const ShoppingBagIconCounter: React.FC<Props> = ({
  count = 100,
  className = '',
}) => {
  return (
    <div
      className={`relative w-[28px] h-[28px] flex items-center justify-center ${className}`}
    >
      <ShoppingBag
        className="text-custom-primary"
        size={16}
      />

      {count > 0 && (
        <span
          className="absolute top-[1px] right-[1px] w-[15px] h-[15px] 
                     bg-custom-accent text-white text-[7px] leading-[15px] 
                     font-mont font-semibold rounded-full text-center 
                     border border-white"
        >
          {count}
        </span>
      )}
    </div>
  );
};
