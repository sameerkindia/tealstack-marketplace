'use client';
import { handleSignOut } from '@/app/actions/auth';

export function LogoutButton() {
  return (
    <form action={handleSignOut}>
      <button type="submit" className="text-red-500 font-medium cursor-pointer">
        Sign Out
      </button>
    </form>
  );
}