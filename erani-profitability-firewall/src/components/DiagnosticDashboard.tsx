"use client";

import { motion } from "framer-motion";
import { 
    TrendingUp, 
    ShieldAlert, 
    Zap, 
    ArrowRight, 
    Download, 
    Calendar, 
    Lock, 
    CheckCircle2,
    BarChart3,
    AlertTriangle
} from "lucide-react";

interface DiagnosticDashboardProps {
    data: any;
    onReset: () => void;
}

export default function DiagnosticDashboard({ data, onReset }: DiagnosticDashboardProps) {
    // Mock calculations based on input
    const revenue = parseInt(data[3] || "0");
    const teamSize = parseInt(data[4] || "0");
    const operationalEfficiency = data[2] || 65;
    
    // Leak estimate: (1 - efficiency/100) * revenue * 0.15 (conservative factor)
    const monthlyLeak = Math.round((1 - operationalEfficiency / 100) * revenue * 0.12);
    const annualCOI = monthlyLeak * 12;

    return (
        <div className="pt-28 pb-12 px-6 max-w-6xl mx-auto font-sans relative">
            {/* Header */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-erani-blue/10 border border-erani-blue/20 text-erani-blue text-[10px] font-bold uppercase tracking-widest mb-3">
                        Diagnóstico Completado
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Reporte Forense: <span className="text-erani-blue">{data.contact?.name || "Empresa"}</span>
                    </h1>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-all text-sm">
                        <Download className="w-4 h-4" />
                        Descargar PDF Full
                    </button>
                </div>
            </header>

            {/* Main Insights Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
                {/* Primary Leak Stat */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:col-span-8 glassmorphism p-10 border-erani-coral/20 bg-erani-coral/[0.02] relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <ShieldAlert className="w-32 h-32 text-erani-coral" />
                    </div>
                    <div className="relative z-10">
                        <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-8">Hemorragia Mensual Estimada</h4>
                        <div className="text-4xl sm:text-5xl md:text-8xl font-bold text-white tracking-tighter mb-4 animate-pulse truncate w-full">
                            ${(data.leak || 16800).toLocaleString('en-US', { minimumFractionDigits: 2 })} <span className="text-2xl text-gray-500 uppercase">MXN</span>
                        </div>
                        <p className="text-gray-400 max-w-lg leading-relaxed text-sm">
                            Tu agencia presenta una pérdida latente por procesos no auditados y horas de consultoría sin registro. Este capital se está diluyendo directamente de tu margen de utilidad neto.
                        </p>
                    </div>
                </motion.div>

                {/* Team Friction Index */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="lg:col-span-4 glassmorphism p-10 border-white/5 flex flex-col justify-between"
                >
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fricción Operativa</h4>
                    <div className="py-8">
                        <div className="text-5xl font-bold text-erani-blue">{(100 - operationalEfficiency)}%</div>
                        <div className="text-[10px] font-medium text-gray-600 uppercase tracking-widest mt-2">Pérdida de Visibilidad</div>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-erani-blue" style={{ width: `${100 - operationalEfficiency}%` }} />
                    </div>
                    <p className="text-[10px] text-gray-500 mt-6 leading-relaxed uppercase">La metadata sugiere ceguera en el 20% de los hilos de comunicación.</p>
                </motion.div>
            </div>

            {/* Secondary Grid: COI & Blurred Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {/* Cost of Inaction */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glassmorphism p-8 border-white/5"
                >
                    <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">COI ANUAL (Costo de Inacción)</h4>
                    <div className="text-4xl font-bold text-white mb-2">${annualCOI.toLocaleString()}</div>
                    <p className="text-xs text-gray-500 leading-relaxed italic">Capital recuperable mediante Blindaje Forense Erani.</p>
                </motion.div>

                {/* Locked Metric 1 */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="glassmorphism p-8 border-white/5 group relative cursor-pointer overflow-hidden"
                >
                    <div className="absolute inset-0 flex items-center justify-center bg-erani-black/40 backdrop-blur-md z-20 group-hover:bg-erani-black/20 transition-all">
                        <div className="flex flex-col items-center gap-3">
                            <Lock className="w-6 h-6 text-erani-blue" />
                            <span className="text-[9px] font-bold text-white tracking-widest">REQUIERE PERITAJE</span>
                        </div>
                    </div>
                    <h4 className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-6 border-b border-white/5 pb-4">Desviación en Scope Creep</h4>
                    <div className="text-4xl font-bold text-gray-800 blur-md select-none">$89,200</div>
                </motion.div>

                {/* Locked Metric 2 */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="glassmorphism p-8 border-white/5 group relative cursor-pointer overflow-hidden"
                >
                    <div className="absolute inset-0 flex items-center justify-center bg-erani-black/40 backdrop-blur-md z-20 group-hover:bg-erani-black/20 transition-all">
                        <div className="flex flex-col items-center gap-3">
                            <Lock className="w-6 h-6 text-erani-purple" />
                            <span className="text-[9px] font-bold text-white tracking-widest uppercase">Análisis Genético Erani</span>
                        </div>
                    </div>
                    <h4 className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-6 border-b border-white/5 pb-4">Eficiencia vs Benchmarks</h4>
                    <div className="text-4xl font-bold text-gray-800 blur-md select-none">Top 12%</div>
                </motion.div>
            </div>

            {/* CTA Section: Schedule */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="glassmorphism p-12 border-erani-blue/30 bg-erani-blue/[0.03] flex flex-col items-center text-center gap-10"
            >
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">¿Quieres recuperar este capital en menos de 21 días?</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Agenda una sesión de 15 minutos con nuestro equipo forense. <br className="hidden md:block" />
                        Desbloquearemos tu reporte completo y crearemos tu estrategia de blindaje financiero sin costo inicial.
                    </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 w-full max-w-xl">
                    <button className="button-premium flex-1 text-white py-5 rounded-2xl font-bold text-base flex items-center justify-center gap-3 whitespace-nowrap px-6">
                        <Calendar className="w-5 h-5 shrink-0" />
                        Agendar Sesión de 15 min
                    </button>
                    <button className="flex-1 border border-erani-blue/50 text-erani-blue py-5 rounded-2xl font-bold text-base hover:bg-erani-blue/10 hover:border-erani-blue transition-all whitespace-nowrap px-6">
                        Contacta a Ventas
                    </button>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-8 pt-6">
                    <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                            <img key={i} src={`https://i.pravatar.cc/100?img=${i + 20}`} className="w-10 h-10 rounded-full border-2 border-erani-navy" alt="avatar" />
                        ))}
                        <div className="w-10 h-10 rounded-full bg-erani-blue flex items-center justify-center text-[10px] font-bold border-2 border-erani-navy">+12</div>
                    </div>
                    <p className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">
                        Fundadores de Agencias ya han blindado su operación tras este diagnóstico
                    </p>
                </div>
            </motion.div>

            {/* Footer Navigation Removed */}
        </div>
    );
}
