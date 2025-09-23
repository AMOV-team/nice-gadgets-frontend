import React, { useEffect, useState } from 'react';
import { Dropdown } from '../../atoms/Dropdown';
import type { SortOption } from '../../../types/SortOption';
import { useSearchParams } from 'react-router-dom';

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
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('q') || '');

  useEffect(() => {
    setSearchValue(searchParams.get('q') || '');
  }, [searchParams]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchValue) {
      params.set('q', searchValue);
    } else {
      params.delete('q');
    }
    setSearchParams(params);
  };

  return (
    <div className="col-span-full grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-4 items-end grid-rows-2 sm:grid-rows-1">
      <form
        className="col-span-full sm:col-span-6 xl:col-span-10"
        onSubmit={handleSearchSubmit}
      >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>

        <div className="flex gap-2">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>

            <input
              type="search"
              id="default-search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="block w-full p-[9px] ps-10 outline-none text-sm border border-gray-700 rounded-lg bg-transparent focus:ring-custom-accent focus:border-custom-accent"
              placeholder="Search for goods"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-custom-accent hover:bg-custom-accent focus:ring-4 focus:outline-none focus:ring-custom-accent font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>

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
