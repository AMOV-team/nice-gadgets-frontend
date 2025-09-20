import { createContext } from 'react';
import type { LoaderContextType } from '@/types/LoaderContextType.ts';

export const LoaderContext = createContext<LoaderContextType | undefined>(
  undefined,
);
