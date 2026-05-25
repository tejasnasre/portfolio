import { createLlmsTxtHandler } from "@dualmark/nextjs";

const handler = createLlmsTxtHandler({
  brandName: "Tejas Nasre",
  description:
    "Full stack engineer building mobile and web products with React Native, Expo, Next.js, and Supabase.",
  sections: [
    {
      title: "Pages",
      links: [
        { title: "Home", href: "https://tejasnasre.is-a.dev/" },
        { title: "Linktree", href: "https://tejasnasre.is-a.dev/linktree" },
      ],
    },
  ],
});

export const dynamic = "force-static";
export const GET = handler.GET;
