/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { toast } from '@/hooks/useToast';
import { useLogin } from '@/hooks/useLogin';
import { useTranslation } from 'react-i18next';
import googleLogo from '../../../../public/img/google-color.svg';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useLogin();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const signUpWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/v1/callback`,
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
        title: t('fail-email'),
        description: t('email-please'),
        variant: 'destructive',
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: t('short-password'),
        description: t('min-6-password'),
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      await login(email, password);

      toast({
        title: t('login'),
        description: t('login-profile'),
      });

      navigate('/');
    } catch (error: any) {
      console.error(error);
      toast({
        title: t('login-error'),
        description: t('login-false'),
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <h2 className="text-xl font-semibold text-center">
          {t('login-to-account')}
        </h2>
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
            <Label htmlFor="password">{t('password')}</Label>
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
            {loading ? t('loading') : t('sign-in')}
          </Button>

          <div className="mt-6 text-center">
            <Button
              type="button"
              variant="outline"
              onClick={signUpWithGoogle}
              className="w-full"
            >
              {t('sign-in-google')} <img src={googleLogo}></img>
            </Button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            {t('no-account')}
          </p>
          <Button
            variant="outline"
            type="button"
            onClick={() => navigate('/signup')}
            className="w-full"
          >
            {t('sign-up')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
