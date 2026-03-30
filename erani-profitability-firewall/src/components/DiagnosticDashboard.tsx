"use client";
import { useRef, useState } from "react";
import jsPDF from "jspdf";
import { motion } from "framer-motion";
import { 
    ShieldAlert, 
    Zap, 
    Download, 
    Calendar, 
    Lock, 
    CheckCircle2,
} from "lucide-react";
import { Counter } from "./Counter";
import InterventionMockup from "./InterventionMockup";

interface DiagnosticDashboardProps {
    data: any;
    onReset: () => void;
}

export default function DiagnosticDashboard({ data, onReset }: DiagnosticDashboardProps) {
    const dashboardRef = useRef<HTMLDivElement>(null);
    const [pdfLoading, setPdfLoading] = useState(false);

    const rawData = data?.raw || data;
    const inference = data?.inference;

    const handleDownloadPDF = async () => {
        setPdfLoading(true);
        try {
            const pdf = new jsPDF('p', 'mm', 'a4');
            
            // Estilo de Colores Erani
            const darkBg = [10, 14, 20]; // #0A0E14
            const emerald = [0, 245, 160]; // #00F5A0
            const eraniBlue = [0, 85, 160]; // #0055A0
            
            // Fondo oscuro
            pdf.setFillColor(darkBg[0], darkBg[1], darkBg[2]);
            pdf.rect(0, 0, 210, 297, 'F');
            
            // Función para cargar imagen y convertirla a Base64
            const loadImageToBase64 = (url: string): Promise<string> => {
                return new Promise((resolve, reject) => {
                    const img = new Image();
                    img.crossOrigin = 'Anonymous';
                    img.onload = () => {
                        const canvas = document.createElement('canvas');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        const ctx = canvas.getContext('2d');
                        ctx?.drawImage(img, 0, 0);
                        resolve(canvas.toDataURL('image/png'));
                    };
                    img.onerror = reject;
                    img.src = url;
                });
            };

            // Intentar agregar el logo eanilogo.png sin deformar
            try {
                const logoBase64 = await loadImageToBase64('/eanilogo.png');
                const imgProps = pdf.getImageProperties(logoBase64);
                const logoWidth = 35;
                const logoHeight = (imgProps.height * logoWidth) / imgProps.width;
                const xPos = (210 - logoWidth) / 2;
                pdf.addImage(logoBase64, 'PNG', xPos, 12, logoWidth, logoHeight); 
            } catch (e) {
                console.warn("No se pudo cargar el logo para el PDF", e);
            }
            
            pdf.setTextColor(255, 255, 255);
            pdf.setFontSize(16);
            pdf.text('REPORTE FORENSE DE RENTABILIDAD', 105, 38, { align: 'center' });
            
            pdf.setFontSize(11);
            pdf.setTextColor(eraniBlue[0], eraniBlue[1], eraniBlue[2]);
            pdf.text(`${rawData.contact?.name || 'Cliente ERANI'}`, 105, 45, { align: 'center' });
            
            pdf.setDrawColor(255, 255, 255, 0.1);
            pdf.line(20, 55, 190, 55);
            
            pdf.setTextColor(255, 255, 255);
            pdf.setFontSize(14);
            pdf.text('1. ANALISIS DE HEMORRAGIA OPERATIVA', 25, 65);
            
            pdf.setFillColor(255, 255, 255, 0.03);
            pdf.roundedRect(20, 75, 170, 40, 3, 3, 'F');
            
            pdf.setFontSize(9);
            pdf.setTextColor(150, 150, 150);
            pdf.text('PERDIDA MENSUAL ESTIMADA (MXN)', 30, 85);
            
            pdf.setFontSize(22);
            pdf.setTextColor(emerald[0], emerald[1], emerald[2]);
            pdf.text(`$${inference?.hemorragiaMensual?.toLocaleString() || '0.00'}`, 30, 100);
            
            pdf.setTextColor(255, 255, 255);
            pdf.setFontSize(14);
            pdf.text('2. COSTO DE OPORTUNIDAD ANUAL (COI)', 25, 130);
            
            pdf.setFillColor(255, 255, 255, 0.03);
            pdf.roundedRect(20, 140, 170, 40, 3, 3, 'F');
            
            pdf.setFontSize(9);
            pdf.setTextColor(150, 150, 150);
            pdf.text('TOTAL DE FUGA ACUMULADA A 12 MESES', 30, 150);
            
            pdf.setFontSize(22);
            pdf.setTextColor(255, 92, 92);
            pdf.text(`$${inference?.coiAnual?.toLocaleString() || '0.00'}`, 30, 165);
            
            pdf.setTextColor(255, 255, 255);
            pdf.setFontSize(14);
            pdf.text('3. DIAGNOSTICO DE VISIBILIDAD', 25, 195);
            
            pdf.setFontSize(11);
            pdf.setTextColor(200, 200, 200);
            pdf.text(`Nivel de Friccion: ${inference?.friccionOperativa || 0}%`, 30, 210);
            pdf.text(`Perfil de Riesgo: ${inference?.visibilityLossLabel || 'Analizando...'}`, 30, 220);
            
            pdf.setFontSize(8);
            pdf.setTextColor(100, 100, 100);
            pdf.text('Documento Forense Confidencial - Erani Profitability Firewall', 105, 280, { align: 'center' });
            pdf.text('erani.mx | contacto@erani.mx', 105, 285, { align: 'center' });

            pdf.save(`Reporte_Forense_${rawData.contact?.name || 'Empresa'}.pdf`);
        } catch (error) {
            console.error('Error al generar Reporte:', error);
            alert("No se pudo generar el reporte. Por favor, intenta de nuevo.");
        } finally {
            setPdfLoading(false);
        }
    };

    const revenue = parseInt(rawData[3] || "0");
    const operationalEfficiency = rawData[2] || 65;
    
    const hemorragia = inference?.hemorragiaMensual || Math.round((1 - (operationalEfficiency as number) / 100) * revenue * 0.12);
    const friccion = inference?.friccionOperativa || (100 - (operationalEfficiency as number));
    const annualCOI = inference?.coiAnual || hemorragia * 12;
    const visibilityLabel = inference?.visibilityLossLabel || 'Pérdida de Visibilidad';
    const isHoleAlignment = inference?.holeAlignmentTriggered || false;

    return (
        <div ref={dashboardRef} className="pt-28 pb-12 px-6 max-w-6xl mx-auto font-sans relative">
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#9E80ff]/[0.1] blur-[150px] rounded-full pointer-events-none -z-10" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-erani-blue/[0.1] blur-[150px] rounded-full pointer-events-none -z-10" />
            
            <header className="flex flex-col items-center text-center gap-6 mb-12">
                <div className="flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/20 text-[#00F5A0] text-[10px] font-bold uppercase tracking-widest mb-3 shadow-[0_0_10px_rgba(0,245,160,0.1)]">
                        Diagnóstico Completado {isHoleAlignment && '- RIESGO CRÍTICO DETECTADO'}
                    </div>
                    <h1 className="text-3xl md:text-4xl font-normal text-white tracking-widest uppercase font-[family-name:var(--font-montserrat)] text-center">
                        Reporte Forense: <span className="text-erani-blue font-normal block md:inline mt-2 md:mt-0">{rawData.contact?.name || "Empresa"}</span>
                    </h1>
                </div>
                <div className="flex justify-center gap-4">
                    <button 
                        onClick={handleDownloadPDF}
                        disabled={pdfLoading}
                        className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-white/5 transition-all text-sm disabled:opacity-50"
                    >
                        {pdfLoading ? (
                            <span className="animate-pulse">Generando PDF...</span>
                        ) : (
                            <>
                                <Download className="w-4 h-4" />
                                Descargar PDF Full
                            </>
                        )}
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
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
                        <div className="text-3xl sm:text-5xl md:text-8xl font-bold text-white tracking-tighter mb-4 animate-pulse truncate w-full">
                            $<Counter value={hemorragia} decimals={2} /> <span className="text-xl sm:text-2xl text-gray-500 uppercase">MXN</span>
                        </div>
                        <p className="text-gray-400 max-w-lg leading-relaxed text-sm">
                            Tu agencia presenta una pérdida latente por procesos no auditados y horas de consultoría sin registro. Este capital se está diluyendo directamente de tu margen de utilidad neto.
                        </p>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="lg:col-span-4 glassmorphism p-10 border-white/5 flex flex-col justify-between"
                >
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fricción Operativa</h4>
                    <div className="py-8">
                        <div className="text-4xl md:text-5xl font-bold text-erani-blue"><Counter value={friccion} />%</div>
                        <div className="text-[10px] font-medium text-gray-600 uppercase tracking-widest mt-2">{visibilityLabel}</div>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${friccion}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-erani-blue" 
                        />
                    </div>
                    <p className="text-[10px] text-gray-500 mt-6 leading-relaxed uppercase">
                        La metadata sugiere ceguera en el {friccion}% de los hilos de comunicación y procesos.
                    </p>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glassmorphism p-8 border-white/5"
                >
                    <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">COI ANUAL (Costo de Inacción)</h4>
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">$<Counter value={annualCOI} /></div>
                    <p className="text-xs text-gray-500 leading-relaxed italic">Capital recuperable mediante Blindaje Forense Erani.</p>
                </motion.div>

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
                    <div className="text-2xl md:text-4xl font-bold text-gray-800 blur-md select-none">$89,200</div>
                </motion.div>

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
                    <div className="text-2xl md:text-4xl font-bold text-gray-800 blur-md select-none">Top 12%</div>
                </motion.div>
            </div>

            <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="relative glassmorphism p-10 md:p-14 border-[#00F5A0]/30 bg-[#00F5A0]/[0.02] flex flex-col items-center text-center gap-10 overflow-hidden mt-8"
            >
                <div className="absolute top-0 left-[-10%] w-64 h-64 bg-[#00F5A0]/10 blur-[100px] rounded-full pointer-events-none" />
                
                <div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-[#00F5A0] text-[11px] font-bold uppercase tracking-widest mb-6 animate-pulse shadow-[0_0_15px_rgba(0,245,160,0.2)]">
                        <CheckCircle2 className="w-4 h-4" />
                        Calificas para Intervención Inmediata
                    </div>
                    <h3 className="text-2xl md:text-4xl font-extrabold text-white mb-6">Resultados Verificados: Eres Elegible.</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        Tu modelo operativo tiene la masa crítica necesaria para recuperar esa hemorragia. 
                        Inicia tu <strong className="text-white">Peritaje Forense de 90 Días</strong> hoy mismo con ERANI y cierra los puntos de fuga antes del siguiente ciclo financiero.
                    </p>
                </div>
                
                <div className="flex flex-col gap-4 w-full max-w-2xl relative z-10">
                    <a 
                        href="https://book.stripe.com/9B67sMd4Y6FK9n94lO8N200"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-premium w-full text-white py-6 rounded-2xl font-bold text-base md:text-lg flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] shadow-[0_0_30px_rgba(0,245,160,0.3)]"
                    >
                        <Zap className="w-6 h-6 shrink-0" />
                        Comenzar Peritaje Forense Ahora
                    </a>
                    
                    <div className="flex flex-col xl:flex-row gap-4 mt-2">
                        <a 
                            href="https://calendar.app.google/EovZMgXzWoeHxeLKA" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 border border-white/10 bg-white/5 text-white py-4 rounded-xl font-bold text-sm hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 text-center"
                        >
                            <Calendar className="w-4 h-4 shrink-0" />
                            Sesión Exploratoria 15 min
                        </a>
                        <a 
                            href="https://wa.me/524624004066?text=Hola,%20quisiera%20hablar%20con%20el%20equipo%20de%20ERANI%20sobre%20el%20Peritaje%20Forense."
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex-1 border border-white/10 bg-white/5 text-gray-300 py-4 rounded-xl font-bold text-sm hover:text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center text-center"
                        >
                            Hablar con ERANI
                        </a>
                    </div>
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

            <div className="mt-24">
                <InterventionMockup />
            </div>

        </div>
    );
}
