import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://buildweth-abhinav.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Abhinav | Full-Stack Builder & Tech Content Creator",
  description:
    "Abhinav is a full-stack builder, UI/UX enthusiast, and tech content creator converting ideas into scalable web applications and sharing the journey through engaging tech content and reels.",
  keywords: [
    "Abhinav",
    "buildweth_abhinavk7852",
    "Full Stack Developer",
    "Tech Content Creator",
    "React Developer",
    "Next.js Developer Portfolio",
    "n8n Automation",
  ],
  authors: [{ name: "Abhinav" }],
  openGraph: {
    title: "Abhinav | Full-Stack Builder & Tech Content Creator",
    description:
      "Building in public & crafting next-gen web experiences. Full-Stack Builder | Tech Content Creator | UI/UX Enthusiast.",
    url: SITE_URL,
    siteName: "Abhinav — Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhinav | Full-Stack Builder & Tech Content Creator",
    description:
      "Building in public & crafting next-gen web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-obsidian font-sans antialiased">
        {/* Cinematic film-grain overlay sits above everything, ignores pointer events */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
