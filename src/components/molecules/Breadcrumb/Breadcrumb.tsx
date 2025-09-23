import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HouseIcon } from '@/components/atoms/icons/HouseIcon';

const BREADCRUMB_TRANSLATIONS: Record<string, string> = {
  home: 'home',
  favorites: 'favorites',
  cart: 'cart',
  products: 'products',
  userprofile: 'userprofile',
};

export const Breadcrumb: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split('/').filter(Boolean);

  if (!pathnames.length) return null;

  const isCartPage = pathnames[0] === 'cart';

  return (
    <div className="mb-4">
      {!isCartPage && (
        <div
          className={cn(
            { 'mb-6 sm:mb-10': pathnames.length > 1 },
            'flex items-center gap-2',
          )}
        >
          <Link
            to="/"
            replace
          >
            <HouseIcon />
          </Link>

          {pathnames.map((pathname, index) => {
            const to = '/' + pathnames.slice(0, index + 1).join('/');
            const isCurrent = location.pathname === to;
            const isLast = index === pathnames.length - 1;

            const translatedName = t(
              BREADCRUMB_TRANSLATIONS[pathname] || pathname,
            );

            return (
              <React.Fragment key={to}>
                <ChevronRight className="text-custom-primary size-[16px]" />
                <Link
                  to={to}
                  replace
                  className={cn(
                    {
                      'pointer-events-none mt-[2px]': isCurrent,
                      'font-semibold text-custom-secondary': isLast,
                      'text-custom-primary font-bold mt-[2px]': !isLast,
                    },
                    'font-mont text-xs',
                  )}
                >
                  {translatedName}
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      )}

      {(pathnames.length > 1 || isCartPage) && (
        <div className="flex items-center gap-1">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
            className="flex items-center"
          >
            <ChevronLeft className="text-elements size-[16px]" />
            <span className="font-mont font-bold text-xs mt-[2px] text-custom-secondary">
              {t('back')}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};
