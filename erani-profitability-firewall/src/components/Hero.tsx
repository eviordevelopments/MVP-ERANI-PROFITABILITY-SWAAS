"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Calendar, ShieldCheck, Activity, TrendingUp, Cpu, Database, Zap, HeartPulse, ShieldAlert, Award, PieChart, ScatterChart } from "lucide-react";
import { useEffect, useState, useRef, useMemo } from "react";

const Counter = ({ value, duration = 2 }: { value: number, duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        if (start === end) return;

        let totalMiliseconds = duration * 1000;
        let timer = setInterval(() => {
            start += Math.ceil(end / (duration * 60));
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 1000 / 60);

        return () => clearInterval(timer);
    }, [value, duration]);

    return <span>{count.toLocaleString("en-US")}</span>;
};

const Typewriter = ({ text, delay = 0 }: { text: string, delay?: number }) => {
    const characters = text.split("");
    return (
        <motion.pre className="whitespace-pre-wrap font-sans">
            {characters.map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.05,
                        delay: delay + i * 0.03,
                        ease: "easeIn"
                    }}
                >
                    {char}
                </motion.span>
            ))}
        </motion.pre>
    );
};

export default function Hero() {
    const { scrollY } = useScroll();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const y1 = useTransform(scrollY, [0, 500], [0, 200]);

    const scatterPoints = useMemo(() => {
        return [...Array(12)].map((_, i) => ({
            id: i,
            left: `${(i * 137.5) % 90}%`,
            top: `${(i * 151.7) % 85}%`,
            opacity: 0.1 + ((i * 3) % 4) / 10
        }));
    }, []);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden px-6 pt-32 pb-20 lg:pt-40">
            {/* 🔵 Strategic Background Gradients (Updated) */}
            <div className="absolute top-[10%] right-[15%] w-[400px] h-[400px] bg-erani-blue/10 blur-[130px] rounded-full pointer-events-none select-none animate-pulse" />
            <div className="absolute inset-0 dark-data-grid-bg opacity-20 select-none" />
            <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-blur opacity-30 select-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-blur opacity-20 select-none" />

            {/* Asymmetric Lines (RESTORED) */}
            <div className="asymmetric-line top-[20%] -left-[10%] opacity-20 hidden md:block" />
            <div className="asymmetric-line top-[40%] -left-[5%] opacity-10 hidden md:block" />
            <div className="asymmetric-line top-[70%] -left-[15%] opacity-15 hidden md:block" />

            <div className="container relative z-10 mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Content (RESTORED) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center px-6 py-2 rounded-full border border-[#00F5A0]/30 bg-[#00F5A0]/5 text-[#00F5A0] mb-8"
                    >
                        <span className="text-[7px] md:text-sm font-bold uppercase tracking-[0.3em] font-[family-name:var(--font-montserrat)]">
                            INFERENCIA FORENSE DE NIVEL 2
                        </span>
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-[0.95] text-white !font-bold !leading-[0.95] !tracking-tight">
                        Detén la <br />
                        <span className="brand-light-flow pb-3 inline-block">hemorragia</span> <br />
                        de utilidad.
                    </h2>

                    <div className="text-lg md:text-xl text-gray-400 font-medium max-w-xl mb-10 md:mb-12 leading-relaxed min-h-[4rem]">
                        <Typewriter
                            text="ERANI utiliza un Software with a Service (SwaS) diseñado para rescatar tu margen neto. Identificamos el Scope Creep y las fugas financieras en tus datos operativos, sin que tu equipo tenga que mover un solo dedo."
                            delay={1.5}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                        <button 
                            onClick={() => window.dispatchEvent(new CustomEvent('open-diagnostic'))}
                            className="button-premium group px-8 md:px-10 py-4 md:py-5 font-medium text-lg md:text-xl text-white flex items-center justify-center gap-4 hover:shadow-[0_0_20px_rgba(158,128,255,0.4)]"
                        >
                            ● Solicitar Peritaje de 90 días
                            <ArrowRight className="w-5 h-5 md:w-6 h-6 group-hover:translate-x-1 group-active:translate-x-2 transition-transform" />
                        </button>

                        <button 
                            onClick={() => window.dispatchEvent(new CustomEvent('open-diagnostic'))}
                            className="button-secondary px-8 md:px-10 py-4 md:py-5 font-medium text-lg md:text-xl flex items-center justify-center gap-3"
                        >
                            <Calendar className="w-5 h-5" />
                            Ver Demo
                        </button>
                    </div>

                    <div className="mt-10 md:mt-12 flex items-center gap-4 md:gap-6 text-gray-500">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-erani-navy bg-erani-graphite flex items-center justify-center overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                        <p className="text-xs md:text-sm font-medium tracking-tight">
                            <span className="text-erani-blue font-bold">+120 Agencias</span> protegiendo el margen este mes.
                        </p>
                    </div>
                </motion.div>

                {/* Right Content - RESTORED Main Dashboard + ADDITIONAL Metrics */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="relative"
                >
                    {/* Main Dashboard Card (RESTORED) */}
                    <div className="glassmorphism rounded-xl p-6 md:p-8 relative z-20 overflow-hidden border border-white/20 shadow-2xl backdrop-blur-xl bg-white/[0.005]">
                        <div className="flex justify-between items-start mb-8 md:mb-10">
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mb-1">Motor de Detección en Tiempo Real</p>
                                <h3 className="font-extrabold text-2xl md:text-3xl text-white tracking-tight">Escaneo de Rentabilidad</h3>
                            </div>
                            <Activity className="w-5 h-5 md:w-6 h-6 text-[#0055A0] opacity-50" />
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                            <div className="p-3 md:p-6 bg-white/[0.005] rounded-lg border border-white/20 backdrop-blur-md">
                                <p className="text-[7px] md:text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-1">Fugas Detectadas</p>
                                <div className="text-xl md:text-4xl font-extrabold text-white leading-none">$<Counter value={16800} /></div>
                                <div className="text-[10px] text-[#00F5A0] mt-3 flex items-center gap-1 font-bold">
                                    <TrendingUp className="w-3 h-3" />
                                    +12.5%
                                </div>
                            </div>
                            <div className="p-5 md:p-6 bg-white/[0.005] rounded-lg border border-white/20 backdrop-blur-md">
                                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-3">Índice de Datos Oscuros</p>
                                <div className="text-3xl md:text-4xl font-extrabold text-white leading-none"><Counter value={92} />%</div>
                                <div className="w-full bg-white/5 h-1 rounded-full mt-4 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "92%" }}
                                        transition={{ duration: 2, delay: 0.5 }}
                                        className="h-full bg-[#0055A0]"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Animated Bar Chart (RESTORED) */}
                        <div className="space-y-4 mb-8">
                            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Verdad Operativa vs Reportada</p>
                            <div className="flex items-end gap-2 md:gap-3 h-24 md:h-32 pt-2">
                                {[60, 40, 85, 45, 95, 70, 90].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ duration: 1, delay: 0.8 + (i * 0.1) }}
                                        className={`flex-1 rounded-sm ${i === 4 ? 'bg-[#00F5A0] shadow-[0_0_15px_rgba(0,245,160,0.3)]' : 'bg-white/10'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* NEW ADDITIONAL SECTION: Efficiency & Dispersion (Added without removing previous ones) */}
                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center px-1">
                                    <span className="text-[9px] font-bold text-[#00F5A0] uppercase tracking-wider">Eficiencia</span>
                                    <PieChart className="w-3 h-3 text-[#00F5A0]/50" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full border border-red-500/30 flex items-center justify-center text-[8px] text-red-500 font-bold">72%</div>
                                    <div className="w-8 h-8 rounded-full border border-[#00F5A0] flex items-center justify-center text-[8px] text-[#00F5A0] font-bold shadow-[0_0_10px_rgba(0,245,160,0.2)]">98%</div>
                                </div>
                            </div>
                            <div className="relative h-12 bg-white/[0.03] rounded-lg overflow-hidden p-2">
                                <div className="flex justify-between relative z-10">
                                    <span className="text-[7px] text-gray-500 font-bold uppercase tracking-tight">Nodes</span>
                                    <ScatterChart className="w-2 h-2 text-blue-400/50" />
                                </div>
                                {isMounted && scatterPoints.map(p => (
                                    <div
                                        key={p.id}
                                        className="absolute w-0.5 h-0.5 bg-[#00F5A0] rounded-full"
                                        style={{ left: p.left, top: p.top, opacity: p.opacity }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* NEW ADDITIONAL SECTION: Animated Icons Floating (Added below main card) */}
                    <div className="mt-4 flex justify-between gap-4">
                        {[
                            { icon: HeartPulse, label: "Salud", color: "text-erani-blue" },
                            { icon: ShieldAlert, label: "Seguridad", color: "text-erani-purple" },
                            { icon: Award, label: "Calidad", color: "text-erani-coral" },
                            { icon: Zap, label: "ROI", color: "text-erani-blue" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1 + (i * 0.1) }}
                                className="flex-1 glassmorphism p-2 flex flex-col items-center gap-1 border-white/5"
                            >
                                <item.icon className={`w-4 h-4 ${item.color}`} />
                                <span className="text-[6px] font-black text-gray-500 uppercase tracking-tighter">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Floating Component (RESTORED) */}
                    <motion.div
                        style={{ y: isMounted ? y1 : 0 }}
                        className="absolute -top-6 -right-6 md:-top-10 md:-right-10 z-30 animate-float hidden md:block"
                    >
                        <div className="glassmorphism border border-white/20 p-3 md:p-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-[#00F5A0] shadow-2xl rounded-xl backdrop-blur-xl bg-white/[0.005]">
                            <Cpu className="w-8 h-8 md:w-10 h-10" />
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
