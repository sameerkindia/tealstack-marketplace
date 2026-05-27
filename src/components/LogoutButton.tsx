'use client';
import { logoutAction } from '@/app/actions/auth';

export function LogoutButton() {
  return (
    <button onClick={() => logoutAction()} className="text-red-500 font-medium">
      Sign Out
    </button>
  );
}