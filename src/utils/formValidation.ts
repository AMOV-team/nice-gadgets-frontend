export const getDigits = (value: string) => value.replace(/\D/g, '');

export type FormErrors = Partial<Record<keyof FormState, string>>;

export interface FormState {
  name: string;
  email: string;
  phone: string;
  address: string;
  branch: string;
  cardNumber: string;
  expiry: string;
  cvc: string;
}

export const validateFormFields = (form: FormState): FormErrors => {
  const errors: FormErrors = {};

  if (getDigits(form.cardNumber).length < 16) {
    errors.cardNumber = 'error-card-number';
  }

  if (getDigits(form.phone).length < 12) {
    errors.phone = 'error-phone';
  }

  if (getDigits(form.cvc).length < 3) {
    errors.cvc = 'error-cvc';
  }

  if (getDigits(form.expiry).length < 4) {
    errors.expiry = 'error-expiry';
  }

  return errors;
};
