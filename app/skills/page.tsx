import Skills from "@/components/skills/skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills and expertise of Tejas Nasre. Proficient in React, React Native, Next.js, JavaScript, TypeScript, Node.js, and modern web technologies.",
  openGraph: {
    title: "Skills | Tejas Nasre",
    description:
      "Technical skills: React, React Native, Next.js, JavaScript, TypeScript, Node.js, and more",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skills | Tejas Nasre",
    description:
      "Technical skills and expertise of Tejas Nasre - Full Stack Developer",
  },
};

function page() {
  return (
    <>
      <Skills />
    </>
  );
}

export default page;
