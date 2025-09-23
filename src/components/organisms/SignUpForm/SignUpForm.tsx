/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import { useTranslation } from 'react-i18next';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 🔍 Валідація email
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast({
        title: t('fail-email'),
        description: t('email-please'),
        variant: 'destructive',
      });
      return;
    }

    // 🔐 Валідація паролю
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
      const { error } = await supabase.auth.signUp({ email, password });

      if (error) {
        const msg = error.message || '';
        if (msg.includes('User already registered')) {
          toast({
            title: t('user-register'),
            description: t('try-login'),
            variant: 'destructive',
          });
        } else {
          toast({
            title: t('sign-up-error'),
            description: t('sign-up-offline'),
            variant: 'destructive',
          });
        }
        return;
      }

      toast({
        title: t('sign-up-succesful'),
        description: t('account-created'),
      });

      navigate('/userprofile');
    } catch (err: any) {
      toast({
        title: t('unknown-error'),
        description: err.message || t('smth-went-wrong'),
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  // const signUpWithGoogle = async () => {
  //   await supabase.auth.signInWithOAuth({
  //     provider: 'google',
  //     options: {
  //       redirectTo: `${window.location.origin}/auth-callback`,
  //       queryParams: {
  //         prompt: 'select_account',
  //       },
  //     },
  //   });
  // };

  return (
    <Card className="max-w-md mx-auto mt-10">
      <CardHeader>
        <h2 className="text-xl font-semibold text-center">
          {t('registration')}
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
            {loading ? t('loading') : t('sign-up')}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
