// src/components/atoms/Loader.tsx
import React from 'react';

export const Loader: React.FC = () => (
  <div
    className="fixed inset-0 z-50 w-screen h-screen flex items-center justify-center
               backdrop-blur-md bg-black/10 dark:bg-white/10 p-6"
  >
    <div
      className="animate-spin drop-shadow-2xl 
             md:w-[100px] md:h-[100px] h-32 w-32 
             aspect-square rounded-full 
             bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600
             [mask:radial-gradient(circle,transparent_50%,black_61%)]"
    >
      <div className="rounded-full h-full w-full bg-transparent"></div>
    </div>
  </div>
);
