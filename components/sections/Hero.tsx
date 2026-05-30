"use client";
import React from 'react';
import Image from 'next/image';
import { PremiumButton } from '../ui/PremiumButton';

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background Accents - Subtle and Professional */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-light -skew-x-12 translate-x-20 z-0" />
      
      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-black text-brand-dark leading-tight"
          >
            Corfamep
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-titanium max-w-xl leading-relaxed"
          >
            Pureza Impecable, Confianza Absoluta. <br />
            Expertos en la fabricación de productos de limpieza profesional en Ecuador.
          </motion.p>
          
          <div className="flex flex-wrap gap-4">
            <PremiumButton className="btn-primary">Ver Catálogo</PremiumButton>
            <PremiumButton variant="secondary">Solicitar Cotización</PremiumButton>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
             <Image 
               src="/images/productos/Captura de pantalla 2026-05-28 195208.png" 
               alt="Productos Corfamep" 
               width={600} 
               height={600} 
               className="w-full h-auto object-cover"
             />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-secondary rounded-full blur-3xl opacity-20" />
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-primary rounded-full blur-3xl opacity-20" />
        </div>
      </div>
    </section>
  );
};

// Note: I need to import motion here
import { motion } from 'framer-motion';
