"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SERVICES_CONTENT } from '@/constants/content';
import { GlassCard } from '../ui/GlassCard';

export const Services = () => {
  return (
    <AnimatedSection className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-brand-dark mb-4">Nuestros Beneficios</h2>
        <p className="text-titanium max-w-2xl mx-auto">
          Soluciones diseñadas para brindar la máxima frescura y limpieza, garantizando resultados profesionales en cada gota.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES_CONTENT.map((service, i) => (
          <GlassCard key={i} className="group hover:border-brand-primary/50 bg-white/90 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 transition-transform">
              <span className="text-xl font-bold">{service.icon === 'factory' ? '🏭' : service.icon === 'truck' ? '🚚' : service.icon === 'shield' ? '🛡️' : '✅'}</span>
            </div>
            <h3 className="text-xl font-semibold text-brand-dark mb-3">{service.title}</h3>
            <p className="text-sm text-titanium leading-relaxed">{service.desc}</p>
          </GlassCard>
        ))}
      </div>
    </AnimatedSection>
  );
};
