"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShieldCheck, Home, Factory, UserCheck } from 'lucide-react';

const categories = [
  {
    name: 'Higiene Personal',
    description: 'Cuidado avanzado para el cuerpo y la piel.',
    icon: <UserCheck size={32} />,
    slug: 'higiene-personal',
    color: 'bg-blue-50',
  },
  {
    name: 'Limpieza del Hogar',
    description: 'Pureza y frescura en cada rincón de tu casa.',
    icon: <Home size={32} />,
    slug: 'hogar',
    color: 'bg-green-50',
  },
  {
    name: 'Línea Industrial',
    description: 'Potencia y eficiencia para entornos exigentes.',
    icon: <Factory size={32} />,
    slug: 'industrial',
    color: 'bg-orange-50',
  },
  {
    name: 'Desinfección Total',
    description: 'Protección máxima contra agentes patógenos.',
    icon: <ShieldCheck size={32} />,
    slug: 'desinfeccion',
    color: 'bg-purple-50',
  },
];

const Categories = () => {
  return (
    <section className="py-24 px-6 bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent font-semibold tracking-widest uppercase text-sm"
          >
            Nuestras Soluciones
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-text-main mt-4 tracking-tight"
          >
            Diseñadas para la perfección.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer bg-white p-8 rounded-3xl border border-border hover:border-accent/30 transition-all duration-300 shadow-premium"
            >
              <div className={`w-16 h-16 ${cat.color} rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-accent transition-colors">
                {cat.name}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-6">
                {cat.description}
              </p>
              <Link 
                href={`/catalogo?category=${cat.slug}`} 
                className="text-accent font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
              >
                Explorar <span className="text-lg">→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
