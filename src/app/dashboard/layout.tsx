import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#0f172a]">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-[#1e293b] border-r border-slate-800 flex flex-col">
        <div className="p-6">
          <h2 className="text-xl font-bold text-teal-400">Vendor Portal</h2>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link href="/dashboard" className="block px-4 py-2 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 rounded-md transition-colors">
            Overview
          </Link>
          <Link href="/dashboard/products" className="block px-4 py-2 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 rounded-md transition-colors">
            My Products
          </Link>
          <Link href="/dashboard/settings" className="block px-4 py-2 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 rounded-md transition-colors">
            Store Settings
          </Link>
          <Link href="/dashboard/payouts" className="block px-4 py-2 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 rounded-md transition-colors">
            Payouts (MoR)
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8">
        {children}
      </main>
    </div>
  );
}