import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeInit } from "@/components/theme/theme-init";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LIFEWiZE Resource Center",
  description: "Enhanced resource discovery, filtering, collections, and engagement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeInit />
        {children}
      </body>
    </html>
  );
}
