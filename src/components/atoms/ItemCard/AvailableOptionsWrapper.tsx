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
import { useFavorites } from '@/hooks/useFavorites.ts';

type Props = {
  item: Item;
  handleSelectColor: (color: string) => void;
  handleSelectCapacity: (capacity: string) => void;
  specs: Array<{ name: string; value: string }>;
};

export const AvailableOptionsWrapper: React.FC<Props> = ({
  item,
  handleSelectColor,
  handleSelectCapacity,
  specs,
}) => {
  const { addItem } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { t } = useTranslation();

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

  const handleFavoriteClick = () => {
    toggleFavorite({
      id: item.id,
      name: item.name,
      price: item.priceDiscount,
      image: item.images[0],
      metadata: {
        color: item.color,
        capacity: item.capacity,
        ram: item.ram,
        screen: item.screen,
      },
    });
  };

  return (
    <div className="w-full col-span-full sm:col-start-8 sm:col-end-12 sm:col-span-5 xl:col-start-14 xl:col-end-20 xl:col-span-7">
      <ColorPickerWithTitle
        item={item}
        handleSelectColor={handleSelectColor}
      />
      <CapacityPickerWithTitle
        item={item}
        handleSelectCapacity={handleSelectCapacity}
      />
      <ItemPrice item={item} />

      <div className="flex gap-2 items-center mb-8 justify-between max-w-[400px]">
        <PrimaryButton
          text={t('add-to-cart')}
          onSelect={handleAdd}
        />
        <AddToFavoriteButton
          selected={isFavorite(item.id)}
          onSelect={handleFavoriteClick}
        />
      </div>

      <div className="max-w-[400px]">
        <TechSpecs specs={specs.slice(0, 4)} />
      </div>
    </div>
  );
};
