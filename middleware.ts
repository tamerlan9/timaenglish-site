// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const APPSTORE_URL = "https://apps.apple.com/app/id6757214750";
const GOOGLEPLAY_URL =
  "https://play.google.com/store/apps/details?id=kg.temirlan.timaenglish";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Редиректим только главную страницу
  if (pathname !== "/") {
    return NextResponse.next();
  }

  const ua = request.headers.get("user-agent") || "";

  const isAndroid = /android/i.test(ua);
  const isIOS = /iPad|iPhone|iPod/i.test(ua);

  if (isAndroid) {
    return NextResponse.redirect(GOOGLEPLAY_URL, 307);
  }

  if (isIOS) {
    return NextResponse.redirect(APPSTORE_URL, 307);
  }

  // Desktop и всё остальное остаются на лендинге
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};