import React, { useEffect, useState } from 'react';
import { Dropdown } from '../../atoms/Dropdown';
import type { SortOption } from '../../../types/SortOption';
import { useSearchParams } from 'react-router-dom';
import cn from 'classnames';
import type { ActiveFiltersType } from '@/types/FiltersType.ts';

interface FiltersProps {
  sortOptions: SortOption[];
  itemOptions: SortOption[];
  itemsPerPage: number;
  onSortChange: (value: string) => void;
  onItemsPerPageChange: (value: string) => void;
  sortDefault?: string;
  areFilterOptionsActive: boolean;
  handleFilterOptionsActive: (value: boolean) => void;
  activeFilters: ActiveFiltersType;
  handleClearAll: () => void;
}

export const Filters: React.FC<FiltersProps> = ({
  sortOptions,
  itemOptions,
  itemsPerPage,
  onSortChange,
  onItemsPerPageChange,
  sortDefault = 'Newest',
  areFilterOptionsActive,
  handleFilterOptionsActive,
  activeFilters,
  handleClearAll,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get('q') || '');

  const filtersCount = Object.keys(activeFilters).length;

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
    <div className="col-span-full grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-4 items-end">
      <form
        className="xl:col-span-8 sm:col-span-7 col-span-4"
        onSubmit={handleSearchSubmit}
      >
        <p className="text-small font-mont text-custom-secondary mb-1">
          {/*blank*/}
        </p>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
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
            className="block w-full p-[9px] ps-10 outline-none text-sm text-white border border-gray-700 rounded-lg bg-transparent focus:ring-custom-accent focus:border-custom-accent"
            placeholder="Search for goods"
            required
          />
          <button
            type="submit"
            className="h-full text-white absolute end-0 bottom-0 bg-custom-accent hover:bg-custom-accent focus:ring-4 focus:outline-none focus:ring-custom-accent font-medium rounded-lg text-sm px-4 py-2"
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

      <div className="col-span-full xl:col-span-6 gap-3 items-center">
        <div className="flex flex-row gap-3 xl:mb-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              handleFilterOptionsActive(!areFilterOptionsActive);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              className={cn(
                `
              text-small font-mont text-custom-secondary mb-1 w-8 h-8
              fill-black
            `,
                {
                  'fill-black dark:fill-white': areFilterOptionsActive,
                  'fill-elements': !areFilterOptionsActive,
                },
              )}
            >
              <path d="M64 157.7C64 141.3 77.3 128 93.7 128L546.4 128C562.8 128 576.1 141.3 576.1 157.7C576.1 165.6 573 173.1 567.4 178.7L400 345.9L400 546.3C400 562.7 386.7 576 370.3 576C362.4 576 354.9 572.9 349.3 567.3L247 465C242.5 460.5 240 454.4 240 448L240 345.9L72.7 178.6C67.1 173.1 64 165.5 64 157.7zM137.9 176L281 319C285.5 323.5 288 329.6 288 336L288 438.1L352 502.1L352 336C352 329.6 354.5 323.5 359 319L502 176L137.9 176z" />
            </svg>
          </button>

          <div className="flex flex-row items-center gap-10">
            <span
              className={cn(
                {
                  'text-custom-secondary': filtersCount === 0,
                  'text-black dark:text-white dark:after:bg-white':
                    filtersCount !== 0,
                },
                `inline-block relative font-normal text-base after:bg-custom-secondary
                 after:content-[""] after:block after:h-4 after:w-[2px] 
                 after:absolute after:-right-5 after:top-[calc(50%-8px)]`,
              )}
            >
              {filtersCount} Filters
            </span>
            <button
              disabled={filtersCount === 0}
              className="col-span-2 font-mont font-normal text-base disabled:text-custom-secondary disabled:dark:text-custom-secondary text-black dark:text-white"
              onClick={(e) => {
                e.preventDefault();
                handleClearAll();
                handleFilterOptionsActive(false);
              }}
            >
              Clear all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
