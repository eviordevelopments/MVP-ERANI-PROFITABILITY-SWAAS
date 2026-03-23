import { motion } from "framer-motion";
import { Activity, ShieldAlert, BarChart3, TrendingUp, Search, Clock, AlertTriangle, FileText, RefreshCcw, Users, Eye, Crosshair } from "lucide-react";

const kpis = [
    {
        title: "MONITOR DE BUCLE DE REVISIONES",
        value: "11.5%",
        desc: "Umbral SODA superado. Las tareas están regresando a revisión más de lo tolerable, indicando falta de claridad en el SOW original.",
        color: "coral",
        type: "circular"
    },
    {
        title: "ÍNDICE DE FRICCIÓN DE TALENTO",
        value: "84.6%",
        desc: "La mayoría de los tickets presentan una latencia superior a 72 horas desde su creación hasta su última actualización, indicando \"Ceguera Operativa\".",
        color: "coral",
        type: "gauge"
    },
    {
        title: "ÍNDICE DE DATOS OSCUROS (DARK DATA INDEX)",
        value: "100%",
        desc: "ERANI tuvo que iluminar la totalidad de la metadata mediante Inferencia Nivel 2 ante la ausencia absoluta de registros (logs).",
        color: "blue",
        type: "stat"
    },
    {
        title: "INTENSIDAD DE SCOPE CREEP",
        value: "50%",
        desc: "La mitad de la fuga es atribuible directamente a solicitudes externas ([EXT]) que no estaban presupuestadas como horas de consultoría/ajuste.",
        color: "coral",
        type: "horizontal"
    }
];

const forensicTickets = [
    { id: "86dyq32gz", desc: "Bloqueo Post-Feedback Positivo (ODS)", type: "[INT]", hrs: 6, cost: "$2,700.00", color: "red" },
    { id: "86dyq1z7a", desc: "Métodos de Pago No Seleccionables", type: "[INT]", hrs: 6, cost: "$2,700.00", color: "red" },
    { id: "86dyq1z8t", desc: "Actualización Recurso IA Tendencias", type: "[EXT]", hrs: 6, cost: "$2,700.00", color: "red" },
    { id: "86dyugw9v", desc: "Refactorización de Preguntas M2:L3", type: "[EXT]", hrs: 6, cost: "$2,700.00", color: "red" },
    { id: "86dyqday4", desc: "Migración dev.tasks en Producción", type: "[INT]", hrs: 4, cost: "$1,800", color: "yellow" },
    { id: "-", desc: "OTROS 6 TICKETS (Consolidado)", type: "[VAR]", hrs: 9.3, cost: "$4,200", color: "yellow" },
];

