import { ItemParagraph } from '../text/ItemCard/ItemParagraph';
import React from 'react';
import type { Item } from '../../../types/Item';
import { useTranslation } from 'react-i18next';

type Props = { item: Item };

export const AboutDescription: React.FC<Props> = ({ item }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full xl:w-[50%]">
      <h3
        className="relative font-mont font-extrabold text-[22px] leading-[140%] m-0 mb-12
          after:content-[''] after:w-full after:h-[1px] after:bg-elements
          after:absolute after:bottom-[-16px] after:left-0"
      >
        {t('About')}
      </h3>

      <div className="flex flex-col gap-8">
        {item.description.map((d) => (
          <ItemParagraph
            key={d.title}
            title={d.title}
            text={d.text.join('\n')}
          />
        ))}
      </div>
    </div>
  );
};
