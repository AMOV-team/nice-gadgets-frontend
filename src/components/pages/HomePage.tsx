import React from 'react';


import { Dropdown } from '../atoms/Dropdown';
import { AddToCartButton } from '../atoms/buttons';


import { PaginationButton } from '../atoms/buttons/PaginationButton';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-2">
      <h1 className="title">Home Page</h1>
      <AddToCartButton text="Add to cart" />
      <PaginationButton
        onSelect={() => alert('Clicked!')}
        text="1"
      />

      <Dropdown />
    </div>

  );
};
