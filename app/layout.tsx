import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocalBusinessJsonLd } from "@/components/JsonLd";
import { company } from "@/lib/data";

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
  metadataBase: new URL("https://astonservices.co.uk"), // placeholder domain
  title: {
    default: `${company.name} | Security & Commercial Cleaning in Manchester`,
    template: `%s | ${company.shortName}`,
  },
  description: company.description,
  keywords: [
    "security services Manchester",
    "commercial cleaning Manchester",
    "static guarding",
    "mobile patrols",
    "office cleaning Manchester",
    "event security",
    "K9 security",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: company.name,
    title: `${company.name} | Security & Commercial Cleaning in Manchester`,
    description: company.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <LocalBusinessJsonLd />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
