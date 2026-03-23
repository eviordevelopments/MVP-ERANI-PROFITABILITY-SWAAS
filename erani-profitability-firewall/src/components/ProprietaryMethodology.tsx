"use client";

import { motion } from "framer-motion";
import { BrainCircuit, ScanSearch, ActivitySquare } from "lucide-react";

export default function ProprietaryMethodology() {
  const items = [
    {
      icon: BrainCircuit,
      title: "Inferencia Forense de Nivel 2",
      description: "No solo leemos logs; nuestra IA analiza el contexto de cada interacción para detectar fugas que el ojo humano ignora.",
      color: "text-erani-blue",
      bg: "bg-erani-blue/10",
      border: "border-erani-blue/20",
    },
    {
      icon: ScanSearch,
      title: "Dark Data Index",
      description: "Damos luz al 90% de la información de tu agencia que hoy es invisible (chats, versiones de archivos, micro-tareas) y que está matando tu utilidad.",
      color: "text-erani-purple",
      bg: "bg-erani-purple/10",
      border: "border-erani-purple/20",
    },
    {
      icon: ActivitySquare,
      title: "Control de Scope Creep",
      description: "Detectamos en tiempo real cuando un proyecto se sale de control antes de que sea demasiado tarde para cobrarlo.",
      color: "text-erani-coral",
      bg: "bg-erani-coral/10",
      border: "border-erani-coral/20",
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden font-sans">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-erani-blue/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-erani-purple/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16 space-y-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium uppercase tracking-[0.2em] text-gray-400 mb-6">
                    <span className="w-2 h-2 rounded-full bg-erani-blue animate-pulse" />
                    La Metodología Propietaria
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tighter leading-tight">
                    Tecnología de Grado Industrial <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-erani-blue via-erani-purple to-erani-coral">
                        para tu Rentabilidad.
                    </span>
                </h2>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {items.map((item, index) => {
                const Icon = item.icon;
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true, margin: "-50px" }}
                        className={`glassmorphism p-8 md:p-10 rounded-[2rem] border border-white/5 hover:${item.border} transition-all duration-500 group relative overflow-hidden flex flex-col h-full`}
                    >
                        {/* Hover Gradient Glow injection */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-700 pointer-events-none" />
                        
                        <div className={`w-16 h-16 rounded-2xl ${item.bg} ${item.border} border flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                            <Icon className={`w-8 h-8 ${item.color}`} />
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                            {item.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed font-medium">
                            {item.description}
                        </p>
                    </motion.div>
                );
            })}
        </div>
      </div>
    </section>
  );
}
