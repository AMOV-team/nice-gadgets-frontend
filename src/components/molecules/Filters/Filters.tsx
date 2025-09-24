import React from 'react';
import { Dropdown } from '../../atoms/Dropdown';
import type { SortOption } from '../../../types/SortOption';
import cn from 'classnames';
import type { ActiveFiltersType } from '@/types/FiltersType.ts';
import { useTranslation } from 'react-i18next';
import { ProductSearch } from '../../molecules/ProductsSearch/ProductsSearch';
import type { Product } from '../../../types/Product';
import { Funnel } from 'lucide-react';

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
  onQuery: (filtered: Product[]) => void;
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
  onQuery,
}) => {
  const { t } = useTranslation();

  const filtersCount = Object.values(activeFilters).reduce(
    (acc, values) => acc + values.length,
    0,
  );

  return (
    <div className="col-span-full grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-4 items-end grid-rows-2 sm:grid-rows-1">
      <div className="col-span-full sm:col-span-6 xl:col-span-10">
        <ProductSearch
          products={products}
          onFiltered={onQuery}
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
            <Funnel
              className={cn(
                `
                mb-1 size-6`,
                {
                  'text-custom-primary': areFilterOptionsActive,
                  'text-elements': !areFilterOptionsActive,
                },
              )}
            />
          </button>

          <div className="flex flex-row items-center gap-10">
            <span
              className={cn(
                {
                  'text-custom-secondary': filtersCount === 0,
                  'text-black dark:text-white dark:after:bg-white':
                    filtersCount !== 0,
                },
                `inline-block relative text-small after:bg-custom-secondary
                 after:content-[""] after:block after:h-4 after:w-[1px] 
                 after:absolute after:-right-5 after:top-[calc(50%-10px)]`,
              )}
            >
              {filtersCount} Filters
            </span>
            <button
              disabled={filtersCount === 0}
              className="col-span-2 text-small disabled:text-custom-secondary disabled:dark:text-custom-secondary text-black dark:text-white"
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
