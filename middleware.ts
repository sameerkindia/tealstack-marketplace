// import { auth } from "./auth";

// export default auth((req) => {
//   const isLoggedIn = !!req.auth;
//   const isDashboardRoute = req.nextUrl.pathname.startsWith("/dashboard");

//   if (isDashboardRoute && !isLoggedIn) {
//     return Response.redirect(new URL("/auth", req.nextUrl.origin));
//   }
// });

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

// import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { auth } from "./auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { nextUrl } = req;
  const isDashboardRoute = nextUrl.pathname.startsWith("/dashboard");

  if (isDashboardRoute && !isLoggedIn) {
    // Capture the URL they wanted to visit
    const callbackUrl = encodeURIComponent(nextUrl.pathname + nextUrl.search);
    return NextResponse.redirect(new URL(`/auth?callbackUrl=${callbackUrl}`, nextUrl.origin));
  }
});

export const config = {
  matcher: ["/dashboard/:path*"],
};