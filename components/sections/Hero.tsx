"use client";
import { motion } from 'framer-motion';
import { PremiumButton } from '../ui/PremiumButton';
import { AnimatedSection } from '../ui/AnimatedSection';

export const Hero = () => {
  return (
    <AnimatedSection className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Luminous Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px] animate-pulse delay-700" />
      
      <div className="relative z-10 text-center max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-black tracking-tighter text-brand-dark mb-6"
        >
          Corfamep
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-titanium mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Pureza Impecable, Confianza Absoluta. <br />
          Líderes en fabricación de productos de limpieza profesional en Ecuador.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PremiumButton className="btn-vibrant text-lg px-8 py-4">Ver Productos</PremiumButton>
          <PremiumButton variant="secondary" className="bg-white text-brand-primary border-brand-primary/20 hover:bg-brand-primary/5 text-lg px-8 py-4">Contáctanos</PremiumButton>
        </div>
      </div>
    </AnimatedSection>
  );
};

