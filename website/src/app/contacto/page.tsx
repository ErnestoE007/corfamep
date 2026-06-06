"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { PremiumButton } from '@/components/ui/PremiumButton';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-bg-primary px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-text-main tracking-tighter mb-6">
            Hablemos de <span className="text-accent">Pureza</span>
          </h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Estamos listos para llevar la frescura de nuestros productos a su hogar o negocio. 
            Contáctenos hoy mismo para cotizaciones al por mayor y menor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold text-text-main mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase font-bold">Teléfonos</p>
                    <p className="text-text-main font-medium">0993 831 717 / 0987 875 698</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase font-bold">Email</p>
                    <p className="text-text-main font-medium">contacto@corfamep.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-text-muted uppercase font-bold">Ubicación</p>
                    <p className="text-text-main font-medium">Quito / Guayaquil, Ecuador</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          <GlassCard className="p-8">
            <h3 className="text-2xl font-bold text-text-main mb-6">Envíanos un Mensaje</h3>
            <form className="space-y-4">
              <div>
                <label className="text-xs font-bold text-text-muted uppercase ml-1">Nombre</label>
                <input type="text" className="w-full p-3 rounded-xl bg-bg-secondary border border-border focus:border-accent outline-none transition-all" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="text-xs font-bold text-text-muted uppercase ml-1">Email</label>
                <input type="email" className="w-full p-3 rounded-xl bg-bg-secondary border border-border focus:border-accent outline-none transition-all" placeholder="tu@email.com" />
              </div>
              <div>
                <label className="text-xs font-bold text-text-muted uppercase ml-1">Mensaje</label>
                <textarea className="w-full p-3 rounded-xl bg-bg-secondary border border-border focus:border-accent outline-none transition-all h-32" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>
              <PremiumButton className="w-full">Enviar Mensaje</PremiumButton>
            </form>
          </GlassCard>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://wa.me/593993831717?text=Hola CORFAMEP, deseo solicitar una cotización" 
            target="_blank" 
            className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/30"
          >
            <MessageCircle size={24} />
            Chat Directo por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
