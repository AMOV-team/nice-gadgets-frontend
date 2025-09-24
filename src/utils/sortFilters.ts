export type FilterItem = { value: string; checked: boolean };

export const capacityToValue = (cap: string) => {
  const trimmed = cap.trim();

  // память
  const memoryMatch = trimmed.match(/^([\d.]+)\s*(MB|GB|TB)$/i);
  if (memoryMatch) {
    const num = parseFloat(memoryMatch[1]);
    const unit = memoryMatch[2].toUpperCase();

    switch (unit) {
      case 'MB':
        return num * 1024 * 1024;
      case 'GB':
        return num * 1024 * 1024 * 1024;
      case 'TB':
        return num * 1024 * 1024 * 1024 * 1024;
    }
  }

  // миллиметры (аксессуары)
  const mmMatch = trimmed.match(/^([\d.]+)\s*mm$/i);
  if (mmMatch) {
    return parseFloat(mmMatch[1]);
  }

  return 0; // fallback
};

export const priceToNumber = (price: string) => {
  const match = price.match(/\$?(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
};

export const sortFilters = (
  filters: FilterItem[],
  type: 'capacity' | 'price' | 'string' = 'string',
) => {
  return filters.slice().sort((a, b) => {
    switch (type) {
      case 'capacity':
        return (
          capacityToValue(a.value) - capacityToValue(b.value) ||
          a.value.localeCompare(b.value)
        );
      case 'price':
        return priceToNumber(a.value) - priceToNumber(b.value);
      case 'string':
      default:
        return String(a.value).localeCompare(String(b.value));
    }
  });
};
