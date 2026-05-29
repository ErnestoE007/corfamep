"use client";
import { motion } from 'framer-motion';
import { PremiumButton } from '../ui/PremiumButton';
import { AnimatedSection } from '../ui/AnimatedSection';

export const Hero = () => {
  return (
    <AnimatedSection className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Futuristic Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-electric-cobalt/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow delay-700" />
      
      <div className="relative z-10 text-center max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-bold tracking-tighter text-starlight mb-6"
        >
          Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-cobalt to-cyan-300">Future of Excellence</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg md:text-xl text-titanium mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          CORFAMEP S.A. synthesizes cutting-edge innovation with uncompromising quality to deliver industrial solutions that redefine global standards.
        </motion.p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PremiumButton>Explore Solutions</PremiumButton>
          <PremiumButton variant="secondary">Contact Executive Relations</PremiumButton>
        </div>
      </div>
    </AnimatedSection>
  );
};
