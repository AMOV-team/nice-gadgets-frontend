import { FilterLabel } from '@/components/molecules/FilterOptions/FilterLabel.tsx';
import React from 'react';
import { sortFilters, type FilterItem } from '@/utils/sortFilters.ts';

type Props = {
  title: string;
  filters: FilterItem[];
  onChange: (value: string, checked: boolean) => void;
  classname?: string;
};

export const FilterList: React.FC<Props> = ({
  title,
  filters,
  onChange,
  classname,
}) => {
  const type =
    ['capacity', 'ram'].includes(title.toLowerCase()) ? 'capacity'
    : title.toLowerCase() === 'price' ? 'price'
    : 'string';

  const sorted = sortFilters([...filters], type);

  return (
    <li className={`${classname} flex-1 flex`}>
      <div className="sm:w-fit">
        <p className="text-xl font-semibold mb-4 text-left">{title}</p>
        <ul className={`flex flex-col gap-3`}>
          {sorted.map((f) => (
            <li key={f.value}>
              <FilterLabel
                text={f.value}
                checked={f.checked}
                onChange={(checked) => onChange(f.value, checked)}
              />
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};
