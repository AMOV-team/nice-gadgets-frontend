import React from 'react';
import type { Item } from '../../../types/Item.ts';
import { ItemPrice } from './ItemPrice.tsx';
import { PrimaryButton } from '../buttons';
import { AddToFavoriteButton } from '../buttons/AddToFavoriteButton.tsx';
import { TechSpecs } from './TechSpecs.tsx';
import { ColorPickerWithTitle } from './ColorPickerWithTitle.tsx';
import { CapacityPickerWithTitle } from './CapacityPickerWithTitle.tsx';
import { useCart } from 'react-use-cart';
import { useTranslation } from 'react-i18next';


type Props = {
  item: Item;
  handleSelectColor: (color: string) => void;
  handleSelectCapacity: (capacity: string) => void;
  specs: Array<{ name: string; value: string }>;
};

export const AvailableOptionsWrapper: React.FC<Props> = ({
  item: item,
  handleSelectColor,
  handleSelectCapacity,
  specs,
}) => {

  const { addItem } = useCart();
  const handleAdd = () => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.priceDiscount,
      quantity: 1,
      image: item.images[0],
      metadata: {
        color: item.color,
        capacity: item.capacity,
        ram: item.ram,
        screen: item.screen,
      },
    });
  };

  const { t } = useTranslation();

  return (
    <div
      className={`
    w-full
    sm:w-[237px]
    xl:w-[320px]
  `}
    >
      <ColorPickerWithTitle
        item={item}
        handleSelectColor={handleSelectColor}
      />

      <CapacityPickerWithTitle
        item={item}
        handleSelectCapacity={handleSelectCapacity}
      />

      <ItemPrice item={item} />

      <div className="flex gap-2 items-center mb-8 justify-between">
        <PrimaryButton
          text={t('add-to-cart')}
          onSelect={handleAdd}
        />
        <AddToFavoriteButton />
      </div>

      <TechSpecs specs={specs.slice(0, 4)} />
    </div>
  );
};
