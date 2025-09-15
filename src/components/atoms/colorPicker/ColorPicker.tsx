import { useState } from 'react';
import { ColorButton } from '../button/ColorButton.tsx';

type Props = {
  colors: Array<string>;
};

export const ColorPicker: React.FC<Props> = () => {
  const colors = ['red', 'green', 'blue'];

  const [selected, setSelected] = useState(colors[0]);

  return (
    <div
      className={`
     flex
     gap-2
     `}
    >
      {colors.map((color) => (
        <ColorButton
          color={color}
          selected={selected}
          selectHandler={setSelected}
        />
      ))}
    </div>
  );
};
