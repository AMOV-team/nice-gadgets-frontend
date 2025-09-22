import React from 'react';
import type { Item } from '../../../types/Item.ts';

type Props = {
  item: Item;
};

export const ItemPrice: React.FC<Props> = ({ item }) => {
  return (
    <div className="font-mont flex items-end gap-2 mb-4">
      <h2
        className={`
               font-extrabold
               text-primary text-[32px]
               leading-[41px] tracking-[-1%]
               m-0
               `}
      >
        ${item.priceDiscount}
      </h2>
      <span
        className={`
               font-medium
               text-custom-secondary text-[22px]
               leading-[41px]
               line-through
               `}
      >
        ${item.priceRegular}
      </span>
    </div>
  );
};
