'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { CheckCircle, XCircle } from 'lucide-react';

export default function VerifyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      setMessage('Brak tokenu weryfikacyjnego');
      return;
    }

    const verifyEmail = async () => {
      try {
        const response = await fetch('/api/auth/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });

        const data = await response.json();

        if (response.ok) {
          setStatus('success');
          setMessage(data.message);
          // Po 3 sekundach przekieruj do strony logowania
          setTimeout(() => {
            router.push('/auth/login');
          }, 3000);
        } else {
          setStatus('error');
          setMessage(data.error);
        }
      } catch (error) {
        setStatus('error');
        setMessage('Wystąpił błąd podczas weryfikacji');
      }
    };

    verifyEmail();
  }, [token, router]);

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="flex justify-center">
            {status === 'loading' && (
              <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-t-purple-500 border-purple-500/20 rounded-full animate-spin"></div>
              </div>
            )}
            {status === 'success' && (
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
            )}
            {status === 'error' && (
              <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center">
                <XCircle className="w-12 h-12 text-red-500" />
              </div>
            )}
          </div>

          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-transparent bg-clip-text">
            Weryfikacja konta
          </h1>

          <p className="text-gray-400">
            {status === 'loading' && 'Weryfikacja w toku...'}
            {(status === 'success' || status === 'error') && message}
          </p>

          {status === 'success' && (
            <p className="text-gray-400">
              Za chwilę zostaniesz przekierowany do strony logowania...
            </p>
          )}

          {status === 'error' && (
            <button
              onClick={() => router.push('/auth/login')}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 text-white font-medium hover:shadow-lg transition-all duration-300"
            >
              Przejdź do logowania
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 