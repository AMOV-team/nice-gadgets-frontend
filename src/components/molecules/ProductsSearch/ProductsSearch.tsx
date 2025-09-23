import React, { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { Product } from '../../../types/Product';
import { Search } from 'lucide-react';
import DeleteButton from '@/components/atoms/buttons/DeleteButton';

interface ProductSearchProps {
  products: Product[];
  onFiltered: (filtered: Product[]) => void;
}

export const ProductSearch: React.FC<ProductSearchProps> = ({
  products,
  onFiltered,
}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  const handleChange = (element: ChangeEvent<HTMLInputElement>) => {
    setQuery(element.target.value);
  };

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedQuery(query.trim()), 500);
    return () => clearTimeout(handler);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      onFiltered(
        products.filter((p) =>
          p.name.toLowerCase().includes(debouncedQuery.toLowerCase()),
        ),
      );
    } else {
      onFiltered(products);
    }

    const newParams = new URLSearchParams(searchParams);
    if (debouncedQuery) newParams.set('query', debouncedQuery);
    else newParams.delete('query');
    setSearchParams(newParams);
  }, [debouncedQuery, products, onFiltered, searchParams, setSearchParams]);

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <Search className="text-elements w-4 h-4 " />
      </div>
      <input
        value={query}
        onChange={handleChange}
        className="block w-full p-[9px] ps-10 outline-none text-sm border border-elements rounded-lg bg-transparent focus:border-custom-secondary"
        placeholder="Search for goods"
      />
      {query && (
        <div className="absolute inset-y-0 end-0 flex items-center pe-3">
          <DeleteButton onDelete={() => setQuery('')} />
        </div>
      )}
    </div>
  );
};
