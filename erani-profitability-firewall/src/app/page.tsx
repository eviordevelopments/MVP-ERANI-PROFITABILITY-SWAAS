"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProblemSimulator from "@/components/ProblemSimulator";
import ForensicFunnel from "@/components/ForensicFunnel";
import BentoCaseStudy from "@/components/BentoCaseStudy";
import PricingSection from "@/components/PricingSection";
import CheckoutForm from "@/components/CheckoutForm";
import FounderBio from "@/components/FounderBio";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ForensicDiagnostic from "@/components/ForensicDiagnostic";
import DiagnosticDashboard from "@/components/DiagnosticDashboard";
import InterventionMockup from "@/components/InterventionMockup";
import ProprietaryMethodology from '@/components/ProprietaryMethodology';
import OfferSection from "@/components/OfferSection";
import SimulationHub from "@/components/SimulationHub";
import SwaSSection from "@/components/SwaSSection";
import AuditProtocol from "@/components/AuditProtocol";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, ArrowRight, Search, TrendingUp, FileText, Activity, Shield, BarChart3 } from "lucide-react";

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
  const [diagnosticState, setDiagnosticState] = useState<'idle' | 'briefing' | 'questionnaire' | 'loading' | 'dashboard' | 'thanks'>('idle');
  const [diagnosticData, setDiagnosticData] = useState<any>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 2500);
    
    const handleOpenDiagnostic = () => {
      setDiagnosticState('briefing');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCloseDiagnostic = () => {
      setDiagnosticState('idle');
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    (window as any).closeERANIDiagnostic = handleCloseDiagnostic;

    window.addEventListener('open-diagnostic', handleOpenDiagnostic);
    window.addEventListener('close-diagnostic', handleCloseDiagnostic);
    return () => {
      clearTimeout(timer);
      delete (window as any).closeERANIDiagnostic;
      window.removeEventListener('open-diagnostic', handleOpenDiagnostic);
      window.removeEventListener('close-diagnostic', handleCloseDiagnostic);
    };
  }, []);

  const handleDiagnosticComplete = async (data: any) => {
    setDiagnosticState('loading');
    try {
      const response = await fetch('/api/diagnostic', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      
      setTimeout(() => {
        setDiagnosticData({ raw: data, inference: result.success ? result.results : null });
        setDiagnosticState('dashboard');
      }, 2000);
    } catch (error) {
      console.error("Diagnostic error:", error);
      setTimeout(() => {
        setDiagnosticData({ raw: data, inference: null });
        setDiagnosticState('dashboard');
      }, 2000);
    }
  };

  const handleFinish = () => {
    setDiagnosticState('thanks');
    setTimeout(() => {
      setDiagnosticState('idle');
      setDiagnosticData(null);
    }, 4000);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://erani.mx/#organization",
        "name": "ERANI",
        "url": "https://erani.mx",
        "logo": {
          "@type": "ImageObject",
          "url": "https://erani.mx/isologo.png",
          "width": 512,
          "height": 512
        },
        "description": "Infraestructura de auditoría forense y análisis de rentabilidad para agencias."
      },
      {
        "@type": "WebSite",
        "@id": "https://erani.mx/#website",
        "url": "https://erani.mx",
        "name": "ERANI",
        "publisher": {
          "@id": "https://erani.mx/#organization"
        },
        "inLanguage": "es-MX"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Qué es un Diagnóstico Forense de Rentabilidad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Es una auditoría profunda que triangula tus datos operativos (horas estimadas vs trabajadas) con tus datos financieros (facturado vs costo real) para encontrar dónde estás perdiendo dinero sin darte cuenta."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué es una Venganza de Software (SwaS)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Software with a Service (SwaS) significa que no solo te entregamos una plataforma potente. Te integramos a nuestro equipo de ingenieros para asegurar la instalación, cruce de datos y lectura de resultados mes a mes."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué canales operativos triangulan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Toda la capa de gestión de trabajo (Jira, ClickUp, Asana, Monday, etc) y la capa de comunicación (Discord, Slack). El motor cruza esto contra las líneas de ingreso reportadas en bancos/Stripe."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="bg-erani-navy text-white selection:bg-erani-blue selection:text-white relative min-h-screen w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AnimatePresence>
        {!showContent && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {/* Global Ambient Background Enhancement - Highly Vibrant #9e80ff */}
      <div className="ambient-purple-glow" />

      {/* 🟢 STRATEGIC EMERALD HIGHLIGHTS (Minimal to emphasize vibrant purple) */}
      <div className="fixed top-[-15%] left-[-15%] w-[500px] h-[500px] bg-emerald-500/[0.03] blur-[160px] rounded-full pointer-events-none -z-0" />
      <div className="fixed bottom-[-15%] right-[-15%] w-[600px] h-[600px] bg-emerald-600/[0.02] blur-[200px] rounded-full pointer-events-none -z-0" />

      {showContent && (
        <>
          <Navigation />
          
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={`relative z-10 ${diagnosticState !== 'idle' ? 'hidden' : 'block'}`}
          >
            <div className="relative" id="hero">
                <Hero />
                <ProprietaryMethodology />

                <ScrollSection id="swas">
                  <SwaSSection />
                </ScrollSection>

                <ScrollSection id="problema">
                <ProblemSimulator />
              </ScrollSection>

              <ScrollSection id="peritaje">
                <OfferSection />
              </ScrollSection>

              <ScrollSection id="solucion">
                <SimulationHub />
              </ScrollSection>

              <ScrollSection id="auditoria">
                <ForensicFunnel />
              </ScrollSection>

              <ScrollSection id="casos">
                <BentoCaseStudy />
              </ScrollSection>

              <ScrollSection id="protocolo">
                <AuditProtocol />
              </ScrollSection>

              <ScrollSection id="intervencion">
                <InterventionMockup />
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

              <ScrollSection id="faq">
                <FAQSection />
              </ScrollSection>
            </div>
          </motion.div>

          {diagnosticState === 'idle' && <Footer />}
        </>
      )}
      {/* Diagnostic Overlay */}
      <AnimatePresence>
        {diagnosticState !== 'idle' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-[40] bg-[#0A0E14] flex flex-col overflow-y-auto overflow-x-hidden w-[100vw]`}
          >
            {/* Ambient Purple Glows for Diagnostic - 10% opacity */}
            <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#9E80ff]/[0.1] blur-[140px] rounded-full pointer-events-none z-0" />
            <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#9E80ff]/[0.1] blur-[140px] rounded-full pointer-events-none z-0" />
            <div className="fixed top-[40%] right-[-15%] w-[400px] h-[400px] bg-[#9E80ff]/[0.05] blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="relative z-10 flex flex-col min-h-full w-full">
            {diagnosticState !== 'loading' && diagnosticState !== 'thanks' && (
              <button 
                onClick={() => {
                  setDiagnosticState('idle');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                className="fixed top-8 right-8 p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all text-gray-400 hover:text-white z-[60] group backdrop-blur-md"
                aria-label="Cerrar diagnóstico y volver al inicio"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            )}

            {diagnosticState === 'briefing' && (
              <div className="flex-1 flex flex-col items-center justify-center py-24 px-6 max-w-4xl mx-auto w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glassmorphism p-8 md:p-12 rounded-[2rem] border border-white/10 w-full text-center space-y-8"
                >
                  {/* Demo Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-erani-blue/30 bg-erani-blue/10 text-erani-blue text-xs font-bold uppercase tracking-[0.3em] mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-erani-blue animate-pulse inline-block" />
                    Diagnóstico Demostrativo · Datos Protegidos
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Análisis de Integridad Operativa</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                      Esta es una <span className="text-white font-semibold">demostración interactiva</span> diseñada para analizar algunos datos clave de tu operación y mostrarte, con datos reales, cómo <span className="text-erani-blue font-semibold">ERANI puede elevar la rentabilidad de tu negocio</span> en menos de 21 días.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-left">
                    {[
                      { title: "Detección de Fugas", desc: "Identificación de horas no facturadas y tareas fuera de alcance.", Icon: Search, color: "erani-blue" },
                      { title: "Cálculo de Recuperación", desc: "Proyección de ROI basado en el saneamiento de tu margen neto.", Icon: TrendingUp, color: "erani-purple" },
                      { title: "Perfil Forense", desc: "Mapeo de varianza entre verdad operativa y reportada.", Icon: FileText, color: "erani-blue" }
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] space-y-4 hover:border-erani-blue/40 hover:bg-erani-blue/[0.04] hover:shadow-[0_0_24px_rgba(0,85,160,0.12)] transition-all duration-300 cursor-default"
                      >
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 group-hover:border-erani-blue/50 group-hover:shadow-[0_0_12px_rgba(0,85,160,0.3)] transition-all duration-300">
                          <item.Icon className="w-5 h-5 text-gray-400 group-hover:text-erani-blue transition-colors duration-300" strokeWidth={1.5} />
                        </div>
                        <h4 className="font-bold text-[#00F5A0] group-hover:text-erani-blue uppercase tracking-widest text-[10px] transition-colors duration-300">{item.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Legal Privacy Notice */}
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-left">
                    <Shield className="w-4 h-4 text-erani-blue/60 shrink-0 mt-0.5" />
                    <p className="text-[10px] text-gray-500 leading-relaxed">
                      <span className="text-gray-400 font-semibold">Aviso de Privacidad:</span> Los datos proporcionados en este diagnóstico son utilizados exclusivamente para personalizar una demostración del poder del Diagnóstico Forense ERANI. Su tratamiento se realiza conforme a la{" "}
                      <span className="text-erani-blue/80">Ley de Protección de Datos Personales en Posesión de Sujetos Obligados del Estado de Guanajuato (LPDPPSOG)</span> y demás normativa aplicable. No serán compartidos con terceros ni utilizados con fines distintos al análisis aquí descrito.
                    </p>
                  </div>

                  <button 
                    onClick={() => setDiagnosticState('questionnaire')}
                    className="button-premium w-full md:w-auto px-12 py-5 rounded-2xl font-bold text-xl text-white flex items-center justify-center gap-4 mx-auto"
                  >
                    Iniciar Peritaje
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </motion.div>
              </div>
            )}

            {diagnosticState === 'questionnaire' && (
              <div className="flex-1 flex flex-col justify-center py-20">
                <ForensicDiagnostic onComplete={handleDiagnosticComplete} />
              </div>
            )}

            {diagnosticState === 'loading' && (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-24 h-24 mb-12 relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-4 border-erani-blue/20 border-t-erani-blue rounded-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img src="/isologo.png" alt="ERANI" className="w-[75%] h-[75%] object-contain animate-pulse drop-shadow-[0_0_8px_rgba(0,85,160,0.8)]" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Procesando Inferencia Nivel 2...</h3>
                <p className="text-gray-500 max-w-sm">Triangulando puntos de fuga y calculando ROI de recuperación.</p>
                <div className="mt-12 space-y-2 w-full max-w-xs">
                  <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2.5 }}
                      className="h-full bg-erani-blue"
                    />
                  </div>
                  <div className="flex justify-between text-[8px] font-bold text-gray-600 uppercase tracking-widest">
                    <span>Analyzing Metadata</span>
                    <span>98% Accuracy</span>
                  </div>
                </div>
              </div>
            )}

            {diagnosticState === 'dashboard' && (
              <div className="flex-1 w-full pt-12">
                {/* Constrained main dashboard content */}
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                  <DiagnosticDashboard data={diagnosticData} onReset={handleFinish} />
                </div>

                {/* Full-bleed Intervention Section — outside max-w-7xl to reach true edge-to-edge */}
                <div className="w-full">
                  <InterventionMockup />
                </div>

                {/* Additional Diagnostic Reporting Sections */}
                <div className="max-w-7xl mx-auto px-4 md:px-8 mt-24 space-y-24">
                  <ForensicFunnel showForensicDetails={true} />
                  <BentoCaseStudy />
                  <FAQSection />
                </div>

                <div className="mt-20 w-full">
                  <Footer />
                </div>
              </div>
            )}

            {diagnosticState === 'thanks' && (
              <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-24 h-24 bg-erani-blue rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(0,85,160,0.5)]"
                >
                  <CheckCircle className="w-12 h-12 text-white" />
                </motion.div>
                <h2 className="text-4xl font-bold text-white mb-4">Gracias por confiar en Erani</h2>
                <p className="text-xl text-gray-400 max-w-lg mb-12">
                  Tu solicitud ha sido procesada. Tu estratega forense asignado se pondrá en contacto contigo en breve para tu sesión de blindaje.
                </p>
                <button 
                  onClick={() => setDiagnosticState('idle')}
                  className="bg-white/5 hover:bg-white/10 px-8 py-3 rounded-full text-white font-medium border border-white/10 transition-all uppercase tracking-widest text-xs"
                >
                  Volver al Panel Principal
                </button>
              </div>
            )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
