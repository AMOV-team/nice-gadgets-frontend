import React from 'react';
import { BannerSlider } from '../organisms/BannerSlider/BannerSlider';
import { ShopCategory } from '../atoms/shopCategory';
import { SectionSlider } from '../organisms/SectionSlider/SectionSlider';

// import { SORT_OPTIONS } from '../../constants/sortOptions';
// import { Dropdown } from '../atoms/Dropdown';
// import { AddToCartButton } from '../atoms/buttons';

// import { PaginationButton } from '../atoms/buttons/PaginationButton';
// import { AddToFavoriteButton } from '../atoms/buttons/AddToFavoriteButton';

export const HomePage: React.FC = () => {
  return (
    <>
      <section className="flex flex-col gap-6 col-span-4 sm:col-span-12 xl:col-span-24">
        <h1 className="text-left font-extrabold text-3xl sm:text-5xl m-0">
          Welcome to Nice Gadgets store!
        </h1>

        <div className="mx-[-1rem] sm:mx-0">
          <BannerSlider />
        </div>
      </section>

      {/* In progress... */}
      <section className="flex flex-col gap-4 col-span-4 sm:col-span-12 xl:col-span-24">
        <div className="mx-[-1rem] sm:mx-0">
          <SectionSlider HeaderText={'Brand new models'} />
        </div>
      </section>

      <section className="grid grid-cols-4 sm:grid-cols-12 [@media(min-width:988px)]:grid-cols-18 xl:grid-cols-24 col-span-4 sm:col-span-12 xl:col-span-24 gap-y-6 gap-x-4">
        <h2 className="col-span-4 sm:col-span-12 xl:col-span-24 text-left font-extrabold text-2xl sm:text-3xl m-0">
          Shop by category
        </h2>

        <div className="col-span-4 xl:col-span-8 p-0 m-0">
          <ShopCategory
            color={'#6D6474'}
            productImg={'img/category-phones.png'}
            productName={'Mobile phones'}
            category={'phones'}
            productLink={'/phones'}
          />
        </div>

        <div className="col-span-4 xl:col-span-8 p-0 m-0">
          <ShopCategory
            color={'#666666'}
            productImg={'img/category-tablets.png'}
            productName={'Tablets'}
            category={'tablets'}
            productLink={'/tablets'}
          />
        </div>

        <div className="col-span-4 xl:col-span-8 p-0 m-0">
          <ShopCategory
            color={'#964F4A'}
            productImg={'img/category-accessories.webp'}
            productName={'Accessories'}
            category={'accessories'}
            productLink={'/accessories'}
          />
        </div>
      </section>

      {/* In progress... */}
      <section className="flex flex-col gap-4 col-span-4 sm:col-span-12 xl:col-span-24">
        <div className="mx-[-1rem] sm:mx-0 ">
          <SectionSlider HeaderText={'Hot prices'} />
        </div>
      </section>

      {/* Old buttons */}
      <>
        {/* <h1 className="title">Home Page</h1>
        <AddToCartButton text="Add to cart" />
        <PaginationButton
          onSelect={() => alert('Clicked!')}
          text="1"
        />
        <AddToFavoriteButton />

        <Dropdown
          defaultText="Оберіть"
          itemData={SORT_OPTIONS}
        /> */}
      </>
    </>
  );
};
