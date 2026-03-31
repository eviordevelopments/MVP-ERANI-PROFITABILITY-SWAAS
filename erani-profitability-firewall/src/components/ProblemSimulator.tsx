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
        <section id="problema" className="py-16 md:py-32 px-6 bg-erani-black relative overflow-hidden">
            {/* Subtle Strategic Gradients */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-erani-blue/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-400px h-400px bg-[#9e80ff]/30 blur-[100px] rounded-full pointer-events-none" />

            <div className="container max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight font-montserrat">
                        La ceguera financiera le <span className="border-b-4 border-erani-coral">cuesta</span> a una agencia promedio <br className="hidden md:block" />
                        <span className="text-[#00F5A0] font-bold tracking-tight">$720,000 MXN anuales.</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed px-4">
                        El trabajo no registrado es capital perdido. Ajusta el nivel de "Datos Oscuros"
                        en tu operación para ver el impacto real en tu utilidad.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div className="glassmorphism p-6 md:p-8 space-y-8 border-erani-blue/10">
                        <div className="space-y-6">
                            <div className="flex justify-between items-end">
                                <label className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-widest">
                                    Nivel de Datos Oscuros
                                </label>
                                <span className="text-3xl md:text-4xl font-black text-erani-blue">{darkData}%</span>
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={darkData}
                                onChange={(e) => setDarkData(parseInt(e.target.value))}
                                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-erani-blue"
                            />
                            <div className="flex justify-between text-[10px] text-gray-500 font-medium font-mono">
                                <span>0% THEORETICAL</span>
                                <span>100% OPERATIONAL CHAOS</span>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/5">
                            <div className="flex items-center gap-6 p-6 rounded-2xl bg-erani-blue/5 border border-erani-blue/10">
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
                                className="glassmorphism p-5 md:p-6 flex gap-4 hover:border-erani-blue/30 transition-all cursor-default group"
                            >
                                <div className="w-12 h-12 shrink-0 rounded-xl bg-erani-black border border-white/5 flex items-center justify-center text-erani-blue group-hover:bg-erani-blue group-hover:text-white transition-all duration-300">
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
