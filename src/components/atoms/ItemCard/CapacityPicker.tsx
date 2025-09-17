import React from 'react';
import { PhoneCapacityButton } from '../buttons/ItemCard/PhoneCapacityButton.tsx';
import type { Phone } from '../../../types/phone.ts';

type Props = {
  phone: Phone;
  selectCapacityHandler: (capacity: string) => void;
};

export const CapacityPicker: React.FC<Props> = ({
  phone,
  selectCapacityHandler,
}) => {
  return (
    <div className="flex gap-2">
      {phone.capacityAvailable.map((capacity) => {
        const formattedCapacity =
          capacity.slice(0, -2) + ' ' + capacity.slice(-2);

        return (
          <PhoneCapacityButton
            key={capacity}
            capacity={formattedCapacity}
            selectCapacityHandler={selectCapacityHandler}
            isSelected={phone.capacity === capacity}
          />
        );
      })}
    </div>
  );
};
