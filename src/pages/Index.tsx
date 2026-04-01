import Navbar from "@/components/Navbar";
import DeadlineBanner from "@/components/DeadlineBanner";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import FeaturedProjects from "@/components/FeaturedProjects";
import WhyThisMinor from "@/components/WhyThisMinor";
import PracticalInfo from "@/components/PracticalInfo";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DeadlineBanner />
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <FeaturedProjects />
        <WhyThisMinor />
        <PracticalInfo />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <CookieConsent />
      <StickyCTA />
    </div>
  );
};

export default Index;
