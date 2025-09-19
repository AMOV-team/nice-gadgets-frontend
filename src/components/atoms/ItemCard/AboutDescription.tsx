import { ItemParagraph } from '../text/ItemCard/ItemParagraph';
import React, { useEffect, useState } from 'react';
import type { Item } from '../../../types/Item';
import { useTranslation } from 'react-i18next';
import { translateText } from '../../../utils/translateText';

type Props = { item: Item };

export const AboutDescription: React.FC<Props> = ({ item }) => {
  const { i18n, t } = useTranslation();
  const [translatedDescription, setTranslatedDescription] = useState(
    item.description,
  );

  useEffect(() => {
    async function doTranslate() {
      if (i18n.language === 'en') {
        setTranslatedDescription(item.description);
        return;
      }

      const translated = await Promise.all(
        item.description.map(async (d) => {
          const translatedTitle = await translateText(d.title, i18n.language);
          const translatedText = await translateText(
            d.text.join('\n'),
            i18n.language,
          );
          return { title: translatedTitle, text: translatedText.split('\n') };
        }),
      );

      setTranslatedDescription(translated);
    }

    doTranslate();
  }, [item, i18n.language]);

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
        {translatedDescription.map((d) => (
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
