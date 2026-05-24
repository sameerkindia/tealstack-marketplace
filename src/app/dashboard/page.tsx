export default function DashboardPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Welcome to your Dashboard</h1>
      <p className="mt-4">This content is private and protected by middleware.</p>
      
      {/* Add a logout button here that clears the 'session' cookie */}
    </main>
  );
}