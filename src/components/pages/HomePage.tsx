import React from 'react';

// import { SORT_OPTIONS } from '../../constants/sortOptions';
// import { Dropdown } from '../atoms/Dropdown';
// import { AddToCartButton } from '../atoms/buttons';

// import { PaginationButton } from '../atoms/buttons/PaginationButton';
// import { AddToFavoriteButton } from '../atoms/buttons/AddToFavoriteButton';

export const HomePage: React.FC = () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-x-4 gap-y-14 sm:gap-x-6 sm:gap-y-16">
      {/* These sections have been added as examples */}
      <section className="col-span-4 sm:col-span-12 xl:col-span-24 bg-gray-400 rounded">
        <h1 className="text-left  font-extrabold text-3xl sm:text-5xl m-0">
          Welcome to Nice Gadgets store!
        </h1>
      </section>

      <section className="col-span-4 sm:col-span-12 xl:col-span-24 bg-gray-400 rounded">
        <h2 className="text-left  font-extrabold text-2xl sm:text-3xl m-0">
          Brand new models
        </h2>
      </section>

      <section className="col-span-4 sm:col-span-12 xl:col-span-24 bg-gray-400 rounded">
        <h2 className="text-left  font-extrabold text-2xl sm:text-3xl m-0">
          Shop by category
        </h2>
      </section>

      <section className="col-span-4 sm:col-span-12 xl:col-span-24 bg-gray-400 rounded">
        <h2 className="text-left  font-extrabold text-2xl sm:text-3xl m-0">
          Hot prices
        </h2>
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
    </div>
  );
};
