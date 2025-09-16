import React, { useState } from 'react';
import phones from '../../../../public/api/phones.json';
import products from '../../../../public/api/products.json';
import type { Phone } from '../../../types/phone.ts';
import { AboutDescription } from '../../atoms/ItemCard/AboutDescription.tsx';
import { TechSpecsWithTitle } from '../../atoms/ItemCard/TechSpecsWithTitle.tsx';
import { AvailableOptionsWrapper } from '../../atoms/ItemCard/AvailableOptionsWrapper.tsx';
import { ImagesWrapper } from '../../atoms/ItemCard/ImagesWrapper.tsx';

export const ItemCard: React.FC = () => {
  const [phone, setPhone] = useState<Phone>(phones[0]);
  const [selectedImage, setSelectedImage] = useState(phone.images[0]);

  const specs = [
    { name: 'Screen', value: phone.screen },
    { name: 'Resolution', value: phone.resolution },
    { name: 'Processor', value: phone.processor },
    { name: 'RAM', value: phone.ram },
    { name: 'Camera', value: phone.camera },
    { name: 'Zoom', value: phone.zoom },
    { name: 'Cell', value: phone.cell.join(', ') },
  ];

  const findPhone = (namespaceId: string, capacity: string, color: string) => {
    return phones.find(
      (phone) =>
        phone.namespaceId === namespaceId &&
        phone.capacity === capacity &&
        phone.color === color,
    );
  };

  const handleSelectCapacity = (newCapacity: string) => {
    const newPhone = findPhone(phone.namespaceId, newCapacity, phone.color);

    if (newPhone) {
      setPhone(newPhone);
      setSelectedImage(newPhone.images[0]);
    }
  };

  const handleSelectColor = (newColor: string) => {
    const newPhone = findPhone(phone.namespaceId, phone.capacity, newColor);

    if (newPhone) {
      setPhone(newPhone);
      setSelectedImage(newPhone.images[0]);
    }
  };

  const goodId =
    products.find((product) => product.itemId === phone.id)?.id ?? '802390';

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
        {phone.name}
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
        <div className="absolute top-0 right-0">
          <p className="font-mont font-bold text-xs text-icons">ID: {goodId}</p>
        </div>

        {/* Left side */}
        <div
          className={`
          flex flex-col gap-4 mb-10
          sm:flex-row-reverse
          xl:flex-row-reverse xl:mb-16
        `}
        >
          <img
            className={`
              w-full h-72
              sm:w-[287px] sm:h-[287px]
              xl:w-[464px] xl:h-[464px] object-contain
            `}
            src={selectedImage}
            alt="iphone"
          ></img>
          <ImagesWrapper
            phone={phone}
            selectedImage={selectedImage}
            selectImageHandler={setSelectedImage}
          />
        </div>

        {/* Right side */}
        <AvailableOptionsWrapper
          phone={phone}
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
        <AboutDescription phone={phone} />
        <TechSpecsWithTitle specs={specs} />
      </div>
    </div>
  );
};
