import * as React from 'react';
import DecreaseButton from '../../atoms/buttons/DecreaseButton';
import AddButton from '../../atoms/buttons/AddButton';
import DeleteButton from '../../atoms/buttons/DeleteButton';
import { useCart } from 'react-use-cart';
import type { CartItem } from '../../../types/CartItem';

type CartCardProps = {
  cartItem: CartItem;
};

export const CartCard: React.FC<CartCardProps> = ({ cartItem }) => {
  const { updateItemQuantity, removeItem } = useCart();

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
          <DeleteButton onDelete={() => removeItem(cartItem.id)} />
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
            onDecrease={() =>
              updateItemQuantity(cartItem.id, cartItem.quantity - 1)
            }
            disabled={false}
          />
          <span>{cartItem.quantity}</span>
          <AddButton
            onAdd={() => {
              updateItemQuantity(cartItem.id, cartItem.quantity + 1);
              console.log('CartCard:', cartItem);
            }}
            disabled={false}
          />
        </div>
        <p className="text-h3 font-extrabold min-w-[80px] text-right">
          ${cartItem.price * cartItem.quantity}
        </p>
      </div>
    </div>
  );
};
