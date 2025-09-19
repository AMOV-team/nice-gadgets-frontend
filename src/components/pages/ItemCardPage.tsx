import { useTranslation } from 'react-i18next';
import { ItemCard } from '../molecules/ItemCard/ItemCard.tsx';
import { SectionSlider } from '../organisms/SectionSlider/SectionSlider.tsx';
import React from 'react';
import { GridContainer } from '../atoms/GridContainer.tsx';

type Props = {
  category: string;
};

export const ItemCardPage: React.FC<Props> = ({ category }) => {
  const { t } = useTranslation();
  return (
    <GridContainer>
      <div
        className={`
          col-span-full
          grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-4
        `}
      >
        <ItemCard category={category} />
        <section className="flex flex-col gap-4 col-span-4 sm:col-span-12 xl:col-span-24">
          <SectionSlider HeaderText={t('You-may-like')} />
        </section>
      </div>
    </GridContainer>
  );
};
