import * as React from 'react';
import { PrimaryButton } from '../../../atoms/buttons';
import { AddToFavoriteButton } from '../../../atoms/buttons/AddToFavoriteButton';
import { useTranslation } from 'react-i18next';

type ProductActionsProps = {
  onAddToCart?: () => void;
  onAddToFavorite?: () => void;
};

export const ProductActions: React.FC<ProductActionsProps> = ({
  onAddToCart,
  onAddToFavorite,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between items-center gap-[8px]">
      <PrimaryButton
        text={t('add-to-cart')}
        onSelect={onAddToCart}
      />
      <AddToFavoriteButton onSelect={onAddToFavorite} />
    </div>
  );
};
