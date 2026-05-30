"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SITE_METADATA } from '@/constants/content';
import { GlassCard } from '../ui/GlassCard';

export const Contact = () => {
  return (
    <AnimatedSection className="pb-32 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-brand-dark">Hablemos de <br/><span className="text-brand-primary">Pureza y Confianza</span></h2>
          <p className="text-titanium text-lg">
            Estamos listos para llevar la frescura de nuestros productos a su hogar o negocio. Contáctenos hoy mismo.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 glass-panel bg-brand-light/50">
              <span className="text-2xl">📞</span>
              <div>
                <p className="text-xs text-titanium uppercase">Teléfonos</p>
                <p className="text-brand-dark font-medium">{SITE_METADATA.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 glass-panel bg-brand-light/50">
              <span className="text-2xl">✉️</span>
              <div>
                <p className="text-xs text-titanium uppercase">Email</p>
                <p className="text-brand-dark font-medium">{SITE_METADATA.email}</p>
              </div>
            </div>
          </div>
        </div>

        <GlassCard className="p-8 bg-white/90 border-brand-primary/20">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs text-titanium uppercase ml-1">Nombre</label>
                <input type="text" className="w-full bg-brand-light border border-brand-primary/10 rounded-xl px-4 py-3 text-brand-dark focus:border-brand-primary outline-none transition-all" placeholder="Su nombre" />
              </div>
              <div className="space-y-2">
                <label className="text-xs text-titanium uppercase ml-1">Empresa</label>
                <input type="text" className="w-full bg-brand-light border border-brand-primary/10 rounded-xl px-4 py-3 text-brand-dark focus:border-brand-primary outline-none transition-all" placeholder="Nombre de empresa" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs text-titanium uppercase ml-1">Email</label>
              <input type="email" className="w-full bg-brand-light border border-brand-primary/10 rounded-xl px-4 py-3 text-brand-dark focus:border-brand-primary outline-none transition-all" placeholder="email@empresa.com" />
            </div>
            <div className="space-y-2">
              <label className="text-xs text-titanium uppercase ml-1">Mensaje</label>
              <textarea className="w-full bg-brand-light border border-brand-primary/10 rounded-xl px-4 py-3 text-brand-dark focus:border-brand-primary outline-none transition-all h-32" placeholder="¿En qué podemos ayudarle?"></textarea>
            </div>
            <PremiumButton className="w-full btn-vibrant">Enviar Solicitud</PremiumButton>
          </form>
        </GlassCard>
      </div>
    </AnimatedSection>
  );
};
