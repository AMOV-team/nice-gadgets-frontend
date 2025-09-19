import React, { useEffect, useState } from 'react';
import type { Item } from '../../../types/Item.ts';
import type { Category } from '../../../types/Category.ts';
import type { Product } from '../../../types/Product.ts';
import { AboutDescription } from '../../atoms/ItemCard/AboutDescription.tsx';
import { TechSpecsWithTitle } from '../../atoms/ItemCard/TechSpecsWithTitle.tsx';
import { AvailableOptionsWrapper } from '../../atoms/ItemCard/AvailableOptionsWrapper.tsx';
import { ItemSwiper } from '../../atoms/ItemCard/ItemSwiper.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { Breadcrumb } from '../Breadcrumb/Breadcrumb.tsx';
import { useTranslation } from 'react-i18next';
import { getProductById } from '../../../api/productCrud.ts';
import { client } from '@/utils/fetchClient';

type Props = {
  category: string;
};

export const ItemCard: React.FC<Props> = ({ category }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const [item, setItem] = useState<Item | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState('');

  // Фетчимо сам item (варіація товару)
  useEffect(() => {
    if (!category || !slug) return;

    getProductById(category as Category, slug)
      .then((data) => {
        if (data.length > 0) {
          setItem(data[0]);
          setSelectedImage(data[0].images[0]);
        } else {
          setItem(null);
          setSelectedImage('');
        }
      })
      .catch(() => {
        setItem(null);
        setSelectedImage('');
      });
  }, [category, slug]);

  // Фетчимо product для favorites
  useEffect(() => {
    if (!slug) return;

    client
      .get<Product[]>(`/products?itemId=eq.${slug}&select=*`)
      .then((data) => {
        if (data.length > 0) {
          setProduct(data[0]);
        } else {
          setProduct(null);
        }
      })
      .catch(() => setProduct(null));
  }, [slug]);

  if (!item) {
    return <p>{t('product-not-found')}</p>;
  }

  const specs = [
    { name: `${t('Screen')}`, value: item.screen ?? '' },
    { name: `${t('Resolution')}`, value: item.resolution ?? '' },
    { name: `${t('Processor')}`, value: item.processor ?? '' },
    { name: `${t('RAM')}`, value: item.ram ?? '' },
    { name: `${t('Camera')}`, value: item.camera ?? '' },
    { name: `${t('Zoom')}`, value: item.zoom ?? '' },
    { name: `${t('Cell')}`, value: item.cell?.join(', ') ?? '' },
  ];

  const handleSelectCapacity = (newCapacity: string) => {
    navigate(`/${category}/${item.namespaceId}-${newCapacity}-${item.color}`, {
      replace: true,
    });
  };

  const handleSelectColor = (newColor: string) => {
    navigate(`/${category}/${item.namespaceId}-${item.capacity}-${newColor}`, {
      replace: true,
    });
  };

  return (
    <div
      className={`
        col-span-full
        grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-4
      `}
    >
      <div className="col-span-full">
        <Breadcrumb />

        <h2
          className={`
            font-mont font-extrabold
            text-[22px] leading-[140%]
            xl:text-[32px] xl:leading-[41px] xl:tracking-[-1%]
            mb-4 sm:mb-6
          `}
        >
          {item.name}
        </h2>
      </div>

      {/* Main */}
      <div
        className={`
          mb-14
          sm:mb-16 sm:flex-row sm:justify-start
          xl:mb-20
          relative
          col-span-full
          grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-4
        `}
      >
        <div
          className={`
            absolute right-0 top-[395px]
            sm:top-0
          `}
        >
          {product && (
            <p className="font-mont font-bold text-xs text-icons">
              ID: {product.id}
            </p>
          )}
        </div>

        <ItemSwiper
          images={item.images}
          selectImageHandler={setSelectedImage}
          selectedImage={selectedImage}
        />

        {product && (
          <AvailableOptionsWrapper
            item={item}
            product={product}
            handleSelectColor={handleSelectColor}
            handleSelectCapacity={handleSelectCapacity}
            specs={specs}
          />
        )}
      </div>

      <div
        className={`
          flex flex-col gap-14 sm:gap-16 col-span-4 sm:col-span-12 xl:col-span-24
          xl:flex-row
          mb-14 sm:mb-14 xl:mb-20
        `}
      >
        <AboutDescription item={item} />
        <TechSpecsWithTitle specs={specs} />
      </div>
    </div>
  );
};
