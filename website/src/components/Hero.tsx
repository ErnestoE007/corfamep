"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-bg-primary">
      {/* Background Abstract Shape */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-bg-secondary blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-3xl opacity-60 -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-left"
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-text-main tracking-tighter leading-tight mb-6">
            Pureza que <br />
            <span className="text-accent">Transforma</span> Espacios.
          </h1>
          <p className="text-lg text-text-muted mb-10 max-w-lg leading-relaxed">
            Soluciones avanzadas de higiene y limpieza profesional. Elevamos el estándar de cuidado para el hogar, la industria y la salud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/catalogo" 
              className="btn-apple bg-text-main text-white px-8 py-4 text-lg font-medium flex items-center justify-center gap-2 group"
            >
              Explorar Catálogo 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contacto" 
              className="btn-apple bg-bg-secondary text-text-main px-8 py-4 text-lg font-medium text-center"
            >
              Contacto Directo
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative flex justify-center items-center"
        >
          {/* Main Hero Image - using a placeholder for now, will replace with real product */}
          <div className="relative w-full aspect-square max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-2xl" />
            <img 
              src="/images/hero-product.png" 
              alt="Premium Hygiene Product" 
              className="relative z-10 w-full h-full object-contain drop-shadow-premium animate-float" 
              onError={(e) => {
                // Fallback if image not found
                e.currentTarget.src = "https://via.placeholder.com/600x600?text=Premium+Product";
              }}
            />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
