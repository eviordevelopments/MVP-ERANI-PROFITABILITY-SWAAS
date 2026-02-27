"use client";

import { motion } from "framer-motion";
import { Send, CreditCard, Lock, CheckCircle2 } from "lucide-react";

export default function CheckoutForm() {
    return (
        <section id="registro" className="py-24 px-6 bg-erani-navy relative overflow-hidden">
            <div className="container max-w-2xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-4">
                        Protocolo de Peritaje Activo
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Agendar Peritaje Forense</h2>
                    <p className="text-gray-400 text-sm md:text-base px-4">Inicia la recuperación de capital analizando tu estructura de datos actual.</p>
                </div>

                <form className="glassmorphism p-6 md:p-12 space-y-8 border-emerald-500/10" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Nombre Completo</label>
                            <input
                                type="text"
                                placeholder="Juan Pérez"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all text-sm"
                                required
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Nombre de la Agencia</label>
                            <input
                                type="text"
                                placeholder="Digital Flow SA"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all text-sm"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Canales Operativos (Triangulación)</label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {['Slack', 'Jira', 'ClickUp'].map((tool) => (
                                <label key={tool} className="flex items-center justify-between gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl cursor-pointer hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all group">
                                    <span className="text-sm font-bold text-gray-300 group-hover:text-emerald-400 transition-colors">{tool}</span>
                                    <div className="w-5 h-5 rounded-md border-2 border-white/10 flex items-center justify-center transition-all group-hover:border-emerald-500/50">
                                        <input type="checkbox" className="hidden peer" />
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500 opacity-0 transition-opacity peer-checked:opacity-100" />
                                    </div>
                                </label>
                            ))}
                        </div>
                        <p className="text-[10px] text-gray-600 font-bold uppercase italic text-center">Sin conexiones en vivo. Análisis por exportación segura.</p>
                    </div>

                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Email Corporativo</label>
                        <input
                            type="email"
                            placeholder="juan@agencia.com"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all text-sm"
                            required
                        />
                    </div>

                    <div className="pt-4">
                        <button className="button-premium w-full py-5 rounded-2xl font-black text-lg md:text-xl text-erani-navy flex items-center justify-center gap-4 group">
                            <CreditCard className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            Garantizar Acceso ($2,950 MXN)
                        </button>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-[10px] text-gray-500 font-black uppercase tracking-widest pt-4">
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                            <Lock className="w-3 h-3 text-emerald-500" />
                            Pago Encriptado
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                            <Send className="w-3 h-3 text-emerald-500" />
                            Reporte Instantáneo
                        </div>
                    </div>
                </form>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
        </section>
    );
}
