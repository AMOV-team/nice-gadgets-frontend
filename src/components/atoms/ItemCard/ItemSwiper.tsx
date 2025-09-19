import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';
import type SwiperType from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

type Props = {
  images: Array<string>;
  selectedImage: string;
  selectImageHandler: (image: string) => void;
};

export const ItemSwiper: React.FC<Props> = ({
  images,
  selectedImage,
  selectImageHandler,
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div
      className={`
          gap-4 mb-10
          !grid grid-cols-4 sm:grid-cols-7 xl:grid-cols-12
          col-span-4 sm:col-span-7 xl:col-span-12
          grid-rows-1
      `}
    >
      <Swiper
        spaceBetween={0}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className={`
        h-72 col-span-4 sm:col-start-2 sm:h-[287px]
        xl:!h-[464px] !m-0 cursor-pointer xl:max-w-[464px]
        xl:col-start-3 xl:col-end-12 xl:col-span-10
        !flex !justify-center !items-center sm:order-2
        `}
      >
        {images.map((image) => (
          <SwiperSlide
            key={image}
            className={`
            h-72 sm:h-[287px] xl:!h-[464px]
            flex justify-center items-center
          `}
          >
            <img
              src={image}
              alt=""
              className=" w-auto h-full object-contain mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        breakpoints={{
          0: {
            direction: 'horizontal',
            spaceBetween: 8,
          },
          640: {
            direction: 'vertical',
            spaceBetween: 8,
          },
          1280: {
            direction: 'vertical',
            spaceBetween: 16,
          },
        }}
        slidesPerView={5}
        freeMode={true}
        modules={[FreeMode, Thumbs]}
        className={`
          col-span-full
          !h-[51px]
          sm:!h-[230px]  sm:order-1 sm:col-span-1
          xl:!h-[474px] xl:col-span-2
          !m-0
        `}
      >
        {images.map((image) => (
          <SwiperSlide
            key={image}
            className={`
              border border-solid border-elements
              rounded-lg
              box-border
              cursor-pointer
              !h-[49px] !w-[49px]
              sm:!h-[35px] sm:!w-[35px]
              xl:!h-20 xl:!w-20
              p-[2px]
            `}
            style={{
              border: `1px solid ${
                selectedImage === image ?
                  'hsl(var(--primary))'
                : 'hsl(var(--elements))'
              }`,
            }}
            onClick={(event) => {
              event.preventDefault();

              if (selectedImage !== image) {
                selectImageHandler(image);
              }
            }}
          >
            <img
              src={image}
              alt=""
              className={`
              object-contain

              h-full w-full
              `}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
