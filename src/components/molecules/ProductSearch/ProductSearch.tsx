import React, { useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { Search } from 'lucide-react';
import DeleteButton from '@/components/atoms/buttons/DeleteButton';
import { useTranslation } from 'react-i18next';

interface ProductSearchProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export const ProductSearch: React.FC<ProductSearchProps> = ({
  query,
  onQueryChange,
}) => {
  const [localQuery, setLocalQuery] = useState(query);
  const { t } = useTranslation();

  useEffect(() => {
    const handler = setTimeout(() => {
      onQueryChange(localQuery.trim());
    }, 500);
    return () => clearTimeout(handler);
  }, [localQuery, onQueryChange]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalQuery(e.target.value);
  };

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <Search className="text-elements w-4 h-4 " />
      </div>
      <input
        value={localQuery}
        onChange={handleChange}
        className="block w-full p-[9px] ps-10 outline-none text-sm border border-elements rounded-lg bg-transparent focus:border-custom-secondary"
        placeholder={t('search-for-goods')}
      />
      {localQuery && (
        <div className="absolute inset-y-0 end-0 flex items-center pe-3">
          <DeleteButton onDelete={() => setLocalQuery('')} />
        </div>
      )}
    </div>
  );
};
