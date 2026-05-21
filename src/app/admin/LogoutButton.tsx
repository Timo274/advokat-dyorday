'use client';

import { signOut } from 'next-auth/react';
import { LogOut } from 'lucide-react';

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/admin/login' })}
      className="flex items-center text-white/60 hover:text-red-400 transition-colors w-full text-left"
    >
      <LogOut className="w-5 h-5 mr-3" />
      <span>Вийти</span>
    </button>
  );
}
