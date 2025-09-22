import React from 'react';
import { Dropdown } from '../../atoms/Dropdown';
import type { SortOption } from '../../../types/SortOption';

interface FiltersProps {
  sortOptions: SortOption[];
  itemOptions: SortOption[];
  itemsPerPage: number;
  onSortChange: (value: string) => void;
  onItemsPerPageChange: (value: string) => void;
  sortDefault?: string;
}

export const Filters: React.FC<FiltersProps> = ({
  sortOptions,
  itemOptions,
  itemsPerPage,
  onSortChange,
  onItemsPerPageChange,
  sortDefault = 'Newest',
}) => {
  return (
    <div className="col-span-full grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-4">
      <div className="col-start-1 col-end-3 sm:col-end-6">
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

      <div className="col-start-3 col-end-5 sm:col-start-6 sm:col-end-9">
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
