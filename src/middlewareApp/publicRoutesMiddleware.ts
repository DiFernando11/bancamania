import { clientRoutes } from "@/routes/clientRoutes";
import { NextRequest, NextResponse } from "next/server";

const handlePublicMiddlewareRoute = (request: NextRequest) => {
  const token = request.cookies.get("token-session-id");

  if (token) {
    return NextResponse.redirect(new URL(clientRoutes.home, request.url));
  }

  return NextResponse.next();
};

export default handlePublicMiddlewareRoute;
