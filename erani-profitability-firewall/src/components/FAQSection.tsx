"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ShieldAlert, Activity, FileText } from "lucide-react";

const faqs = [
    {
        question: "¿Qué es exactamente el Dark Data Index?",
        answer: "Es una métrica propietaria de ERANI que cuantifica el volumen de actividad operativa (chats, tareas, commits) que no tiene un registro equivalente en tus sistemas de facturación o gestión de tiempo. Un índice alto indica una ceguera financiera crítica.",
        icon: ShieldAlert
    },
    {
        question: "¿Cómo garantiza ERANI la privacidad de mis datos?",
        answer: "Operamos bajo un esquema de 'Zero-Knowledge Extraction'. Solo analizamos la frecuencia y el timing de los metadatos, nunca el contenido. Tus datos son procesados localmente y las conclusiones se generan sin exponer información sensible.",
        icon: Activity
    },
    {
        question: "¿Cuánto tiempo tarda en implementarse la auditoría?",
        answer: "Nuestro sistema de Inferencia Nivel 2 puede conectarse y generar los primeros peritajes en menos de 48 horas tras la integración inicial de las fuentes de datos (Slack, ClickUp, Jira, etc.).",
        icon: FileText
    },
    {
        question: "¿Qué diferencia a ERANI de un software de control de tiempos?",
        answer: "El software tradicional depende del registro manual humano, que tiene un margen de error del +30%. ERANI es una capa de inteligencia forense que audita la realidad operativa de forma pasiva e irrefutable.",
        icon: HelpCircle
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 px-6 relative overflow-hidden font-sans bg-transparent">

            <div className="container max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Preguntas Frecuentes</h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Todo lo que necesitas saber sobre el blindaje de utilidad y la auditoría forense automatizada.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        const Icon = faq.icon;
                        return (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className={`glassmorphism border transition-all duration-300 ${isOpen ? 'border-erani-blue/30 bg-erani-blue/[0.02]' : 'border-white/5 bg-white/[0.01]'}`}
                            >
                                <button 
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-lg ${isOpen ? 'bg-erani-blue text-white' : 'bg-white/5 text-gray-400'}`}>
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <span className="text-lg font-bold text-white">{faq.question}</span>
                                    </div>
                                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-erani-blue' : ''}`} />
                                </button>
                                
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-8 pt-0 text-gray-400 leading-relaxed max-w-3xl ml-14 border-t border-white/5 mt-2">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
