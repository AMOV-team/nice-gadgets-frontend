import { ItemCard } from '../molecules/ItemCard/ItemCard.tsx';
import { SectionSlider } from '../organisms/SectionSlider/SectionSlider.tsx';
import React from 'react';

type Props = {
  category: string;
};

export const ItemCardPage: React.FC<Props> = ({ category }) => (
  <div>
    <ItemCard category={category} />
    <SectionSlider HeaderText="You may also like" />
  </div>
);