export default function ForensicFunnel() {
    return (
        <section className="py-24 px-6 relative overflow-hidden font-sans">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-erani-blue/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-erani-purple/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container max-w-7xl mx-auto relative z-10">
                
                {/* Section Header: KPIS DE SALUD OPERATIVA */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-[0.2em] uppercase mb-4">
                        KPIS DE SALUD OPERATIVA
                    </h2>
                    <div className="w-24 h-1 bg-erani-blue mx-auto opacity-50" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-24">
                    {/* Left Column - Review Loop */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="group lg:col-span-4 glassmorphism p-8 border-white/5 flex flex-col justify-between hover:border-erani-coral/30 hover:shadow-[0_0_30px_rgba(255,92,92,0.08)] transition-all duration-300"
                    >
                        <div>
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 group-hover:border-erani-coral/50 group-hover:shadow-[0_0_12px_rgba(255,92,92,0.25)] transition-all duration-300 mb-6">
                                <RefreshCcw className="w-5 h-5 text-gray-500 group-hover:text-erani-coral transition-colors duration-300" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-8">{kpis[0].title}</h4>
                            <div className="flex items-center gap-6 mb-8">
                                <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter">{kpis[0].value}</span>
                                <div className="w-16 h-16 rounded-full border-4 border-white/5 relative flex items-center justify-center">
                                    <div className="absolute inset-0 border-t-4 border-erani-coral rounded-full rotate-[45deg]" />
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed font-normal">{kpis[0].desc}</p>
                    </motion.div>

                    {/* Right Column Grid */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Talent Friction */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="group glassmorphism p-8 border-white/5 relative overflow-hidden md:col-span-2 hover:border-erani-blue/30 hover:shadow-[0_0_30px_rgba(0,85,160,0.08)] transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row justify-between gap-8">
                                <div className="max-w-md">
                                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 group-hover:border-erani-blue/50 group-hover:shadow-[0_0_12px_rgba(0,85,160,0.25)] transition-all duration-300 mb-6">
                                        <Users className="w-5 h-5 text-gray-500 group-hover:text-erani-blue transition-colors duration-300" strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-6">{kpis[1].title}</h4>
                                    <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter block mb-6">{kpis[1].value}</span>
                                    <p className="text-xs text-gray-500 leading-relaxed">{kpis[1].desc}</p>
                                </div>
                                <div className="flex-1 flex items-center justify-center">
                                    <div className="relative w-48 h-24 overflow-hidden">
                                        <div className="absolute inset-0 border-[12px] border-white/5 rounded-t-full" />
                                        <div className="absolute inset-0 border-[12px] border-erani-coral rounded-t-full" style={{ clipPath: 'inset(0 0 0 70%)', transform: 'rotate(45deg)' }} />
                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-20 bg-erani-coral origin-bottom rotate-[45deg]" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Dark Data Index */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="group glassmorphism p-8 border-white/5 hover:border-erani-blue/30 hover:shadow-[0_0_30px_rgba(0,85,160,0.1)] transition-all duration-300"
                        >
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 group-hover:border-erani-blue/50 group-hover:shadow-[0_0_12px_rgba(0,85,160,0.3)] transition-all duration-300 mb-6">
                                <Eye className="w-5 h-5 text-gray-500 group-hover:text-erani-blue transition-colors duration-300" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-6 leading-relaxed">{kpis[2].title}</h4>
                            <span className="text-5xl md:text-6xl font-bold text-erani-blue tracking-tighter block mb-6">{kpis[2].value}</span>
                            <p className="text-xs text-gray-500 leading-relaxed">{kpis[2].desc}</p>
                        </motion.div>

                        {/* Scope Creep */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="group glassmorphism p-8 border-white/5 flex flex-col justify-between hover:border-erani-coral/30 hover:shadow-[0_0_30px_rgba(255,92,92,0.08)] transition-all duration-300"
                        >
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 group-hover:border-erani-coral/50 group-hover:shadow-[0_0_12px_rgba(255,92,92,0.25)] transition-all duration-300 mb-6">
                                <Crosshair className="w-5 h-5 text-gray-500 group-hover:text-erani-coral transition-colors duration-300" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-6">{kpis[3].title}</h4>
                            <div className="flex items-center justify-between mb-6">
                                <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">{kpis[3].desc}</p>
                                <span className="text-5xl font-bold text-white tracking-tighter">{kpis[3].value}</span>
                            </div>
                            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                <div className="w-1/2 h-full bg-erani-coral glow-coral" />
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Section: ANÁLISIS FORENSE (Table) */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-[0.2em] uppercase mb-4">
                            ANÁLISIS FORENSE
                        </h2>
                        <div className="w-24 h-1 bg-erani-purple mx-auto opacity-50" />
                    </div>

                    <div className="glassmorphism p-4 md:p-10 border-white/5 overflow-x-auto">
                        <table className="w-full min-w-[800px] text-left">
                            <thead>
                                <tr className="border-b border-white/10 text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                                    <th className="pb-8">Ticket ID</th>
                                    <th className="pb-8">Descripción</th>
                                    <th className="pb-8">Tipo / Filtro Aplicado</th>
                                    <th className="pb-8">Hrs Calc</th>
                                    <th className="pb-8 text-right">Costo Invisible</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm font-medium">
                                {forensicTickets.map((ticket, i) => (
                                    <tr key={i} className="group hover:bg-white/[0.02] transition-colors border-b border-white/[0.02]">
                                        <td className="py-6">
                                            <span className={`px-3 py-1 rounded-md text-[10px] font-mono ${ticket.color === 'red' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-erani-purple/10 text-erani-purple border border-erani-purple/20'}`}>
                                                {ticket.id}
                                            </span>
                                        </td>
                                        <td className="py-6 text-gray-300">{ticket.desc}</td>
                                        <td className="py-6 text-gray-500 font-mono text-xs">{ticket.type}</td>
                                        <td className="py-6 text-gray-300">{ticket.hrs}</td>
                                        <td className={`py-6 text-right font-bold ${ticket.color === 'red' ? 'text-erani-coral' : 'text-erani-purple'}`}>
                                            {ticket.cost}
                                        </td>
                                    </tr>
                                ))}
                                <tr className="font-bold border-t border-white/10">
                                    <td className="pt-8 text-white uppercase tracking-widest text-[10px]">TOTAL</td>
                                    <td className="pt-8 text-gray-400 uppercase tracking-widest text-[10px]">TOTAL CONCILIADO</td>
                                    <td className="pt-8"></td>
                                    <td className="pt-8 text-white">37.3</td>
                                    <td className="pt-8 text-right text-erani-coral text-xl">$16,800</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Final Grid: Impact Summary */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Impact Stats */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="glassmorphism p-8 border-white/5">
                                <h4 className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-4">IMPACTO DIRECTO</h4>
                                <div className="text-3xl font-bold text-white mb-1">$16,800.00 MXN</div>
                                <div className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">FUGA CONFIRMADA</div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="glassmorphism p-8 border-white/5">
                                <h4 className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-4">IMPACTO FUTURO</h4>
                                <div className="text-3xl font-bold text-white mb-1">$24,300.00 MXN</div>
                                <div className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">RIESGO LATENTE MENSUAL</div>
                            </motion.div>
                        </div>
                        
                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="glassmorphism p-10 border-white/5 grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h4 className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-6 leading-relaxed">PUNTO DE CONCIENCIA DE RENTABILIDAD</h4>
                                <div className="text-3xl font-bold text-white mb-2">$50,400.00 MXN</div>
                                <div className="text-[9px] font-medium text-gray-600 uppercase tracking-widest leading-relaxed">PUNTO DE EQUILIBRIO (REGLA DE TERCIOS)</div>
                            </div>
                            <div className="flex flex-col justify-end">
                                <h4 className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-4">COI ANUAL</h4>
                                <div className="text-3xl font-bold text-white mb-2">$201,600.00 MXN</div>
                                <div className="text-[9px] font-medium text-gray-600 uppercase tracking-widest leading-relaxed">(COSTO DE INACCIÓN)</div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scope Creep Side Widget */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="glassmorphism p-10 border-erani-coral/20 bg-erani-coral/[0.02] flex flex-col items-center justify-center text-center gap-6"
                    >
                        <div className="text-6xl md:text-7xl font-bold text-erani-coral tracking-tighter">50%</div>
                        <div className="space-y-1">
                            <div className="text-sm font-bold text-white uppercase tracking-widest">DESVIACIÓN</div>
                            <div className="text-[10px] font-medium text-gray-500 uppercase tracking-widest">(SCOPE CREEP)</div>
                        </div>
                    </motion.div>
                </div>

                <p className="mt-12 text-[8px] text-gray-600 italic text-center uppercase tracking-widest opacity-60">
                    *Cálculo basado en el módulo forense de Nivel 2, diseñado bajo marcos de eficiencia operativa B2B.
                </p>
            </div>
        </section>
    );
}
