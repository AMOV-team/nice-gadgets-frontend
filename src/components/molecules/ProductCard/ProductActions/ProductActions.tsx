import * as React from 'react';
import { PrimaryButton } from '../../../atoms/buttons';
import { AddToFavoriteButton } from '../../../atoms/buttons/AddToFavoriteButton';
import { useTranslation } from 'react-i18next';
import { useFavorites } from '../../../../hooks/useFavorites';
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
    toggleFavorite({
      id: product.itemId,
      name: product.name,
      price: product.price,
      image: product.image,
      metadata: {
        color: product.color,
        capacity: product.capacity,
        ram: product.ram,
        screen: product.screen,
      },
    });
  };

  return (
    <div className="flex justify-between items-center gap-[8px]">
      <PrimaryButton
        text={t('add-to-cart')}
        onSelect={onAddToCart}
      />
      <AddToFavoriteButton
        selected={isFavorite(product.itemId)}
        onSelect={handleFavoriteClick}
      />
    </div>
  );
};
