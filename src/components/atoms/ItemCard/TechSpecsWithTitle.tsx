import React from 'react';
import { TechSpecs } from './TechSpecs.tsx';

type Props = {
  specs: Array<{ name: string; value: string }>;
};

export const TechSpecsWithTitle: React.FC<Props> = ({ specs }) => {
  return (
    <div
      className={`
      w-full
      xl:w-[50%]
    `}
    >
      <h3
        className={`
          relative
          font-mont
          font-extrabold
          text-[22px]
          leading-[140%]
          m-0
          mb-12
          after:content-['']
          after:w-full
          after:h-[1px]
          after:bg-elements
          after:absolute
          after:bottom-[-16px]
          after:left-0
        `}
      >
        Tech Specs
      </h3>

      <TechSpecs specs={specs} />
    </div>
  );
};
