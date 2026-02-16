import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
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

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "LIFEWiZE Financial — Independent Marketing Organization for Life Agents",
  description:
    "Get contracted with top carriers, competitive commissions, qualified leads, and the full LIFEWiZE technology platform. Built for independent life insurance agents.",
  openGraph: {
    title: "LIFEWiZE Financial — Your Career. Your Contracts. Our Support.",
    description:
      "Top carrier access, competitive commissions, and a full technology platform for independent life agents.",
    type: "website",
    url: "https://lifewizefinancial.com",
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
        className={`${inter.variable} ${outfit.variable} ${playfair.variable} font-sans min-h-screen`}
      >
        <SplashScreen />
        {children}
      </body>
    </html>
  );
}
