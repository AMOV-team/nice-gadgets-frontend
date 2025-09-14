import React from 'react';
import { ButtonsPrimary } from '../atoms/buttons/Button';
import { Dropdown } from '../atoms/Dropdown';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-2">
      <h1 className="title">Home Page</h1>
      <ButtonsPrimary text="Test" />
      <Dropdown />
    </div>
  );
};
