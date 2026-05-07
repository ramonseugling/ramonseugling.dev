import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ClientShell from "@/components/ClientShell";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ramon Seugling — Software Engineer",
  description:
    "Software Engineer shipping high-traffic features at Mercado Libre (400M+ users). Specialized in React, TypeScript, and micro-frontend architectures.",
  openGraph: {
    title: "Ramon Seugling — Software Engineer",
    description:
      "Shipping high-traffic features at Mercado Libre. React, TypeScript, micro-frontends. GMV +6.5% Brazil.",
    type: "website",
    locale: "en_US",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ClientShell />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
