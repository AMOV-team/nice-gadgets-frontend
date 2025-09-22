import { FadeLoader } from 'react-spinners';
import React from 'react';

export const Loader: React.FC = () => (
  <div
    className={`
      fixed inset-0 z-50
      w-screen
      h-screen
      flex items-center justify-center backdrop-blur-md bg-black/10
      border shadow-lg p-6
      dark:bg-white/10
      `}
  >
    <FadeLoader
      color={
        document.documentElement.classList.contains('dark') ? 'white' : 'black'
      }
      loading={true}
    />
  </div>
);
