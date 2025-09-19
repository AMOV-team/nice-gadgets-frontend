import * as React from 'react';
import { useEffect, useState } from 'react';
import { useFavorites } from '../../hooks/useFavorites';
import type { ProductsAll } from '../../types/ProductsAll';
import { client } from '../../utils/fetchClient';
import { GridContainer } from '../atoms/GridContainer';
import { Breadcrumb } from '../molecules/Breadcrumb/Breadcrumb';
import { ProductCard } from '../molecules/ProductCard/ProductCard';

export const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();
  const [favoriteProducts, setFavoriteProducts] = useState<ProductsAll[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFavorites = async () => {
      if (favorites.length === 0) {
        setFavoriteProducts([]);
        return;
      }

      setLoading(true);
      try {
        const itemIds = favorites.map((f) => `"${f.id}"`).join(',');

        const products: ProductsAll[] = await client.get<ProductsAll[]>(
          `/products?itemId=in.(${itemIds})&select=*`,
        );

        setFavoriteProducts(products);
      } catch (error) {
        console.error('Failed to fetch favorites', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GridContainer>
      <div className="col-span-4 sm:col-span-12 xl:col-span-24">
        <Breadcrumb />
        <h1 className="text-h1 font-bold">Favorites</h1>
        <p className="font-semibold text-custom-secondary text-body">
          {favorites.length} items
        </p>
      </div>

      {loading && (
        <div className="col-span-4 sm:col-span-12 xl:col-span-24">
          <p>Loading favorites...</p>
        </div>
      )}

      {!loading && favoriteProducts.length === 0 && (
        <div className="col-span-4 sm:col-span-12 xl:col-span-24">
          <p>No favorites yet</p>
        </div>
      )}

      {!loading &&
        favoriteProducts.length > 0 &&
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
