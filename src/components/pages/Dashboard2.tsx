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
import { Heart, ShoppingCart } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useUserSync } from '@/hooks/useUserSync';
import { useProfile } from '@/hooks/useProfile';

export default function UserCabinet() {
  const { user } = useAuth();
  const profile = useProfile(user?.id ?? null);
  const { cart, favorites } = useUserSync(user?.id ?? null);

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="flex items-center gap-4">
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
            <TabsTrigger value="orders">Замовлення</TabsTrigger>
            <TabsTrigger value="wishlist">Улюблені</TabsTrigger>
            <TabsTrigger value="cart">Кошик</TabsTrigger>
            <TabsTrigger value="settings">Налаштування</TabsTrigger>
          </TabsList>

          {/* Замовлення */}
          <TabsContent value="orders">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Дата</TableHead>
                  <TableHead>Статус</TableHead>
                  <TableHead>Сума</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>#12345</TableCell>
                  <TableCell>18-09-2025</TableCell>
                  <TableCell>
                    <Badge>Доставлено</Badge>
                  </TableCell>
                  <TableCell>$120</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>

          {/* Улюблені */}
          <TabsContent value="wishlist">
            <div className="grid grid-cols-2 gap-4">
              {favorites.map((item) => (
                <Card key={item.id}>
                  <CardContent className="flex items-center justify-between p-4">
                    <span>{item.name}</span>
                    <Heart className="text-red-500" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Кошик */}
          <TabsContent value="cart">
            <div className="flex items-center gap-2">
              <ShoppingCart />
              <Badge>{cart.length} товарів</Badge>
            </div>
          </TabsContent>

          {/* Налаштування */}
          <TabsContent value="settings">
            <p className="text-sm text-muted-foreground">
              Тут може бути форма для зміни пароля, адреси чи оплати.
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
