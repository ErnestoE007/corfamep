"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { CLIENT_LOGOS } from '@/constants/content';

export const Clients = () => {
  return (
    <AnimatedSection>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-starlight">Aliados Estratégicos</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        {CLIENT_LOGOS.map((client, i) => (
          <div key={i} className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-starlight/20 rounded-full" />
            <span className="text-starlight font-semibold group-hover:text-electric-cobalt transition-colors">
              {client.name}
            </span>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};
