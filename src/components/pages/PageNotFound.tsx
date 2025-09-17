// import { BannerSlider } from '../organisms/BannerSlider/BannerSlider';
import { HouseIcon } from '../atoms/icons/HouseIcon';
import { SearchIcon } from '../atoms/icons/SearchIcon';
import { ShoppingBagIcon } from '../atoms/icons/ShoppingBagIcon';
import { ShoppingBagIconCounter } from '../atoms/icons/ShoppingBagIconCounter';
import { FavouritesIcon } from '../atoms/icons/FavouritesIcon';
import { FavouritesIconCounter } from '../atoms/icons/FavouritesIconCounter';
import { FavouritesIconYellow } from '../atoms/icons/FavouritesIconYellow';
import { MinusIcon } from '../atoms/icons/MinusIcon';
import { CloseIcon } from '../atoms/icons/CloseIcon';
import { ArrowLeftIcon } from '../atoms/icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../atoms/icons/ArrowRightIcon';
import { ArrowUpIcon } from '../atoms/icons/ArrowUpIcon';
import { ArrowDownIcon } from '../atoms/icons/ArrowDownIcon';
import { PlusIcon } from '../atoms/icons/PlusIcon';
import { BurgerMenuIcon } from '../atoms/icons/BurgerMenuIcon';
import { useEffect, useState } from 'react';
import { getProductById, getProductsByCategory } from '../../api/productCrud';
import type { Products } from '../../types/Products';
import type { ProductsAll } from '../../types/ProductsAll';

export const PageNotFound = () => {
  const [products, setProducts] = useState<ProductsAll[]>([]);
  const [productsById, setProductsById] = useState<Products>();
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const phones = await getProductsByCategory('phones');
      setProducts(phones);
      // console.log('Phones only:', phones);
    } catch (err) {
      // console.error('Fetch error:', err);
      setError(`Упс, щось пішло не так ${err} 🙈`);
    }
  };

  const fetchProductById = async () => {
    try {
      const phoneById = await getProductById(
        'phones',
        'apple-iphone-13-pro-max-128gb-graphite',
      );
      setProductsById(phoneById);
      // console.log('Phones byid:', phoneById);
    } catch (err) {
      console.error('Fetch error:', err);
      setError(`Упс, щось пішло не так ${err} 🙈`);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchProductById();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
      <h1 className="title">Page not found</h1>
      <section className=" flex flex-col gap-6 col-span-4 sm:col-span-12 xl:col-span-24">
        <h2>Gadget store</h2>
        <HouseIcon />
        <SearchIcon />
        <ShoppingBagIcon />
        <ShoppingBagIconCounter />
        <FavouritesIcon />
        <FavouritesIconCounter />
        <FavouritesIconYellow />
        <MinusIcon />
        <PlusIcon />
        <CloseIcon />
        <ArrowLeftIcon />
        <ArrowRightIcon />
        <ArrowUpIcon />
        <ArrowDownIcon />
        <BurgerMenuIcon />
        {<p>{productsById?.name}</p>}
        {<p>{products[0].category}</p>}
        {/* <div className="mx-[-1rem] sm:mx-0">
                 <SectionSlider />
                </div> */}
        {/* <div className="w-full h-full max-h-screen relative z-0">
          <BannerSlider className="" />
        </div> */}
      </section>
    </>
  );
};
