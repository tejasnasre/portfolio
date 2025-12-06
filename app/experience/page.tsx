import Experience from "@/components/experience/experience";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional work experience and career journey of Tejas Nasre. Full Stack Developer with expertise in React, React Native, and Next.js since 2023.",
  openGraph: {
    title: "Experience | Tejas Nasre",
    description:
      "Professional work experience and career journey of Tejas Nasre, Full Stack Developer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience | Tejas Nasre",
    description:
      "Professional work experience and career journey of Tejas Nasre",
  },
};

function page() {
  return (
    <>
      <Experience />
    </>
  );
}

export default page;
