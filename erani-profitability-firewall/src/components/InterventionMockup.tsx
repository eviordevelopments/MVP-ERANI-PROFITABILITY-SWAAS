"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Shield, BarChart3, TrendingUp, Activity } from "lucide-react";

const screens = [
  {
    id: 1,
    label: "Reporte Forense de Fugas de Capital",
    description: "Identificación y triangulación de hemorragias invisibles en tu margen neto.",
    src: "/cmputadora1.png",
    accent: "#0055A0",
  },
  {
    id: 2,
    label: "Proyección de ROI a 90 Días",
    description: "Modelo predictivo con inferencia de Nivel 2 para recuperar capital perdido.",
    src: "/computadora2.png",
    accent: "#9e80ff",
  },
  {
    id: 3,
    label: "Auditoría Forense · Análisis de 90 Días",
    description: "Mapa completo de fricción operativa, Scope Creep e Índice de Datos Oscuros.",
    src: "/computadora3.png",
    accent: "#0055A0",
  },
  {
    id: 4,
    label: "Panel de Control de Rentabilidad",
    description: "Visualización en tiempo real de márgenes netos por proyecto y cliente.",
    src: "/computadora5.png",
    accent: "#00F5A0",
  },
  {
    id: 5,
    label: "Inferencia Operativa Avanzada",
    description: "Detección de patrones anómalos en la carga de trabajo y presupuesto.",
    src: "/computadora6.png",
    accent: "#9e80ff",
  },
  {
    id: 6,
    label: "Matriz de Recuperación de Capital",
    description: "Estrategias personalizadas para el blindaje de utilidad operativa.",
    src: "/computadora7.png",
    accent: "#0055A0",
  },
];

const narratives = [
  "Así se ven nuestros reportes con inferencia de Nivel 2",
  "Visibilidad forense que ningún Excel puede darte",
  "Tu operación, bajo lente de auditoría de alta frecuencia",
];

export default function InterventionMockup() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [narrativeIndex, setNarrativeIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screens.length);
      setNarrativeIndex((prev) => (prev + 1) % narratives.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const current = screens[activeIndex];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden font-sans bg-black">
      {/* Background glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-erani-blue/5 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-erani-purple/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="w-full relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-6 max-w-7xl mx-auto px-6">
          <div className="h-7 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={narrativeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.35em] text-erani-blue px-4 text-center"
              >
                {narratives[narrativeIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #0055A0 50%, #9e80ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Así se verá nuestra intervención
            </span>
            <br />
            <span className="text-white">de 90 días</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Con auditorías continuas y reportes de nivel forense, transformaremos la opacidad operativa de tu agencia en{" "}
            <span className="text-white font-semibold">visibilidad accionable</span> y capital recuperado.
          </p>

          <div className="flex items-center justify-center gap-3 pt-6">
            {screens.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-500 rounded-full ${
                  i === activeIndex
                    ? "w-8 h-1 bg-erani-blue"
                    : "w-2 h-1 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Center-aligned carousel container */}
        <motion.div 
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full mt-12 md:mt-20 px-6 flex justify-center overflow-hidden"
        >
          <div className="relative w-full max-w-7xl mx-auto flex justify-center overflow-hidden rounded-2xl md:rounded-none">
            
            {/* Imágen invisible principal para dictar la altura perfecta responsive del contendor sin saltos */}
            <img 
              src={screens[0].src} 
              alt="ERANI Dashboard Laptop Frame Placeholder"
              className="w-full h-auto object-contain opacity-0 pointer-events-none"
            />

            {/* Carrusel completo de computadoras deslizándose */}
            <AnimatePresence mode="popLayout">
              <motion.img
                key={current.id}
                src={current.src}
                alt={current.label}
                initial={{ opacity: 0, x: 200 }} 
                whileInView={{ opacity: 1, x: 0, scale: typeof window !== 'undefined' && window.innerWidth < 768 ? 1.4 : 1 }}
                exit={{ opacity: 0, x: -200 }} 
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="w-full h-full object-contain absolute inset-0 z-20 pointer-events-none rounded-2xl md:rounded-none"
              />
            </AnimatePresence>

          </div>
        </motion.div>

        {/* Feature tags below */}
        <div className="mt-20 md:mt-32 flex flex-wrap justify-center gap-3 max-w-7xl mx-auto px-6">
          {[
            { icon: Shield, text: "Auditorías Continuas" },
            { icon: BarChart3, text: "KPIs en Tiempo Real" },
            { icon: TrendingUp, text: "Proyección de Recuperación" },
            { icon: Activity, text: "Inferencia Nivel 2" },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-gray-400 text-[11px] font-medium tracking-wide hover:border-erani-blue/40 hover:text-erani-blue transition-all duration-300 cursor-default"
            >
              <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
