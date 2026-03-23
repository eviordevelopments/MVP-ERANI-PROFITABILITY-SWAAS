"use client";

import { motion } from "framer-motion";
import { ShieldCheck, MessageSquare, ListTodo, Receipt, ChevronRight, Lock } from "lucide-react";

export default function AuditProtocol() {
  const protocolItems = [
    {
      icon: MessageSquare,
      title: "Export de Canales Operativos",
      description: "Historial de mensajes de canales específicos del proyecto (Slack/Teams).",
      tag: "Canal: CSV/JSON",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20",
    },
    {
      icon: ListTodo,
      title: "Logs de Gestión de Tareas",
      description: "Reporte en CSV de tiempos y estados de tus herramientas actuales (Jira, ClickUp, Asana).",
      tag: "Formato: CSV",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "border-emerald-400/20",
    },
    {
      icon: Receipt,
      title: "Dashboard de Facturación",
      description: "Listado de montos facturados por proyecto para triangulación de márgenes reales (Opcional).",
      tag: "Opcional",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20",
    },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden font-sans">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-[-5%] w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[-5%] w-[500px] h-[500px] bg-erani-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-2"
          >
            <Lock className="w-3.5 h-3.5 text-emerald-500" />
            Privacidad por Diseño
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight font-montserrat">
            Protocolo de Auditoría: <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              Seguridad y Transparencia.
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            No necesitamos acceso a tus contraseñas ni conexiones en vivo. Tú mantienes el control total enviándonos solo los metadatos necesarios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {protocolItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group glassmorphism p-6 md:p-8 rounded-[2rem] border border-white/5 hover:${item.border} transition-all duration-500 relative flex flex-col h-full overflow-hidden`}
            >
              {/* Feature Icon */}
              <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.border} border flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${item.bg} ${item.border} border ${item.color}`}>
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight font-montserrat">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Decoration */}
              <div className="mt-auto pt-6 flex items-center justify-between border-t border-white/5">
                <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Procedimiento Seguro</span>
                <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Badge Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 backdrop-blur-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span className="text-sm font-medium text-gray-300">Cifrado de grado militar en la recepción de archivos</span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 font-bold">Protocolo Zero-Knowledge Integrado</p>
        </motion.div>
      </div>
    </section>
  );
}
