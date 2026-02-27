"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Shield } from "lucide-react";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-erani-navy"
                >
                    <div className="relative flex items-center justify-center">
                        {/* Background Glow */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1.2, opacity: 0.3 }}
                            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                            className="absolute inset-0 bg-emerald-500 blur-[80px] rounded-full"
                        />

                        {/* Circular Charging Bar */}
                        <svg className="w-48 h-48 -rotate-90">
                            <circle
                                cx="96"
                                cy="96"
                                r="88"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="transparent"
                                className="text-white/5"
                            />
                            <motion.circle
                                cx="96"
                                cy="96"
                                r="88"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="transparent"
                                strokeDasharray="553"
                                initial={{ strokeDashoffset: 553 }}
                                animate={{ strokeDashoffset: 0 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                                className="text-emerald-500"
                            />
                        </svg>

                        {/* Centered Logo */}
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <div className="w-24 h-24 flex items-center justify-center hover:scale-110 transition-transform duration-300">
                                <img src="/logoerani.png" alt="ERANI Logo" className="w-full h-full object-contain" />
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="absolute bottom-20 flex flex-col items-center gap-2"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400">Initializing Erani Systems</span>
                        <div className="flex gap-1">
                            <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 h-1 bg-emerald-500 rounded-full" />
                            <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1 h-1 bg-emerald-500 rounded-full" />
                            <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1 h-1 bg-emerald-500 rounded-full" />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
