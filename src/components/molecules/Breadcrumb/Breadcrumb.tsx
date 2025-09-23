import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.59038 0.807088C7.83112 0.619846 8.16823 0.619846 8.40897 0.807088L14.409 5.47375C14.5714 5.60006 14.6663 5.79426 14.6663 5.99999V13.3333C14.6663 13.8638 14.4556 14.3725 14.0806 14.7475C13.7055 15.1226 13.1968 15.3333 12.6663 15.3333H3.33301C2.80257 15.3333 2.29387 15.1226 1.91879 14.7475C1.54372 14.3725 1.33301 13.8638 1.33301 13.3333V5.99999C1.33301 5.79426 1.42799 5.60006 1.59038 5.47375L7.59038 0.807088ZM2.66634 6.32605V13.3333C2.66634 13.5101 2.73658 13.6797 2.8616 13.8047C2.98663 13.9298 3.1562 14 3.33301 14H12.6663C12.8432 14 13.0127 13.9298 13.1377 13.8047C13.2628 13.6797 13.333 13.5101 13.333 13.3333V6.32605L7.99967 2.1779L2.66634 6.32605Z"
                fill="hsl(var(--custom-primary))"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.33301 8.00001C5.33301 7.63182 5.63148 7.33334 5.99967 7.33334H9.99967C10.3679 7.33334 10.6663 7.63182 10.6663 8.00001V14.6667C10.6663 15.0349 10.3679 15.3333 9.99967 15.3333C9.63148 15.3333 9.33301 15.0349 9.33301 14.6667V8.66668H6.66634V14.6667C6.66634 15.0349 6.36786 15.3333 5.99967 15.3333C5.63148 15.3333 5.33301 15.0349 5.33301 14.6667V8.00001Z"
                fill="hsl(var(--custom-primary))"
              />
            </svg>
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
