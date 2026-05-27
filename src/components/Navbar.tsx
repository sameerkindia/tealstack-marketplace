'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar({ user }: { user: any }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return <nav className="h-16 border-b border-gray-200 dark:border-gray-800" />;

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
      <Link href="/" className="text-xl font-bold">Velocity</Link>
      <div className="flex items-center gap-6">
        {user ? (
          <Link href="/dashboard" className="text-sm font-medium">Dashboard</Link>
        ) : (
          <Link href="/auth" className="text-sm font-medium">Login</Link>
        )}
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}