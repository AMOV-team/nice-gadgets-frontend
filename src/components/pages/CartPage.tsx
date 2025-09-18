import * as React from 'react';
import { CartCard } from '../molecules/CartCard/CartCard';
import { CartCheckout } from '../molecules/CartCheckout/CartCheckout';
import { GridContainer } from '../atoms/GridContainer';
import { Breadcrumb } from '../molecules/Breadcrumb/Breadcrumb.tsx';
import { useCart } from 'react-use-cart';
import type { CartItem } from '../../types/CartItem.tsx';

// type CartItem = {
//   id: string
//   name: string,
//   price: number,
//   quantity: 1,
//   image: string,
//   metadata: {
//     color: string,
//     capacity: string,
//     year: number,
//     image: string,
//     ram: string,
//     screen: string,
//       }
// };

// const products: Product[] = productsData as Product[];

// const testCart: CartItem[] = products.slice(0, 10).map((item) => ({
//   id: item.id,
//   itemId: item.itemId,
//   name: item.name,
//   image: item.image,
//   price: item.price,
//   quantity: 1,
// }));

export const CartPage: React.FC = () => {
  const { items } = useCart() as unknown as { items: CartItem[] };
  return (
    <GridContainer>
      <div className="col-span-full">
        <Breadcrumb />
        <h1 className="text-h1 font-bold text-custom-primary">Cart</h1>
      </div>

      <div className="col-span-full xl:col-span-16">
        <div className="flex flex-col gap-4">
          {items.map((cartItem: CartItem) => (
            <CartCard
              key={cartItem.id}
              cartItem={cartItem}
            />
          ))}
        </div>
      </div>
      <div className="col-span-4 sm:col-span-12 xl:col-span-8">
        <CartCheckout />
      </div>
    </GridContainer>
  );
};
