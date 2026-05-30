"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatedSection } from '../ui/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '@/constants/products';

export const Products = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];
  const filtered = filter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  return (
    <AnimatedSection className="bg-white py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-brand-dark mb-4">Nuestros Productos</h2>
        <div className="w-20 h-1 bg-brand-primary mx-auto mb-8" />
        <div className="flex justify-center gap-3 flex-wrap mb-12">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-brand-primary text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((product) => (
            <motion.div 
              key={product.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-56 w-full bg-slate-50 overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill 
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold text-brand-secondary uppercase tracking-widest mb-2 block">{product.category}</span>
                <h3 className="text-lg font-bold text-brand-dark mb-2 leading-tight">{product.name}</h3>
                <p className="text-sm text-slate-500 mb-4 line-clamp-2">{product.description}</p>
                <button className="w-full py-2 text-sm font-semibold text-brand-primary border border-brand-primary rounded-md hover:bg-brand-primary hover:text-white transition-colors">
                  Detalles
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
};
