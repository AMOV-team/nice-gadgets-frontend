import * as React from 'react';
import { PrimaryButton } from '../../../atoms/buttons';
import { AddToFavoriteButton } from '../../../atoms/buttons/AddToFavoriteButton';

type ProductActionsProps = {
  onAddToCart?: () => void;
  onAddToFavorite?: () => void;
};

export const ProductActions: React.FC<ProductActionsProps> = ({
  onAddToCart,
  onAddToFavorite,
}) => (
  <div className="flex justify-between items-center gap-[8px]">
    <PrimaryButton
      text="Add to cart"
      onSelect={onAddToCart}
    />
    <AddToFavoriteButton onSelect={onAddToFavorite} />
  </div>
);
