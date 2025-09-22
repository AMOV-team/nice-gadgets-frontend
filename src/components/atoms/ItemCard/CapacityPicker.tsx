import React from 'react';
import { PhoneCapacityButton } from '../buttons/ItemCard/PhoneCapacityButton.tsx';
import type { Item } from '../../../types/Item.ts';

type Props = {
  item: Item;
  selectCapacityHandler: (capacity: string) => void;
};

export const CapacityPicker: React.FC<Props> = ({
  item,
  selectCapacityHandler,
}) => {
  return (
    <div className="flex gap-2">
      {item.capacityAvailable.map((capacity) => {
        const formattedCapacity =
          capacity.slice(0, -2) + ' ' + capacity.slice(-2);

        return (
          <PhoneCapacityButton
            key={capacity}
            capacity={formattedCapacity}
            selectCapacityHandler={selectCapacityHandler}
            isSelected={item.capacity === capacity}
          />
        );
      })}
    </div>
  );
};
