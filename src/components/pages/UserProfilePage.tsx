import * as React from 'react';
import { GridContainer } from '../atoms/GridContainer.tsx';
import { Breadcrumb } from '../molecules/Breadcrumb/Breadcrumb.tsx';
import UserCabinet from './Dashboard2.tsx';

export const UserProfilePage: React.FC = () => {
  return (
    <GridContainer>
      <div className="col-span-4 sm:col-span-12 xl:col-span-24">
        <Breadcrumb />
        <div className="col-span-full">
          <div className="flex flex-col justify-center items-center">
            <UserCabinet />
          </div>
        </div>
      </div>
    </GridContainer>
  );
};
