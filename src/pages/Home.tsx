import { useEffect } from 'react';
import { useAuth }   from '@/hooks/useAuth';
import { useLocation } from 'wouter';

export default function Home() {
  const { user, session, signOut } = useAuth();
  const [, setLoc]                  = useLocation();

  useEffect(() => {
    if (!session) setLoc('/signin');
  }, [session]);

  if (!session) return <div>Redirecting…</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl">Hello, {user?.email}</h1>
      <button
        onClick={() => signOut()}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Sign Out
      </button>
    </div>
  );
}
