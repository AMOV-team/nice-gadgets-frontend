import * as React from 'react';
import { useEffect, useState } from 'react';
import { useFavorites } from '../../hooks/useFavorites';
import type { ProductsAll } from '../../types/ProductsAll';
import { client } from '../../utils/fetchClient';
import { GridContainer } from '../atoms/GridContainer';
import { Breadcrumb } from '../molecules/Breadcrumb/Breadcrumb';
import { ProductCard } from '../molecules/ProductCard/ProductCard';
import { useTranslation } from 'react-i18next';

export const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();
  const [favoriteProducts, setFavoriteProducts] = useState<ProductsAll[]>([]);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const count = favorites.length;

  useEffect(() => {
    const fetchFavorites = async () => {
      if (favorites.length === 0) {
        setFavoriteProducts([]);
        return;
      }

      try {
        const itemIds = favorites.map((f) => `"${f.id}"`).join(',');

        const products: ProductsAll[] = await client.get<ProductsAll[]>(
          `/products?itemId=in.(${itemIds})&select=*`,
        );

        setFavoriteProducts(products);
      } catch (error) {
        console.error('Failed to fetch favorites', error);
      }
    };

    fetchFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

      {
        <div className="col-span-4 sm:col-span-12 xl:col-span-24">
          <p>{t('loading-favorites')}</p>
        </div>
      }

      {favoriteProducts.length === 0 && (
        <div className="col-span-4 sm:col-span-12 xl:col-span-24">
          <p>{t('empty-favourites')}</p>
        </div>
      )}

      {favoriteProducts.length > 0 &&
        favoriteProducts.map((product) => (
          <div
            key={product.itemId}
            className="col-span-4 sm:col-span-6 xl:col-span-6"
          >
            <ProductCard product={product} />
          </div>
        ))}
    </GridContainer>
  );
};
