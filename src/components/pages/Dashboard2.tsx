/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { useProfile } from '@/hooks/useProfile';
import { usePullOrders } from '@/hooks/usePullOrders';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useCartSync } from '@/hooks/useCartSync';
import { useTranslation } from 'react-i18next';

export default function UserCabinet() {
  const { user } = useAuth();
  const profile = useProfile(user?.id ?? null);
  const orders = usePullOrders(user?.id ?? null);
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const { syncBeforeLogout } = useCartSync();
  const { t } = useTranslation();

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="flex items-center gap-4 relative">
        <Button
          variant="outline"
          type="button"
          onClick={async () => {
            await syncBeforeLogout();

            await signOut();

            navigate('/signin');
          }}
          className="w-[60px] absolute top-[30px] right-[24px] bg-rose-500 text-white "
        >
          {t('exit')}
        </Button>
        <Avatar>
          <AvatarImage
            src={profile?.avatar ?? '/user.jpg'}
            alt={profile?.name ?? 'User'}
          />
          <AvatarFallback>{profile?.name?.[0] ?? 'U'}</AvatarFallback>
        </Avatar>

        <div>
          <h2 className="text-xl font-semibold">
            {profile?.name ?? 'Ім’я користувача'}
          </h2>
          <p className="text-sm text-muted-foreground">
            {profile?.email ?? 'user@email.com'}
          </p>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="orders">
          <TabsList className="grid grid-cols-4 mb-4">
            <TabsTrigger value="orders">{t('orders')}</TabsTrigger>
          </TabsList>

          <TabsContent value="orders">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>{t('date')}</TableHead>
                  <TableHead>{t('status')}</TableHead>
                  <TableHead>{t('sum')}</TableHead>
                  <TableHead>{t('products')}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.order_number}</TableCell>
                    <TableCell>
                      {new Date(order.created_at).toLocaleDateString('uk-UA')}
                    </TableCell>
                    <TableCell>
                      <Badge>{t('assembling')}</Badge>
                    </TableCell>
                    <TableCell>
                      $
                      {order.items.reduce(
                        (sum: number, item: any) =>
                          sum + item.price * item.quantity,
                        0,
                      )}
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc pl-4 space-y-1">
                        {order.items.map((item: any, index: number) => (
                          <li key={index}>
                            {item.name} × {item.quantity}
                          </li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
