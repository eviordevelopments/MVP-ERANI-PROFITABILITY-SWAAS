"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Shield, BarChart3, Lock, Users, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "El Problema", href: "#problema" },
    { label: "Simulador", href: "#simulador" },
    { label: "Auditoría Forense", href: "#proceso" },
    { label: "Casos de Estudio", href: "#impacto" },
    { label: "Precios", href: "#precios" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex flex-col items-center px-4 sm:px-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="glassmorphism max-w-7xl w-full px-4 h-16 flex items-center justify-between gap-4 relative"
      >
        <div className="flex items-center ml-0 md:-ml-8 shrink-0">
          <div className="w-24 sm:w-32 md:w-72 h-32 flex items-center justify-center transform scale-100 md:scale-115">
            <img src="/ERANI.png" alt="ERANI Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
          {navLinks.map((item) => (
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

        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('open-diagnostic'))}
            className="bg-emerald-500 text-erani-navy px-3 sm:px-6 py-2 rounded-full font-bold text-[10px] sm:text-sm hover:scale-105 active:scale-95 transition-transform whitespace-nowrap"
          >
            Agendar Peritaje
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white active:scale-90 transition-transform"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden w-full max-w-7xl mt-2 px-4"
          >
            <div className="glassmorphism p-4 flex flex-col gap-4">
              {navLinks.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-bold uppercase tracking-widest text-gray-400 active:text-erani-blue transition-colors py-2 border-b border-white/5 last:border-0"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
