"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, MessageCircle } from 'lucide-react';
import productsData from '@/data/products.json';

const ProductDetail = () => {
  const params = useParams();
  const slug = params.slug as string;

  const product = productsData.find(p => p.name.toLowerCase().replace(/\s+/g, '-') === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Producto no encontrado</h1>
          <Link href="/catalogo" className="btn-apple bg-accent text-white px-6 py-2">Volver al Catálogo</Link>
        </div>
      </div>
    );
  }

  const whatsappNumber = "+573000000000"; // Replace with real number
  const message = encodeURIComponent(`Hola CORFAMEP, estoy interesado en el producto: ${product.name}. ¿Me podrían dar más información?`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="min-h-screen bg-bg-primary px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <Link 
          href="/catalogo" 
          className="flex items-center gap-2 text-text-muted hover:text-text-main transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Volver al catálogo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="sticky top-32"
          >
            <div className="relative aspect-square rounded-3xl bg-bg-secondary p-12 shadow-premium overflow-hidden group">
              <img 
                src={product.image_path} 
                alt={product.name} 
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/600?text=${product.name}`;
                }}
              />
            </div>
          </motion.div>

          {/* Right Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-2 block">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-text-main tracking-tighter leading-tight mb-6">
                {product.name}
              </h1>
              <p className="text-xl text-text-muted leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8 border-y border-border">
              <div>
                <h4 className="text-text-main font-bold mb-4">Beneficios Clave</h4>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-muted text-sm">
                      <CheckCircle2 className="text-accent shrink-0" size={18} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-text-main font-bold mb-4">Características</h4>
                <ul className="space-y-3">
                  {product.characteristics.map((char, i) => (
                    <li className="flex items-center gap-3 text-text-muted text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {char}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-bg-secondary p-6 rounded-3xl flex items-center justify-between">
              <div>
                <p className="text-text-muted text-xs uppercase font-bold tracking-widest mb-1">Presentación</p>
                <p className="text-text-main font-semibold">{product.presentation}</p>
              </div>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-apple bg-green-500 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={20} />
                Cotizar por WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
