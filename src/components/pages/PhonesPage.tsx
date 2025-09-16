import React from 'react';
import products from '../../../public/api/products.json';
import { ProductCard } from '../molecules/ProductCard/ProductCard';
import { Dropdown } from '../atoms/Dropdown';
import type { SortOption } from '../../types/SortOption';
import { PaginationButton } from '../atoms/buttons/PaginationButton';

export const PhonesPage: React.FC = () => {
  const phones = products.filter((p) => p.category === 'phones');

  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 16;
  const totalPages = Math.ceil(phones.length / itemsPerPage);

  const currentPhones = phones.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const modelsCount = phones.length;

  const itemOptions: SortOption[] = [
    { id: 1, label: '8' },
    { id: 1, label: '16' },
    { id: 1, label: '24' },
    { id: 1, label: '32' },
  ];

  const sortOptions: SortOption[] = [
    { id: 1, label: 'Newest' },
    { id: 2, label: 'Price: Low to High' },
    { id: 3, label: 'Price: High to Low' },
    { id: 4, label: 'Best Selling' },
  ];

  return (
    <div className="grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-x-4 gap-y-10">
      <div className="col-span-full">
        <h1 className="text-h1 font-extrabold font-mont mb-2 sm:text-h1-lg">
          Mobile Phones
        </h1>
        <p className="text-body-14 font-mont font-semibold text-custom-secondary">
          {modelsCount} models
        </p>
      </div>

      <div className="col-span-full grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-4">
        <div className="col-start-1 col-end-3 sm:col-end-5">
          <p className="text-small font-mont text-custom-secondary mb-1">
            Sort by
          </p>
          <Dropdown
            defaultText="Newest"
            itemData={sortOptions}
            triggerClass="w-full"
            itemClass="w-full"
          />
        </div>

        <div className="col-start-3 col-end-5 sm:col-start-5 sm:col-end-8">
          <p className="text-small font-mont text-custom-secondary mb-1">
            Items on page
          </p>
          <Dropdown
            defaultText="8"
            itemData={itemOptions}
            triggerClass="w-full"
            itemClass="w-full"
          />
        </div>
      </div>

      {currentPhones.map((phone) => (
        <div
          key={phone.id}
          className="col-span-4 sm:col-span-6"
        >
          <ProductCard product={phone} />
        </div>
      ))}

      <div className="col-span-full flex justify-center mt-6">
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationButton
              key={page}
              text={page.toString()}
              selected={page === currentPage}
              onSelect={() => setCurrentPage(page)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
