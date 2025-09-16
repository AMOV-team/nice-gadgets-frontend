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

export const PageNotFound = () => {
  return (
    <>
      <h1 className="title">Page not found</h1>
      <section className=" bg-white w-screen-1 relative flex flex-col">
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
        {/* <div className="w-full h-full max-h-screen relative z-0">
          <BannerSlider className="" />
        </div> */}
      </section>
    </>
  );
};
