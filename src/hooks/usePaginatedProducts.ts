import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { Product } from '../types/Product';

export const usePaginatedProducts = (products: Product[]) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get('sortBy') || 'year';
  const itemsPerPage = Number(searchParams.get('itemsPerPage')) || 8;
  const currentPage = Number(searchParams.get('page')) || 1;

  const query = searchParams.get('q')?.toLowerCase() || '';

  const sortedProducts = useMemo(() => {
    let filtered = products;

    if (query) {
      filtered = products.filter(
        (p) =>
          [
            p.category,
            p.itemId,
            p.name,
            p.screen,
            p.capacity,
            p.color,
            p.ram,
          ].some((value) =>
            value.toLowerCase().includes(query.toLowerCase()),
          ) ||
          [p.fullPrice, p.price, p.year].some((value) =>
            value.toString().includes(query),
          ),
      );
    }

    const sorted = [...filtered];

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
  }, [products, sortBy, query]);

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
