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
          flex flex-col gap-4 mb-10
          sm:flex-row-reverse
          xl:flex-row-reverse xl:mb-16 xl:mr-16 sm:mr-[17px] 
      `}
    >
      <Swiper
        spaceBetween={0}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className={`
        w-72 h-72 sm:w-[287px] sm:h-[287px] xl:!w-[464px] xl:!h-[464px] !m-0 cursor-pointer
        !flex !justify-center !items-center
        `}
      >
        {images.map((image) => (
          <SwiperSlide
            key={image}
            className={`
             w-72 h-72 sm:w-[287px] sm:h-[287px] xl:!w-[464px] xl:!h-[464px]
            flex justify-center items-center
          `}
          >
            <img
              src={image}
              alt=""
              className=" w-72 h-72 sm:w-[287px] sm:h-[287px] xl:!w-[464px] xl:!h-[464px] object-contain"
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
                !w-[295px] !h-[51px]
                sm:!w-[37px] sm:!h-[230px]
                xl:!w-[82px] xl:!h-[474px]
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
              !w-[49px] !h-[49px]
              sm:!w-[35px] sm:!h-[35px]
              xl:!w-20 xl:!h-20
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
              !w-[49px] !h-[49px]
              sm:!w-[35px] sm:!h-[35px]
              xl:!w-20 xl:!h-20
              `}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
