import {
  formatExpiry,
  formatCardNumber,
  formatName,
  formatPhone,
  formatCVC,
} from './inputMasks';

export type FormState = {
  name: string;
  email: string;
  phone: string;
  address: string;
  branch: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
};

type SetForm = React.Dispatch<React.SetStateAction<FormState>>;

export const handleChangeWithMask =
  (setForm: SetForm) =>
  (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let newValue = value;

    switch (name) {
      case 'expiry':
        newValue = formatExpiry(value);
        break;
      case 'cardNumber':
        newValue = formatCardNumber(value);
        break;
      case 'name':
        newValue = formatName(value);
        break;
      case 'phone':
        newValue = formatPhone(value);
        break;
      case 'cvc':
        newValue = formatCVC(value);
        break;
      default:
        newValue = value;
    }

    setForm((prev) => ({ ...prev, [name]: newValue }));
  };
