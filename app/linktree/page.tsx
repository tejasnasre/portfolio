import { Metadata } from "next";
import LinktreeClient from "./linktree-client";

export const metadata: Metadata = {
  title: "Links",
  description:
    "Connect with Tejas Nasre across all platforms. Find links to GitHub, LinkedIn, Twitter, YouTube, and other social profiles.",
  openGraph: {
    title: "Links | Tejas Nasre",
    description:
      "Connect with Tejas Nasre across all platforms - GitHub, LinkedIn, Twitter, and more",
  },
  twitter: {
    card: "summary_large_image",
    title: "Links | Tejas Nasre",
    description: "Connect with Tejas Nasre across all platforms",
  },
};

export default function LinktreePage() {
  return <LinktreeClient />;
}
