import { useContext } from 'react';
import { LoaderContext } from '../context/LoaderContext.tsx';
import type { LoaderContextType } from '@/types/LoaderContextType.ts';

export const useLoader = (): LoaderContextType => {
  const ctx = useContext(LoaderContext);

  if (!ctx) {
    throw new Error('useLoader must be used inside LoaderProvider');
  }

  return ctx;
};
