"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Shield, BarChart3, Lock, Users, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "El Problema", href: "#hero" },
    { label: "Simulador", href: "#problema" },
    { label: "Auditoría Forense", href: "#intervencion" },
    { label: "Casos de Estudio", href: "#casos" },
    { label: "Precios", href: "#oferta" },
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
        <a 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault();
            // Close diagnostic if open
            if ((window as any).closeERANIDiagnostic) {
               (window as any).closeERANIDiagnostic();
            } else {
               window.dispatchEvent(new CustomEvent('close-diagnostic'));
            }
            
            // Absolute reset to top
            window.scrollTo({ top: 0, behavior: 'instant' });
            // Soft fallback to ensure smooth feel if already idle
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 10);
          }}
          className="flex items-center ml-0 md:-ml-8 shrink-0 hover:opacity-80 transition-opacity"
        >
          <div className="w-32 sm:w-40 md:w-80 h-32 flex items-center justify-center transform scale-150 sm:scale-125 md:scale-140 origin-left md:origin-center pointer-events-none">
            <img src="/ERANI.png" alt="ERANI Logo" className="w-full h-full object-contain" />
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-8 text-xs font-bold uppercase tracking-widest">
          {navLinks.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={(e) => {
                e.preventDefault();
                // Direct call for safety in case event listener is slow/removed
                if ((window as any).closeERANIDiagnostic) {
                   (window as any).closeERANIDiagnostic();
                } else {
                   window.dispatchEvent(new CustomEvent('close-diagnostic'));
                }
                
                setTimeout(() => {
                  const element = document.querySelector(item.href);
                  if (element) {
                     element.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 50);
                setIsMenuOpen(false);
              }}
              className="relative text-gray-400 hover:text-erani-blue transition-colors group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-erani-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={() => {
              window.dispatchEvent(new CustomEvent('close-diagnostic'));
              setTimeout(() => {
                window.dispatchEvent(new CustomEvent('open-diagnostic'));
              }, 100);
            }}
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
                  onClick={(e) => {
                    e.preventDefault();
                    window.dispatchEvent(new CustomEvent('close-diagnostic'));
                    setIsMenuOpen(false);
                    const element = document.querySelector(item.href);
                    if (element) {
                       element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
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
