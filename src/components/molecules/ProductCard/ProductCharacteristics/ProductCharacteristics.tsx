import * as React from 'react';
import { ProductCharacteristic } from '../../../atoms/text/ProductCharacteristic';
import type { Product } from '../../../../types/Product';
import { useTranslation } from 'react-i18next';

type ProductCharacteristicsProps = {
  product: Pick<Product, 'screen' | 'capacity' | 'ram'>;
};
export const ProductCharacteristics: React.FC<ProductCharacteristicsProps> = ({
  product,
}) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-[4px]">
      <ProductCharacteristic
        label={`${t('Screen')}:`}
        value={product.screen}
      />
      <ProductCharacteristic
        label={`${t('capacity')}:`}
        value={product.capacity}
      />
      <ProductCharacteristic
        label={`${t('RAM')}:`}
        value={product.ram}
      />
    </div>
  );
};
