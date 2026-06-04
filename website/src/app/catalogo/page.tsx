"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Search, Filter } from 'lucide-react';
import productsData from '@/data/products.json';

const Catalog = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const categories = ['All', ...new Set(productsData.map(p => p.category))];

  useEffect(() => {
    const result = productsData.filter(p => {
      const matchesFilter = filter === 'All' || p.category === filter;
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
    setFilteredProducts(result);
  }, [filter, searchQuery]);

  return (
    <div className="min-h-screen bg-bg-primary px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-text-main tracking-tighter mb-6"
          >
            Nuestro <span className="text-accent">Catálogo</span>
          </motion.h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Explora nuestra gama de productos diseñados para la máxima eficiencia en higiene y limpieza.
          </p>
        </header>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 justify-between items-center">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                  ? 'bg-accent text-white shadow-md' 
                  : 'bg-bg-secondary text-text-muted hover:bg-bg-secondary/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
            <input 
              type="text" 
              placeholder="Buscar producto..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-bg-secondary border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
            />
          </div>
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                key={product.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-3xl border border-border p-6 shadow-premium hover:border-accent/30 transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl bg-bg-secondary flex items-center justify-center">
                  <img 
                    src={product.image_path} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/400?text=${product.name}`;
                    }}
                  />
                </div>
                <div className="flex-grow">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 block">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-text-muted text-sm line-clamp-2 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                </div>
                <Link 
                  href={`/catalogo/${product.name.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="btn-apple bg-text-main text-white w-full py-3 text-center font-medium flex items-center justify-center gap-2"
                >
                  Ver Detalles <span className="text-lg">→</span>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <p className="text-text-muted text-xl">No se encontraron productos que coincidan con tu búsqueda.</p>
            <button 
              onClick={() => { setFilter('All'); setSearchQuery(''); }} 
              className="mt-4 text-accent font-semibold underline"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
