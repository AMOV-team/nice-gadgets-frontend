import * as React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../../types/Product';
import { ProductCharacteristics } from './ProductCharacteristics/ProductCharacteristics';
import { ProductActions } from './ProductActions/ProductActions';
import { ProductPrice } from './ProductPrice/ProductPrice';

type ProductCardProps = {
  product: Product;
  className?: string;
  onAddToCart?: () => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className = '',
  onAddToCart,
}) => (
  <div
    className={`
      flex flex-col 
      w-full min-w-[212px]
      h-[440px] sm:h-[506px]
      gap-[8px] p-[32px]
      bg-white dark:bg-surface
      border border-solid border-elements rounded-lg 
      ${className}
    `}
  >
    <Link
      to={`/${product.category}/${product.itemId}`}
      className="flex-1 flex items-center justify-center overflow-hidden"
    >
      <img
        src={product.image}
        alt={product.name}
        className="max-h-full max-w-full object-contain"
      />
    </Link>

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
      product={product}
      onAddToCart={onAddToCart}
    />
  </div>
);
