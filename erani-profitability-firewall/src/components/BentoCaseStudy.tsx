"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, Activity, HeartPulse, ShieldAlert, Award, BarChart4, PieChart, ScatterChart } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

const Counter = ({ value, duration = 3, prefix = "", suffix = "" }: { value: number, duration?: number, prefix?: string, suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            setCount(Math.floor(progress * value));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }, [value, duration]);

    return <span>{prefix}{count.toLocaleString("en-US")}{suffix}</span>;
};

const CircularProgress = ({ percentage, color = "emerald" }: { percentage: number, color?: string }) => {
    const radius = 30;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
                <circle
                    cx="40" cy="40" r={radius}
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="transparent"
                    className="text-white/5"
                />
                <motion.circle
                    cx="40" cy="40" r={radius}
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="transparent"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className={color === "emerald" ? "text-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" : "text-red-500"}
                />
            </svg>
            <span className="absolute text-xs font-black">{percentage}%</span>
        </div>
    );
};

export default function BentoCaseStudy() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Stable random points for the scatter plot to avoid hydration mismatch
    const scatterNodes = useMemo(() => {
        return [...Array(20)].map((_, i) => ({
            id: i,
            left: `${(i * 137.5) % 95}%`, // Pseudo-random distribution
            top: `${(i * 151.7) % 90}%`,
            isEmerald: (i * 3) % 10 > 6,
            opacity: 0.2 + ((i * 7) % 8) / 10
        }));
    }, []);

    return (
        <section id="impacto" className="py-32 px-6 bg-erani-navy relative overflow-hidden">
            {/* Strategic Background Gradients */}
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-emerald-600/5 blur-[200px] rounded-full pointer-events-none" />

            <div className="container max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                <ShieldAlert className="w-5 h-5 text-emerald-400" />
                            </div>
                            <span className="text-[12px] font-black uppercase tracking-[0.4em] text-emerald-500">Forensic Audit Result</span>
                        </motion.div>
                        <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9] text-white tracking-tighter">
                            Evidencia de <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">Impacto Irrefutable</span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                            Analizamos el flujo de "Datos Oscuros" del Caso Nola. Sin intervención manual, la IA detectó la hemorragia financiera en tiempo récord.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6">
                    {/* Main Highlight - Animated Counter */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 md:row-span-2 glassmorphism p-10 flex flex-col justify-end relative overflow-hidden group border-emerald-500/30"
                    >
                        <div className="absolute top-0 right-0 p-10 opacity-20 group-hover:opacity-40 transition-opacity">
                            <TrendingUp className="w-32 h-32 text-emerald-500 animate-float" />
                        </div>
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                Liquidez Recuperada
                            </div>
                            <h3 className="text-7xl md:text-9xl font-black mb-6 text-white tracking-tighter leading-none">
                                ${isMounted ? <Counter value={16800} duration={3.5} /> : "0"}
                            </h3>
                            <p className="text-gray-400 text-xl font-medium max-w-sm">Detección pasiva automatizada de horas no facturadas.</p>
                        </div>
                    </motion.div>

                    {/* Circular Chart - Lost vs Recovered */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 glassmorphism p-8 flex flex-col justify-between border-red-500/20 bg-red-500/[0.02]"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h4 className="font-black text-gray-400 text-xs uppercase tracking-widest">Efficiency Breakdown</h4>
                            <PieChart className="w-5 h-5 text-red-400" />
                        </div>
                        <div className="flex items-center justify-around gap-8 py-4">
                            <div className="flex flex-col items-center gap-4">
                                <CircularProgress percentage={72} color="red" />
                                <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Fuga Detectada</span>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <CircularProgress percentage={98} color="emerald" />
                                <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Saneamiento</span>
                            </div>
                        </div>
                        <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-6 text-center italic">Triangulación de metadatos vs Realidad Operativa</p>
                    </motion.div>

                    {/* Dispersion / Data Nodes Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-2 glassmorphism p-8 border-blue-500/20 relative group"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <div className="space-y-1">
                                <h4 className="font-black text-white text-sm uppercase tracking-widest">Data Dispersion</h4>
                                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Cross-Platform Analysis Nodes</p>
                            </div>
                            <ScatterChart className="w-5 h-5 text-blue-400" />
                        </div>

                        <div className="h-32 w-full relative">
                            {scatterNodes.map((node) => (
                                <motion.div
                                    key={node.id}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: node.opacity, scale: 1 }}
                                    transition={{ delay: node.id * 0.03, duration: 0.5 }}
                                    className={`absolute w-1.5 h-1.5 rounded-full ${node.isEmerald ? 'bg-emerald-500 glow-emerald' : 'bg-white/20'}`}
                                    style={{
                                        left: node.left,
                                        top: node.top
                                    }}
                                />
                            ))}
                            <div className="absolute inset-0 border-b border-l border-white/5" />
                        </div>
                    </motion.div>

                    {/* Icons Row */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-4 glassmorphism p-10 grid grid-cols-2 lg:grid-cols-4 gap-12 items-center border-white/5"
                    >
                        {[
                            { icon: HeartPulse, label: "Salud Operativa", color: "text-emerald-400", bg: "bg-emerald-500/5", border: "border-emerald-500/20" },
                            { icon: ShieldAlert, label: "Seguridad Forense", color: "text-blue-400", bg: "bg-blue-500/5", border: "border-blue-500/20" },
                            { icon: Award, label: "Calidad de Data", color: "text-yellow-500", bg: "bg-yellow-500/5", border: "border-yellow-500/20" },
                            { icon: Zap, label: "Rendimiento Neto", color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/30" }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-6 group cursor-default">
                                <div className={`w-20 h-20 rounded-[2rem] ${item.bg} ${item.border} border flex items-center justify-center ${item.color} group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] transition-all duration-500`}>
                                    <item.icon className="w-10 h-10 transition-transform group-hover:rotate-12" />
                                </div>
                                <div className="text-center">
                                    <span className="text-xs font-black text-gray-300 uppercase tracking-[.3em] group-hover:text-white transition-colors">{item.label}</span>
                                    <div className="w-12 h-1 bg-emerald-500/0 group-hover:bg-emerald-500/50 mx-auto mt-2 transition-all" />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
