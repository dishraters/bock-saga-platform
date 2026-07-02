import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bock Saga Archive | Carl Borgen",
    template: "%s | Bock Saga Archive",
  },
  description:
    "A modern learning archive for Carl Borgen's Bock Saga material, with guided topics, search, books, and an AI-ready assistant section.",
  openGraph: {
    title: "Bock Saga Archive",
    description:
      "A modern learning archive for Carl Borgen's Bock Saga material.",
    url: siteUrl,
    siteName: "Bock Saga Archive",
    images: [{ url: "/images/bock-saga-hero.png", width: 1600, height: 900 }],
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
      className={`${inter.variable} ${cormorant.variable} ${plexMono.variable} scroll-smooth antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
