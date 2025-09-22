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
import { ArrowRightIcon } from '../atoms/icons/ArrowRightIcon.tsx';
import { ArrowLeftIcon } from '../atoms/icons/ArrowLeftIcon.tsx';

export const PhonesPage: React.FC = () => {
  const { t } = useTranslation();
  const phones = products.filter((p) => p.category === 'phones');

  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get('sortBy') || 'year';
  const itemsPerPage = Number(searchParams.get('itemsPerPage')) || 8;
  const currentPage = Number(searchParams.get('page')) || 1;

  const sortedPhones = useMemo(() => {
    const sorted = [...phones];

    switch (sortBy) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'year':
      default:
        sorted.sort((a, b) => b.year - a.year);
        break;
    }

    return sorted;
  }, [phones, sortBy]);

  const totalPages = Math.ceil(sortedPhones.length / itemsPerPage);

  const currentPhones = sortedPhones.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const modelsCount = phones.length;

  const itemOptions: SortOption[] = [
    { id: 1, label: '8', value: '8' },
    { id: 2, label: '16', value: '16' },
    { id: 3, label: '24', value: '24' },
    { id: 4, label: '32', value: '32' },
  ];

  const sortOptions: SortOption[] = [
    { id: 1, label: `${t('Newest')}`, value: 'year' },
    { id: 2, label: `${t('Low-to-High')}`, value: 'price-asc' },
    { id: 3, label: `${t('High-to-Low')}`, value: 'price-desc' },
    { id: 4, label: `${t('Alphabetically')}`, value: 'name' },
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

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages: number[] = [];
    let start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, start + 3);
    if (end - start < 3) {
      start = Math.max(1, end - 3);
    }
    for (let i = start; i <= end; i++) pages.push(i);

    return (
      <div className="col-span-full flex justify-center mt-6">
        <div className="flex gap-2">
          {currentPage > 1 && totalPages > 4 && (
            <PaginationButton
              selected={false}
              onSelect={() => handlePageChange(currentPage - 1)}
            >
              <ArrowLeftIcon />
            </PaginationButton>
          )}

          {pages.map((p) => (
            <PaginationButton
              key={p}
              selected={p === currentPage}
              onSelect={() => handlePageChange(p)}
            >
              {p.toString()}
            </PaginationButton>
          ))}

          {currentPage < totalPages && totalPages > 4 && (
            <PaginationButton
              selected={false}
              onSelect={() => handlePageChange(currentPage + 1)}
            >
              <ArrowRightIcon />
            </PaginationButton>
          )}
        </div>
      </div>
    );
  };

  return (
    <GridContainer>
      <div className="col-span-full">
        <Breadcrumb />
        <h1 className="text-h1 font-extrabold font-mont mb-2 sm:text-h1-lg">
          {t('mobile-phones')}
        </h1>
        <p className="text-body-14 font-mont font-semibold text-custom-secondary">
          {modelsCount} {t('models')}
        </p>
      </div>

      <div className="col-span-full grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-4">
        <div className="col-start-1 col-end-3 sm:col-end-6">
          <p className="text-small font-mont text-custom-secondary mb-1">
            {t('sortby')}
          </p>
          <Dropdown
            defaultText={t('Newest')}
            itemData={sortOptions}
            triggerClass="w-full"
            itemClass="w-full"
            onSelect={(value) => handleSortChange(value)}
          />
        </div>

        <div className="col-start-3 col-end-5 sm:col-start-6 sm:col-end-9">
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

      {renderPagination()}

      {currentPhones.map((phone) => (
        <div
          key={phone.id}
          className="col-span-4 sm:col-span-6"
        >
          <ProductCard product={phone} />
        </div>
      ))}

      {renderPagination()}
    </GridContainer>
  );
};
