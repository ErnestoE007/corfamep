"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { ShieldCheck, Award, Zap, Heart } from 'lucide-react';

const NosotrosPage = () => {
  const values = [
    {
      title: 'Calidad Garantizada',
      desc: 'Utilizamos materias primas de primera calidad para asegurar que cada producto cumpla con los estándares más exigentes de higiene.',
      icon: <Award size={32} />,
    },
    {
      title: 'Innovación Constante',
      desc: 'Desarrollamos fórmulas avanzadas que optimizan el tiempo de limpieza y maximizan la desinfección.',
      icon: <Zap size={32} />,
    },
    {
      title: 'Compromiso Social',
      desc: 'Creemos en la salud y el bienestar de nuestra comunidad, ofreciendo precios directos de fábrica.',
      icon: <Heart size={32} />,
    },
    {
      title: 'Seguridad Total',
      desc: 'Nuestros productos son seguros para el usuario y respetuosos con el medio ambiente.',
      icon: <ShieldCheck size={32} />,
    },
  ];

  return (
    <div className="min-h-screen bg-bg-primary px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold text-text-main tracking-tighter mb-6">
            Sobre <span className="text-accent">CORFAMEP</span>
          </h1>
          <p className="text-text-muted text-lg max-w-3xl mx-auto leading-relaxed">
            Somos una empresa líder en la fabricación de productos de limpieza e higiene personal. 
            Nuestra misión es transformar los espacios en entornos puros, seguros y saludables 
            mediante la ciencia y la innovación.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="h-full p-8 flex gap-6 items-start">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-main mb-3">{val.title}</h3>
                  <p className="text-text-muted leading-relaxed">{val.desc}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-12 rounded-3xl bg-text-main text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-accent/10 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">¿Listo para elevar el estándar de higiene?</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Únete a las cientos de empresas y hogares que confían en CORFAMEP para un entorno impecable.
            </p>
            <a 
              href="/contacto" 
              className="inline-block bg-accent text-white px-8 py-4 rounded-full font-bold hover:bg-blue-400 transition-all"
            >
              Contáctanos Ahora
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NosotrosPage;
