import * as React from 'react';
import { AddToCartButton } from '../../../atoms/button';
import { AddToFavoriteButton } from '../../../atoms/button/AddToFavoriteButton';

type ProductActionsProps = {
  onAddToCart?: () => void;
  onAddToFavorite?: () => void;
};

export const ProductActions: React.FC<ProductActionsProps> = ({
  onAddToCart,
  onAddToFavorite,
}) => (
  <div className="flex justify-between items-center">
    <AddToCartButton
      text="Add to Cart"
      onSelect={onAddToCart}
    />
    <AddToFavoriteButton onSelect={onAddToFavorite} />
  </div>
);
