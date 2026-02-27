"use client";

import { motion } from "framer-motion";
import { Download, Cpu, PieChart, CheckCircle } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Exportación Segura",
        description: "Tú exportas los registros de actividad de Slack, Jira y ClickUp. Sin claves, sin accesos en vivo.",
        icon: Download,
        connection: true
    },
    {
        id: 2,
        title: "Triangulación por IA",
        description: "Nuestro motor procesa metadata histórica y la cruza contra tus contratos de Level 2 Inference.",
        icon: Cpu,
        connection: true
    },
    {
        id: 3,
        title: "Reporte de Hallazgos",
        description: "Detectamos exactamente dónde y cuánto dinero estás perdiendo en cada proyecto.",
        icon: PieChart,
        connection: false
    }
];

export default function SimulationHub() {
    return (
        <section id="solucion" className="py-24 px-6 relative">
            <div className="container max-w-5xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Auditoría Forense, no integración invasiva.</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Procesamos la verdad operativa mediante inferencia, manteniendo el control total de tus datos en tus manos.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col items-center text-center p-8 glassmorphism border-emerald-500/20"
                        >
                            <div className="w-20 h-20 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 relative z-10">
                                <step.icon className="w-10 h-10 text-emerald-400" />
                                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-emerald-500 text-erani-navy text-xs font-bold flex items-center justify-center">
                                    {step.id}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>

                            {step.connection && (
                                <div className="hidden md:block absolute top-1/2 -right-4 translate-x-full w-8 h-[2px] bg-gradient-to-r from-emerald-500/50 to-transparent z-0" />
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="mt-16 flex justify-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
                        <CheckCircle className="w-5 h-5 text-emerald-500" />
                        Sin conexiones en vivo. Tú mantienes el control.
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
