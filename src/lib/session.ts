import { cookies } from 'next/headers';

export async function getSessionUser() {
  const cookieStore = await cookies();
  const session = cookieStore.get('session');
  
  if (!session) return null;

  // In a real app, verify the JWT here. 
  // For now, we return a mock object.
  return { email: 'user@example.com', name: 'John Doe' };
}