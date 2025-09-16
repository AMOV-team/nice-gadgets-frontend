import React, { useState } from 'react';
import phones from '../../../../public/api/phones.json';
import type { Phone } from '../../../types/phone.ts';
import { ItemParagraph } from '../../atoms/text/ItemParagraph.tsx';
import { ItemTechSpec } from '../../atoms/text/ItemTechSpec.tsx';
import { ColorPicker } from '../../atoms/colorPicker/ColorPicker.tsx';
import { PhoneCapacityButton } from '../../atoms/buttons/PhoneCapacityButton.tsx';
import { ItemMainTechSpec } from '../../atoms/text/ItemMainTechSpec.tsx';
import { AddItemToCartButton } from '../../atoms/buttons/ItemCard/AddItemToCartButton.tsx';
import { AddItemToFavoriteButton } from '../../atoms/buttons/ItemCard/AddItemToFavoriteButton.tsx';

type Props = {
  capacity: string;
  isSelected: boolean;
  children?: React.ReactNode;
};

export const ItemCard: React.FC<Props> = () => {
  const [phone, setPhone] = useState<Phone>(phones[0]);
  const [selectedImage, setSelectedImage] = useState(phone.images[0]);

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

  const specs = [
    { name: 'Screen', value: phone.screen },
    { name: 'Resolution', value: phone.resolution },
    { name: 'Processor', value: phone.processor },
    { name: 'RAM', value: phone.ram },
    { name: 'Camera', value: phone.camera },
    { name: 'Zoom', value: phone.zoom },
    { name: 'Cell', value: phone.cell.join(', ') },
  ];

  return (
    <div className="p-[152px]">
      {/* Name */}
      <h2
        className={`
          font-mont
          font-extrabold
          text-[32px]
          leading-[41px]
          tracking-[-1%]
          mb-10
        `}
      >
        {phone.name}
      </h2>

      {/* Main */}
      <div className="flex mb-20">
        <div className="flex flex-col gap-4 mr-4">
          {phone.images.map((image) => (
            <button
              className={`
                photo-image p-[7px] flex items-center content-center w-20 h-20
                border border-solid border-elements
                bg-transparent
                cursor-pointer
                transition-all duration-200 
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
                  setSelectedImage(image);
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
        <img
          className="w-[464px] h-[464px] mr-16 object-contain"
          src={selectedImage}
          alt="iphone"
        ></img>

        {/* Right side */}
        <div className="min-w-80">
          <div
            className={`
            relative
            mb-12
            after:content-['']
            after:w-full
            after:h-[1px]
            after:bg-elements
            after:absolute
            after:bottom-[-24px]
            after:left-0
          `}
          >
            <p className="font-mont font-semibold text-[#89939A] text-xs">
              Available colors
            </p>
            <ColorPicker
              colors={phone.colorsAvailable}
              handleSelectColor={handleSelectColor}
            />
          </div>

          <div
            className={`
            relative
            mb-14
            after:content-['']
            after:w-full
            after:h-[1px]
            after:bg-elements
            after:absolute
            after:bottom-[-24px]
            after:left-0
          `}
          >
            <p className="font-mont font-semibold text-[#89939A] text-xs">
              Select capacity
            </p>
            <div>
              {phone.capacityAvailable.map((capacity) => {
                const formattedCapacity =
                  capacity.slice(0, -2) + ' ' + capacity.slice(-2);

                return (
                  <PhoneCapacityButton
                    capacity={formattedCapacity}
                    selectCapacityHandler={handleSelectCapacity}
                    isSelected={phone.capacity === capacity}
                  />
                );
              })}
            </div>
          </div>

          <div className="font-mont flex items-end gap-2 mb-4">
            <h2
              className={`
               font-extrabold
               text-primary text-[32px]
               leading-[41px] tracking-[-1%]
               m-0
               `}
            >
              ${phone.priceDiscount}
            </h2>
            <span
              className={`
               font-medium
               text-custom-secondary text-[22px]
               leading-[41px]
               line-through
               `}
            >
              ${phone.priceRegular}
            </span>
          </div>

          <div className="flex gap-2 items-center mb-8">
            <AddItemToCartButton text="Add to cart" />
            <AddItemToFavoriteButton />
          </div>

          <div className="flex flex-col gap-2">
            {specs.slice(0, -4).map((spec) => (
              <ItemMainTechSpec
                spec={spec.name}
                value={spec.value}
              />
            ))}
          </div>
        </div>

        <div className="ml-auto">
          <p className="font-mont font-bold text-xs text-icons">ID: 802390</p>
        </div>
      </div>

      {/* Characteristics */}
      <div className="flex items-start justify-between w-full">
        {/* About */}
        <div className="w-[calc(50%-32px)]">
          <h3
            className={`
              relative
              font-mont
              font-extrabold
              text-[22px]
              leading-[140%]
              mb-12
              after:content-['']
              after:w-full
              after:h-[1px]
              after:bg-elements
              after:absolute
              after:bottom-[-16px]
              after:left-0
            `}
          >
            About
          </h3>

          <div>
            {phone.description.map((currentDescription) => (
              <ItemParagraph
                title={currentDescription.title}
                text={currentDescription.text.join('/n')}
              />
            ))}
          </div>
        </div>

        {/* Tech specs */}
        <div className="w-[calc(50%-32px)]">
          <h3
            className={`
              relative
              font-mont
              font-extrabold
              text-[22px]
              leading-[140%]
              mb-12
              after:content-['']
              after:w-full
              after:h-[1px]
              after:bg-elements
              after:absolute
              after:bottom-[-16px]
              after:left-0
            `}
          >
            Tech Specs
          </h3>

          <div className="flex flex-col gap-2">
            {specs.map((spec) => (
              <ItemTechSpec
                spec={spec.name}
                value={spec.value}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
