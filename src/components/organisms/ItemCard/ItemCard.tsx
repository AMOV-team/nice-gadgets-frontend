import React, { useState } from 'react';
import phones from '../../../../public/api/phones.json';
import accessories from '../../../../public/api/accessories.json';
import tablets from '../../../../public/api/tablets.json';
import products from '../../../../public/api/products.json';
import type { Item } from '../../../types/Item.ts';
import type { Category } from '../../../types/Category.ts';
import { AboutDescription } from '../../atoms/ItemCard/AboutDescription.tsx';
import { TechSpecsWithTitle } from '../../atoms/ItemCard/TechSpecsWithTitle.tsx';
import { AvailableOptionsWrapper } from '../../atoms/ItemCard/AvailableOptionsWrapper.tsx';
import { ItemSwiper } from '../../atoms/ItemCard/ItemSwiper.tsx';
import { useNavigate, useParams } from 'react-router-dom';

function findItemById(arr: Array<Item>, itemId: string) {
  return arr.find((item) => item.id === itemId);
}

function getProduct(category: Category, itemId: string) {
  switch (category) {
    case 'accessories':
      return findItemById(accessories, itemId);
    case 'phones':
      return findItemById(phones, itemId);
    case 'tablets':
      return findItemById(tablets, itemId);
    default:
      return null;
  }
}

export const ItemCard: React.FC = () => {
  const navigate = useNavigate();
  const { category, slug } = useParams<{ category: string; slug: string }>();

  const productMeta = products.find((p) => String(p.itemId) === slug);

  const product =
    category && slug && productMeta?.itemId ?
      getProduct(category as Category, productMeta.itemId)
    : null;

  const [item, setItem] = useState<Item | null>(product ?? null);

  const [selectedImage, setSelectedImage] = useState(
    product ? product.images[0] : '',
  );

  if (!item) {
    return <p>Product not found1</p>;
  }

  const specs = [
    { name: 'Screen', value: item.screen ?? '' },
    { name: 'Resolution', value: item.resolution ?? '' },
    { name: 'Processor', value: item.processor ?? '' },
    { name: 'RAM', value: item.ram ?? '' },
    { name: 'Camera', value: item.camera ?? '' },
    { name: 'Zoom', value: item.zoom ?? '' },
    { name: 'Cell', value: item.cell?.join(', ') ?? '' },
  ];

  const findItem = (namespaceId: string, capacity: string, color: string) => {
    switch (category) {
      case 'accessories':
        return findItemInsideCategory(accessories);
      case 'phones':
        return findItemInsideCategory(phones);
      case 'tablets':
        return findItemInsideCategory(tablets);
      default:
        return null;
    }

    function findItemInsideCategory(arr: Item[]) {
      return arr.find(
        (item) =>
          item.namespaceId === namespaceId &&
          item.capacity === capacity &&
          item.color === color,
      );
    }
  };

  const handleSelectCapacity = (newCapacity: string) => {
    const newItem = findItem(item.namespaceId, newCapacity, item.color);

    if (newItem) {
      setItem(newItem);
      setSelectedImage(newItem.images[0]);
      navigate(`/products/${category}/${newItem.id}`, { replace: true });
    }
  };

  const handleSelectColor = (newColor: string) => {
    const newItem = findItem(item.namespaceId, item.capacity, newColor);

    if (newItem) {
      setItem(newItem);
      setSelectedImage(newItem.images[0]);
      navigate(`/products/${category}/${newItem.id}`, { replace: true });
    }
  };

  const goodId = productMeta?.id ?? '802390';

  return (
    <div
      className={`
        p-4
        sm:p-6
        xl:p-8
        mb-14
        sm:mb-16
        xl:mb-20
      `}
    >
      {/* Name */}
      <h2
        className={`
          font-mont font-extrabold
          text-[22px] leading-[140%] mb-4
          sm:mb-10
          xl:text-[32px] xl:leading-[41px] xl:tracking-[-1%] xl:mb-14
        `}
      >
        {item.name}
      </h2>

      {/* Main */}
      <div
        className={`
          flex flex-col mb-14
          sm:mb-16 sm:flex-row sm:justify-start
          xl:mb-20 xl:flex-row xl:gap-16
          relative
        `}
      >
        {/* Product ID */}
        <div
          className={`
            absolute right-0 top-[395px]
            xl:top-0 sm:top-0 md:top-0 lg:top-0 2xl:top-0
          `}
        >
          <p className="font-mont font-bold text-xs text-icons">ID: {goodId}</p>
        </div>

        {/* Left side */}
        <ItemSwiper
          images={item.images}
          selectImageHandler={setSelectedImage}
          selectedImage={selectedImage}
        />

        {/* Right side */}
        <AvailableOptionsWrapper
          item={item}
          handleSelectColor={handleSelectColor}
          handleSelectCapacity={handleSelectCapacity}
          specs={specs}
        />
      </div>

      {/* Product Description */}
      <div
        className={`
          flex flex-col items-start w-full
          xl:justify-center xl:flex-row xl:gap-16
        `}
      >
        <AboutDescription item={item} />
        <TechSpecsWithTitle specs={specs} />
      </div>
    </div>
  );
};
