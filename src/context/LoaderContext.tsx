import { createContext } from 'react';

export interface LoaderContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

export const LoaderContext = createContext<LoaderContextType | undefined>(
  undefined,
);
