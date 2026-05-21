'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Shield, Lock } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError('Невірний email або пароль');
        setIsLoading(false);
      } else {
        router.push('/admin');
        router.refresh();
      }
    } catch (err) {
      setError('Сталася помилка');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-dark px-4">
      <div className="max-w-md w-full bg-primary-dark p-8 rounded-2xl shadow-2xl border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-accent-gold" />
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
            <Shield className="w-8 h-8 text-accent-gold" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Вхід для адміністратора</h2>
          <p className="text-white/60 text-sm">Увійдіть для управління заявками та блогом</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded-xl text-sm mb-6 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-colors"
              placeholder="admin@admin.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">Пароль</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-accent-gold text-primary-dark font-bold py-3 px-4 rounded-xl hover:bg-white transition-colors flex items-center justify-center disabled:opacity-50"
          >
            {isLoading ? 'Завантаження...' : (
              <>
                <Lock className="w-4 h-4 mr-2" /> Увійти в систему
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-xs text-white/40">
          <p>Перший вхід? Використовуйте admin@admin.com.</p>
          <p>Пароль буде автоматично хешовано та збережено для наступних входів.</p>
        </div>
      </div>
    </div>
  );
}
