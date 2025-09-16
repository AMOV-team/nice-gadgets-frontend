import { ColorPicker } from './ColorPicker.tsx';
import React from 'react';
import type { Phone } from '../../../types/phone.ts';

type Props = {
  phone: Phone;
  handleSelectColor: (color: string) => void;
};

export const ColorPickerWithTitle: React.FC<Props> = ({
  phone,
  handleSelectColor,
}) => {
  return (
    <div
      className={`
              relative
              mb-12
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
        Available colors
      </p>
      <ColorPicker
        colors={phone.colorsAvailable}
        handleSelectColor={handleSelectColor}
      />
    </div>
  );
};
