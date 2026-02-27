"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export default function PricingSection() {
    return (
        <section id="oferta" className="py-24 px-6 relative overflow-hidden">
            <div className="container max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative glassmorphism p-12 md:p-16 border-emerald-500/30 overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-500/10 blur-[100px] rounded-full" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
                            Oferta de Lanzamiento
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black mb-6">Diagnóstico Forense de Rentabilidad</h2>
                        <p className="text-lg text-gray-400 mb-10 max-w-2xl">
                            Identificamos tus fugas financieras y calculamos tu ROI de recuperación en menos de 7 días.
                        </p>

                        <div className="flex items-baseline gap-2 mb-12">
                            <span className="text-6xl md:text-7xl font-black text-white">$2,950</span>
                            <span className="text-xl font-bold text-gray-500 uppercase">MXN</span>
                        </div>

                        <button className="w-full max-w-md bg-emerald-500 text-erani-navy py-6 rounded-2xl font-black text-xl glow-emerald hover:scale-[1.02] transition-transform flex items-center justify-center gap-4 mb-8">
                            Solicitar Peritaje Ahora
                            <ArrowRight className="w-6 h-6" />
                        </button>

                        <div className="grid md:grid-cols-2 gap-6 text-left w-full max-w-2xl mx-auto">
                            {[
                                "Auditoría de 3 proyectos históricos",
                                "Reporte de Dark Data Index",
                                "Cálculo de ROI de Blindaje",
                                "Mapa de fugas por herramienta"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                                    <span className="text-sm font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 pt-12 border-t border-white/10 w-full">
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white/5 p-8 rounded-3xl border border-white/10">
                                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 p-3">
                                    <img src="/logoerani.png" alt="ERANI" className="w-full h-full object-contain" />
                                </div>
                                <div className="text-center md:text-left">
                                    <h4 className="text-xl font-black mb-2 flex items-center justify-center md:justify-start gap-2">
                                        Garantía Blindada
                                    </h4>
                                    <p className="text-gray-400 text-sm leading-relaxed italic">
                                        "Si tras auditar tus últimos 3 proyectos no encontramos fugas de capital superiores al costo de este peritaje, el diagnóstico es <span className="text-emerald-400 font-bold not-italic">completamente gratuito</span>."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
