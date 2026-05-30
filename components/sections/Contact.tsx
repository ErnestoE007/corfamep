"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { PremiumButton } from '../ui/PremiumButton';
import { GlassCard } from '../ui/GlassCard';
import { SITE_METADATA } from '@/constants/content';

export const Contact = () => {
  return (
    <AnimatedSection className="pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-starlight">Iniciemos una <br/><span className="text-electric-cobalt">Alianza Estratégica</span></h2>
          <p className="text-titanium text-lg">
            Estamos listos para optimizar sus procesos de higiene con la calidad NOOA. Contáctenos para una consultoría técnica.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 glass-panel">
              <span className="text-2xl">📞</span>
              <div>
                <p className="text-xs text-titanium uppercase">Teléfonos</p>
                <p className="text-starlight font-medium">{SITE_METADATA.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 glass-panel">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="text-xs text-titanium uppercase">Email</p>
                <p className="text-starlight font-medium">{SITE_METADATA.email}</p>
              </div>
            </div>
          </div>
        </div>

        <GlassCard className="p-8">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-titanium uppercase ml-1">Nombre</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-starlight focus:border-electric-cobalt outline-none transition-all" placeholder="Su nombre" />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-titanium uppercase ml-1">Empresa</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-starlight focus:border-electric-cobalt outline-none transition-all" placeholder="Nombre de empresa" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs text-titanium uppercase ml-1">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-starlight focus:border-electric-cobalt outline-none transition-all" placeholder="email@empresa.com" />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-titanium uppercase ml-1">Mensaje</label>
              <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-starlight focus:border-electric-cobalt outline-none transition-all h-32" placeholder="¿En qué podemos ayudarle?"></textarea>
            </div>
            <PremiumButton className="w-full">Enviar Solicitud</PremiumButton>
          </form>
        </GlassCard>
      </div>
    </AnimatedSection>
  );
};
