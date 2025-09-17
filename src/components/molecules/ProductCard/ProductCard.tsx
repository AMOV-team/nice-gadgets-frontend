import * as React from 'react';
import type { Product } from '../../../types/Product';
import { ProductCharacteristics } from './ProductCharacteristics/ProductCharacteristics';
import { ProductActions } from './ProductActions/ProductActions';
import { ProductPrice } from './ProductPrice/ProductPrice';

type ProductCardProps = {
  product: Product;
  className?: string;
  onAddToCart?: () => void;
  onAddToFavorite?: () => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className = '',
  onAddToCart,
  onAddToFavorite,
}) => (
  <div
    className={`
      flex flex-col 
      w-full min-w-[212px]
      h-[440px] sm:h-[506px] 
      gap-[8px] p-[32px] 
      border border-solid border-elements rounded-lg 
      ${className}
    `}
  >
    <div className="flex-1 flex items-center justify-center overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="max-h-full max-w-full object-contain"
      />
    </div>

    <p className="font-semibold text-body break-words whitespace-normal">
      {product.name}
    </p>

    <ProductPrice
      price={product.price}
      fullPrice={product.fullPrice}
    />

    <div className="border border-solid border-elements"></div>

    <ProductCharacteristics product={product} />

    <ProductActions
      onAddToCart={onAddToCart}
      onAddToFavorite={onAddToFavorite}
    />
  </div>
);
