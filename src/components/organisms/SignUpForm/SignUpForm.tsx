/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { toast } from '@/hooks/useToast';
import { supabase } from '@/lib/supabase';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: 'Невірний email',
        description: 'Будь ласка, введіть коректну адресу',
        variant: 'destructive',
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: 'Короткий пароль',
        description: 'Пароль має містити щонайменше 6 символів',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({ email, password });

      if (error) {
        const msg = error.message || '';
        if (msg.includes('User already registered')) {
          toast({
            title: 'Користувач вже існує',
            description: 'Спробуйте увійти або використайте інший email',
            variant: 'destructive',
          });
        } else {
          toast({
            title: 'Помилка реєстрації',
            description: msg,
            variant: 'destructive',
          });
        }
        return;
      }

      toast({
        title: 'Реєстрація успішна',
        description: 'Акаунт створено. Можете увійти.',
      });

      navigate('/userprofile');
    } catch (err: any) {
      toast({
        title: 'Невідома помилка',
        description: err.message || 'Щось пішло не так',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <h2 className="text-xl font-semibold text-center">Реєстрація</h2>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Пароль</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Завантаження...' : 'Зареєструватись'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
