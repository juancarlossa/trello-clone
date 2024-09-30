import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(['/', '/sign-in', '/sign-up'])
const isPrivateRoute = createRouteMatcher(['/board(.*)', '/api(.*)', '/organization(.*)'])

export default clerkMiddleware((auth, req) => {
  const auth0 = auth()

  if (auth0.userId && !isPrivateRoute(req)) {
    let path = "/select-org"

    if (auth0.orgId) {
      path = `/organization/${auth0.orgId}`
    }

    const orgSelection = new URL(path, req.url)
    return NextResponse.redirect(orgSelection)
  }
  

  if (!auth0.userId && !isPublicRoute(req)) {
    return auth0.redirectToSignIn({ returnBackUrl: req.url })
  }

  if (auth0.userId && !auth0.orgId && req.nextUrl.pathname !== "/select-org") {
    const orgSelection = new URL("/select-org", req.url)
    return NextResponse.redirect(orgSelection)
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};