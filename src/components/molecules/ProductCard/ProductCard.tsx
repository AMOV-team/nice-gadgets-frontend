import * as React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../../../types/Product';
import { ProductCharacteristics } from './ProductCharacteristics/ProductCharacteristics';
import { ProductActions } from './ProductActions/ProductActions';
import { ProductPrice } from './ProductPrice/ProductPrice';
import { useCart } from 'react-use-cart';
import { CompareButton } from '@/components/atoms/buttons/CompareButton';
import { useComparison } from '@/hooks/useComparison';

type ProductCardProps = {
  product: Product;
  className?: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  className = '',
}) => {
  const { addItem } = useCart();
  const { toggleComparison, isInComparison } = useComparison();

  const handleAdd = () => {
    addItem({
      id: product.itemId,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      metadata: {
        color: product.color,
        capacity: product.capacity,
        year: product.year,
        image: product.image,
        ram: product.ram,
        screen: product.screen,
      },
    });
  };

  const handleComparisonClick = () => {
    toggleComparison(product);
  };

  return (
    <div
      className={`
      relative
      flex flex-col 
      w-full min-w-[212px]
      h-[440px] sm:h-[506px]
      gap-[8px] p-[32px]
      bg-white dark:bg-surface
      transition-all duration-200
      border border-solid border-white dark:border-surface
      dark:hover:shadow-[0px_0px_5px_0px_hsl(var(--hover)/0.4)] hover:shadow-[0px_3px_13px_0px_#17203166]
      rounded-lg 
      ${className}
    `}
    >
      <CompareButton
        selected={isInComparison(product.id)}
        onSelect={handleComparisonClick}
      />

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
        onAddToCart={handleAdd}
        product={product}
      />
    </div>
  );
};
