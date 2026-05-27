import { getSessionUser } from '@/lib/session';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { LogoutButton } from '@/components/LogoutButton';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await getSessionUser();
  if (!user) redirect('/auth');

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 dark:border-gray-800 p-6 flex flex-col justify-between">
        <nav className="space-y-4">
          <h2 className="font-bold text-lg mb-6">Dashboard</h2>
          <Link href="/dashboard" className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">Overview</Link>
          <Link href="/dashboard/settings" className="block p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded">Settings</Link>
        </nav>
        <LogoutButton />
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}