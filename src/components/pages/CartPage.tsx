import * as React from 'react';
import productsData from '../../../public/api/products.json';
import type { Product } from '../../types/Product';
import { CartCard } from '../molecules/CartCard/CartCard';
import { CartCheckout } from '../molecules/CartCheckout/CartCheckout';

type CartItem = {
  id: number;
  itemId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

// Витягуємо перші 10 товарів з JSON і формуємо масив для корзини
const products: Product[] = productsData as Product[];

const testCart: CartItem[] = products.slice(0, 10).map((item) => ({
  id: item.id,
  itemId: item.itemId,
  name: item.name,
  image: item.image,
  price: item.price,
  quantity: 1,
}));

export const CartPage: React.FC = () => {
  return (
    <>
      <h1 className="text-h1 font-bold text-custom-primary">Cart</h1>

      <div className="col-span-4 sm:col-span-12 xl:col-span-16 flex flex-col gap-4">
        {testCart.map((cartItem) => (
          <CartCard
            key={cartItem.itemId}
            cartItem={cartItem}
          />
        ))}
      </div>
      <div className="col-span-4 sm:col-span-12 xl:col-span-8">
        <CartCheckout cartItems={testCart} />
      </div>
    </>
  );
};
