import * as React from 'react';
import { AddToCartButton } from '../../../atoms/buttons';
import { AddToFavoriteButton } from '../../../atoms/buttons/AddToFavoriteButton';

type ProductActionsProps = {
  onAddToCart?: () => void;
  onAddToFavorite?: () => void;
};

export const ProductActions: React.FC<ProductActionsProps> = ({ onAddToCart, onAddToFavorite }) => (
  <div className="flex justify-between items-center">
    <AddToCartButton text="Add to Cart" onSelect={onAddToCart} />
    <AddToFavoriteButton onSelect={onAddToFavorite} />
  </div>
);