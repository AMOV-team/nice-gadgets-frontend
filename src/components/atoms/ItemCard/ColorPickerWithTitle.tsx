import { ColorPicker } from './ColorPicker.tsx';
import React from 'react';
import type { Item } from '../../../types/Item.ts';
import { useTranslation } from 'react-i18next';

type Props = {
  item: Item;
  handleSelectColor: (color: string) => void;
};

export const ColorPickerWithTitle: React.FC<Props> = ({
  item,
  handleSelectColor,
}) => {
  const { t } = useTranslation();

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
      <p className="font-mont font-semibold text-[#89939A] text-xs mb-2">
        {t('Available-colors')}
      </p>
      <ColorPicker
        item={item}
        handleSelectColor={handleSelectColor}
      />
    </div>
  );
};
