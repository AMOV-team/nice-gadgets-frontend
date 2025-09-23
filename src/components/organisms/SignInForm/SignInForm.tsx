/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { useLogin } from '@/hooks/login';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useLogin();
  const navigate = useNavigate();

  const signUpWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth-callback`,
        queryParams: {
          prompt: 'select_account',
        },
      },
    });
  };

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
      await login(email, password);

      toast({
        title: 'Вхід успішний',
        description: 'Ви увійшли в кабінет',
      });

      navigate('/');
    } catch (error: any) {
      toast({
        title: 'Помилка входу',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <h2 className="text-xl font-semibold text-center">Вхід в кабінет</h2>
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
            {loading ? 'Завантаження...' : 'Увійти'}
          </Button>

          <div className="mt-6 text-center">
            <Button
              type="button"
              variant="outline"
              onClick={signUpWithGoogle}
              className="w-full"
            >
              Увійти через Google{' '}
              <img src="../../../../public/img/google-color.svg"></img>
            </Button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">Немає акаунта?</p>
          <Button
            variant="outline"
            type="button"
            onClick={() => navigate('/signup')}
            className="w-full"
          >
            Зареєструватись
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
