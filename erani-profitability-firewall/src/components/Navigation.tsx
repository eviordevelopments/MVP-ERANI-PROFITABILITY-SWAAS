"use client";

import { motion } from "framer-motion";
import { Shield, BarChart3, Lock, Users } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-2 sm:px-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="glassmorphism max-w-7xl w-full px-2 sm:px-4 h-16 flex items-center justify-between gap-2 sm:gap-4 relative"
      >
        <div className="flex items-center -ml-2 sm:-ml-4 md:-ml-8 shrink-0">
          <div className="w-28 sm:w-48 md:w-72 h-32 flex items-center justify-center transform scale-100 md:scale-115">
            <img src="/ERANI.png" alt="ERANI Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
          {[
            { label: "El Problema", href: "#problema" },
            { label: "Simulador", href: "#simulador" },
            { label: "Auditoría Forense", href: "#proceso" },
            { label: "Casos de Estudio", href: "#impacto" },
            { label: "Precios", href: "#precios" },
            { label: "FAQ", href: "#faq" }
          ].map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="relative text-gray-400 hover:text-erani-blue transition-colors group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-erani-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button 
          onClick={() => window.dispatchEvent(new CustomEvent('open-diagnostic'))}
          className="bg-emerald-500 text-erani-navy px-3 sm:px-6 py-2 rounded-full font-bold text-[10px] sm:text-sm hover:scale-105 transition-transform whitespace-nowrap"
        >
          Agendar Peritaje
        </button>
      </motion.div>
    </nav>
  );
}
