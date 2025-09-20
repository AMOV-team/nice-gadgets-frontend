import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Root } from './components/Root/Root.tsx';
import './lib/i18n';
import { LoaderProvider } from '@/context/LoaderProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoaderProvider>
      <Root />
    </LoaderProvider>
  </StrictMode>,
);
