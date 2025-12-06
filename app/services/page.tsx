import ServicesGrid from "@/components/servicegrid/service-grid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Development services offered by Tejas Nasre. Specializing in web development, mobile app development, React, React Native, Next.js, and full-stack solutions.",
  openGraph: {
    title: "Services | Tejas Nasre",
    description:
      "Development services: Web development, mobile apps, React, React Native, Next.js solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Tejas Nasre",
    description: "Development services by Tejas Nasre - Full Stack Developer",
  },
};

function page() {
  return (
    <div>
      <ServicesGrid />
    </div>
  );
}

export default page;
