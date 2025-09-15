import * as React from 'react';

type ProductPriceProps = {
  price: number;
  fullPrice?: number;
};
export const ProductPrice: React.FC<ProductPriceProps> = ({ price, fullPrice }) => (
  <div className="flex gap-[8px] flex-row">
    <p className="font-extrabold font-mont text-h3">${price}</p>
    {fullPrice !== undefined && fullPrice !== price && (
      <p className="font-semibold font-mont text-h3 line-through text-custom-secondary">
        ${fullPrice}
      </p>
    )}
  </div>
);
