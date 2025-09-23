import * as React from 'react';
import { GridContainer } from '../atoms/GridContainer.tsx';
import { Breadcrumb } from '../molecules/Breadcrumb/Breadcrumb.tsx';
import UserCabinet from './Dashboard2.tsx';
// import { useAuth } from '@/hooks/useAuth';
// import { useNavigate } from 'react-router-dom';
// import { Button } from '../ui/button.tsx';
// import { useCartSync } from '@/hooks/useCartSync.ts';

export const UserProfilePage: React.FC = () => {
  // const { signOut } = useAuth();
  // const navigate = useNavigate();
  // const { syncBeforeLogout } = useCartSync();
  return (
    <GridContainer>
      <div className="col-span-4 sm:col-span-12 xl:col-span-24">
        <Breadcrumb />
        {/* <Button
          variant="outline"
          type="button"
          onClick={async () => {
            //  Before signing out — push local cart to server
            await syncBeforeLogout();

            //  Sign out user
            await signOut();

            //  Redirect to login page
            navigate('/signin');
          }}
          className="w-[60px] "
        >
          Вийти
        </Button> */}
        <div className="col-span-full">
          <div className="flex flex-col justify-center items-center">
            <UserCabinet />
          </div>
        </div>
      </div>
    </GridContainer>
  );
};
