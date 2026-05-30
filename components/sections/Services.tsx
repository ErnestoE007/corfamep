"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SERVICES_CONTENT } from '@/constants/content';
import { GlassCard } from '../ui/GlassCard';

export const Services = () => {
  return (
    <AnimatedSection>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-starlight mb-4">Capacidades Estratégicas</h2>
        <p className="text-titanium max-w-2xl mx-auto">
          Ofrecemos un ecosistema integral de servicios diseñados para maximizar la eficiencia y la higiene en cada operación.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES_CONTENT.map((service, i) => (
          <GlassCard key={i} className="group hover:border-electric-cobalt/50 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-electric-cobalt/20 flex items-center justify-center text-electric-cobalt mb-6 group-hover:scale-110 transition-transform">
              <span className="text-xl font-bold">{service.icon === 'factory' ? '🏭' : service.icon === 'truck' ? '🚚' : service.icon === 'shield' ? '🛡️' : '✅'}</span>
            </div>
            <h3 className="text-xl font-semibold text-starlight mb-3">{service.title}</h3>
            <p className="text-sm text-titanium leading-relaxed">{service.desc}</p>
          </GlassCard>
        ))}
      </div>
    </AnimatedSection>
  );
};
