import * as React from 'react';
import type { Product } from '../../../types/Product';
import { ProductCharacteristics } from './ProductCharacteristics/ProductCharacteristics';
import { ProductActions } from './ProductActions/ProductActions';
import { ProductPrice } from './ProductPrice/ProductPrice';

type ProductCardProps = {
  product: Product;
  onAddToCart?: () => void;
  onAddToFavorite?: () => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onAddToFavorite,
}) => (
  <div className="flex flex-col gap-[8px] p-[32px] border border-solid border-elements rounded-lg">
    <img
      src={product.image}
      alt={product.name}
      className="w-[208px] h-[196px] object-contain object-center"
    />

    <p className="font-semibold font-mont text-body text-custom-primary break-words whitespace-normal">
      {product.name}
    </p>

    <ProductPrice price={product.price} fullPrice={product.fullPrice} />

    <div className="border border-solid border-elements"></div>

    <ProductCharacteristics product={product} />

    <ProductActions onAddToCart={onAddToCart} onAddToFavorite={onAddToFavorite} />
  </div>
);