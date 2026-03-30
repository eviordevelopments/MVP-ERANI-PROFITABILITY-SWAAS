import { motion } from "framer-motion";
import { Activity, ShieldAlert, BarChart3, TrendingUp, Search, Clock, AlertTriangle, FileText, RefreshCcw, Users, Eye, Crosshair, Lock, ShieldCheck, Zap, LineChart } from "lucide-react";
import { Counter } from "./Counter";

const kpis = [
    {
        title: "MONITOR DE BUCLE DE REVISIONES",
        value: 11.5,
        suffix: "%",
        desc: "Umbral SODA superado. Las tareas están regresando a revisión más de lo tolerable, indicando falta de claridad en el SOW original.",
        color: "coral",
        type: "circular"
    },
    {
        title: "ÍNDICE DE FRICCIÓN DE TALENTO",
        value: 84.6,
        suffix: "%",
        desc: "La mayoría de los tickets presentan una latencia superior a 72 horas desde su creación hasta su última actualización, indicando \"Ceguera Operativa\".",
        color: "coral",
        type: "gauge"
    },
    {
        title: "ÍNDICE DE DATOS OSCUROS (DARK DATA INDEX)",
        value: 100,
        suffix: "%",
        desc: "ERANI tuvo que iluminar la totalidad de la metadata mediante Inferencia Nivel 2 ante la ausencia absoluta de registros (logs).",
        color: "blue",
        type: "stat"
    },
    {
        title: "INTENSIDAD DE SCOPE CREEP",
        value: 50,
        suffix: "%",
        desc: "La mitad de la fuga es atribuible directamente a solicitudes externas ([EXT]) que no estaban presupuestadas como horas de consultoría/ajuste.",
        color: "coral",
        type: "horizontal"
    }
];

const forensicTickets = [
    { id: "86dyq32gz", desc: "Bloqueo Post-Feedback Positivo (ODS)", type: "[INT]", hrs: 6, cost: 2700, color: "red" },
    { id: "86dyq1z7a", desc: "Métodos de Pago No Seleccionables", type: "[INT]", hrs: 6, cost: 2700, color: "red" },
    { id: "86dyq1z8t", desc: "Actualización Recurso IA Tendencias", type: "[EXT]", hrs: 6, cost: 2700, color: "red" },
    { id: "86dyugw9v", desc: "Refactorización de Preguntas M2:L3", type: "[EXT]", hrs: 6, cost: 2700, color: "red" },
    { id: "86dyqday4", desc: "Migración dev.tasks en Producción", type: "[INT]", hrs: 4, cost: 1800, color: "yellow" },
    { id: "-", desc: "OTROS 6 TICKETS (Consolidado)", type: "[VAR]", hrs: 9.3, cost: 4200, color: "yellow" },
];

