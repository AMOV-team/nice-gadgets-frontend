import * as React from 'react';
import { PrimaryButton } from '../../atoms/buttons';
import { useCart } from 'react-use-cart';
import { useTranslation } from 'react-i18next';

export const CartCheckout: React.FC = () => {
  const { cartTotal, totalItems } = useCart();
  const { t } = useTranslation();

  return (
    <>
      <div
        className="
          flex flex-col gap-[16px] lg:gap-[24px]
          p-[24px]
          border border-solid border-elements rounded-lg
        "
      >
        <div className="flex flex-col justify-center items-center">
          <span className="text-h2 font-extrabold">${cartTotal}</span>
          <span className="text-body font-semibold">
            {t('total-for')} {totalItems} {t('items')}
          </span>
        </div>
        <div className="border border-solid border-elements"></div>
        <PrimaryButton text={'Checkout'} />
      </div>
    </>
  );
};
