import React from 'react';
import { Dropdown } from '../../atoms/Dropdown';
import type { SortOption } from '../../../types/SortOption';
import { useSearchParams } from 'react-router-dom';
import cn from 'classnames';
import type { ActiveFiltersType } from '@/types/FiltersType.ts';
import { useTranslation } from 'react-i18next';
import { ProductSearch } from '../../molecules/ProductsSearch/ProductsSearch';
import type { Product } from '../../../types/Product';

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
  areFilterOptionsActive,
  handleFilterOptionsActive,
  activeFilters,
  handleClearAll,
  products,
  onFiltered,
}) => {
  const { t } = useTranslation();

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
          {t('sortby')}
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
          {t('items-on-page')}
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
