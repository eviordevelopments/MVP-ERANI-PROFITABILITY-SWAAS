"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Activity, TrendingUp, Cpu, Database, Smartphone, Laptop, Zap, HeartPulse, ShieldAlert, Award, PieChart, ScatterChart } from "lucide-react";
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
            {/* 🟢 Strategic Background Gradients (RESTORED & ENHANCED) */}
            <div className="absolute top-[10%] right-[15%] w-[400px] h-[400px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none select-none animate-pulse" />
            <div className="absolute inset-0 dark-data-grid-bg opacity-20 select-none" />
            <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-blur opacity-30 select-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-emerald-blur opacity-20 select-none" />

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
                        className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8"
                    >
                        <img src="/logoerani.png" alt="ERANI" className="w-4 h-4 object-contain" />
                        Inferencia Forense de Nivel 2
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 md:mb-8 leading-[0.95] text-white">
                        Detén la <br />
                        <span className="green-light-flow">hemorragia</span> <br />
                        de utilidad.
                    </h1>

                    <div className="text-lg md:text-xl text-gray-400 max-w-xl mb-10 md:mb-12 leading-relaxed min-h-[4rem]">
                        <Typewriter
                            text="Identificamos fugas financieras por trabajo no facturado mediante Auditoría Forense de Datos. Recupera tu margen neto de forma automatizada."
                            delay={1.5}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                        <button className="button-premium group px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl text-erani-navy flex items-center justify-center gap-4">
                            Solicitar Diagnóstico Forense
                            <ArrowRight className="w-5 h-5 md:w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button className="px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl text-white border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-3">
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
                            <span className="text-emerald-400 font-bold">+120 Agencias</span> protegiendo el margen este mes.
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
                    <div className="glassmorphism p-6 md:p-8 relative z-20 overflow-hidden border-emerald-500/20">
                        <div className="flex justify-between items-start mb-8 md:mb-10">
                            <div>
                                <h3 className="font-black text-xl md:text-2xl text-white">Profitability Scan</h3>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Real-time Detection Engine</p>
                            </div>
                            <Activity className="w-6 h-6 md:w-8 h-8 text-emerald-500 animate-pulse" />
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                            <div className="p-4 md:p-6 bg-white/5 rounded-2xl border border-white/5">
                                <p className="text-[8px] md:text-[10px] text-gray-400 font-black uppercase tracking-tighter mb-2">Leaks Detected</p>
                                <div className="text-2xl md:text-3xl font-black text-white">$<Counter value={16800} /></div>
                                <div className="text-[10px] md:text-xs text-emerald-400 mt-1 flex items-center gap-1">
                                    <TrendingUp className="w-3 h-3" />
                                    +12.5%
                                </div>
                            </div>
                            <div className="p-4 md:p-6 bg-white/5 rounded-2xl border border-white/5">
                                <p className="text-[8px] md:text-[10px] text-gray-400 font-black uppercase tracking-tighter mb-2">Dark Data Index</p>
                                <div className="text-2xl md:text-3xl font-black text-white"><Counter value={92} />%</div>
                                <div className="w-full bg-white/10 h-1 rounded-full mt-3 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "92%" }}
                                        transition={{ duration: 2, delay: 0.5 }}
                                        className="h-full bg-emerald-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Animated Bar Chart (RESTORED) */}
                        <div className="space-y-4 mb-8">
                            <p className="text-[10px] text-gray-400 font-black uppercase tracking-tighter">Operational Truth vs Reported</p>
                            <div className="flex items-end gap-2 md:gap-3 h-24 md:h-32">
                                {[60, 40, 85, 45, 95, 70, 90].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        transition={{ duration: 1, delay: 0.8 + (i * 0.1) }}
                                        className={`flex-1 rounded-t-md md:rounded-t-lg ${i === 4 ? 'bg-emerald-500 glow-emerald' : 'bg-white/10'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* NEW ADDITIONAL SECTION: Efficiency & Dispersion (Added without removing previous ones) */}
                        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center px-1">
                                    <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">Efficiency</span>
                                    <PieChart className="w-3 h-3 text-emerald-400" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full border-2 border-red-500/30 flex items-center justify-center text-[8px] text-red-500 font-black">72%</div>
                                    <div className="w-8 h-8 rounded-full border-2 border-emerald-500 flex items-center justify-center text-[8px] text-emerald-500 font-black glow-emerald">98%</div>
                                </div>
                            </div>
                            <div className="relative h-12 bg-white/5 rounded-xl overflow-hidden p-2">
                                <div className="flex justify-between relative z-10">
                                    <span className="text-[7px] text-gray-500 font-black uppercase">Nodes</span>
                                    <ScatterChart className="w-2 h-2 text-blue-400" />
                                </div>
                                {isMounted && scatterPoints.map(p => (
                                    <div
                                        key={p.id}
                                        className="absolute w-0.5 h-0.5 bg-emerald-500 rounded-full"
                                        style={{ left: p.left, top: p.top, opacity: p.opacity }}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* NEW ADDITIONAL SECTION: Animated Icons Floating (Added below main card) */}
                    <div className="mt-4 flex justify-between gap-4">
                        {[
                            { icon: HeartPulse, label: "Salud", color: "text-emerald-400" },
                            { icon: ShieldAlert, label: "Seguridad", color: "text-blue-400" },
                            { icon: Award, label: "Calidad", color: "text-yellow-500" },
                            { icon: Zap, label: "ROI", color: "text-emerald-500" }
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
                        <div className="glassmorphism p-3 md:p-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-emerald-400 scale-110">
                            <Cpu className="w-8 h-8 md:w-10 h-10" />
                        </div>
                    </motion.div>

                    {/* Device Renders (RESTORED) */}
                    <div className="absolute -bottom-20 -right-20 opacity-30 select-none pointer-events-none hidden xl:block">
                        <div className="relative">
                            <Laptop className="w-48 h-48 text-gray-700" />
                            <Smartphone className="absolute bottom-0 -left-6 w-24 h-24 text-gray-600" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
