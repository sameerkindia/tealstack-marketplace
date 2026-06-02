// import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { auth } from "../../../../auth";

export default async function SuperAdminPage() {
  const session = await auth();
  if (session?.user.role !== "SUPER_ADMIN") redirect("/dashboard");

  return (
    <div>
      <h1 className="text-2xl font-bold text-red-600">Super Admin Console</h1>
      <div className="mt-8 p-6 border border-red-200 rounded-lg bg-red-50 dark:bg-red-950/20">
        <h3 className="font-bold">System Overrides</h3>
        <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded">Delete All Data</button>
      </div>
    </div>
  );
}