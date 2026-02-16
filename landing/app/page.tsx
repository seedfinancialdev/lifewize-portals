import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeaturesGrid from "@/components/features-grid";
import ContractingSection from "@/components/contracting-section";
import PricingSection from "@/components/pricing-section";
import Testimonials from "@/components/testimonials";
import FaqSection from "@/components/faq-section";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";
import LogoStrip from "@/components/logo-strip";
import BackToTop from "@/components/back-to-top";
import ParallaxSection from "@/components/ui/parallax-section";
import PageTransition from "@/components/page-transition";

export default function Home() {
  return (
    <>
      <Navbar />
      <PageTransition>
      <Hero />
      <LogoStrip />
      <ParallaxSection speed={0.03}>
        <div className="section-alt">
          <FeaturesGrid />
        </div>
      </ParallaxSection>
      <ParallaxSection speed={0.03}>
        <PricingSection />
      </ParallaxSection>
      <ParallaxSection speed={0.04}>
        <div className="section-alt">
          <ContractingSection />
        </div>
      </ParallaxSection>
      <ParallaxSection speed={0.02}>
        <Testimonials />
      </ParallaxSection>
      <ParallaxSection speed={0.03}>
        <div className="section-alt">
          <FaqSection />
        </div>
      </ParallaxSection>
      <FinalCta />
      <Footer />
      </PageTransition>
      <BackToTop />
    </>
  );
}
