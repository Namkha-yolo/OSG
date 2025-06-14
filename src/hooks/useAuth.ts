import { useState, useEffect } from 'react';
import type { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabaseClient';

export function useAuth() {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser]       = useState<User | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setUser(data.session?.user ?? null);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, sess) => {
      setSession(sess.session);
      setUser(sess.session?.user ?? null);
    });
    return () => sub.subscription?.unsubscribe();
  }, []);

  return {
    user,
    session,
    signIn: (opts: Parameters<typeof supabase.auth.signInWithOAuth>[0]) =>
      supabase.auth.signInWithOAuth(opts),
    signOut: () => supabase.auth.signOut(),
  };
}
