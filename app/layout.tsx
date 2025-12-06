import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import BackgroundMusic from "@/components/audio/background-music";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tejas Nasre | Full Stack Developer",
    template: "%s | Tejas Nasre Portfolio",
  },
  description:
    "Passionate Full Stack Developer specializing in React, React Native, Next.js, and modern JavaScript frameworks. Creating seamless digital experiences with beautiful design and powerful functionality.",
  keywords: [
    "Tejas Nasre",
    "Full Stack Developer",
    "React Developer",
    "React Native",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Mobile App Development",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Tejas Nasre" }],
  creator: "Tejas Nasre",
  publisher: "Tejas Nasre",
  metadataBase: new URL("https://tejasnasre.is-a.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tejas Nasre | Full Stack Developer",
    description:
      "Passionate Full Stack Developer specializing in React, React Native, Next.js. Building modern web applications and mobile apps since 2023.",
    url: "https://tejasnasre.is-a.dev",
    siteName: "Tejas Nasre Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas Nasre | Full Stack Developer",
    description:
      "Passionate Full Stack Developer specializing in React, React Native, Next.js. Building modern web applications and mobile apps.",
    creator: "@tejas",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <BackgroundMusic audioSrc="/audio/song.mp3" autoplay={true} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tejas Nasre",
              url: "https://tejasnasre.is-a.dev",
              sameAs: [
                "https://github.com/tejasnasre",
                "https://linkedin.com/in/tejasnasre",
                "https://twitter.com/tejasnasre",
              ],
              jobTitle: "Founding Engineer & Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Tap In",
              },
              description:
                "Passionate Full Stack Developer specializing in React, React Native, Next.js. Building next-gen digital products.",
            }),
          }}
        />
      </body>
    </html>
  );
}
