import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import FortressFXSection from "@/components/FortressFXSection";
import BrokersSection from "@/components/BrokersSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import HelpSection from "@/components/HelpSection";
import CareersSection from "@/components/CareersSection";
import LegalSection from "@/components/LegalSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <main>
          <Hero />
          <AboutSection />
          <FortressFXSection />
          <FeatureSection />
          <BrokersSection />
          <TestimonialsSection />
          <PricingSection />
          <BlogSection />
          <HelpSection />
          <CareersSection />
          <LegalSection />
          <FAQSection />
          <ContactSection />
          <CTASection />
        </main>
        <Footer />
        <BackToTop />
      </motion.div>
    </>
  );
};

export default Index;
