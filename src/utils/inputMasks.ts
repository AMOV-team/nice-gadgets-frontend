// ===== Expiry MM/YY =====
export const formatExpiry = (value: string) => {
  let newValue = value.replace(/\D/g, '');
  if (newValue.length > 2) {
    newValue = newValue.slice(0, 2) + '/' + newValue.slice(2, 4);
  }
  return newValue;
};

// ===== Card Number 1234 5678 ... =====
export const formatCardNumber = (value: string) => {
  const newValue = value.replace(/\D/g, '');
  return newValue.match(/.{1,4}/g)?.join(' ') || '';
};

// ===== Name =====
export const formatName = (value: string) => {
  const newValue = value.replace(/[^a-zA-Zа-яА-ЯёЁіІїЇєЄ '-]/g, '');
  return newValue
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// ===== Phone +380-XX-XXX-XXXX =====
export const formatPhone = (value: string) => {
  let digits = value.replace(/\D/g, '');
  let formatted = '';

  if (digits.startsWith('380')) {
    formatted = '+380';
    digits = digits.slice(3);
  } else if (digits.startsWith('0')) {
    formatted = '+380';
    digits = digits.slice(1);
  } else {
    formatted = '+380';
  }

  if (digits.length > 0) formatted += '-' + digits.slice(0, 2);
  if (digits.length > 2) formatted += '-' + digits.slice(2, 5);
  if (digits.length > 5) formatted += '-' + digits.slice(5, 9);

  return formatted;
};

// ===== CVC (only digits, max 3) =====
export const formatCVC = (value: string) => {
  return value.replace(/\D/g, '').slice(0, 3);
};
