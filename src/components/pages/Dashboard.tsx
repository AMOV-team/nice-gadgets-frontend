import { useAuth } from '@/hooks/useAuth';
import { useUserSync } from '@/hooks/useUserSync';

export function Dashboard() {
  const { user } = useAuth();
  const { cart, favorites, comparisons } = useUserSync(user?.id ?? null);

  return (
    <div>
      <h2>Корзина: {cart.length} товарів</h2>
      <h2>Обрані: {favorites.length}</h2>
      <h2>Порівняння: {comparisons.length}</h2>
    </div>
  );
}
