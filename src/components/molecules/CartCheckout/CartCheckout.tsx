import * as React from 'react';
import { PrimaryButton } from '../../atoms/buttons';
import { useCart } from 'react-use-cart';
import { useCartSyncManager } from '@/hooks/useCartSyncManager';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useOrderSubmit } from '@/hooks/useOrderSubmit';
import { SubmitButton } from '@/components/atoms/buttons/SubmitButton';
import { useAuth } from '@/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '@/components/atoms/Dropdown';

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

  const { t } = useTranslation();
  const deliveryOptions = [
    {
      id: 'nova_poshta',
      label: `${t('nova-post')}`,
      value: 'nova_poshta',
    },
    { id: 'courier', label: `${t('courier')}`, value: 'courier' },
  ];

  return (
    <div className="flex flex-col gap-6 p-6 border border-solid border-elements rounded-lg bg-white dark:bg-black text-primary">
      <div className="flex flex-col justify-center items-center">
        <span className="text-h2 font-extrabold">${cartTotal}</span>
        <span className="text-body font-semibold">
          {t('total-for')} {totalItems} {t('items')}
        </span>
      </div>

      <div className="border border-solid border-elements dark:border-elements" />

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-black rounded-lg p-6 shadow-lg text-center max-w-sm w-full text-primary">
            <h2 className="text-xl font-bold mb-2 text-primary">
              Дякуємо за замовлення!
            </h2>
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
          text={t('checkout')}
          onSelect={() => setShowForm(true)}
        />
      )}

      {showForm && totalItems > 0 && (
        <form
          className="flex flex-col gap-4 text-primary"
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
            <Label
              htmlFor="deliveryType"
              className="bg-white dark:bg-black text-primary"
            >
              {t('delivery-type')}
            </Label>
            <Dropdown
              value={deliveryType}
              defaultText={t('select-type')}
              itemData={deliveryOptions}
              triggerClass="w-full"
              itemClass=""
              onSelect={(val) =>
                setDeliveryType(val as 'nova_poshta' | 'courier' | '')
              }
            />
          </div>

          {deliveryType === 'nova_poshta' && (
            <div>
              <Label htmlFor="branch">{t('nova-post-branch')}</Label>
              <Input
                name="branch"
                value={form.branch}
                onChange={handleChange}
                placeholder={t('example-nova-post')}
                required
              />
            </div>
          )}

          <div>
            <Label htmlFor="name">{t('name')}</Label>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t('stepan-giga')}
              required
            />
          </div>

          <div>
            <Label
              htmlFor="email"
              className="text-primary"
            >
              Email
            </Label>
            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="tseySon@gmail.com"
            />
          </div>

          <div>
            <Label htmlFor="phone">{t('phone-number')}</Label>
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
              <Label htmlFor="address">{t('delivery-adress')}</Label>
              <Input
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder={t('street')}
                required
              />
            </div>
          )}

          <div>
            <Label htmlFor="cardNumber">{t('card-number')}</Label>
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
              <Label
                htmlFor="expiry"
                className="text-primary"
              >
                MM/YY
              </Label>
              <Input
                name="expiry"
                value={form.expiry}
                onChange={handleChange}
                placeholder="12/25"
                required
              />
            </div>
            <div className="flex-1">
              <Label
                htmlFor="cvc"
                className="text-primary"
              >
                CVC
              </Label>
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
            text={t('place-order')}
            type="submit"
          />
        </form>
      )}
    </div>
  );
};
