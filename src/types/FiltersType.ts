type FilterValue = {
  value: string;
  checked: boolean;
};

export type FiltersType = {
  [key: string]: FilterValue[];
};

export type ActiveFiltersType = {
  [key: string]: string[];
};
