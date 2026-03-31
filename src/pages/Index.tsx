import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import WhyThisMinor from "@/components/WhyThisMinor";
import PracticalInfo from "@/components/PracticalInfo";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <WhyThisMinor />
        <PracticalInfo />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
