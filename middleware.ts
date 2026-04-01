// Middleware for authentication
import { NextRequest, NextResponse } from 'next/server';

// Define protected routes
const protectedRoutes = ['/admin'];

// Middleware function
export function middleware(request: NextRequest) {
  // Check if the request is for a protected route
  const pathname = request.nextUrl.pathname;
  
  // Allow access to login page
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }
  
  // Check if the route is protected
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    // In a real application, you would check the authentication token
    // For demo purposes, we'll just check if a simple auth cookie exists
    const authCookie = request.cookies.get('admin_auth');
    
    if (!authCookie) {
      // Redirect to login page if not authenticated
      const loginUrl = new URL('/admin/login', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }
  
  return NextResponse.next();
}

// Configure middleware matching
export const config = {
  matcher: ['/admin/:path*'],
};
