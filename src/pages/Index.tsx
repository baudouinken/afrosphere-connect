import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Testimonials } from "@/components/landing/Testimonials";
import { AppGallery } from "@/components/landing/AppGallery";
import { Features } from "@/components/landing/Features";
import { WhyDifferent } from "@/components/landing/WhyDifferent";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Business } from "@/components/landing/Business";
import { TrustSignals } from "@/components/landing/TrustSignals";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Testimonials />
      <AppGallery />
      <Features />
      <WhyDifferent />
      <HowItWorks />
      <Business />
      <TrustSignals />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
