import * as React from 'react';
import products from '../../../public/api/products.json';
import type { Product } from '../../types/Product';
import { ProductCard } from '../molecules/ProductCard/ProductCard';

const testFavorites: Product[] = products.slice(0, 10);

export const FavoritesPage: React.FC = () => {
  return (
    // <div className="grid grid-cols-4 sm:grid-cols-12 [@media(min-width:988px)]:grid-cols-18 xl:grid-cols-24 gap-x-4 gap-y-[40px]">
    <>
      <div className="col-span-4 sm:col-span-12 xl:col-span-24">
        <h1 className="text-h1 font-bold text-custom-primary">Favorites</h1>
        <p className="font-semibold text-custom-secondary text-body">
          {testFavorites.length} items
        </p>
      </div>

      {testFavorites.map((product) => (
        <div
          key={product.id}
          className="col-span-4 sm:col-span-6 xl:col-span-6"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </>
  );
};
