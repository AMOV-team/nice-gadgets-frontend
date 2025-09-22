import React from 'react';
import { TechSpecs } from './TechSpecs.tsx';
import { useTranslation } from 'react-i18next';

type Props = {
  specs: Array<{ name: string; value: string }>;
};

export const TechSpecsWithTitle: React.FC<Props> = ({ specs }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`
      w-full
      xl:w-[50%]
    `}
    >
      <h3
        className={`
          relative
          font-mont
          font-extrabold
          text-[22px]
          leading-[140%]
          m-0
          mb-12
          after:content-['']
          after:w-full
          after:h-[1px]
          after:bg-elements
          after:absolute
          after:bottom-[-16px]
          after:left-0
        `}
      >
        {t('Tech-specs')}
      </h3>

      <TechSpecs specs={specs} />
    </div>
  );
};
