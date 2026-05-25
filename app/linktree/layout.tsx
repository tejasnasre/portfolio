import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links - Tejas Nasre",
  description:
    "Connect with Tejas Nasre across the web. Find portfolio, GitHub, LinkedIn, and contact links in one place.",
  openGraph: {
    title: "Links -Tejas Nasre",
    description:
      "Connect with Tejas Nasre across the web. Find portfolio, GitHub, LinkedIn, and contact links in one place.",
    url: "https://tejasnasre.is-a.dev/linktree",
    type: "profile",
  },
  alternates: {
    canonical: "/linktree",
  },
};

export default function LinksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
