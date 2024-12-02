import { NextRequest, NextResponse } from "next/server";
// import { getToken } from "next-auth/jwt";
export default async function middleware(request: NextRequest) {
  const token = request.cookies.get("next-auth.session-token");
  // const nextToken = await getToken({
  //   req: request,
  //   secret: process.env.NEXTAUTH_SECRET,
  // });
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith("/auth")) {
    if (!token) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  if (pathname.startsWith("/")) {
    if (!token) {
      return NextResponse.redirect(new URL("/auth/sign-in", request.url));
    } else {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/auth/:path*"],
};
