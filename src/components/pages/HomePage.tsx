import React from 'react';
import { AddToCartButton } from '../atoms/buttons/AddToCartButton';
import { PaginationButton } from '../atoms/buttons/PaginationButton';

export const HomePage: React.FC = () => {
  return (
    <>
      <h1 className="title">Home Page</h1>
      <AddToCartButton text="Add to cart" />
      <PaginationButton
        onSelect={() => alert('Clicked!')}
        text="1"
      />
    </>
  );
};
