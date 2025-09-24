import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { GridContainer } from '../atoms/GridContainer';
import { Breadcrumb } from '../molecules/Breadcrumb/Breadcrumb';
import { ProductCard } from '../molecules/ProductCard/ProductCard';
import { useProducts } from '../../hooks/useProducts';
import { usePaginatedProducts } from '../../hooks/usePaginatedProducts';
import type { ActiveFiltersType, FiltersType } from '@/types/FiltersType.ts';
import { Pagination } from '../molecules/Pagination/Pagination';
import type { SortOption } from '../../types/SortOption';
import { FilterOptions } from '@/components/molecules/FilterOptions/FilterOptions.tsx';
import { Filters } from '@/components/molecules/Filters/Filters.tsx';

interface ProductsPageProps {
  category: string;
  titleKey: string;
}

const ITEM_OPTIONS: SortOption[] = [
  { id: 1, label: '8', value: '8' },
  { id: 2, label: '16', value: '16' },
  { id: 3, label: '24', value: '24' },
  { id: 4, label: '32', value: '32' },
];

const SORT_OPTIONS: SortOption[] = [
  { id: 1, label: 'Newest', value: 'year' },
  { id: 2, label: 'Low-to-High', value: 'price-asc' },
  { id: 3, label: 'High-to-Low', value: 'price-desc' },
  { id: 4, label: 'Alphabetically', value: 'name' },
];

export const ProductsPage: React.FC<ProductsPageProps> = ({
  category,
  titleKey,
}) => {
  const [areFilterOptionsActive, setAreFilterOptionsActive] = useState(false);
  const [filters, setFilters] = useState<FiltersType>({});
  const [activeFilters, setActiveFilters] = useState<ActiveFiltersType>({});
  const [query, setQuery] = useState('');
  const { t } = useTranslation();
  const { products, error } = useProducts(category);

  // формуємо activeFilters по чекбоксам
  useEffect(() => {
    const newActiveFilters: ActiveFiltersType = {};

    Object.entries(filters).forEach(([key, values]) => {
      const checkedValues = values.filter((v) => v.checked).map((v) => v.value);
      if (checkedValues.length) newActiveFilters[key] = checkedValues;
    });

    setActiveFilters(newActiveFilters);
  }, [filters]);

  // тут одне джерело правди — filteredItems
  const filteredItems = useMemo(() => {
    if (!products.length) return [];

    let result = products;

    // фільтри
    result = result.filter((item) =>
      Object.entries(activeFilters).every(([key, values]) => {
        if (key === 'price') {
          const itemPrice = item.price;
          return values.some((range) => {
            const [min, max] = range
              .split(' - ')
              .map((v) => parseInt(v.replace('$', '')));
            if (!max) return itemPrice >= min;
            return itemPrice >= min && itemPrice < max;
          });
        }
        return values.includes(item[key as keyof typeof item] as string);
      }),
    );

    // пошук
    if (query.trim()) {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()),
      );
    }

    return result;
  }, [products, activeFilters, query]);

  const handleClearAll = () => {
    const clearedFilters: FiltersType = {};
    Object.entries(filters).forEach(([key, values]) => {
      clearedFilters[key] = values.map((v) => ({ ...v, checked: false }));
    });
    setFilters(clearedFilters);
  };

  const {
    currentItems,
    totalPages,
    currentPage,
    itemsPerPage,
    handleSortChange,
    handleItemsPerPageChange,
    handlePageChange,
  } = usePaginatedProducts(filteredItems);

  if (error) return <p className="col-span-full text-red-500">{error}</p>;

  return (
    <GridContainer>
      <div className="col-span-full">
        <Breadcrumb />
        <h1 className="text-h1 font-extrabold font-mont mb-2 sm:text-h1-lg">
          {t(titleKey)}
        </h1>
        <p className="text-body-14 font-mont font-semibold text-custom-secondary">
          {filteredItems.length} {t('models')}
        </p>
      </div>

      <Filters
        sortOptions={SORT_OPTIONS.map((o) => ({ ...o, label: t(o.label) }))}
        itemOptions={ITEM_OPTIONS}
        itemsPerPage={itemsPerPage}
        onSortChange={handleSortChange}
        onItemsPerPageChange={handleItemsPerPageChange}
        areFilterOptionsActive={areFilterOptionsActive}
        handleFilterOptionsActive={setAreFilterOptionsActive}
        sortDefault={t('Newest')}
        activeFilters={activeFilters}
        handleClearAll={handleClearAll}
        query={query}
        onQueryChange={setQuery}
      />

      {areFilterOptionsActive && (
        <FilterOptions
          filters={filters}
          handleFilters={setFilters}
        />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      {currentItems.map((p) => (
        <div
          key={p.id}
          className="col-span-4 sm:col-span-6"
        >
          <ProductCard product={p} />
        </div>
      ))}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </GridContainer>
  );
};
