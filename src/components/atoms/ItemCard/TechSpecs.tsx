import React from 'react';
import { ItemTechSpec } from '../text/ItemCard/ItemTechSpec.tsx';

type Props = {
  specs: Array<{ name: string; value: string }>;
};

export const TechSpecs: React.FC<Props> = ({ specs }) => {
  return (
    <div className="flex flex-col gap-2">
      {specs.map((spec) => (
        <ItemTechSpec
          key={spec.name}
          spec={spec.name}
          value={spec.value}
        />
      ))}
    </div>
  );
};
