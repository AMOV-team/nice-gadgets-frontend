import { FadeLoader } from 'react-spinners';
import React from 'react';

export const Loader: React.FC = () => (
  <div
    className={`
      fixed inset-0 z-50
      w-screen
      h-screen
      flex items-center justify-center backdrop-blur-md bg-white/20
      border border-white/30 shadow-lg rounded-xl p-6`}
  >
    <FadeLoader
      color={'#4219D0'}
      loading={true}
    />
  </div>
);
