import React from 'react';
import type { Phone } from '../../../types/phone.ts';

type Props = {
  phone: Phone;
  selectedImage: string;
  selectImageHandler: (image: string) => void;
};

export const ImagesWrapper: React.FC<Props> = ({
  phone,
  selectedImage,
  selectImageHandler,
}) => {
  return (
    <div
      className={`
      flex flex-row gap-2
      sm:flex-col sm:gap-2
      xl:flex-col xl:gap-4
    `}
    >
      {phone.images.map((image) => (
        <button
          className={`
                photo-image p-[7px] flex items-center content-center
                border border-solid border-elements
                bg-transparent
                cursor-pointer
                transition-all duration-200
                w-[49px] h-[49px]
                sm:w-[35px] sm:h-[35px]
                xl:w-20 xl:h-20
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
            className="w-full h-full object-contain"
            src={image}
            alt="iphone"
          />
        </button>
      ))}
    </div>
  );
};
