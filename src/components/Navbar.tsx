'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevents hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return <nav className="h-16 border-b border-gray-200 dark:border-gray-800" />;

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
      <Link href="/" className="text-xl font-bold tracking-tighter">Velocity</Link>
      <div className="flex items-center gap-6">
        <Link href="/pricing" className="text-sm font-medium hover:text-blue-500">Pricing</Link>
        <Link href="/auth" className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">Get Started</Link>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}