export default function ForensicFunnel({ showForensicDetails = false }: { showForensicDetails?: boolean }) {
    if (!showForensicDetails) return null;

    return (
        <section className="py-24 px-6 relative overflow-hidden font-sans">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-erani-blue/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-erani-purple/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container max-w-7xl mx-auto relative z-10">
                
                {/* Final Grid: Impact Summary */}
                {showForensicDetails && (
                <div className="mb-32">
                    {/* Disclaimer Example - Montserrat style */}
                    <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mb-12 border-l-2 border-erani-blue/30 pl-6 py-2"
                    >
                        <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-[family-name:var(--font-montserrat)] leading-relaxed max-w-3xl">
                            ESTE ES UN EJEMPLO DE REPORTE FORENSE GENERADO POR LA IA DE ERANI. <br />
                            LOS CÁLCULOS PRESENTADOS SON PROYECCIONES BASADAS EN PATRONES DE DATA OSCURA Y FRICCIÓN OPERATIVA DETECTADOS.
                        </p>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-24 xl:gap-32 items-start">
                        {/* Left Side: Vertical Heading */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="w-full lg:w-1/5 xl:w-[15%] pt-4 shrink-0"
                        >
                            <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4">
                                <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-erani-coral shrink-0" />
                                <h3 className="text-2xl md:text-4xl font-normal text-white leading-[1.1] tracking-tight uppercase font-[family-name:var(--font-montserrat)]">
                                    PROFITABILITY<br className="hidden lg:block" /> FIREWALL <br className="hidden lg:block" /> REPORT
                                </h3>
                                <div className="hidden lg:flex items-center gap-2 mt-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-erani-purple" />
                                    <span className="text-[10px] font-medium text-gray-500 uppercase tracking-widest font-[family-name:var(--font-montserrat)]">I PROYECTO</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Side: Reorganized Grid */}
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 min-w-0 w-full">
                            
                            {/* Row 1: Direct and Future Impact */}
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="glassmorphism p-6 md:p-8 border-white/5">
                                <h4 className="text-[10px] font-normal text-gray-400 uppercase tracking-widest mb-4 font-[family-name:var(--font-montserrat)]">IMPACTO DIRECTO</h4>
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">$<Counter value={16800} />.00 MXN</div>
                                <div className="text-[8px] md:text-[9px] font-bold text-gray-600 uppercase tracking-widest">FUGA CONFIRMADA</div>
                            </motion.div>
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glassmorphism p-6 md:p-8 border-white/5">
                                <h4 className="text-[10px] font-normal text-gray-400 uppercase tracking-widest mb-4 font-[family-name:var(--font-montserrat)]">IMPACTO FUTURO</h4>
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">$<Counter value={24300} />.00 MXN</div>
                                <div className="text-[8px] md:text-[9px] font-bold text-gray-600 uppercase tracking-widest">RIESGO LATENTE MENSUAL</div>
                            </motion.div>

                            {/* Row 2: Tall Deviation Widget and Right Column Stats */}
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="glassmorphism p-8 md:p-10 border-erani-coral/20 bg-erani-coral/[0.02] flex flex-col items-center justify-center text-center gap-6"
                            >
                                <div className="text-5xl md:text-7xl font-bold text-erani-coral tracking-tighter">
                                    <Counter value={50} suffix="%" />
                                </div>
                                <div className="space-y-1">
                                    <div className="text-xs md:text-sm font-bold text-white uppercase tracking-widest">DESVIACIÓN</div>
                                    <div className="text-[9px] md:text-[10px] font-medium text-gray-500 uppercase tracking-widest">(SCOPE CREEP)</div>
                                </div>
                            </motion.div>

                            <div className="space-y-6 w-full">
                                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="glassmorphism p-6 md:p-8 border-white/5">
                                    <h4 className="text-[10px] font-normal text-gray-400 uppercase tracking-widest mb-4 md:mb-6 leading-relaxed font-[family-name:var(--font-montserrat)]">PUNTO DE CONCIENCIA</h4>
                                    <div className="text-2xl md:text-3xl font-bold text-white mb-2">$<Counter value={50400} />.00 MXN</div>
                                    <div className="text-[8px] md:text-[9px] font-medium text-gray-600 uppercase tracking-widest leading-relaxed">PUNTO DE EQUILIBRIO</div>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="glassmorphism p-6 md:p-8 border-white/5">
                                    <h4 className="text-[10px] font-normal text-gray-400 uppercase tracking-widest mb-4 font-[family-name:var(--font-montserrat)]">COI ANUAL</h4>
                                    <div className="text-2xl md:text-3xl font-bold text-white mb-2">$<Counter value={201600} />.00 MXN</div>
                                    <div className="text-[8px] md:text-[9px] font-medium text-gray-600 uppercase tracking-widest leading-relaxed">(COSTO DE INACCIÓN)</div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                )}

                {/* KPIS DE SALUD OPERATIVA Section */}
                {showForensicDetails && (
                <>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-normal text-white mb-4 font-[family-name:var(--font-montserrat)] uppercase tracking-[0.2em]">
                        KPIS DE SALUD OPERATIVA
                    </h2>
                    <div className="w-24 h-1 bg-erani-blue mx-auto opacity-50" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-24">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="group lg:col-span-4 glassmorphism p-8 border-white/5 flex flex-col justify-between hover:border-erani-coral/30 hover:shadow-[0_0_30px_rgba(255,92,92,0.08)] transition-all duration-300">
                        <div>
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 group-hover:border-erani-coral/50 group-hover:shadow-[0_0_12px_rgba(255,92,92,0.25)] transition-all duration-300 mb-6">
                                <RefreshCcw className="w-5 h-5 text-gray-500 group-hover:text-erani-coral transition-colors duration-300" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-[10px] font-normal text-gray-400 uppercase tracking-widest mb-8 font-[family-name:var(--font-montserrat)]">{kpis[0].title}</h4>
                            <div className="flex items-center gap-6 mb-8">
                                <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
                                    <Counter value={kpis[0].value} suffix="%" decimals={1} />
                                </span>
                                <div className="w-16 h-16 rounded-full border-4 border-white/5 relative flex items-center justify-center">
                                    <motion.div initial={{ rotate: 0 }} whileInView={{ rotate: 45 }} transition={{ duration: 1.5 }} className="absolute inset-0 border-t-4 border-erani-coral rounded-full" />
                                </div>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed font-normal">{kpis[0].desc}</p>
                    </motion.div>

                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="group glassmorphism p-8 border-white/5 relative overflow-hidden md:col-span-2 hover:border-erani-blue/30 hover:shadow-[0_0_30px_rgba(0,85,160,0.08)] transition-all duration-300">
                            <div className="flex flex-col md:flex-row justify-between gap-8">
                                <div className="max-w-md">
                                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 group-hover:border-erani-blue/50 group-hover:shadow-[0_0_12px_rgba(0,85,160,0.25)] transition-all duration-300 mb-6">
                                        <Users className="w-5 h-5 text-gray-500 group-hover:text-erani-blue transition-colors duration-300" strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-[10px] font-normal text-gray-400 uppercase tracking-widest mb-6 font-[family-name:var(--font-montserrat)]">{kpis[1].title}</h4>
                                    <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter block mb-6">
                                        <Counter value={kpis[1].value} suffix="%" decimals={1} />
                                    </span>
                                    <p className="text-xs text-gray-500 leading-relaxed">{kpis[1].desc}</p>
                                </div>
                                <div className="flex-1 flex items-center justify-center">
                                    <div className="relative w-48 h-24 overflow-hidden">
                                        <div className="absolute inset-0 border-[12px] border-white/5 rounded-t-full" />
                                        <motion.div initial={{ clipPath: 'inset(0 0 0 100%)' }} whileInView={{ clipPath: 'inset(0 0 0 15%)' }} transition={{ duration: 2, ease: "easeOut" }} className="absolute inset-0 border-[12px] border-erani-coral rounded-t-full" />
                                        <motion.div initial={{ rotate: -90 }} whileInView={{ rotate: 55 }} transition={{ duration: 2, ease: "easeOut" }} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-20 bg-erani-coral origin-bottom" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="group glassmorphism p-8 border-white/5 hover:border-erani-blue/30 hover:shadow-[0_0_30px_rgba(0,85,160,0.1)] transition-all duration-300">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 group-hover:border-erani-blue/50 group-hover:shadow-[0_0_12px_rgba(0,85,160,0.3)] transition-all duration-300 mb-6">
                                <Eye className="w-5 h-5 text-gray-500 group-hover:text-erani-blue transition-colors duration-300" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-[10px] font-normal text-gray-400 uppercase tracking-widest mb-6 leading-relaxed font-[family-name:var(--font-montserrat)]">{kpis[2].title}</h4>
                            <span className="text-5xl md:text-6xl font-bold text-erani-blue tracking-tighter block mb-6">
                                <Counter value={kpis[2].value} suffix="%" />
                            </span>
                            <p className="text-xs text-gray-500 leading-relaxed">{kpis[2].desc}</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} className="group glassmorphism p-8 border-white/5 flex flex-col justify-between hover:border-erani-coral/30 hover:shadow-[0_0_30px_rgba(255,92,92,0.08)] transition-all duration-300">
                            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 group-hover:border-erani-coral/50 group-hover:shadow-[0_0_12px_rgba(255,92,92,0.25)] transition-all duration-300 mb-6">
                                <Crosshair className="w-5 h-5 text-gray-500 group-hover:text-erani-coral transition-colors duration-300" strokeWidth={1.5} />
                            </div>
                            <h4 className="text-[10px] font-normal text-gray-400 uppercase tracking-widest mb-6 font-[family-name:var(--font-montserrat)]">{kpis[3].title}</h4>
                            <div className="flex items-center justify-between mb-6">
                                <p className="text-xs text-gray-500 leading-relaxed max-w-[200px]">{kpis[3].desc}</p>
                                <span className="text-5xl font-bold text-white tracking-tighter">
                                    <Counter value={kpis[3].value} suffix="%" />
                                </span>
                            </div>
                            <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                                <motion.div initial={{ width: 0 }} whileInView={{ width: "50%" }} transition={{ duration: 1.5, ease: "easeOut" }} className="h-full bg-erani-coral glow-coral" />
                            </div>
                        </motion.div>
                    </div>
                </div>
                </>
                )}

                {/* ANÁLISIS FORENSE Section */}
                {showForensicDetails && (
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-normal text-white mb-4 font-[family-name:var(--font-montserrat)] uppercase tracking-[0.2em]">
                            ANÁLISIS FORENSE
                        </h2>
                        <div className="w-24 h-1 bg-erani-purple mx-auto opacity-50" />
                    </div>

                    <div className="glassmorphism p-4 md:p-10 border-white/5 overflow-x-auto">
                        <table className="w-full min-w-[800px] text-left">
                            <thead>
                                <tr className="border-b border-white/10 text-[10px] font-normal text-gray-400 uppercase tracking-widest font-[family-name:var(--font-montserrat)]">
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
                                        <td className="py-6 text-gray-300">
                                            <Counter value={ticket.hrs} decimals={1} />
                                        </td>
                                        <td className={`py-6 text-right font-bold ${ticket.color === 'red' ? 'text-erani-coral' : 'text-erani-purple'}`}>
                                            $<Counter value={ticket.cost} />.00
                                        </td>
                                    </tr>
                                ))}
                                <tr className="font-bold border-t border-white/10">
                                    <td className="pt-8 text-white uppercase tracking-widest text-[10px] font-[family-name:var(--font-montserrat)]">TOTAL</td>
                                    <td className="pt-8 text-gray-400 uppercase tracking-widest text-[10px] font-[family-name:var(--font-montserrat)]">TOTAL CONCILIADO</td>
                                    <td className="pt-8"></td>
                                    <td className="pt-8 text-white">
                                        <Counter value={37.3} decimals={1} />
                                    </td>
                                    <td className="pt-8 text-right text-erani-coral text-xl">
                                        $<Counter value={16800} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                )}

                {/* EL FIREWALL Section - NEW REPLICA */}
                {showForensicDetails && (
                <div className="mt-32">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-normal text-white mb-2 font-[family-name:var(--font-montserrat)] uppercase tracking-[0.2em]">
                            EL FIREWALL
                        </h2>
                        <p className="text-gray-400 text-lg font-light italic">Recomendaciones del Sistema</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                        {/* Protocolos de Bloqueo */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="glassmorphism p-10 border-white/5"
                        >
                            <h4 className="text-[12px] font-normal text-gray-400 uppercase tracking-[0.3em] mb-6 font-[family-name:var(--font-montserrat)] flex items-center gap-3">
                                PROTOCOLOS DE BLOQUEO
                            </h4>
                            <p className="text-sm text-gray-500 leading-relaxed font-light">
                                Implementación de un Middleware de IA para interceptar tickets de ClickUp. Si un ticket no tiene "Time Estimate" o pertenece a "Focus Group" sin orden de cambio, el sistema enviará una Alerta de Intruso inmediata.
                            </p>
                        </motion.div>

                        {/* ROI de Automatización */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="glassmorphism p-10 border-white/5"
                        >
                            <h4 className="text-[12px] font-normal text-gray-400 uppercase tracking-[0.3em] mb-6 font-[family-name:var(--font-montserrat)]">
                                ROI DE AUTOMATIZACIÓN
                            </h4>
                            <p className="text-sm text-gray-500 leading-relaxed font-light mb-6">
                                Al detener el "Pilón" sistemático, la inversión en el Firewall se recupera en los primeros 21 días de operación blindada.
                            </p>
                            <p className="text-sm text-gray-500 leading-relaxed font-light">
                                Se proyecta una estabilización del margen neto al +30% para el tercer mes, eliminando la hemorragia por retrabajos técnicos.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-fit">
                        {/* Automatic Auditor Graph (n8n) */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="lg:col-span-8 glassmorphism p-10 border-white/5 flex flex-col"
                        >
                            <div className="flex justify-between items-start mb-12">
                                <h4 className="text-lg font-light text-white font-[family-name:var(--font-montserrat)] tracking-tight">
                                    Impacto del Fiscalizador Automático (n8n)
                                </h4>
                                <div className="text-2xl font-bold text-erani-blue">
                                    <Counter value={30} suffix="%" />
                                </div>
                            </div>

                            {/* Custom Graph Placeholder/SVG Animation */}
                            <div className="relative flex-1 min-h-[250px] mt-4">
                                <div className="absolute inset-0 flex flex-col justify-between">
                                    {[30, 25, 20, 15, 10, 5, 0].map((val) => (
                                        <div key={val} className="flex items-center gap-4">
                                            <span className="text-[10px] text-gray-600 font-mono w-4">{val}</span>
                                            <div className="flex-1 h-[1px] bg-white/[0.03]" />
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute inset-0 pt-4 flex flex-col justify-end">
                                    <div className="flex justify-between px-10 mb-[-10px]">
                                        <span className="text-[10px] text-gray-500 uppercase font-[family-name:var(--font-montserrat)]">Mes 1</span>
                                        <span className="text-[10px] text-gray-500 uppercase font-[family-name:var(--font-montserrat)]">Mes 2</span>
                                        <span className="text-[10px] text-gray-500 uppercase font-[family-name:var(--font-montserrat)]">Mes 3</span>
                                    </div>
                                </div>
                                {/* The Curve */}
                                <svg className="absolute inset-0 w-full h-[85%] mt-4" preserveAspectRatio="none">
                                    <motion.path
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        transition={{ duration: 2, ease: "easeInOut" }}
                                        d="M 50 180 Q 250 120 500 40"
                                        fill="none"
                                        stroke="#10B981"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        className="drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                                    />
                                    <motion.circle initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2 }} cx="500" cy="40" r="14" fill="white" className="drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
                                    <motion.circle initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1 }} cx="250" cy="115" r="3" fill="#10B981" />
                                    <motion.circle initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} cx="50" cy="180" r="3" fill="#10B981" />
                                </svg>
                            </div>
                        </motion.div>

                        {/* Evolucion del Margen */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="lg:col-span-4 glassmorphism p-10 border-white/5 flex flex-col justify-center"
                        >
                            <h4 className="text-[12px] font-normal text-gray-400 uppercase tracking-[0.3em] mb-4 font-[family-name:var(--font-montserrat)]">
                                EVOLUCIÓN DEL MARGEN
                            </h4>
                            <p className="text-[10px] text-gray-600 uppercase tracking-widest mb-10">Impacto esperado tras activar el Firewall:</p>
                            
                            <div className="space-y-10 pl-2">
                                <div className="relative">
                                    <div className="absolute -left-6 top-0 w-[1px] h-full bg-white/10" />
                                    <div className="mb-2 text-xl font-bold text-white tracking-widest uppercase font-[family-name:var(--font-montserrat)]">Mes 1:</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest font-light">Control de Fugas</div>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-6 top-0 w-[1px] h-full bg-white/10" />
                                    <div className="mb-2 text-xl font-bold text-white tracking-widest uppercase font-[family-name:var(--font-montserrat)]">Mes 2:</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest font-light">Visibilidad 100%</div>
                                </div>
                                <div className="relative">
                                    <div className="absolute -left-6 top-0 w-[2px] h-full bg-erani-blue" />
                                    <div className="mb-2 text-xl font-bold text-white tracking-widest uppercase font-[family-name:var(--font-montserrat)]">Mes 3:</div>
                                    <div className="text-xs text-erani-blue uppercase tracking-widest font-bold">+30% Rentabilidad Estabilizada</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <p className="mt-20 text-[9px] text-gray-700 uppercase tracking-[0.4em] font-light text-center">
                        Profitability Firewall | Industrial Grade Forensic Audit
                    </p>
                </div>
                )}
            </div>
        </section>

    );
}
