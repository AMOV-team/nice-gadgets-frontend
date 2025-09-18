import React, { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import products from '../../../public/api/products.json';
import { ProductCard } from '../molecules/ProductCard/ProductCard';
import { Dropdown } from '../atoms/Dropdown';
import type { SortOption } from '../../types/SortOption';
import { PaginationButton } from '../atoms/buttons/PaginationButton';
import { GridContainer } from '../atoms/GridContainer';
import { Breadcrumb } from '../molecules/Breadcrumb/Breadcrumb.tsx';
import { useTranslation } from 'react-i18next';

export const TabletsPage: React.FC = () => {
  const { t } = useTranslation();
  const tablets = products.filter((p) => p.category === 'tablets');

  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get('sortBy') || 'Newest';
  const itemsPerPage = Number(searchParams.get('itemsPerPage')) || 8;
  const currentPage = Number(searchParams.get('page')) || 1;

  const sortedTablets = useMemo(() => {
    const sorted = [...tablets];
    switch (sortBy) {
      case 'Price: Low to High':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'Alphabetically':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        sorted.sort((a, b) => b.year - a.year);
        break;
    }
    return sorted;
  }, [tablets, sortBy]);

  const totalPages = Math.ceil(sortedTablets.length / itemsPerPage);

  const currentTablets = sortedTablets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const modelsCount = tablets.length;

  const itemOptions: SortOption[] = [
    { id: 1, label: '8' },
    { id: 2, label: '16' },
    { id: 3, label: '24' },
    { id: 4, label: '32' },
  ];

  const sortOptions: SortOption[] = [
    { id: 1, label: 'Newest' },
    { id: 2, label: 'Price: Low to High' },
    { id: 3, label: 'Price: High to Low' },
    { id: 4, label: 'Alphabetically' },
  ];

  const handleSortChange = (value: string) => {
    setSearchParams((prevParams) => {
      prevParams.set('sortBy', value);
      prevParams.set('page', '1');
      return prevParams;
    });
  };

  const handleItemsPerPageChange = (value: string) => {
    setSearchParams((prevParams) => {
      prevParams.set('itemsPerPage', value);
      prevParams.set('page', '1');
      return prevParams;
    });
  };

  const handlePageChange = (page: number) => {
    setSearchParams((prevParams) => {
      prevParams.set('page', String(page));
      return prevParams;
    });
  };

  return (
    <GridContainer>
      <div className="col-span-full">
        <Breadcrumb />
        <h1 className="text-h1 font-extrabold font-mont mb-2 sm:text-h1-lg">
          {t('tablets')}
        </h1>
        <p className="text-body-14 font-mont font-semibold text-custom-secondary">
          {modelsCount} {t('models')}
        </p>
      </div>

      <div className="col-span-full grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-4">
        <div className="col-start-1 col-end-3 sm:col-end-5">
          <p className="text-small font-mont text-custom-secondary mb-1">
            {t('sortby')}
          </p>
          <Dropdown
            defaultText={sortBy}
            itemData={sortOptions}
            triggerClass="w-full"
            itemClass="w-full"
            onSelect={handleSortChange}
          />
        </div>

        <div className="col-start-3 col-end-5 sm:col-start-5 sm:col-end-8">
          <p className="text-small font-mont text-custom-secondary mb-1">
            {t('items-on-page')}
          </p>
          <Dropdown
            defaultText={String(itemsPerPage)}
            itemData={itemOptions}
            triggerClass="w-full"
            itemClass="w-full"
            onSelect={handleItemsPerPageChange}
          />
        </div>
      </div>

      {currentTablets.map((tablet) => (
        <div
          key={tablet.id}
          className="col-span-4 sm:col-span-6"
        >
          <ProductCard product={tablet} />
        </div>
      ))}

      <div className="col-span-full flex justify-center mt-6">
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationButton
              key={page}
              text={page.toString()}
              selected={page === currentPage}
              onSelect={() => handlePageChange(page)}
            />
          ))}
        </div>
      </div>
    </GridContainer>
  );
};
