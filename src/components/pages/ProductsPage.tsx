import React from 'react';
import { useTranslation } from 'react-i18next';
import { GridContainer } from '../atoms/GridContainer';
import { Breadcrumb } from '../molecules/Breadcrumb/Breadcrumb';
import { ProductCard } from '../molecules/ProductCard/ProductCard';
import { useProducts } from '../../hooks/useProducts';
import { usePaginatedProducts } from '../../hooks/usePaginatedProducts';
import { Filters } from '../molecules/Filters/Filters';
import { Pagination } from '../molecules/Pagination/Pagination';
import type { SortOption } from '../../types/SortOption';

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
  const { t } = useTranslation();
  const { products, loading, error } = useProducts(category);
  const {
    currentItems,
    totalPages,
    currentPage,
    itemsPerPage,
    handleSortChange,
    handleItemsPerPageChange,
    handlePageChange,
  } = usePaginatedProducts(products);

  if (loading) return <p className="col-span-full">{t('loading')}...</p>;
  if (error) return <p className="col-span-full text-red-500">{error}</p>;

  return (
    <GridContainer>
      <div className="col-span-full">
        <Breadcrumb />
        <h1 className="text-h1 font-extrabold font-mont mb-2 sm:text-h1-lg">
          {t(titleKey)}
        </h1>
        <p className="text-body-14 font-mont font-semibold text-custom-secondary">
          {products.length} {t('models')}
        </p>
      </div>

      <Filters
        sortOptions={SORT_OPTIONS.map((o) => ({ ...o, label: t(o.label) }))}
        itemOptions={ITEM_OPTIONS}
        itemsPerPage={itemsPerPage}
        onSortChange={handleSortChange}
        onItemsPerPageChange={handleItemsPerPageChange}
        sortDefault={t('Newest')}
      />

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
