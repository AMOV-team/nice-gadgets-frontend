import { useTranslation } from 'react-i18next';
import { ItemCard } from '../molecules/ItemCard/ItemCard.tsx';
import { SectionSlider } from '../organisms/SectionSlider/SectionSlider.tsx';
import React from 'react';

type Props = {
  category: string;
};

export const ItemCardPage: React.FC<Props> = ({ category }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`
    xl:mx-[152px] xl:mb-20
    sm:mx-8
    mt-6 mx-4 mb-14
  `}
    >
      <ItemCard category={category} />
      <SectionSlider HeaderText={t('You-may-like')} />
    </div>
  );
};
