import * as React from 'react';
import { ProductCard } from '../molecules/ProductCard/ProductCard';
import { GridContainer } from '../atoms/GridContainer';
import { Breadcrumb } from '../molecules/Breadcrumb/Breadcrumb.tsx';
import { useFavorites } from '../../hooks/useFavorites.ts';
import { useTranslation } from 'react-i18next';

export const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();
  const count = favorites.length;
  const { t } = useTranslation();

  return (
    <GridContainer>
      <div className="col-span-4 sm:col-span-12 xl:col-span-24">
        <Breadcrumb />
        <h1 className="text-h1 font-bold">{t('favorites')}</h1>
        <p className="font-semibold text-custom-secondary text-body">
          {count === 0 ?
            ``
          : `${count} ${count === 1 ? `${t('item')}` : `${t('items')}`}`}
        </p>
      </div>

      {favorites.length === 0 ?
        <div className="col-span-4 sm:col-span-12 xl:col-span-24 text-center py-16">
          <p className="text-custom-secondary text-body">
            {t('empty-favourites')}
          </p>
        </div>
      : favorites.map((product) => (
          <div
            key={product.id}
            className="col-span-4 sm:col-span-6 xl:col-span-6"
          >
            <ProductCard product={product} />
          </div>
        ))
      }
    </GridContainer>
  );
};
