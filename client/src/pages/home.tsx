import { motion } from "framer-motion";
import HeroSection from "@/components/home/hero-section";
import ServicesSection from "@/components/home/services-section";
import ProcessSection from "@/components/home/process-section";
import ImpactSection from "@/components/home/impact-section";
import FaqSection from "@/components/home/faq-section";
import CtaSection from "@/components/home/cta-section";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
      data-testid="page-home"
    >
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ImpactSection />
      <FaqSection />
      <CtaSection />
    </motion.div>
  );
}
