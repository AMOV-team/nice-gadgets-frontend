import React, { useRef, useState } from 'react';
import products from '../../../../public/api/products.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import type { SwiperClass } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.scss';

import { ProductCard } from '../../molecules/ProductCard/ProductCard';
import { SliderButtonLeft } from '../../atoms/buttons/SliderButtonLeft';
import { SliderButtonRight } from '../../atoms/buttons/SliderButtonRight';

type Props = {
  HeaderText: string;
};
export const SectionSlider: React.FC<Props> = ({ HeaderText }) => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <>
      <div className="flex flex-row justify-between ml-4 sm:ml-0 mb-6">
        <h2 className="text-left font-extrabold text-2xl sm:text-3xl m-0">
          {HeaderText}
        </h2>
        <div className="flex flex-row justify-end gap-x-4 ">
          <SliderButtonLeft
            onClick={() => swiperRef.current?.slidePrev()}
            disabled={isBeginning}
          />
          <SliderButtonRight
            onClick={() => swiperRef.current?.slideNext()}
            disabled={isEnd}
          />
        </div>
      </div>

      <div className="relative w-full">
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
          slidesPerView={1.5}
          slidesPerGroup={1}
          breakpoints={{
            0: { slidesPerView: 1.3 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full section-slider !py-3"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative w-full  ">
                <ProductCard product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
