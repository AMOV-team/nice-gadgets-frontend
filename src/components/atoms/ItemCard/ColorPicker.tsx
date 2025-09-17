import React from 'react';
import { useState } from 'react';
import { ColorButton } from '../buttons/ItemCard/ColorButton.tsx';

type Props = {
  colors: Array<string>;
  handleSelectColor: (color: string) => void;
};

export const ColorPicker: React.FC<Props> = ({ colors, handleSelectColor }) => {
  const [selected, setSelected] = useState(colors[0]);

  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <ColorButton
          key={color}
          handleSelectColor={handleSelectColor}
          color={color}
          selected={selected}
          selectHandler={setSelected}
        />
      ))}
    </div>
  );
};
