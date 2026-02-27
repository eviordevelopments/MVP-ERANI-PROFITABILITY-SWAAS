"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSimulator from "@/components/ProblemSimulator";
import SimulationHub from "@/components/SimulationHub";
import BentoCaseStudy from "@/components/BentoCaseStudy";
import PricingSection from "@/components/PricingSection";
import CheckoutForm from "@/components/CheckoutForm";
import FounderBio from "@/components/FounderBio";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const revealVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

const ScrollSection = ({ children, id }: { children: React.ReactNode, id?: string }) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={revealVariants}
    className="relative"
  >
    {children}
  </motion.section>
);

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-erani-navy text-white selection:bg-emerald-500 selection:text-erani-navy relative min-h-screen">
      <AnimatePresence>
        {!showContent && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {/* 🟢 INTENSE STRATEGIC EMERALD HIGHLIGHTS (Obvious visibility) */}
      <div className="fixed top-[-10%] left-[-10%] w-[800px] h-[800px] bg-emerald-500/[0.07] blur-[150px] rounded-full pointer-events-none -z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[900px] h-[900px] bg-emerald-600/[0.05] blur-[180px] rounded-full pointer-events-none -z-0" />
      <div className="fixed top-1/2 left-[20%] w-[400px] h-[400px] bg-emerald-400/[0.04] blur-[120px] rounded-full pointer-events-none -z-0" />

      {showContent && (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <Navigation />

          <div className="relative">
            <ScrollSection>
              <Hero />
            </ScrollSection>

            <ScrollSection id="problema">
              <ProblemSimulator />
            </ScrollSection>

            <ScrollSection id="proceso">
              <SimulationHub />
            </ScrollSection>

            <ScrollSection id="impacto">
              <BentoCaseStudy />
            </ScrollSection>

            <ScrollSection id="oferta">
              <PricingSection />
            </ScrollSection>

            <ScrollSection id="registro">
              <CheckoutForm />
            </ScrollSection>

            <ScrollSection id="fundador">
              <FounderBio />
            </ScrollSection>
          </div>

          <Footer />
        </motion.div>
      )}
    </main>
  );
}
