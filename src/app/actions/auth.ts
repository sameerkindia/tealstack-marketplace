'use server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginAction(prevState: any, formData: FormData) {
  const email = formData.get('email');
  
  // Replace this with your actual database verification logic
  if (email === "user@example.com") {
    (await cookies()).set('session', 'mock-jwt-token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 1 day
      path: '/',
    });
    redirect('/dashboard');
  }
  
  return { message: "Invalid credentials." };
}