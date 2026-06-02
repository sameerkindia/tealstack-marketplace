'use client';
import { useState, Suspense, useActionState } from 'react';
import { useSearchParams } from 'next/navigation';
import { loginAction, signupAction } from '@/app/actions/auth';

function AuthContent() {
  const [isLogin, setIsLogin] = useState(true);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  
  const [state, action, pending] = useActionState(isLogin ? loginAction : signupAction, null);

  return (
    <div className="w-96 p-8 border dark:border-gray-800 rounded-3xl shadow-xl bg-white dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-6">{isLogin ? "Welcome Back" : "Create Account"}</h1>
      
      <form action={action} className="space-y-4">
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
        <input name="email" type="email" placeholder="Email" required className="w-full p-3 rounded-xl border dark:bg-gray-800" />
        <input name="password" type="password" placeholder="Password" required className="w-full p-3 rounded-xl border dark:bg-gray-800" />
        
        <button disabled={pending} className="w-full py-3 bg-blue-600 text-white rounded-xl font-bold">
          {pending ? "Processing..." : (isLogin ? "Sign In" : "Sign Up")}
        </button>
      </form>

      <div className="mt-6 text-center text-sm">
        <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 hover:underline">
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
        </button>
      </div>
      
      {state?.error && <p className="text-red-500 text-sm mt-4 text-center">{state.error}</p>}
    </div>
  );
}

export default function AuthPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <AuthContent />
      </Suspense>
    </div>
  );
}