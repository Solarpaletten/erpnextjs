import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const { pathname } = request.nextUrl

  // Protected routes - новые пути itsolar
  const isProtectedRoute = 
    pathname.startsWith('/itsolar/dashboard') || 
    pathname.startsWith('/itsolar/account') || 
    pathname.startsWith('/itsolar/company')

  const isAuthRoute = 
    pathname.startsWith('/itsolar/auth/login') || 
    pathname.startsWith('/itsolar/auth/register')

  // Защита приватных страниц
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(
      new URL('/itsolar/auth/login', request.url)
    )
  }

  // Переадресация авторизованных с страниц входа
  if (isAuthRoute && token) {
    return NextResponse.redirect(
      new URL('/itsolar/dashboard/account/companies', request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}