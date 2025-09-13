import React from 'react';
import { ButtonsPrimary } from '../atoms/buttons/Button';

export const HomePage: React.FC = () => {
  return (
    <>
      <h1 className="title">Home Page</h1>
      <ButtonsPrimary text="Test" />
    </>
  );
};
