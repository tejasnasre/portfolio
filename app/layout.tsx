import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tejasnasre.is-a.dev"),
  title: {
    default: "Tejas Nasre - Full Stack Engineer & React Native Developer",
    template: "%s | Tejas Nasre",
  },
  description:
    "Full Stack Engineer building impactful mobile and web products with React Native, Next.js, Node.js, and modern web technologies. Based in Nagpur, India.",
  keywords: [
    "Tejas Nasre",
    "Full Stack Engineer",
    "React Native Developer",
    "Next.js Developer",
    "Software Engineer India",
    "Mobile App Developer",
    "Web3 Developer",
    "Expo Developer",
    "Node.js Developer",
    "TypeScript Developer",
  ],
  authors: [{ name: "Tejas Nasre", url: "https://tejasnasre.is-a.dev" }],
  creator: "Tejas Nasre",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tejasnasre.is-a.dev",
    siteName: "Tejas Nasre - Portfolio",
    title: "Tejas Nasre - Full Stack Engineer & React Native Developer",
    description:
      "Full Stack Engineer building impactful mobile and web products with React Native, Next.js, and modern web technologies.",
    images: [
      {
        url: "/profile.jpg",
        width: 400,
        height: 400,
        alt: "Tejas Nasre — Full Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Tejas Nasre - Full Stack Engineer & React Native Developer",
    description:
      "Full Stack Engineer building impactful mobile and web products with React Native, Next.js, and modern web technologies.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/profile.jpg",
  },
  alternates: {
    canonical: "/",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn("h-full", "antialiased", "scroll-smooth", dmSans.variable)}
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-background font-sans text-foreground selection:bg-foreground selection:text-background"
        cz-shortcut-listen="true"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
