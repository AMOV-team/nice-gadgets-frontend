import React from 'react';
import { Dropdown } from '../../atoms/Dropdown';
import type { SortOption } from '../../../types/SortOption';
import { ProductSearch } from '../../molecules/ProductsSearch/ProductsSearch';
import type { Product } from '../../../types/Product';

interface FiltersProps {
  sortOptions: SortOption[];
  itemOptions: SortOption[];
  itemsPerPage: number;
  onSortChange: (value: string) => void;
  onItemsPerPageChange: (value: string) => void;
  sortDefault?: string;
  products: Product[];
  onFiltered: (filtered: Product[]) => void;
}

export const Filters: React.FC<FiltersProps> = ({
  sortOptions,
  itemOptions,
  itemsPerPage,
  onSortChange,
  onItemsPerPageChange,
  sortDefault = 'Newest',
  products,
  onFiltered,
}) => {
  return (
    <div className="col-span-full grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-4 items-end grid-rows-2 sm:grid-rows-1">
      <div className="col-span-full sm:col-span-6 xl:col-span-10">
        <ProductSearch
          products={products}
          onFiltered={onFiltered}
        />
      </div>

      <div className="col-span-2 sm:col-span-3 xl:col-span-5">
        <p className="text-small font-mont text-custom-secondary mb-1">
          Sort by
        </p>
        <Dropdown
          defaultText={sortDefault}
          itemData={sortOptions}
          triggerClass="w-full"
          itemClass="w-full"
          onSelect={onSortChange}
        />
      </div>

      <div className="col-span-2 xl:col-span-5">
        <p className="text-small font-mont text-custom-secondary mb-1">
          Items per page
        </p>
        <Dropdown
          defaultText={String(itemsPerPage)}
          itemData={itemOptions}
          triggerClass="w-full"
          itemClass="w-full"
          onSelect={onItemsPerPageChange}
        />
      </div>
    </div>
  );
};
