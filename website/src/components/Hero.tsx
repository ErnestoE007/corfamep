"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-left"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="inline-block text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4"
          >
            Nueva Línea NOOA Pro
          </motion.span>
          <h1 className="text-6xl lg:text-8xl font-bold tracking-tighter leading-tight mb-6 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Pureza. <br />
            Sin concesiones.
          </h1>
          <p className="text-xl text-gray-400 mb-10 max-w-lg leading-relaxed font-light">
            Ingeniería avanzada en higiene. Diseñados para superar los estándares más exigentes de la industria y el hogar.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              href="/catalogo" 
              className="px-8 py-4 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 group"
            >
              Explorar Catálogo 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/nosotros" 
              className="px-8 py-4 border border-gray-700 text-white rounded-full text-lg font-medium hover:bg-white/5 transition-colors text-center"
            >
              Nuestra Tecnología
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative flex justify-center items-center"
        >
          <div className="relative w-full aspect-square max-w-xl">
            <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-3xl" />
            <img 
              src="/images/productos/Captura de pantalla 2026-05-28 195626.png" 
              alt="Cloro Premium NOOA" 
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-float" 
            />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
