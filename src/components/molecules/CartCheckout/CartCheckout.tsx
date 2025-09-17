import * as React from 'react';
import { PrimaryButton } from '../../atoms/buttons';

type CartItem = {
  id: number;
  itemId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type CartCheckoutProps = {
  cartItems: CartItem[];
};

export const CartCheckout: React.FC<CartCheckoutProps> = ({ cartItems }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <div
        className="
          flex flex-col gap-[16px] lg:gap-[24px]
          p-[24px]
          border border-solid border-elements rounded-lg
        "
      >
        <div className="flex flex-col justify-center items-center">
          <span className="text-h2 font-extrabold">${totalPrice}</span>
          <span className="text-body font-semibold">
            Total for {cartItems.length} items
          </span>
        </div>
        <div className="border border-solid border-elements"></div>
        <PrimaryButton text={'Checkout'} />
      </div>
    </>
  );
};
