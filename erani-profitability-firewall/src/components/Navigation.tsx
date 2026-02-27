"use client";

import { motion } from "framer-motion";
import { Shield, BarChart3, Lock, Users } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="glassmorphism px-8 py-3 flex items-center gap-12"
      >
        <div className="flex items-center gap-2">
          <div className="w-32 h-12 flex items-center justify-center">
            <img src="/logoerani.png" alt="ERANI Logo" className="w-full h-full object-contain" />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#problema" className="hover:text-emerald-400 transition-colors">El Problema</a>
          <a href="#solucion" className="hover:text-emerald-400 transition-colors">Auditoría Forense</a>
          <a href="#impacto" className="hover:text-emerald-400 transition-colors">Impacto</a>
        </div>

        <button className="bg-emerald-500 text-erani-navy px-5 py-2 rounded-full font-bold text-sm glow-emerald hover:scale-105 transition-transform">
          Agendar Peritaje
        </button>
      </motion.div>
    </nav>
  );
}
