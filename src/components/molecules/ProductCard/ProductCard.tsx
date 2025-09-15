import * as React from 'react';
import type { Product } from '../../../types/Product';
import { AddToCartButton } from '../../atoms/buttons';
import { AddToFavoriteButton } from '../../atoms/buttons/AddToFavoriteButton';

type ProductCardProps = {
  product: Product;
  onAddToCart?: () => void;
  onAddToFavorite?: () => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onAddToFavorite,
}) => {
  return (
    <div
      className="
      flex flex-col gap-[8px]
      p-[32px] 
      border border-solid border-elements rounded-lg"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-[208px] h-[196px] object-contain object-center"
      />

      <p className="font-semibold font-mont text-body text-custom-primary break-words whitespace-normal">
        {product.name}
      </p>

      <div className="flex gap-[8px] flex-row">
        <p className="font-extrabold font-mont text-h3">${product.price}</p>

        {product.fullPrice !== product.price && (
          <p className="font-semibold font-mont text-h3 line-through text-custom-secondary">
            ${product.fullPrice}
          </p>
        )}
      </div>
      <div className="border border-solid border-elements"></div>
      <div className="col-span-full">
        <div className="flex justify-between">
          <p className="font-mont text-custom-secondary text-small">Screen:</p>
          <p className="font-mont text-custom-primary uppercase text-small">
            {product.screen}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="font-mont text-custom-secondary text-small">
            Capacity:
          </p>
          <p className="font-mont text-custom-primary uppercase text-small">
            {product.capacity}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="font-mont text-custom-secondary text-small">RAM:</p>
          <p className="font-mont text-custom-primary uppercase text-small">
            {product.ram}
          </p>
        </div>
      </div>

      <div className="col-span-full">
        <div className="flex justify-between items-center">
          <AddToCartButton
            text="Add to Cart"
            onSelect={onAddToCart}
          />
          <AddToFavoriteButton onSelect={onAddToFavorite} />
        </div>
      </div>
    </div>
  );
};
