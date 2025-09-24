import React, { useState, useRef } from 'react';
import { GridContainer } from '../atoms/GridContainer';
import { Breadcrumb } from '../molecules/Breadcrumb/Breadcrumb';
import { useComparison } from '@/hooks/useComparison';
import type { Product } from '../../types/Product';
import { Dropdown } from '../atoms/Dropdown';
import type { SortOption } from '@/types/SortOption';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { SwiperClass } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { SliderButtonLeft } from '../atoms/buttons/SliderButtonLeft';
import { SliderButtonRight } from '../atoms/buttons/SliderButtonRight';
import { useTranslation } from 'react-i18next';
import DeleteButton from '../atoms/buttons/DeleteButton';

export const ComparePage: React.FC = () => {
  const { comparison, clearComparison } = useComparison();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const { t } = useTranslation();

  const categories: SortOption[] = [
    { id: 1, label: `${t('phones')}`, value: 'phones' },
    { id: 2, label: `${t('tablets')}`, value: 'tablets' },
    { id: 3, label: `${t('accessories')}`, value: 'accessories' },
  ];

  const filteredProducts: Product[] =
    activeCategory ?
      comparison.filter((p: Product) => p.category === activeCategory)
    : [];

  const swiperRef = useRef<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <GridContainer>
      <div className="col-span-full">
        <Breadcrumb />
        <h1 className="text-h1 font-extrabold font-mont mb-4 sm:text-h1-lg">
          {t('compare-devices')}
        </h1>
      </div>

      <div className="col-span-full mb-6">
        <div className="flex flex-col sm:flex-row items-start gap-[10px] sm:justify-between">
          <Dropdown
            defaultText={t('select-category')}
            itemData={categories}
            triggerClass="w-[250px]"
            itemClass="w-full"
            onSelect={(value) => setActiveCategory(value)}
          />
          <div className="flex flex-row font-semibold text-sm justify-center items-center gap-[10px] px-4 py-2 bg-red-500 text-custom-primary rounded hover:bg-red-600">
            <DeleteButton onDelete={clearComparison} />
            {t('clear-all')}
          </div>
        </div>
      </div>

      {filteredProducts.length > 1 && (
        <div className="col-span-full flex flex-col">
          <div className="flex justify-end gap-x-4 mb-4">
            <SliderButtonLeft
              onClick={() => swiperRef.current?.slidePrev()}
              disabled={isBeginning}
            />
            <SliderButtonRight
              onClick={() => swiperRef.current?.slideNext()}
              disabled={isEnd}
            />
          </div>

          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            onSlideChange={(swiper) => {
              setIsBeginning(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            spaceBetween={16}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full"
          >
            {filteredProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="border rounded-lg shadow-sm p-4 flex flex-col items-center">
                  <h3 className="text-base font-bold mb-3 text-center">
                    {product.name}
                  </h3>

                  <div className="mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-28 w-28 object-contain mx-auto"
                    />
                  </div>

                  <div className="w-full text-sm space-y-3">
                    <div>
                      <p className="text-center text-gray-500 font-semibold uppercase text-xs">
                        {t('price')}
                      </p>
                      <p className="text-center">{`$ ${product.price}`}</p>
                    </div>

                    <div>
                      <p className="text-center text-gray-500 font-semibold uppercase text-xs">
                        {t('Screen')}
                      </p>
                      <p className="text-center">{product.screen}</p>
                    </div>

                    <div>
                      <p className="text-center text-gray-500 font-semibold uppercase text-xs">
                        {t('capacity')}
                      </p>
                      <p className="text-center">{product.capacity}</p>
                    </div>

                    <div>
                      <p className="text-center text-gray-500 font-semibold uppercase text-xs">
                        {t('RAM')}
                      </p>
                      <p className="text-center">{product.ram}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {activeCategory && filteredProducts.length <= 1 && (
        <div className="col-span-full text-center text-gray-500 mt-6">
          {t('not-enough-product')}
        </div>
      )}
    </GridContainer>
  );
};
