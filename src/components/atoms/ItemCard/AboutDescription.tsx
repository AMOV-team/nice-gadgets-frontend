import { ItemParagraph } from '../text/ItemCard/ItemParagraph.tsx';
import React from 'react';
import type { Item } from '../../../types/Item.ts';

type Props = {
  item: Item;
};

export const AboutDescription: React.FC<Props> = ({ item: item }) => {
  return (
    <div
      className={`
      w-full
      xl:w-[50%]
      mb-14
      sm:mb-16
    `}
    >
      <h3
        className={`
              relative
              font-mont
              font-extrabold
              text-[22px]
              leading-[140%]
              m-0
              mb-12
              after:content-['']
              after:w-full
              after:h-[1px]
              after:bg-elements
              after:absolute
              after:bottom-[-16px]
              after:left-0
            `}
      >
        About
      </h3>

      <div
        className={`
        flex flex-col gap-8
      `}
      >
        {item.description.map((currentDescription) => (
          <ItemParagraph
            key={currentDescription.title}
            title={currentDescription.title}
            text={currentDescription.text.join('/n')}
          />
        ))}
      </div>
    </div>
  );
};
