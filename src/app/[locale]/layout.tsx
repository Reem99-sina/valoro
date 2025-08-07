import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VoloroLogo } from "@/assets/icon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valoro",
  description:
    "Valoro focuses on trend technologies such as blockchain and AI. At Valoro, we are dedicated to innovating new technologies and business processes.",
  openGraph: {
    title: "Valoro",
    description:
      "Explore Sharia-compliant blockchain and AI solutions with Valoro.",
    url: "https://valoro-bb82.vercel.app",
    siteName: "Valoro",
    images: [
      {
        url: "https://valoro-bb82.vercel.app/valoro-logo.svg",
        width: 1200,
        height: 630,
        alt: "Valoro Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valoro",
    description:
      "Explore Sharia-compliant blockchain and AI solutions with Valoro.",
    images: ["https://valoro-bb82.vercel.app/valoro-logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
