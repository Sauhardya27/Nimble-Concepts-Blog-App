import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const path = request.nextUrl.pathname;

  const publicPaths = ["/login", "/register"];

  if (publicPaths.some((p) => path.startsWith(p))) {
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    const res = NextResponse.next();
    res.headers.set("Cache-Control", "no-store");
    return res;
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const isAdmin = token.isAdmin as boolean | undefined;

  if (path.startsWith("/admin") && !isAdmin) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const res = NextResponse.next();
  res.headers.set("Cache-Control", "no-store");
  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (browser icon)
     * - All files with extensions (e.g., logo.png, menu.png)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.[\\w]+$).*)",
  ],
};
