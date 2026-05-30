"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedSection } from '../ui/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '@/constants/products';

export const Products = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filtered = filter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  return (
    <AnimatedSection>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-starlight mb-4">Catálogo de Excelencia</h2>
        <p className="text-titanium mb-8 max-w-2xl mx-auto">
          Descubra la línea completa de productos NOOA, donde la ciencia de la higiene se encuentra con la elegancia industrial.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${filter === cat ? 'bg-electric-cobalt text-white' : 'bg-white/10 text-titanium hover:bg-white/20'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((product) => (
            <motion.div 
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard className="flex flex-col h-full">
                <div className="relative w-full h-64 mb-6 overflow-hidden rounded-xl bg-obsidian/50">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-contain p-4 hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="text-xs font-bold text-electric-cobalt uppercase tracking-widest">{product.category}</span>
                <h3 className="text-2xl font-semibold text-starlight mt-2 mb-3">{product.name}</h3>
                <p className="text-titanium flex-grow">{product.description}</p>
                <div className="mt-6 flex justify-end">
                   <button className="text-sm font-medium text-electric-cobalt hover:underline">Solicitar Cotización →</button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </AnimatedSection>
  );
};

