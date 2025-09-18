import * as React from 'react';
import { PrimaryButton } from '../../../atoms/buttons';
import { AddToFavoriteButton } from '../../../atoms/buttons/AddToFavoriteButton';
import { useTranslation } from 'react-i18next';
import { useFavorites } from '../../../../utils/useFavorites';
import type { Product } from '../../../../types/Product';

type ProductActionsProps = {
  product: Product;
  onAddToCart?: () => void;
};

export const ProductActions: React.FC<ProductActionsProps> = ({
  product,
  onAddToCart,
}) => {
  const { t } = useTranslation();
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleFavoriteClick = () => {
    toggleFavorite(product);
  };

  return (
    <div className="flex justify-between items-center gap-[8px]">
      <PrimaryButton
        text={t('add-to-cart')}
        onSelect={onAddToCart}
      />
      <AddToFavoriteButton
        selected={isFavorite(product.id)}
        onSelect={handleFavoriteClick}
      />
    </div>
  );
};
