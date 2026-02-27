"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Linkedin, Quote, Zap } from "lucide-react";
import Image from "next/image";

const logos = [
    "Alibaba Group",
    "TrepCamp NYC",
    "Berkeley SkyDeck",
    "Madrid Innovation",
    "JICA",
    "Google",
    "Alibaba Group",
    "TrepCamp NYC",
    "Berkeley SkyDeck",
    "Madrid Innovation",
    "JICA",
    "Google",
];

export default function FounderBio() {
    return (
        <section className="py-24 md:py-32 px-6 relative border-t border-white/5 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 blur-[120px] rounded-full" />

            <div className="container max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Side: Image & Narrative */}
                    <div className="relative group px-2 md:px-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative aspect-[4/5] rounded-3xl overflow-hidden glassmorphism p-2 border-emerald-500/20"
                        >
                            <Image
                                src="/diego_arredondo.jpg"
                                alt="Diego Arredondo - Founder of Erani"
                                fill
                                className="object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            {/* Floating Decorative Elements */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/10 blur-3xl" />
                            <div className="absolute top-6 left-6 md:top-10 md:left-10 p-3 md:p-4 glassmorphism border-white/10 flex items-center gap-3 z-10">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-emerald-400">Founder & CEO</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="absolute -bottom-8 md:-bottom-10 right-6 left-6 md:right-10 md:left-10 p-6 md:p-8 glassmorphism border-emerald-500/30 z-20"
                        >
                            <Quote className="w-8 h-8 md:w-10 h-10 text-emerald-500/30 absolute top-4 left-4" />
                            <p className="text-xs md:text-sm italic text-gray-300 relative z-10 text-center leading-relaxed">
                                "Erani nace de la intersección entre la estrategia financiera de alto nivel y la inteligencia operativa automatizada."
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Side: Bio & Authority */}
                    <div className="flex flex-col justify-center mt-12 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="px-2"
                        >
                            <h2 className="text-3xl md:text-5xl font-black mb-6 md:mb-8 leading-tight text-white">Diseñado bajo estándares globales de eficiencia operativa.</h2>

                            <div className="prose prose-invert mb-10">
                                <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-6">
                                    <span className="text-white font-bold">Diego Arredondo</span> es Marketing Leader & Subgerente Comercial en Kurigage y Estratega de Growth B2B.
                                    Es egresado del programa de especialización en <span className="text-emerald-400 font-bold">Transformación Digital de Alibaba Group</span> (Global Digital Talent).
                                </p>
                                <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                                    Cuenta con un MBA por la Universidad Incarnate Word y certificaciones técnicas en Big Data e IA por el <span className="font-bold">MIT y Google</span>.
                                    Como representante de <span className="font-bold text-white">TrepCamp</span> en Nueva York, Diego combina visión global con ejecución financiera local.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12">
                                <div className="flex items-start gap-4 p-5 rounded-3xl bg-white/5 border border-white/5 group hover:border-emerald-500/20 transition-all">
                                    <GraduationCap className="w-6 h-6 text-emerald-500 shrink-0" />
                                    <div>
                                        <h4 className="text-white font-black text-xs md:text-sm uppercase tracking-wide">MBA Strategist</h4>
                                        <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mt-1">Growth & FinOps</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-5 rounded-3xl bg-white/5 border border-white/5 group hover:border-emerald-500/20 transition-all">
                                    <Award className="w-6 h-6 text-emerald-500 shrink-0" />
                                    <div>
                                        <h4 className="text-white font-black text-xs md:text-sm uppercase tracking-wide">Tech Certified</h4>
                                        <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mt-1">MIT / Google / Alibaba</p>
                                    </div>
                                </div>
                            </div>

                            <a href="https://linkedin.com" target="_blank" className="button-premium px-8 py-4 rounded-2xl inline-flex items-center gap-4 text-erani-navy font-black text-sm uppercase tracking-widest group">
                                Conectar en LinkedIn
                                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Moving Carousel Section */}
                <div className="mt-40 md:mt-48 relative py-12">
                    {/* Floating Lines */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent" />

                    <div className="overflow-hidden">
                        <div className="carousel-track items-center gap-12 md:gap-20 py-4 opacity-50 hover:opacity-100 transition-opacity">
                            {logos.map((logo, i) => (
                                <div key={i} className="flex items-center gap-4 px-8 whitespace-nowrap group">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl bg-erani-graphite/50 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-erani-navy transition-all">
                                        <Zap className="w-4 h-4 md:w-5 h-5" />
                                    </div>
                                    <span className="font-black text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">{logo}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
