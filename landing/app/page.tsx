import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import FeaturesGrid from "@/components/features-grid";
import ContractingSection from "@/components/contracting-section";
import PricingSection from "@/components/pricing-section";
import Testimonials from "@/components/testimonials";
import FaqSection from "@/components/faq-section";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesGrid />
      <ContractingSection />
      <PricingSection />
      <Testimonials />
      <FaqSection />
      <FinalCta />
      <Footer />
    </>
  );
}
