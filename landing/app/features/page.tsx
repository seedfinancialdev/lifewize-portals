import type { Metadata } from "next";
import Link from "next/link";
import { features } from "@/lib/features-data";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FeaturesOverviewGrid from "@/components/features-overview-grid";
import PageTransition from "@/components/page-transition";

export const metadata: Metadata = {
  title: "All Features — The Complete Agent Toolkit | LIFEWiZE",
  description:
    "Explore every feature of the LIFEWiZE platform — CRM, AI Call Trainer, Marketing Automation, Funnel Builder, Community, and more. Built for life insurance agents.",
  openGraph: {
    title: "All Features — The Complete Agent Toolkit | LIFEWiZE",
    description:
      "Explore every feature of the LIFEWiZE platform — CRM, AI Call Trainer, Marketing Automation, Funnel Builder, Community, and more.",
    type: "website",
  },
};

export default function FeaturesPage() {
  return (
    <PageTransition>
      <Navbar />
      <FeaturesOverviewGrid />
      <Footer />
    </PageTransition>
  );
}
