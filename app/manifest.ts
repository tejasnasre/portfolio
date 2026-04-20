import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tejas Nasre — Software Engineer",
    short_name: "Tejas Nasre",
    description:
      "Full Stack Engineer building impactful products with React Native, Next.js, and modern web technologies.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#0a0a0a",
    icons: [
      {
        src: "/profile.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/profile.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
