// import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { auth } from "../../../auth";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  // If not logged in, force auth
  if (!session) redirect("/auth");

  const role = session.user.role;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar navigation based on role */}
      <aside className="w-64 border-r p-6 space-y-4">
        <h2 className="font-bold mb-6">Velocity {role} Portal</h2>
        
        <Link href="/dashboard" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded">Overview</Link>
        
        {/* Admin and Super Admin specific links */}
        {(role === "ADMIN" || role === "SUPER_ADMIN") && (
          <Link href="/dashboard/admin" className="block p-2 text-blue-600 font-medium">Admin Panel</Link>
        )}
        
        {/* Super Admin only */}
        {role === "SUPER_ADMIN" && (
          <Link href="/dashboard/super-admin" className="block p-2 text-red-600 font-medium">System Settings</Link>
        )}
      </aside>

      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}