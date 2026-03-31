"use client";

import { motion, Variants } from "framer-motion";
import { Shield, LayoutDashboard, FileText, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

const deviceVariants: Variants = {
  float: {
    y: [0, -20, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  floatReverse: {
    y: [0, 20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const positionVariants = {
  center: { x: 0, y: 0, scale: 1, zIndex: 30 },
  left: { x: -150, y: 40, scale: 0.8, zIndex: 20 },
  right: { x: 150, y: -40, scale: 0.8, zIndex: 20 },
};

export default function OfferSection() {
  return (
    <section id="peritaje" className="py-32 px-6 relative overflow-hidden bg-[#0A192F]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-erani-blue/10 blur-[100px] rounded-full" />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-[#10B981] text-xs font-bold uppercase tracking-widest">
              <Shield className="w-4 h-4" />
              Validado por Clientes: Información Veraz
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Peritaje Forense <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-400 to-emerald-600">
                de 90 Días
              </span>
            </h2>

            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              Un análisis exhaustivo de tu <span className="text-white font-semibold italic text-glow">Dark Data</span> para encontrar el dinero que se está escapando hoy mismo.
            </p>

            <div className="glassmorphism p-8 border-emerald-500/20 relative group overflow-hidden">
               {/* Emerald corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-2xl group-hover:bg-emerald-500/10 transition-all" />
              
              <h3 className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                <LayoutDashboard className="w-5 h-5" />
                El Entregable
              </h3>
              
              <p className="text-lg text-white mb-6 leading-relaxed">
                Recibe el <span className="font-bold">Reporte Bento + La Hoja de Ruta de Soluciones</span>. 
                Te entregamos 'la carnita': el plan de acción para eliminar el Scope Creep de raíz.
              </p>

              <div className="space-y-3">
                {[
                  "Identificación de Fugas de Capital",
                  "Mapa Crítico de Dark Data",
                  "Plan de Mitigación de 21 Días"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/40">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span className="text-sm text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => window.location.href = "https://book.stripe.com/9B67sMd4Y6FK9n94lO8N200"}
              className="button-premium group px-6 py-4 text-white font-bold transition-all hover:scale-105 active:scale-95 text-base md:text-xl flex items-center gap-3"
            >
              Solicitar Peritaje Ahora
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
          
          {/* Animation Column */}
          <div className="relative h-[400px] md:h-[500px] flex items-center justify-center -mt-4 mb-4 lg:mt-0 overflow-hidden lg:overflow-visible w-full">
            {/* Center: Computer */}
            <motion.div 
              id="device-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: typeof window !== 'undefined' && window.innerWidth < 768 ? 1.05 : 1.15 }}
              animate="float"
              variants={deviceVariants}
              viewport={{ once: true }}
              className="absolute z-20 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] lg:translate-x-10"
              style={{ width: 'min(85vw, 650px)' }}
            >
              <img src="/computadora4.png" alt="Forensic Report Desktop" className="w-full h-auto" />
            </motion.div>

            {/* Left: Mobile Cellular */}
            <motion.div 
              id="device-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ 
                opacity: 1, 
                x: typeof window !== 'undefined' && window.innerWidth < 768 ? -100 : -280, 
                y: typeof window !== 'undefined' && window.innerWidth < 768 ? 20 : 140 
              }}
              animate="floatReverse"
              variants={deviceVariants}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute z-40 drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] lg:translate-x-10"
              style={{ width: 'min(30vw, 220px)' }}
            >
              <img src="/celular.png" alt="Forensic Report Mobile" className="w-full h-auto" />
            </motion.div>

            {/* Right: iPad */}
            <motion.div 
              id="device-right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ 
                opacity: 1, 
                x: typeof window !== 'undefined' && window.innerWidth < 768 ? 50 : 220, 
                y: typeof window !== 'undefined' && window.innerWidth < 768 ? 30 : 120 
              }}
              animate="float"
              variants={deviceVariants}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute z-50 drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] lg:translate-x-10"
              style={{ width: 'min(45vw, 400px)' }}
            >
              <img src="/ipad.png" alt="Forensic Report Tablet" className="w-full h-auto" />
            </motion.div>
          </div>

        </div>
      </div>

      {/* Industrial Divider */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
    </section>
  );
}
