import React from 'react';
import { CapacityPicker } from './CapacityPicker.tsx';
import type { Phone } from '../../../types/phone.ts';

type Props = {
  phone: Phone;
  handleSelectCapacity: (color: string) => void;
};

export const CapacityPickerWithTitle: React.FC<Props> = ({
  phone,
  handleSelectCapacity,
}) => {
  return (
    <div
      className={`
              relative
              mb-14
              after:content-['']
              after:w-full
              after:h-[1px]
              after:bg-elements
              after:absolute
              after:bottom-[-24px]
              after:left-0
            `}
    >
      <p className="font-mont font-semibold text-[#89939A] text-xs">
        Select capacity
      </p>
      <CapacityPicker
        phone={phone}
        selectCapacityHandler={handleSelectCapacity}
      />
    </div>
  );
};
