import React from 'react';

type Props = {
  spec: string;
  value: string;
};

export const ItemTechSpec: React.FC<Props> = ({ spec, value }) => (
  <p className="flex justify-between items-center font-mont text-sm leading-[21px] m-0">
    <span className="text-[#89939A] font-medium">{spec}</span>
    <span className="text-primary font-semibold">{value}</span>
  </p>
);
