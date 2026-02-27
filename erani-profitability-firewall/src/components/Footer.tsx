"use client";

import { motion } from "framer-motion";
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Globe, ArrowUpRight } from "lucide-react";

const footerLinks = [
    {
        title: "Solución",
        links: [
            { name: "Auditoría Forense", href: "#solucion" },
            { name: "Simulador de Fugas", href: "#problema" },
            { name: "Casos de Impacto", href: "#impacto" },
            { name: "Pricing", href: "#oferta" },
        ],
    },
    {
        title: "Compañía",
        links: [
            { name: "Sobre Erani", href: "#fundador" },
            { name: "Metodología", href: "#" },
            { name: "Prensa", href: "#" },
            { name: "Carreras", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacidad", href: "#" },
            { name: "Términos", href: "#" },
            { name: "Garantía", href: "#" },
            { name: "Seguridad de Datos", href: "#" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="relative bg-erani-navy pt-24 pb-12 px-6 border-t border-white/5 overflow-hidden">
            {/* Background Static/Motion lines */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

            <div className="container max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">

                    {/* Brand Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex items-center gap-3">
                            <div className="w-48 h-16 flex items-center justify-center">
                                <img src="/logoerani.png" alt="ERANI Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="font-black tracking-tighter text-2xl text-white italic"></span>
                        </div>

                        <p className="text-gray-400 max-w-sm leading-relaxed">
                            Infraestructura de auditoría forense para agencias de alto rendimiento.
                            Deteniendo la hemorragia de utilidad mediante IA y gobernanza automatizada.
                        </p>

                        <div className="flex gap-4">
                            {[Linkedin, Twitter, Globe].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all group"
                                >
                                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    {footerLinks.map((column, i) => (
                        <div key={i} className="space-y-6">
                            <h4 className="text-white font-black text-sm uppercase tracking-widest">{column.title}</h4>
                            <ul className="space-y-4">
                                {column.links.map((link, j) => (
                                    <li key={j}>
                                        <a
                                            href={link.href}
                                            className="text-gray-500 hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                                        >
                                            {link.name}
                                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact Strip */}
                <div className="grid md:grid-cols-3 gap-8 py-10 border-y border-white/5 mb-10">
                    <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer group">
                        <Mail className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm font-medium">contacto@erani.com</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer">
                        <Phone className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm font-medium">+52 477 123 4567</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer">
                        <MapPin className="w-5 h-5 text-emerald-500" />
                        <span className="text-sm font-medium">León, GTO | Berkeley, CA</span>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-gray-600 text-[10px] font-bold uppercase tracking-[0.2em]">
                        © 2026 Erani Financial Systems. Todos los derechos reservados.
                    </div>

                    <div className="flex items-center gap-8">
                        <motion.div
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="flex items-center gap-2"
                        >
                            <div className="w-2 h-2 rounded-full bg-emerald-500 border border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">System Status: Optimal</span>
                        </motion.div>

                        <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest flex items-center gap-1">
                            Engine: Inferencia Nivel 2
                        </div>
                    </div>
                </div>
            </div>

            {/* Background Decorative Asymmetric Lines */}
            <div className="absolute bottom-0 right-0 w-1/3 h-[500px] bg-emerald-500/5 blur-[120px] rounded-full translate-y-1/2 translate-x-1/2" />

            {/* FULL EMERALD GRADIENT AT THE VERY BOTTOM */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-emerald-500/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
        </footer>
    );
}
