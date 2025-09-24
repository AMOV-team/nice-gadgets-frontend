import React, { useEffect } from 'react';
import { useMatch } from 'react-router-dom';
import { getProductsByCategory } from '@/api/productCrud.ts';
import type { FiltersType } from '@/types/FiltersType.ts';
import type { FilterItem } from '@/utils/sortFilters.ts';
import { FilterList } from '@/components/molecules/FilterOptions/FIlterList.tsx';

const PRICE_RANGES: FilterItem[] = [
  { value: '$350 - $500', checked: false },
  { value: '$500 - $750', checked: false },
  { value: '$750 - $1000', checked: false },
  { value: '$1000 - $1500', checked: false },
  { value: '$1500+', checked: false },
];

type Props = {
  filters: FiltersType;
  handleFilters: (value: FiltersType) => void;
};

export const FilterOptions: React.FC<Props> = ({ filters, handleFilters }) => {
  const matchPhones = useMatch('/phones/*');
  const matchTablets = useMatch('/tablets/*');
  const matchAccessories = useMatch('/accessories/*');

  const category =
    matchPhones ? 'phones'
    : matchTablets ? 'tablets'
    : matchAccessories ? 'accessories'
    : '';

  useEffect(() => {
    if (category && Object.keys(filters).length === 0) {
      const fetchItems = async () => {
        const items = await getProductsByCategory(category);
        const newFilters: FiltersType = {};

        newFilters['price'] = PRICE_RANGES.map((f) => ({ ...f }));

        items.forEach((item) => {
          Object.entries(item).forEach(([key, value]) => {
            if (!value || !['ram', 'capacity', 'year'].includes(key)) return;
            if (!newFilters[key]) newFilters[key] = [];
            if (!newFilters[key].some((v) => v.value === value)) {
              newFilters[key].push({ value, checked: false });
            }
          });
        });

        handleFilters(newFilters);
      };

      fetchItems();
    }
  }, [category]);

  const handleToggle = (key: string, value: string, checked: boolean) => {
    handleFilters({
      ...filters,
      [key]: (filters[key] || []).map((f) =>
        f.value === value ? { ...f, checked } : f,
      ),
    });
  };

  return (
    <div className="col-span-full w-full font-mont">
      <ul
        className={`grid gap-y-8 gap-x-2 grid-cols-2 sm:flex sm:flex-row gap-2 sm:gap-6 sm:justify-between`}
      >
        <FilterList
          title="Price"
          filters={filters['price'] || PRICE_RANGES}
          onChange={(value, checked) => handleToggle('price', value, checked)}
        />
        <FilterList
          title="Ram"
          filters={filters['ram'] || []}
          onChange={(value, checked) => handleToggle('ram', value, checked)}
        />
        <FilterList
          title="Capacity"
          filters={filters['capacity'] || []}
          onChange={(value, checked) =>
            handleToggle('capacity', value, checked)
          }
        />
        <FilterList
          title="Year"
          filters={filters['year'] || []}
          onChange={(value, checked) => handleToggle('year', value, checked)}
        />
      </ul>
    </div>
  );
};
