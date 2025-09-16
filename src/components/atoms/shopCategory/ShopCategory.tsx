import React from 'react';
import products from '../../../../public/api/products.json';
import { Link } from 'react-router-dom';

type Props = {
  color: string;
  productImg: string;
  productName: string;
  category: string;
  productLink: string;
};

export const ShopCategory: React.FC<Props> = ({
  color,
  productImg,
  productName,
  category,
  productLink,
}) => {
  const modelsCount = products.filter(
    (product) => product.category === category,
  ).length;

  const displayText =
    modelsCount > 0 ? `${modelsCount} models` : 'Currently out of stock';

  return (
    <div className="grid grid-cols-4 gap-4 sm:gap-6 xl:gap-8">
      <Link
        to={productLink}
        className={`group col-span-4 aspect-square rounded-lg relative overflow-hidden 
            transition-shadow duration-1000`}
        style={{
          backgroundColor: color,
          boxShadow: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 0 15px 2px ${color}`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <img
          src={productImg}
          alt={productName}
          className="absolute bottom-[-20%] right-[-20%] w-full h-full object-contain rounded-lg transform transition-transform duration-1000 group-hover:scale-110"
        />
      </Link>
      <div className="mt-6 col-span-full">
        <h2 className="text-h4-lg  font-bold leading-[100%] m-0">
          {productName}
        </h2>
        <p className="text-body  m-0 font-semibold mt-1 text-[hsl(var(--custom-secondary))]">
          {displayText}
        </p>
      </div>
    </div>
  );
};
