import React from 'react';
import { ColorButton } from '../buttons/ItemCard/ColorButton.tsx';
import type { Item } from '../../../types/Item.ts';

type Props = {
  item: Item;
  handleSelectColor: (color: string) => void;
};

export const ColorPicker: React.FC<Props> = ({ item, handleSelectColor }) => {
  return (
    <div className="flex gap-2">
      {item.colorsAvailable.map((color) => (
        <ColorButton
          key={color}
          handleSelectColor={handleSelectColor}
          color={color}
          isSelected={item.color === color}
        />
      ))}
    </div>
  );
};
