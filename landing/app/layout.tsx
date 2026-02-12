import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/components/splash-screen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "LIFEWiZE — The Operating System for Elite Life Agents",
  description:
    "Scale your insurance business with the all-in-one platform for life agents. Training, CRM, marketing, AI tools, and contracting — all under one roof.",
  openGraph: {
    title: "LIFEWiZE — The Operating System for Elite Life Agents",
    description:
      "Scale your insurance business with the all-in-one platform for life agents.",
    type: "website",
    url: "https://lifewize.io",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans min-h-screen`}
      >
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
