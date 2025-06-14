import { useState } from 'react';
import { useAuth }  from '@/hooks/useAuth';
import { useLocation } from 'wouter';

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  const { session, signIn }   = useAuth();
  const [, setLoc]            = useLocation();

  if (session) {
    setLoc('/home');
    return null;
  }

  const handleOAuth = async (provider: 'github'|'google'|'apple') => {
    setLoading(true);
    await signIn({ provider });
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl">Sign In to OSG</h2>
      {(['github','google','apple'] as const).map((p) => (
        <button
          key={p}
          onClick={() => handleOAuth(p)}
          disabled={loading}
          className="w-64 px-4 py-2 border rounded"
        >
          Continue with {p.charAt(0).toUpperCase()+p.slice(1)}
        </button>
      ))}
    </div>
  );
}
