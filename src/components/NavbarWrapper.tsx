import { getSessionUser } from '@/lib/session';
import Navbar from './Navbar';

export default async function NavbarWrapper() {
  const user = await getSessionUser();
  return <Navbar user={user} />;
}