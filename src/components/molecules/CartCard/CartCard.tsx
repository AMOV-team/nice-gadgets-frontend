import * as React from 'react';
import DecreaseButton from '../../atoms/buttons/DecreaseButton';
import AddButton from '../../atoms/buttons/AddButton';
import DeleteButton from '../../atoms/buttons/DeleteButton';

type CartItem = {
  id: number;
  itemId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type CartCardProps = {
  cartItem: CartItem;
};

export const CartCard: React.FC<CartCardProps> = ({ cartItem }) => {
  return (
    <div
      className={`
        flex flex-col sm:flex-row
        justify-between
        w-full min-w-[288px]
        sm:max-h-[128px]
        gap-[16px] p-[24px]
        border border-solid border-elements rounded-lg
      `}
    >
      <div className="flex flex-row justify-between items-center gap-[16px] sm:gap-[24px]">
        <div className="flex items-center gap-[16px] sm:gap-[24px]">
          <DeleteButton onDelete={() => {}} />
          <img
            src={cartItem.image}
            alt={`${cartItem.name} image`}
            className="size-[80px] object-contain"
          />
        </div>
        <span className="text-body font-medium">{cartItem.name}</span>
      </div>
      <div className="flex flex-row gap-[24px] justify-between items-center">
        <div className="flex flex-row gap-[14px] justify-center items-center">
          <DecreaseButton
            onDecrease={() => {}}
            disabled={false}
          />
          <span>{cartItem.quantity}</span>
          <AddButton
            onAdd={() => {}}
            disabled={false}
          />
        </div>
        <p className="text-h3 font-extrabold min-w-[80px] text-right">
          ${cartItem.price}
        </p>
      </div>
    </div>
  );
};
