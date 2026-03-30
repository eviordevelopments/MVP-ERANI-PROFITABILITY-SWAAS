"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CreditCard, Lock, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function CheckoutForm() {
    const [fullName, setFullName] = useState("");
    const [agencyName, setAgencyName] = useState("");
    const [email, setEmail] = useState("");
    const [channels, setChannels] = useState({
        slack: false,
        jira: false,
        clickup: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChannelToggle = (channel: keyof typeof channels) => {
        setChannels(prev => ({ ...prev, [channel]: !prev[channel] }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");

        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName,
                    agencyName,
                    email,
                    channels
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Error al procesar la solicitud');
            }

            // Mostrar animación de éxito
            setIsSuccess(true);

            // Redirigir a Stripe después de la animación
            setTimeout(() => {
                window.location.href = data.redirectUrl || 'https://book.stripe.com/9B67sMd4Y6FK9n94lO8N200';
            }, 2500);

        } catch (err: any) {
            setError(err.message || 'Ocurrió un error inesperado al conectar. Por favor intenta de nuevo.');
            setIsSubmitting(false);
        }
    };

    return (
        <section id="registro" className="py-24 px-6 bg-erani-navy relative overflow-hidden">
            <div className="container max-w-2xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-4">
                        Protocolo de Peritaje Activo
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-4 flex items-center justify-center gap-3">Agendar Peritaje Forense</h2>
                    <p className="text-gray-400 text-sm md:text-base px-4">Inicia la recuperación de capital analizando tu estructura de datos actual.</p>
                </div>

                <AnimatePresence mode="wait">
                    {isSuccess ? (
                        <motion.div 
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glassmorphism p-12 text-center flex flex-col items-center justify-center space-y-6 border-emerald-500/30 bg-emerald-500/5 min-h-[400px]"
                        >
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                                className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(16,185,129,0.4)]"
                            >
                                <CheckCircle2 className="w-12 h-12 text-erani-navy" strokeWidth={3} />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h3 className="text-3xl font-black text-white mb-2">¡Registro Exitoso!</h3>
                                <p className="text-gray-400 text-lg">Tus datos han sido asegurados. Redirigiendo a la pasarela de pago encriptada...</p>
                                <div className="mt-8 flex justify-center">
                                     <Loader2 className="w-6 h-6 text-emerald-500 animate-spin" />
                                </div>
                            </motion.div>
                        </motion.div>
                    ) : (
                        <motion.form 
                            key="form"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="glassmorphism p-6 md:p-12 space-y-8 border-emerald-500/10" 
                            onSubmit={handleSubmit}
                        >
                            {error && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm">
                                    <AlertCircle className="w-5 h-5 shrink-0" />
                                    {error}
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Nombre Completo</label>
                                    <input
                                        type="text"
                                        placeholder="Juan Pérez"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all text-sm"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Nombre de la Agencia</label>
                                    <input
                                        type="text"
                                        placeholder="Digital Flow SA"
                                        value={agencyName}
                                        onChange={(e) => setAgencyName(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all text-sm"
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Canales Operativos (Triangulación)</label>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <label className="flex items-center justify-between gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl cursor-pointer hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all group">
                                        <span className={`text-sm font-bold transition-colors ${channels.slack ? 'text-emerald-400' : 'text-gray-300 group-hover:text-emerald-400'}`}>Slack</span>
                                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${channels.slack ? 'border-emerald-500' : 'border-white/10 group-hover:border-emerald-500/50'}`}>
                                            <input type="checkbox" className="hidden" checked={channels.slack} onChange={() => handleChannelToggle('slack')} disabled={isSubmitting} />
                                            {channels.slack && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                                        </div>
                                    </label>
                                    <label className="flex items-center justify-between gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl cursor-pointer hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all group">
                                        <span className={`text-sm font-bold transition-colors ${channels.jira ? 'text-emerald-400' : 'text-gray-300 group-hover:text-emerald-400'}`}>Jira</span>
                                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${channels.jira ? 'border-emerald-500' : 'border-white/10 group-hover:border-emerald-500/50'}`}>
                                            <input type="checkbox" className="hidden" checked={channels.jira} onChange={() => handleChannelToggle('jira')} disabled={isSubmitting} />
                                            {channels.jira && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                                        </div>
                                    </label>
                                    <label className="flex items-center justify-between gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl cursor-pointer hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all group">
                                        <span className={`text-sm font-bold transition-colors ${channels.clickup ? 'text-emerald-400' : 'text-gray-300 group-hover:text-emerald-400'}`}>ClickUp</span>
                                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${channels.clickup ? 'border-emerald-500' : 'border-white/10 group-hover:border-emerald-500/50'}`}>
                                            <input type="checkbox" className="hidden" checked={channels.clickup} onChange={() => handleChannelToggle('clickup')} disabled={isSubmitting} />
                                            {channels.clickup && <CheckCircle2 className="w-4 h-4 text-emerald-500" />}
                                        </div>
                                    </label>
                                </div>
                                <p className="text-[10px] text-gray-600 font-bold uppercase italic text-center">Sin conexiones en vivo. Análisis por exportación segura.</p>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Email Corporativo</label>
                                <input
                                    type="email"
                                    placeholder="juan@agencia.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all text-sm"
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="pt-4">
                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="button-premium w-full py-5 rounded-2xl font-black text-lg md:text-xl text-erani-navy flex items-center justify-center gap-4 group disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-6 h-6 animate-spin" />
                                            Procesando Acceso...
                                        </>
                                    ) : (
                                        <>
                                            <CreditCard className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                                            Garantizar Acceso ($2,950 MXN)
                                        </>
                                    )}
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
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#9e80ff]/30 blur-[120px] rounded-full -z-10" />
        </section>
    );
}
