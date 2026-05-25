import { createDualmarkMiddleware } from "@dualmark/nextjs";

export default createDualmarkMiddleware({
  siteUrl: "https://tejasnasre.is-a.dev",
});

export const config = {
  matcher: [
    {
      source: "/((?!_next/|favicon.ico|md/).*)",
      missing: [{ type: "header", key: "next-router-prefetch" }],
    },
  ],
};
