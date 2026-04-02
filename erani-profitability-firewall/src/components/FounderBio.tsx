"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Linkedin, Quote, Zap } from "lucide-react";
import Image from "next/image";

const partnerLogos = [
    { name: "Google", src: "/Google_2015_logo.svg-removebg-preview.png" },
    { name: "Kurigage", src: "/KURIGAGE-removebg-preview.png" },
    { name: "Logo Positivo", src: "/Logo_positivo.png-removebg-preview.png" },
    { name: "MIT-Official", src: "/MIT-Logo-removebg-preview.png", isLarge: true },
    { name: "A37b", src: "/a37b9da72cac390c0e38833c78aff89f-removebg-preview.png", isLarge: true },
    { name: "BJX", src: "/Escudo-horizontal-bjx-02.png-removebg-preview.png", isLarge: true },
];

const duplicatedLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

export default function FounderBio() {
    return (
        <section className="py-16 md:py-32 px-6 relative border-t border-white/5 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#9e80ff]/30 blur-[120px] rounded-full" />

            <div className="container max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Side: Image & Narrative */}
                    <div className="relative group px-2 md:px-0">
                        <div className="relative pt-6"> {/* Added padding to make space for the top badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative aspect-square w-full sm:w-[90%] md:w-[500px] lg:w-[550px] mx-auto rounded-full overflow-hidden p-2 border border-emerald-500/20 bg-white/5 backdrop-blur-sm"
                                style={{ borderRadius: '50%' }}
                            >
                                <div className="absolute inset-2 overflow-hidden" style={{ borderRadius: '50%' }}>
                                    <Image
                                        src="/diego_arredondo.jpg"
                                        alt="Diego Arredondo, Founder de ERANI, experto en Growth B2B y Transformación Digital"
                                        title="Diego Arredondo - Founder y CEO de ERANI"
                                        itemProp="image"
                                        fill
                                        className="object-cover object-[center_12%] scale-[1.2] grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                            </motion.div>
                            
                            {/* Floating Badge (Now absolute to the container wrapper, top centered) */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 p-2 px-4 md:px-5 md:py-3 glassmorphism rounded-full border-white/10 flex items-center gap-3 z-30 shadow-2xl backdrop-blur-xl">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]" />
                                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-emerald-400">Founder & CEO</span>
                            </div>

                            {/* Floating Quote */}
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
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight text-white max-w-xl font-montserrat tracking-tight">
                                Diseñado bajo estándares globales de <span className="text-gradient-green">eficiencia operativa.</span>
                            </h2>

                            <div className="prose prose-invert mb-10" itemScope itemType="https://schema.org/Person">
                                <meta itemProp="name" content="Diego Arredondo" />
                                <meta itemProp="jobTitle" content="Founder & CEO" />
                                <meta itemProp="worksFor" content="ERANI" />

                                <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed mb-6">
                                    <span className="text-white font-bold">Diego Arredondo</span> es Founder de ERANI y estratega de Growth B2B con +4 años liderando áreas comerciales en la industria del software y desempeñando roles clave en operaciones y gestión de comunidades en <span className="text-emerald-400 font-bold">TrepCamp</span>, el ecosistema global de emprendimiento de alto impacto.
                                </p>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                                    MBA por la UIW y egresado del programa en <span className="text-white font-bold">Transformación Digital de Alibaba Group</span> (Global Digital Talent). Cuenta con certificaciones técnicas en <span className="text-emerald-400 font-bold">Big Data e IA por el MIT y Google</span>.
                                </p>
                                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                                    Como becado de TrepCamp & Santander en Nueva York, Diego combina visión global con <span className="text-white font-bold">ejecución financiera local</span>.
                                </p>
                                <p className="text-gray-400 text-xs md:text-sm leading-relaxed border-l-2 border-emerald-500/50 pl-4 py-1 italic">
                                    A través de ERANI, su misión es erradicar la <span className="text-emerald-400 font-bold">"hemorragia financiera"</span> de las agencias de servicios mediante auditorías de <span className="text-white font-bold">Inferencia de Nivel 2</span> impulsadas por IA, blindando la rentabilidad neta de sus clientes.
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

                            <a href="https://www.linkedin.com/in/diego-arredondo1803/" target="_blank" className="button-premium px-8 py-4 rounded-2xl inline-flex items-center gap-4 text-erani-navy font-black text-sm uppercase tracking-widest group">
                                Conectar en LinkedIn
                                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Moving Carousel Section */}
                <div className="mt-24 md:mt-32 relative py-4 px-0">
                    {/* Screen-to-Screen Intense Glowing Lines */}
                    <div className="absolute top-0 left-[-50vw] right-[-50vw] h-[1px] bg-[#9e80ff]/50 shadow-[0_0_30px_#9e80ff] opacity-80 z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-[-50vw] right-[-50vw] h-[1px] bg-[#9e80ff]/50 shadow-[0_0_30px_#9e80ff] opacity-80 z-10 pointer-events-none" />

                    <div className="overflow-hidden">
                        <div className="flex animate-carousel items-center py-4 opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap">
                            {duplicatedLogos.map((logo, i) => (
                                <div 
                                    key={i} 
                                    className={`flex-shrink-0 relative transition-all duration-500 group mx-4 ${
                                        logo.name === "A37b" ? 'w-80 md:w-[800px] h-20 md:h-32' : 
                                        logo.isLarge ? 'w-64 md:w-[480px] h-16 md:h-24' : 
                                        'w-40 md:w-56 h-10 md:h-12'
                                    }`}
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        fill
                                        className="object-contain transition-all duration-500 grayscale brightness-200"
                                        style={{ 
                                            filter: 'invert(52%) sepia(99%) saturate(408%) hue-rotate(113deg) brightness(98%) contrast(92%)' 
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
