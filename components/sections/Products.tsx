"use client";
import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedSection } from '../ui/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

const PRODUCTS = [
  { id: 1, category: 'Machinery', name: 'Hyper-Press 500', desc: 'Precision industrial pressing for heavy-duty structural components.' },
  { id: 2, category: 'Electronics', name: 'Smart-Control Hub', desc: 'AI-driven automation center for real-time industrial monitoring.' },
  { id: 3, category: 'Machinery', name: 'Turbo-Mill X', desc: 'High-speed CNC milling with micron-level precision.' },
  { id: 4, category: 'Electronics', name: 'Quantum-Sentry', desc: 'Advanced sensory array for predictive maintenance.' },
  { id: 5, category: 'Machinery', name: 'Omni-Forge 2.0', desc: 'Next-generation additive manufacturing system.' },
  { id: 6, category: 'Electronics', name: 'Flux-Capacitor Core', desc: 'Energy stabilization unit for high-power facilities.' },
];

export const Products = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filtered = filter === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);

  return (
    <AnimatedSection>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-starlight mb-4">Industrial Showroom</h2>
        <p className="text-titanium mb-8 max-w-2xl mx-auto">Explore our portfolio of precision-engineered solutions designed for the most demanding environments.</p>
        <div className="flex justify-center gap-3">
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

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <GlassCard>
                <span className="text-xs font-bold text-electric-cobalt uppercase tracking-widest">{product.category}</span>
                <h3 className="text-2xl font-semibold text-starlight mt-2 mb-3">{product.name}</h3>
                <p className="text-titanium">{product.desc}</p>
                <div className="mt-6 flex justify-end">
                   <button className="text-sm font-medium text-electric-cobalt hover:underline">View Specs →</button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </AnimatedSection>
  );
};
