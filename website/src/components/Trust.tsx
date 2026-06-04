"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Zap, Heart } from 'lucide-react';

const trustPoints = [
  {
    title: 'Calidad Certificada',
    description: 'Procesos validados bajo normativas internacionales de higiene.',
    icon: <Award size={40} />,
  },
  {
    title: 'Protección Total',
    description: 'Fórmulas diseñadas para eliminar el 99.9% de patógenos.',
    icon: <ShieldCheck size={40} />,
  },
  {
    title: 'Acción Rápida',
    description: 'Resultados inmediatos con el mínimo esfuerzo.',
    icon: <Zap size={40} />,
  },
  {
    title: 'Cuidado Consciente',
    description: 'Comprometidos con la salud del usuario y el planeta.',
    icon: <Heart size={40} />,
  },
];

const Trust = () => {
  return (
    <section className="py-24 px-6 bg-bg-primary border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {trustPoints.map((point, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-bg-secondary rounded-full flex items-center justify-center text-text-main mx-auto mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm">
                {point.icon}
              </div>
              <h4 className="text-xl font-bold text-text-main mb-3">
                {point.title}
              </h4>
              <p className="text-text-muted text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
