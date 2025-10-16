import React, { useState } from 'react';
import { LoaderContext } from './LoaderContext';
import { Loader } from '@/components/organisms/Loader/Loader';

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
      {isLoading && <Loader />}
    </LoaderContext.Provider>
  );
};
