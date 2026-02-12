import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getFeatureBySlug, getAllSlugs } from "@/lib/features-data";
import Navbar from "@/components/navbar";
import FeaturePageHero from "@/components/feature-page-hero";
import FeatureSections from "@/components/feature-sections";
import FeaturePageCta from "@/components/feature-page-cta";
import Footer from "@/components/footer";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const feature = getFeatureBySlug(params.slug);
  if (!feature) return {};

  return {
    title: feature.seo.title,
    description: feature.seo.description,
    openGraph: {
      title: feature.seo.title,
      description: feature.seo.description,
      type: "website",
    },
  };
}

export default function FeaturePage({ params }: Props) {
  const feature = getFeatureBySlug(params.slug);
  if (!feature) notFound();

  return (
    <>
      <Navbar />
      <FeaturePageHero feature={feature} />
      <FeatureSections sections={feature.sections} accentColor={feature.accentColor} />
      <FeaturePageCta currentSlug={feature.slug} />
      <Footer />
    </>
  );
}
