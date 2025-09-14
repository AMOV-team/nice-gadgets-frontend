import React from 'react';

import { SORT_OPTIONS } from '../../constants/sortOptions';
import { Dropdown } from '../atoms/Dropdown';
import { AddToCartButton } from '../atoms/buttons';

import { PaginationButton } from '../atoms/buttons/PaginationButton';
import { AddToFavoriteButton } from '../atoms/buttons/AddToFavoriteButton';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-2">
      <h1 className="title">Home Page</h1>
      <AddToCartButton text="Add to cart" />
      <PaginationButton
        onSelect={() => alert('Clicked!')}
        text="1"
      />
      <AddToFavoriteButton />

      <Dropdown
        defaultText="Оберіть"
        itemData={SORT_OPTIONS}
      />
    </div>
  );
};
