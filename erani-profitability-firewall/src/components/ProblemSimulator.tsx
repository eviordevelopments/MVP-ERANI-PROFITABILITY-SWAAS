"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Info, AlertTriangle, TrendingDown, BarChart3 } from "lucide-react";

export default function ProblemSimulator() {
    const [darkData, setDarkData] = useState(60);

    const calculateLoss = (percentage: number) => {
        return (percentage * 12000).toLocaleString("en-US");
    };

    return (
        <section id="problema" className="py-24 px-6 bg-erani-navy relative overflow-hidden">
            <div className="container max-w-6xl mx-auto">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        La ceguera financiera le <span className="border-b-4 border-red-500">cuesta</span> a una agencia promedio <br className="hidden md:block" />
                        <span className="text-emerald-500">$720,000 MXN anuales.</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base px-4">
                        El trabajo no registrado es capital perdido. Ajusta el nivel de "Datos Oscuros"
                        en tu operación para ver el impacto real en tu utilidad.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div className="glassmorphism p-6 md:p-8 space-y-8 border-emerald-500/10">
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest">
                                    Nivel de Datos Oscuros
                                </label>
                                <span className="text-3xl md:text-4xl font-black text-emerald-400">{darkData}%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={darkData}
                                onChange={(e) => setDarkData(parseInt(e.target.value))}
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                            />
                            <div className="flex justify-between text-[10px] text-gray-500 font-medium font-mono">
                                <span>0% THEORETICAL</span>
                                <span>100% OPERATIONAL CHAOS</span>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/5">
                            <div className="flex items-center gap-6 p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                                <div className="p-3 bg-red-500/20 rounded-xl">
                                    <TrendingDown className="w-8 h-8 text-red-400" />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-[10px] text-red-500/70 uppercase font-black tracking-widest">Estimated Monthly Leak</div>
                                    <div className="text-2xl md:text-3xl font-black text-white">$ {calculateLoss(darkData)} MXN</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {[
                            {
                                title: "80% de la operación es invisible",
                                desc: "Ocurre en hilos de Slack y tareas que nadie cronometra.",
                                icon: Info
                            },
                            {
                                title: "30% de error en registro manual",
                                desc: "Tu equipo odia los cronómetros; la data manual es ficción.",
                                icon: AlertTriangle
                            },
                            {
                                title: "Los 'ajustitos' matan el margen",
                                desc: "Cada hora no facturada es dinero que sale de tu bolsillo.",
                                icon: BarChart3
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ x: 30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="glassmorphism p-5 md:p-6 flex gap-4 hover:border-emerald-500/30 transition-all cursor-default group"
                            >
                                <div className="w-12 h-12 shrink-0 rounded-xl bg-erani-graphite flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-erani-navy transition-all duration-300">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-black text-base md:text-lg mb-1">{item.title}</h4>
                                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
