import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  
  // Get the hostname (e.g., 'johndoe.tealstack.com' or 'localhost:3000')
  const hostname = req.headers.get('host') || '';

  // Define your main domain (update this when deploying to production)
  const currentHost = process.env.NODE_ENV === 'production' 
   ? hostname.replace(`.yourdomain.com`, '')
    : hostname.replace(`.localhost:3000`, '');

  // If it's a subdomain, rewrite to the dynamic tenant route
  if (currentHost!== 'localhost:3000' && currentHost!== 'yourdomain.com') {
    url.pathname = `/apps/${currentHost}${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};