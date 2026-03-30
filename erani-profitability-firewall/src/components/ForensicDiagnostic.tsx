"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, AlertCircle, BarChart3, Users, DollarSign, Target, Clock, TrendingUp, EyeOff, Gauge, ShieldCheck, Zap } from "lucide-react";

interface Step {
    id: number;
    title: string;
    question: string;
    type: "choice" | "input" | "number";
    options?: { label: string; value: string | number; icon?: any }[];
    placeholder?: string;
}

const steps: Step[] = [
    {
        id: 1,
        title: "Perfil y Puntos de Dolor",
        question: "¿Cuál es el principal desafío de rentabilidad en tu empresa actualmente?",
        type: "choice",
        options: [
            { label: "Fugas en horas no facturadas", value: "leaks", icon: Clock },
            { label: "Márgenes de utilidad reducidos", value: "margins", icon: TrendingUp },
            { label: "Descontrol en Scope Creep", value: "scope", icon: Target },
            { label: "Incertidumbre en costos operativos", value: "unknown", icon: AlertCircle }
        ]
    },
    {
        id: 2,
        title: "Capacidad Operativa",
        question: "¿Qué porcentaje de las horas trabajadas estimas que se registran correctamente?",
        type: "choice",
        options: [
            { label: "Menos del 50% (Ceguera total)", value: 40, icon: EyeOff },
            { label: "50% - 75% (Fugas constantes)", value: 65, icon: Gauge },
            { label: "75% - 90% (Control parcial)", value: 85, icon: ShieldCheck },
            { label: "Más del 90% (Alta precisión)", value: 95, icon: Zap }
        ]
    },
    {
        id: 3,
        title: "Datos Cuantitativos",
        question: "¿Cuál es tu facturación mensual promedio aproximada en MXN?",
        type: "number",
        placeholder: "Ej. 500000"
    },
    {
        id: 4,
        title: "Estructura de Capital",
        question: "¿Cuántos colaboradores integran actualmente tu equipo operativo?",
        type: "number",
        placeholder: "Ej. 15"
    },
    {
        id: 5,
        title: "Contacto para Resultados",
        question: "Ingresa tus datos para generar tu Peritaje Forense personalizado",
        type: "input"
    }
];

