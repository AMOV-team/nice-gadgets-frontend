import React, { useEffect, useState } from 'react';
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
import { Breadcrumb } from '../Breadcrumb/Breadcrumb.tsx';

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

type Props = {
  category: string;
};

export const ItemCard: React.FC<Props> = ({ category }) => {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const [item, setItem] = useState<Item | null>(null);

  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const productMeta = products.find((p) => String(p.itemId) === slug);

    const product =
      category && slug && productMeta?.itemId ?
        getProduct(category as Category, productMeta.itemId)
      : null;

    if (product) {
      setItem(product);
      setSelectedImage(product.images[0]);
    } else {
      setItem(null);
      setSelectedImage('');
    }
  }, [category, slug]);

  if (!item) {
    return <p>Product not found!</p>;
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
      navigate(`/${category}/${newItem.id}`, { replace: true });
    }
  };

  const handleSelectColor = (newColor: string) => {
    const newItem = findItem(item.namespaceId, item.capacity, newColor);

    if (newItem) {
      setItem(newItem);
      setSelectedImage(newItem.images[0]);
      navigate(`/${category}/${newItem.id}`, { replace: true });
    }
  };

  const goodId = item.id;

  return (
    <div
      className={`
        mb-14
        sm:mb-16
        xl:mb-20
      `}
    >
      <Breadcrumb />

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
          xl:mb-20 xl:gap-16
          relative
        `}
      >
        {/* Product ID */}
        <div
          className={`
            absolute right-0 top-[395px]
            sm:top-0
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
