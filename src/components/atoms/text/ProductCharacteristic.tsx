import * as React from 'react';

type ProductCharacteristicProps = {
  label: string;
  value: string;
};
export const ProductCharacteristic: React.FC<ProductCharacteristicProps> = ({ label, value }) => (
  <div className="flex justify-between">
    <p className="font-mont text-custom-secondary text-small">{label}</p>
    <p className="font-mont text-custom-primary uppercase text-small">{value}</p>
  </div>
);