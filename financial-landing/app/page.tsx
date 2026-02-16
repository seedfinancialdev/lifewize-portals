import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import LogoStrip from "@/components/logo-strip";
import CarrierGrid from "@/components/carrier-grid";
import WhyUsSection from "@/components/why-us-section";
import CommissionTiers from "@/components/commission-tiers";
import ContractingProcess from "@/components/contracting-process";
import Testimonials from "@/components/testimonials";
import FaqSection from "@/components/faq-section";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";
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
          <CarrierGrid />
        </div>
      </ParallaxSection>
      <ParallaxSection speed={0.03}>
        <WhyUsSection />
      </ParallaxSection>
      <ParallaxSection speed={0.03}>
        <div className="section-alt">
          <CommissionTiers />
        </div>
      </ParallaxSection>
      <ParallaxSection speed={0.04}>
        <ContractingProcess />
      </ParallaxSection>
      <ParallaxSection speed={0.02}>
        <div className="section-alt">
          <Testimonials />
        </div>
      </ParallaxSection>
      <ParallaxSection speed={0.03}>
        <FaqSection />
      </ParallaxSection>
      <FinalCta />
      <Footer />
      </PageTransition>
      <BackToTop />
    </>
  );
}
