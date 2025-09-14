import * as React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select';

export const Dropdown: React.FC = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px] border-transparent font-mont text-sm text-custom-primary font-bold ">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem
          className="font-mont text-sm text-custom-secondary font-medium data-[highlighted]:text-custom-primary"
          value="light"
        >
          Light
        </SelectItem>
        <SelectItem
          className="font-mont text-sm text-custom-secondary font-semibold data-[highlighted]:text-custom-primary"
          value="dark"
        >
          Dark
        </SelectItem>
        <SelectItem
          className="font-mont text-sm text-custom-secondary font-semibold data-[highlighted]:text-custom-primary"
          value="system"
        >
          System
        </SelectItem>
      </SelectContent>
    </Select>
  );
};
