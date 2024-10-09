import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({});

export const config = {
  publicRoutes: ["/"],
  debug: true,
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
