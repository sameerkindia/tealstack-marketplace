'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';
// import { useSession } from 'next-auth/react';
import { signOut } from '../../auth';
import { useSession } from 'next-auth/react';
import { LogoutButton } from './LogoutButton';

export default function Navbar({ user }: { user: any }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { data: session } = useSession();
  const role = session?.user?.role;

  useEffect(() => setMounted(true), []);
  if (!mounted) return <nav className="h-16 border-b border-gray-200 dark:border-gray-800" />;

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
      <Link href="/" className="text-xl font-bold">Velocity</Link>
      <div className="flex items-center gap-6">
        <Link href="/">Home</Link>
      {role === 'USER' && <Link href="/dashboard">User Dashboard</Link>}
      {role === 'ADMIN' && <Link href="/admin">Admin Panel</Link>}
      {role === 'SUPER_ADMIN' && <Link href="/super-admin">Super Admin</Link>}
      {session ? <LogoutButton /> : <Link href="/auth">Login</Link>}
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}