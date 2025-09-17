import { ItemCard } from '../organisms/ItemCard/ItemCard.tsx';
import { SectionSlider } from '../organisms/SectionSlider/SectionSlider.tsx';
import React from 'react';

export const ItemCardPage: React.FC = () => (
  <div>
    <ItemCard />
    <SectionSlider HeaderText="You may also like" />
  </div>
);
