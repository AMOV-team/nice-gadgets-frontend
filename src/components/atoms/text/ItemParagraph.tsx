import React from 'react';

type Props = {
  title: string;
  text: string;
};

export const ItemParagraph: React.FC<Props> = ({ title, text }) => (
  <article>
    <h4 className="font-mont text-primary font-bold text-xl mb-4">{title}</h4>
    <p className="font-mont font-medium text-[#89939A] text-sm leading-[21px]">
      {text}
    </p>
  </article>
);
