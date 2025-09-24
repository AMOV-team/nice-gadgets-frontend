import { BannerSlider } from '../organisms/BannerSlider/BannerSlider';
import { ShopCategory } from '../atoms/shopCategory';
import { SectionSlider } from '../organisms/SectionSlider/SectionSlider';
import { GridContainer } from '../atoms/GridContainer';
import { useTranslation } from 'react-i18next';
import { useLoader } from '@/hooks/useLoader';
import { useEffect } from 'react';
import DeleteButton from '../atoms/buttons/DeleteButton';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const { setIsLoading } = useLoader();

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [setIsLoading]);

  return (
    <>
      <BannerSlider />

      <GridContainer>
        <section className="flex items-center sm:items-start w-[90vw] flex-col absolute left-[calc(50%-45vw)] top-12 z-10">
          <h1
            className={`text-center font-extrabold text-[32px] leading-[41px]
            break-words !mt-10 max-w-[500px] sm:max-w-full
            sm:text-left sm:text-5xl sm:leading-[56px] sm:!mt-[60px]
            `}
          >
            {t('welcome-text')}
          </h1>
        </section>

        <section className="col-span-full flex flex-row justify-center">
          <div className="flex flex-row items-center w-[380px] justify-between gap-3 bg-indigo-500 rounded px-4 py-2">
            <Link
              to={'signin'}
              className="flex self-center"
            >
              <p className="font-semibold text-white">
                3 free deliveries for registered users!
              </p>
            </Link>

            <button
              type="button"
              className="text-white font-bold"
              onClick={() => {}}
            >
              <DeleteButton className="text-white dark:hover:text-elements" />
            </button>
          </div>
        </section>

        <section className="flex flex-col gap-4 col-span-4 sm:col-span-12 xl:col-span-24">
          <SectionSlider
            HeaderText={t('new-models')}
            category="phones"
            sortBy="newest"
          />
        </section>

        <section className="grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 col-span-4 sm:col-span-12 xl:col-span-24 gap-y-6 gap-x-4">
          <h2 className="col-span-4 sm:col-span-12 xl:col-span-24 text-left font-extrabold text-2xl sm:text-3xl m-0">
            {t('category')}
          </h2>

          <div className="col-span-4 xl:col-span-8 p-0 m-0">
            <ShopCategory
              color={'#6D6474'}
              productImg={'img/category-phones.png'}
              productName={t('mobile-phones')}
              category={'phones'}
              productLink={'/phones'}
            />
          </div>

          <div className="col-span-4 xl:col-span-8 p-0 m-0">
            <ShopCategory
              color={'#666666'}
              productImg={'img/category-tablets.png'}
              productName={t('tablets')}
              category={'tablets'}
              productLink={'/tablets'}
            />
          </div>

          <div className="col-span-4 xl:col-span-8 p-0 m-0">
            <ShopCategory
              color={'#964F4A'}
              productImg={'img/category-accessories.webp'}
              productName={t('accessories')}
              category={'accessories'}
              productLink={'/accessories'}
            />
          </div>
        </section>

        <section className="flex flex-col gap-4 col-span-4 sm:col-span-12 xl:col-span-24">
          <SectionSlider
            HeaderText={t('hot-prices')}
            category="phones"
            sortBy="hot"
          />
        </section>
      </GridContainer>
    </>
  );
};
