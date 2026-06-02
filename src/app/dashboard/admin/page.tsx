// import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { auth } from "../../../../auth";

export default async function AdminPage() {
  const session = await auth();
  if (session?.user.role === "USER") redirect("/dashboard");

  return (
    <div>
      <h1 className="text-2xl font-bold">Admin Panel</h1>
      <p>Welcome, {session?.user.email}. You have elevated permissions.</p>
      {/* Add your Admin-only tools here: user management, analytics, etc. */}
    </div>
  );
}