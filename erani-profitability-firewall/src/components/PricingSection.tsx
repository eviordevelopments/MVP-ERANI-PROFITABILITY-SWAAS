"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Zap, CheckCircle2 } from "lucide-react";

export default function PricingSection() {
    return (
        <section id="oferta" className="py-16 md:py-24 px-6 relative overflow-hidden">
            {/* Subtle Strategic Gradients */}
            <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-erani-blue/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-erani-purple/5 blur-[130px] rounded-full pointer-events-none" />
            <div className="container max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="relative glassmorphism p-12 md:p-16 border-erani-blue/30 overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-erani-blue/10 blur-[100px] rounded-full" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-erani-blue/10 border border-erani-blue/20 text-erani-blue text-xs font-bold uppercase tracking-[0.3em] mb-8">
                            Oferta de Lanzamiento
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight font-montserrat leading-tight">Diagnóstico Forense de Rentabilidad</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed mb-10">
                            Identificamos tus fugas financieras y calculamos tu ROI de recuperación en menos de 7 días.
                        </p>

                        <div className="flex items-baseline gap-2 mb-12">
                            <span className="text-5xl md:text-7xl font-bold text-white">$2,950</span>
                            <span className="text-xl font-bold text-gray-500 uppercase">MXN</span>
                        </div>

                        <button 
                            onClick={() => window.location.href = "https://book.stripe.com/9B67sMd4Y6FK9n94lO8N200"}
                            className="button-premium w-full max-w-md text-white py-6 font-bold text-lg md:text-xl flex items-center justify-center gap-4 mb-8 px-4"
                        >
                            Solicitar Peritaje Ahora
                            <ArrowRight className="w-5 h-5 shrink-0" />
                        </button>

                        <div className="grid md:grid-cols-2 gap-6 text-left w-full max-w-2xl mx-auto">
                            {[
                                "Motor de Inferencia Nivel 2",
                                "500 créditos en ERANI Platform",
                                "Control de Scope Creep",
                                "Sesiones mensuales con equipo",
                                "Acceso a plataforma personalizada",
                                "Acceso a features beta",
                                "Auditoría de 3 proyectos históricos",
                                "Reporte de Dark Data Index",
                                "Cálculo de ROI de Blindaje",
                                "Mapa de fugas por herramienta"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-gray-300">
                                    <CheckCircle2 className="w-5 h-5 text-erani-blue shrink-0" />
                                    <span className="text-sm font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 pt-12 border-t border-white/10 w-full">
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white/5 p-8 rounded-3xl border border-white/10">
                                <div className="w-16 h-16 rounded-2xl bg-erani-blue/10 flex items-center justify-center border border-erani-blue/20 p-3">
                                    <img src="/isologo.png" alt="ERANI Isologo" className="w-full h-full object-contain" />
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-xl font-black mb-2 flex items-center justify-center md:justify-start gap-2">
                                        Garantía Blindada
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed italic">
                                        "Si tras auditar tus últimos 3 proyectos no encontramos fugas de capital superiores al costo de este peritaje, el diagnóstico es <span className="text-erani-blue font-bold not-italic">completamente gratuito</span>."
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