export default function ForensicDiagnostic({ onComplete }: { onComplete: (data: any) => void }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<any>({});
    const [contactInfo, setContactInfo] = useState({ name: "", email: "", whatsapp: "" });
    const [privacyAccepted, setPrivacyAccepted] = useState(false);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            onComplete({ ...answers, contact: contactInfo, privacyAccepted });
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const updateAnswer = (value: any) => {
        setAnswers({ ...answers, [steps[currentStep].id]: value });
        if (steps[currentStep].type === "choice") {
            setTimeout(handleNext, 400);
        }
    };

    const isStepValid = () => {
        if (currentStep === steps.length - 1) {
            const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo.email);
            return contactInfo.name.trim().length > 1 && isEmailValid && contactInfo.whatsapp.length >= 7 && privacyAccepted;
        }
        if (steps[currentStep].type === "choice") return answers[steps[currentStep].id] !== undefined;
        return answers[steps[currentStep].id] !== "" && answers[steps[currentStep].id] !== undefined;
    };

    return (
        <div className="min-h-[500px] flex flex-col justify-center max-w-5xl mx-auto py-4 px-6">
            {/* Progress Bar */}
            <div className="mb-8 md:mb-10 px-4">
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-erani-blue shadow-[0_0_15px_rgba(0,85,160,0.5)]" 
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    />
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                >
                    <div className="space-y-6 text-center">
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-erani-navy to-transparent pointer-events-none" />
                        
                        <div className="relative z-10 px-8 pt-0 pb-6 md:pb-8">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Simulador de Impacto & Elegibilidad</h3>
                            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                Esta es una simulación estocástica que proyectará cómo se vería la rentabilidad de tu empresa, 
                                evaluando concurrentemente si calificas para nuestro Peritaje Forense de 90 Días con garantía ERANI.
                            </p>
                            
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                {steps[currentStep].question}
                            </h2>
                        </div>
                    </div>

                    {steps[currentStep].type === "choice" && (
                        <div className="grid gap-4 mt-8">
                            {steps[currentStep].options?.map((option, idx) => {
                                const Icon = option.icon;
                                const isSelected = answers[steps[currentStep].id] === option.value;
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => updateAnswer(option.value)}
                                        className={`flex items-center gap-4 p-5 rounded-2xl border transition-all text-left group ${
                                            isSelected 
                                            ? "bg-erani-blue/10 border-erani-blue text-white" 
                                            : "bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:bg-white/[0.07]"
                                        }`}
                                    >
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                                            isSelected ? "bg-erani-blue text-white" : "bg-erani-black text-gray-500 group-hover:text-gray-300"
                                        }`}>
                                            {Icon && <Icon className="w-6 h-6" />}
                                        </div>
                                        <span className="font-medium">{option.label}</span>
                                        {isSelected && <CheckCircle2 className="w-5 h-5 ml-auto text-erani-blue" />}
                                    </button>
                                );
                            })}
                        </div>
                    )}

                    {steps[currentStep].type === "number" && (
                        <div className="space-y-8 max-w-xl mx-auto w-full py-12">
                            <div className="relative">
                                <span className="absolute left-8 top-1/2 -translate-y-1/2 text-erani-blue font-extrabold text-4xl">$</span>
                                <input
                                    type="number"
                                    placeholder={steps[currentStep].placeholder}
                                    value={answers[steps[currentStep].id] || ""}
                                    onChange={(e) => updateAnswer(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-3xl p-8 pl-16 text-4xl md:text-5xl font-extrabold text-white focus:border-erani-blue focus:ring-1 focus:ring-erani-blue transition-all outline-none text-center"
                                />
                            </div>
                            <button
                                onClick={handleNext}
                                disabled={!isStepValid()}
                                className="button-premium w-full py-6 rounded-2xl font-bold flex items-center justify-center gap-3 disabled:opacity-50 disabled:grayscale transition-all text-xl"
                            >
                                Continuar
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="space-y-6 max-w-2xl mx-auto w-full py-12">
                            <div className="grid gap-6">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] pl-2">Nombre Completo</label>
                                    <input
                                        type="text"
                                        placeholder="Tu nombre"
                                        value={contactInfo.name}
                                        onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-xl text-white focus:border-[#00F5A0] outline-none transition-all placeholder:text-gray-700"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] pl-2">Email Corporativo</label>
                                    <input
                                        type="email"
                                        placeholder="ejemplo@empresa.com"
                                        value={contactInfo.email}
                                        onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-xl text-white focus:border-[#00F5A0] outline-none transition-all placeholder:text-gray-700"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] pl-2">WhatsApp</label>
                                    <input
                                        type="tel"
                                        placeholder="Tu número (Ej. 5512345678)"
                                        value={contactInfo.whatsapp}
                                        onChange={(e) => setContactInfo({ ...contactInfo, whatsapp: e.target.value.replace(/[^0-9]/g, '') })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-xl text-white focus:border-[#00F5A0] outline-none transition-all placeholder:text-gray-700"
                                    />
                                </div>
                            </div>

                            <div className="flex items-start gap-3 mt-6">
                                <input 
                                    type="checkbox" 
                                    checked={privacyAccepted}
                                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                                    className="w-5 h-5 mt-0.5 accent-erani-blue bg-white/5 border-white/20 rounded cursor-pointer shrink-0"
                                    id="privacy-policy"
                                />
                                <label htmlFor="privacy-policy" className="text-xs text-gray-500 font-medium leading-relaxed cursor-pointer select-none">
                                    Acepto que esta información sea procesada como una simulación para evaluar mi elegibilidad. Entiendo y acepto el Aviso de Privacidad y Consentimiento de Tratamiento de Datos.
                                </label>
                            </div>

                            <button
                                onClick={handleNext}
                                disabled={!isStepValid()}
                                className="button-premium w-full py-6 rounded-2xl font-bold flex items-center justify-center gap-3 mt-6 disabled:opacity-50 disabled:grayscale transition-all text-xl"
                            >
                                Generar Diagnóstico
                                <ArrowRight className="w-6 h-6" />
                            </button>
                            <p className="text-[12px] text-gray-600 text-center italic mt-6">
                                Al continuar permites que Erani procese tus datos bajo el marco de auditoría B2B.
                            </p>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            <div className="mt-12 flex items-center justify-between">
                <button
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className="text-gray-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium disabled:opacity-0"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Regresar
                </button>
            </div>
        </div>
    );
}
