import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { Product } from '../types/Product';

export const usePaginatedProducts = (products: Product[]) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get('sortBy') || 'year';
  const itemsPerPage = Number(searchParams.get('itemsPerPage')) || 8;
  const currentPage = Number(searchParams.get('page')) || 1;

  const sortedProducts = useMemo(() => {
    const sorted = [...products];

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
  }, [products, sortBy]);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const currentItems = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleSortChange = (value: string) => {
    setSearchParams((prev) => {
      prev.set('sortBy', value);
      prev.set('page', '1');
      return prev;
    });
  };

  const handleItemsPerPageChange = (value: string) => {
    setSearchParams((prev) => {
      prev.set('itemsPerPage', value);
      prev.set('page', '1');
      return prev;
    });
  };

  const handlePageChange = (page: number) => {
    setSearchParams((prev) => {
      prev.set('page', String(page));
      return prev;
    });
  };

  return {
    currentItems,
    totalPages,
    currentPage,
    itemsPerPage,
    handleSortChange,
    handleItemsPerPageChange,
    handlePageChange,
  };
};
