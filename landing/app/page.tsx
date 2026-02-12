import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeaturesGrid from "@/components/features-grid";
import ContractingSection from "@/components/contracting-section";
import PricingSection from "@/components/pricing-section";
import Testimonials from "@/components/testimonials";
import FaqSection from "@/components/faq-section";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";
import ParallaxSection from "@/components/ui/parallax-section";
import PageTransition from "@/components/page-transition";

export default function Home() {
  return (
    <>
      <Navbar />
      <PageTransition>
      <Hero />
      <ParallaxSection speed={0.03}>
        <FeaturesGrid />
      </ParallaxSection>
      <ParallaxSection speed={0.04}>
        <ContractingSection />
      </ParallaxSection>
      <ParallaxSection speed={0.03}>
        <PricingSection />
      </ParallaxSection>
      <ParallaxSection speed={0.02}>
        <Testimonials />
      </ParallaxSection>
      <ParallaxSection speed={0.03}>
        <FaqSection />
      </ParallaxSection>
      <FinalCta />
      <Footer />
      </PageTransition>
    </>
  );
}
