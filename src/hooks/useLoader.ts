import { useContext } from 'react';
import type { LoaderContextType } from '@/types/LoaderContextType.ts';
import { LoaderContext } from '@/context/LoaderContext.ts';

export const useLoader = (): LoaderContextType => {
  const ctx = useContext(LoaderContext);

  if (!ctx) {
    throw new Error('useLoader must be used inside LoaderProvider');
  }

  return ctx;
};
