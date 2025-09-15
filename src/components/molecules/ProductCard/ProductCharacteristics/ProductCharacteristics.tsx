import * as React from 'react';
import { ProductCharacteristic } from '../../../atoms/text/ProductCharacteristic';
import type { Product } from '../../../../types/Product';

type ProductCharacteristicsProps = {
  product: Pick<Product, 'screen' | 'capacity' | 'ram'>;
};
export const ProductCharacteristics: React.FC<ProductCharacteristicsProps> = ({ product }) => (
  <div className="flex flex-col gap-[4px]">
    <ProductCharacteristic label="Screen:" value={product.screen} />
    <ProductCharacteristic label="Capacity:" value={product.capacity} />
    <ProductCharacteristic label="RAM:" value={product.ram} />
  </div>
);