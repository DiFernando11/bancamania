import { NextResponse, NextRequest, URLPattern } from "next/server";
import {
  googleVerifyRoutesMiddleware,
  privateRoutesMiddleware,
  publicRoutesMiddleware,
} from "./middlewareApp";
import { clientRoutes } from "./routes/clientRoutes";

const stackMiddleware = [
  {
    middleware: privateRoutesMiddleware,
    matcher: [clientRoutes.home],
  },
  {
    middleware: publicRoutesMiddleware,
    matcher: [
      `${clientRoutes.login}/:path*`,
      `${clientRoutes.register}/:path*`,
    ],
  },
  {
    middleware: googleVerifyRoutesMiddleware,
    matcher: [clientRoutes.verifyGoogle],
  },
];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  for (const { middleware: mwFunction, matcher } of stackMiddleware) {
    for (const pattern of matcher) {
      const urlPattern = new URLPattern({ pathname: pattern });
      if (urlPattern.test({ pathname })) {
        const response = mwFunction(request);
        if (response) {
          return response;
        }
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: stackMiddleware.flatMap((mw) => mw.matcher),
};
