import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';
import type { SortOption } from '../../../types/SortOption';

type Props = {
  // value?: string | null;
  defaultText: string;
  itemData: SortOption[];
  triggerClass: string;
  itemClass: string;
  onSelect: (value: string) => void;
  disabled?: boolean;
};

export const Dropdown: React.FC<Props> = ({
  // value,
  defaultText,
  itemData,
  triggerClass,
  itemClass,
  onSelect,
  disabled,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Select
      // value={value || undefined}
      onOpenChange={setOpen}
      onValueChange={onSelect}
      disabled={disabled}
    >
      <SelectTrigger
        open={open}
        className={`
          w-[136px]
          h-10
          p-3
          min-h-0
          border-solid
          border-elements
          
          text-sm
          text-custom-primary
          font-semibold
          overflow-hidden
          box-border
          rounded-md
          hover:border-custom-secondary
          focus:outline-none
          focus:ring-0
          data-[state=open]:border-black
          transition-colors
          duration-200
          ${triggerClass}
        `}
      >
        <SelectValue placeholder={defaultText} />
      </SelectTrigger>

      <SelectContent
        className="
          w-[250px]
          overflow-y-auto
          max-h-[300px]
          box-border
          bg-white
          border-elements
          rounded-md
          shadow-[0px_2px_15px_0px_rgba(0,0,0,0.05)]
        "
      >
        {itemData.map((item) => (
          <SelectItem
            key={item.id}
            value={item.label}
            className={`
              w-full
              h-10
              px-3
              py-1.5
              
              text-sm
              text-custom-secondary
              font-medium
              rounded-md
              outline-none
              data-[highlighted]:bg-ho
              data-[highlighted]:text-custom-primary
              ${itemClass}
            `}
          >
            {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
