"use client";

import { motion } from "framer-motion";
import { Laptop, Sparkles, Settings, FileSearch, Rocket, Users, CheckCircle2, XCircle } from "lucide-react";

export default function SwaSSection() {
  const sSFeatures = [
    { text: "Tú configuras todo", icon: Settings },
    { text: "Tú interpretas datos", icon: FileSearch },
    { text: "Tú ejecutas cambios", icon: Rocket },
  ];

  const swasFeatures = [
    { text: "Nosotros configuramos", icon: Settings, color: "text-emerald-400" },
    { text: "Nosotros auditamos", icon: FileSearch, color: "text-emerald-400" },
    { text: "Te entregamos hallazgos", icon: Rocket, color: "text-emerald-400" },
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden font-sans">
      {/* Background Ornaments (Matched with ProprietaryMethodology) */}
      <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-erani-blue/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-erani-purple/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-widest"
          >
            <Sparkles className="w-4 h-4" />
            EL PRÓXIMO NIVEL DE EFICIENCIA
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight font-montserrat tracking-tight">
            Software <span className="text-emerald-500 italic">with a</span> Service
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            A diferencia de un SaaS tradicional donde tú haces todo el trabajo, <span className="text-white font-bold">ERANI es un SwaS.</span> Tú te enfocas en liderar; nosotros en que tu operación sea rentable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Comparison Side */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Traditional SaaS Card (The Negative) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glassmorphism p-6 md:p-8 border-white/5 opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center">
                  <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500/50" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-400 uppercase tracking-widest">SaaS Tradicional</h3>
              </div>
              <ul className="space-y-4">
                {sSFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-500">
                    <f.icon className="w-4 h-4 md:w-5 md:h-5 opacity-50" />
                    <span className="text-xs md:text-sm font-medium">{f.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/5 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-gray-600 font-bold text-center lg:text-left">
                RESULTADO: CARGA OPERATIVA PARA TI
              </div>
            </motion.div>

            {/* ERANI SwaS Card (The Hero) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glassmorphism p-6 md:p-8 border-emerald-500/30 bg-emerald-500/[0.03] shadow-[0_0_40px_rgba(16,185,129,0.1)] relative overflow-hidden"
            >
              {/* Dynamic light effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/20 blur-3xl -z-10" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center glow-emerald">
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-widest">ERANI SwaS</h3>
              </div>
              <ul className="space-y-4">
                {swasFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <f.icon className={`w-4 h-4 md:w-5 md:h-5 ${f.color}`} />
                    <span className="text-xs md:text-sm font-bold tracking-wide">{f.text}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-emerald-500/20 text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-black text-center lg:text-left">
                RESULTADO: RENTABILIDAD LISTA PARA EJECUTAR
              </div>
            </motion.div>
          </div>

          {/* Visualization Side (The "Orbital" Animation) */}
          <div className="relative h-[400px] md:h-[600px] flex items-center justify-center order-1 lg:order-2 overflow-hidden lg:overflow-visible">
            {/* Central User Icon */}
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: ["0 0 20px rgba(16,185,129,0.2)", "0 0 40px rgba(16,185,129,0.4)", "0 0 20px rgba(16,185,129,0.2)"]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-20 h-20 md:w-32 md:h-32 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex flex-col items-center justify-center text-emerald-400 z-30"
            >
              <Users className="w-6 h-6 md:w-10 md:h-10 mb-1 md:mb-2" />
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-tighter text-center">Tú / Líder</span>
            </motion.div>

            {/* Orbiting Service Layers */}
            {[0, 120, 240].map((angle, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-x-0 inset-y-0 z-20 pointer-events-none flex items-center justify-center"
              >
                <div className="relative w-[220px] h-[220px] md:w-[350px] md:h-[350px]">
                  <motion.div
                    style={{ 
                      position: 'absolute',
                      top: '0',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15 + i * 5, repeat: Infinity, ease: "linear" }}
                    className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center backdrop-blur-md shadow-xl"
                  >
                    {i === 0 && <Settings className="w-5 h-5 md:w-6 md:h-6 text-[#0055A0]" />}
                    {i === 1 && <FileSearch className="w-5 h-5 md:w-6 md:h-6 text-[#9e80ff]" />}
                    {i === 2 && <Rocket className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />}
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Outer Rings */}
            <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] border border-white/5 rounded-full z-10 animate-[pulse_8s_infinite]" />
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] border border-white/5 rounded-full z-0 animate-[pulse_12s_infinite]" />
            
            {/* Animated path lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <circle cx="50%" cy="50%" r="100" className="md:hidden" fill="none" stroke="url(#emerald-grad)" strokeWidth="1" strokeDasharray="5 10" />
              <circle cx="50%" cy="50%" r="150" className="hidden md:block" fill="none" stroke="url(#emerald-grad)" strokeWidth="1" strokeDasharray="10 20" />
              <circle cx="50%" cy="50%" r="150" className="md:hidden" fill="none" stroke="url(#purple-grad)" strokeWidth="1" strokeDasharray="3 8" />
              <circle cx="50%" cy="50%" r="225" className="hidden md:block" fill="none" stroke="url(#purple-grad)" strokeWidth="1" strokeDasharray="5 15" />
              <defs>
                <linearGradient id="emerald-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
                <linearGradient id="purple-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9e80ff" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>

            {/* Float text explaining orbital */}
            <div className="absolute top-[10%] right-0 max-w-[200px] text-right">
              <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">Capa de Servicio ERANI</p>
              <p className="text-[9px] text-gray-500 leading-tight">Configuración, auditoría y refinamiento continuo operando en segundo plano.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
