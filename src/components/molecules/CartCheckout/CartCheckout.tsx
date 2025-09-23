/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { PrimaryButton } from '../../atoms/buttons';
import { useCart } from 'react-use-cart';
import { useCartSyncManager } from '@/hooks/useCartSyncManager';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useOrderSubmit } from '@/hooks/useOrderSubmit';
import { SubmitButton } from '@/components/atoms/buttons/SubmitButton';
import { useAuth } from '@/hooks/useAuth';

export const CartCheckout: React.FC = () => {
  const { cartTotal, totalItems } = useCart();
  const { handleSubmit } = useOrderSubmit();
  const [showSuccessModal, setShowSuccessModal] = React.useState(false);
  const { user } = useAuth();
  const { emptyCart } = useCart();

  useCartSyncManager();

  const [showForm, setShowForm] = React.useState(false);
  const [deliveryType, setDeliveryType] = React.useState<
    'nova_poshta' | 'courier' | ''
  >('');
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    branch: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col gap-6 p-6 border border-solid border-elements rounded-lg">
      <div className="flex flex-col justify-center items-center">
        <span className="text-h2 font-extrabold">${cartTotal}</span>
        <span className="text-body font-semibold">
          Total for {totalItems} items
        </span>
      </div>

      <div className="border border-solid border-elements" />
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center max-w-sm w-full">
            <h2 className="text-xl font-bold mb-2">Дякуємо за замовлення!</h2>
            <p className="text-muted-foreground mb-4">
              Ваше замовлення успішно оформлено.
            </p>
            <PrimaryButton
              text="Закрити"
              onSelect={() => setShowSuccessModal(false)}
            />
          </div>
        </div>
      )}

      {!showForm && totalItems > 0 && (
        <PrimaryButton
          text="Checkout"
          onSelect={() => setShowForm(true)}
        />
      )}
      {showForm && totalItems > 0 && (
        <form
          className="flex flex-col gap-4"
          onSubmit={async (e) => {
            e.preventDefault();

            if (user) {
              await handleSubmit();
            } else {
              emptyCart();
            }

            setShowForm(false);
            setShowSuccessModal(true);
            setTimeout(() => {
              setShowSuccessModal(false);
            }, 3000);
          }}
        >
          <div>
            <Label htmlFor="deliveryType">Тип доставки</Label>
            <select
              name="deliveryType"
              value={deliveryType}
              onChange={(e) => setDeliveryType(e.target.value as any)}
              className="w-full border rounded px-2 py-1"
              required
            >
              <option value="">Оберіть тип</option>
              <option value="nova_poshta">Нова Пошта (відділення)</option>
              <option value="courier">Кур’єр</option>
            </select>
          </div>

          {deliveryType === 'nova_poshta' && (
            <div>
              <Label htmlFor="branch">Відділення Нової Пошти</Label>
              <Input
                name="branch"
                value={form.branch}
                onChange={handleChange}
                placeholder="Напр. №5, Хмельницький"
                required
              />
            </div>
          )}

          <div>
            <Label htmlFor="name">Ім’я</Label>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Степан Гіга"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tseySon@gmail.com"
            />
          </div>

          <div>
            <Label htmlFor="phone">Телефон</Label>
            <Input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+380-12-345-6789"
              required
            />
          </div>

          {deliveryType === 'courier' && (
            <div>
              <Label htmlFor="address">Адреса доставки</Label>
              <Input
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="вул. Незалежності 12, Київ"
                required
              />
            </div>
          )}

          <div>
            <Label htmlFor="cardNumber">Номер карти</Label>
            <Input
              name="cardNumber"
              value={form.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="expiry">MM/YY</Label>
              <Input
                name="expiry"
                value={form.expiry}
                onChange={handleChange}
                placeholder="12/25"
                required
              />
            </div>
            <div className="flex-1">
              <Label htmlFor="cvc">CVC</Label>
              <Input
                name="cvc"
                value={form.cvc}
                onChange={handleChange}
                placeholder="123"
                required
              />
            </div>
          </div>

          <SubmitButton
            text="Оформити замовлення"
            type="submit"
          />
        </form>
      )}
    </div>
  );
};
