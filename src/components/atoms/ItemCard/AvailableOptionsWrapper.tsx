import React from 'react';
import type { Item } from '../../../types/Item.ts';
import { ItemPrice } from './ItemPrice.tsx';
import { PrimaryButton } from '../buttons';
import { AddToFavoriteButton } from '../buttons/AddToFavoriteButton.tsx';
import { TechSpecs } from './TechSpecs.tsx';
import { ColorPickerWithTitle } from './ColorPickerWithTitle.tsx';
import { CapacityPickerWithTitle } from './CapacityPickerWithTitle.tsx';

type Props = {
  phone: Item;
  handleSelectColor: (color: string) => void;
  handleSelectCapacity: (capacity: string) => void;
  specs: Array<{ name: string; value: string }>;
};

export const AvailableOptionsWrapper: React.FC<Props> = ({
  phone,
  handleSelectColor,
  handleSelectCapacity,
  specs,
}) => (
  <div
    className={`
    w-full
    sm:w-[237px]
    xl:w-[320px]
  `}
  >
    <ColorPickerWithTitle
      phone={phone}
      handleSelectColor={handleSelectColor}
    />

    <CapacityPickerWithTitle
      phone={phone}
      handleSelectCapacity={handleSelectCapacity}
    />

    <ItemPrice phone={phone} />

    <div className="flex gap-2 items-center mb-8 justify-between">
      <PrimaryButton text="Add to cart" />
      <AddToFavoriteButton />
    </div>

    <TechSpecs specs={specs.slice(0, 4)} />
  </div>
);
