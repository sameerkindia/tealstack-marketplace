import Navbar from '@/components/Navbar';

export default function AuthPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="w-full max-w-md p-8 border border-gray-200 dark:border-gray-800 rounded-2xl">
          <h1 className="text-2xl font-bold mb-6">Sign In</h1>
          <div className="space-y-4">
            <input className="w-full p-3 bg-gray-50 dark:bg-gray-900 border rounded-lg" placeholder="Email" />
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg">Sign In</button>
          </div>
        </div>
      </main>
    </>
  );
}