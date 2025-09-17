import type React from 'react';

interface Props {
  children: React.ReactNode;
}

export const GridContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex-1 section px-4 md:px-6 lg:px-8 xl:px-16 py-6 md:py-8 lg:py-14 mx-auto">
      <div className="grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24 gap-x-4 gap-y-[40px] max-w-[1280px]">
        {children}
      </div>
    </div>
  );
};
