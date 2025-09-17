import React from 'react';
import { BannerSlider } from '../organisms/BannerSlider/BannerSlider';
import { ShopCategory } from '../atoms/shopCategory';
import { SectionSlider } from '../organisms/SectionSlider/SectionSlider';
import { GridContainer } from '../atoms/GridContainer';

export const HomePage: React.FC = () => {
  return (
    <>
      <section className="flex flex-col w-full px-4 sm:px-6 lg:px-8 xl:px-16">
        <h1 className="text-left font-extrabold text-3xl sm:text-5xl my-6">
          Welcome to Nice Gadgets store!
        </h1>
      </section>

      <BannerSlider />

      <GridContainer>
        <section className="flex flex-col gap-4 col-span-4 sm:col-span-12 xl:col-span-24">
          <SectionSlider HeaderText={'Brand new models'} />
        </section>

        <section className="grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 col-span-4 sm:col-span-12 xl:col-span-24 gap-y-6 gap-x-4">
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

        <section className="flex flex-col gap-4 col-span-4 sm:col-span-12 xl:col-span-24">
          <SectionSlider HeaderText={'Hot prices'} />
        </section>
      </GridContainer>
    </>
  );
};
