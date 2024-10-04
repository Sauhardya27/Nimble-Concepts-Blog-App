import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  // console.log("Token: ", token);
  const path = request.nextUrl.pathname;

  // Public paths that don't require authentication
  const publicPaths = ['/login', '/register'];
  if (publicPaths.includes(path)) {
    // If user is already authenticated, redirect to home or admin page
    if (token) {
      console.log("User is authenticated, redirecting to appropriate page.");
      return NextResponse.redirect(new URL(token.isAdmin ? '/admin' : '/', request.url));
    }
    return NextResponse.next();
  }

  // If no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // If user is admin and not already on an admin page, redirect to admin
  if (token.isAdmin && !path.startsWith('/admin')) {
    console.log("Admin user detected, redirecting to admin page.");
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  const adminPaths = ['/admin'];
  if (adminPaths.includes(path)) {
    // console.log("Checking admin access for path:", path);
    // console.log("Is user admin?", token.isAdmin);
    if (!token.isAdmin) {
      // console.log("User is not admin, redirecting to home.");
      return NextResponse.redirect(new URL('/', request.url));
    }
    // console.log("User is admin, allowing access.");
  }

  // Allow the request to continue
  // console.log("Allowing request to continue.");
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};