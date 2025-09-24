import type React from 'react';
import { GridContainer } from '../atoms/GridContainer';
import { Breadcrumb } from '../molecules/Breadcrumb/Breadcrumb';
import { useTranslation } from 'react-i18next';

export const RightsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <GridContainer>
      <div className="col-span-full">
        <Breadcrumb />
        <h1 className="text-h1 font-extrabold font-mont mb-4 sm:text-h1-lg">
          {t('terms-policies')}
        </h1>
      </div>

      <div className="col-span-full flex flex-col justify-between gap-2">
        <h2 className="text-h2-lg">{t('ownership-and-ip')}</h2>
        <p>{t('ownership-and-ip-content')}</p>
      </div>

      <div className="col-span-full flex flex-col justify-between gap-2">
        <h2 className="text-h2-lg">{t('use-of-content')}</h2>
        <p>{t('use-of-content-content')}</p>
      </div>

      <div className="col-span-full flex flex-col justify-between gap-2">
        <h2 className="text-h2-lg">{t('copy-protection')}</h2>
        <p>{t('copy-protection-content')}</p>
      </div>

      <div className="col-span-full flex flex-col justify-between gap-2">
        <h2 className="text-h2-lg">{t('privacy-policy')}</h2>
        <p>{t('privacy-policy-content')}</p>
      </div>

      <div className="col-span-full flex flex-col justify-between gap-2">
        <h2 className="text-h2-lg">{t('updates-and-changes')}</h2>
        <p>{t('updates-and-changes-content')}</p>
      </div>

      <div className="col-span-full flex flex-col justify-between gap-2">
        <h2 className="text-h2-lg">{t('limitation-of-liability')}</h2>
        <p>{t('limitation-of-liability-content')}</p>
      </div>

      <div className="col-span-full flex flex-col justify-between gap-2">
        <h2 className="text-h2-lg">{t('contact-information')}</h2>
        <p>{t('contact-information-content')}</p>
      </div>
    </GridContainer>
  );
};
