import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabase';

export function AuthPanel() {
  const { user, signOut } = useAuth();

  const signInAsAnotherUser = async () => {
    await signOut();
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
        queryParams: {
          prompt: 'select_account',
        },
      },
    });
  };

  return (
    <div className="flex items-center gap-4 p-4">
      {user ?
        <>
          <span className="text-sm text-muted-foreground">
            Залогінено як: {user.id}
          </span>
          <button
            onClick={signOut}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Вийти
          </button>
          <button
            onClick={signInAsAnotherUser}
            className="bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Увійти як інший користувач
          </button>
        </>
      : <button
          onClick={signInAsAnotherUser}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Увійти через Google
        </button>
      }
    </div>
  );
}
