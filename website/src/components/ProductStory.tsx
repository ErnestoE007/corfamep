"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const stories = [
  {
    title: 'Innovación en cada gota',
    description: 'Nuestras fórmulas no solo limpian, sino que protegen. Utilizamos tecnología de vanguardia para crear agentes activos que eliminan la suciedad más difícil sin comprometer la integridad de las superficies.',
    image: '/images/story-1.png',
    benefits: ['Biodegradables', 'Alta Concentración', 'Seguro para la piel'],
    reverse: false,
  },
  {
    title: 'Estándares de Calidad Global',
    description: 'Cada lote de producción es sometido a rigurosas pruebas de laboratorio. Nos aseguramos de que cada producto que sale de nuestra planta cumpla con los más altos estándares de pureza y seguridad industrial.',
    image: '/images/story-2.png',
    benefits: ['Certificación de Pureza', 'Control de Calidad ISO', 'Eficacia Comprobada'],
    reverse: true,
  },
];

const ProductStory = () => {
  return (
    <section className="py-24 px-6 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-semibold tracking-widest uppercase text-sm"
          >
            La Diferencia Nooa
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-text-main mt-4 tracking-tight"
          >
            Ciencia aplicada a la higiene.
          </motion.h2>
        </div>

        <div className="space-y-32">
          {stories.map((story, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${story.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
            >
              <motion.div 
                initial={{ opacity: 0, x: story.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 w-full"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-bg-secondary group">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/600x600?text=${story.title}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-text-main/20 to-transparent" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: story.reverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 text-left"
              >
                <h3 className="text-3xl font-bold text-text-main mb-6 leading-tight">
                  {story.title}
                </h3>
                <p className="text-text-muted text-lg leading-relaxed mb-8">
                  {story.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {story.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-text-main font-medium">
                      <CheckCircle2 className="text-accent" size={20} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductStory;
