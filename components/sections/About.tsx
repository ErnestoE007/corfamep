"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ABOUT_CONTENT } from '@/constants/content';
import { GlassCard } from '../ui/GlassCard';

export const About = () => {
  return (
    <AnimatedSection className="relative bg-brand-light/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-xs font-bold uppercase tracking-widest">
            Quiénes Somos
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-brand-dark leading-tight">
            {ABOUT_CONTENT.title}
          </h2>
          <p className="text-lg text-titanium leading-relaxed">
            {ABOUT_CONTENT.narrative}
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 glass-panel bg-white/80">
              <h4 className="text-brand-primary font-bold mb-2">Misión</h4>
              <p className="text-sm text-titanium">{ABOUT_CONTENT.mission}</p>
            </div>
            <div className="p-6 glass-panel bg-white/80">
              <h4 className="text-brand-primary font-bold mb-2">Visión</h4>
              <p className="text-sm text-titanium">{ABOUT_CONTENT.vision}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {ABOUT_CONTENT.values.map((val, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 glass-panel border-l-4 border-l-brand-secondary bg-white/80"
            >
              <h4 className="text-brand-dark font-bold mb-2">{val.title}</h4>
              <p className="text-xs text-titanium">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};
