"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../ui/AnimatedSection';
import { PROJECTS_CONTENT } from '@/constants/content';
import { GlassCard } from '../ui/GlassCard';

export const Projects = () => {
  return (
    <AnimatedSection>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-starlight mb-4">Impacto Real</h2>
        <p className="text-titanium max-w-2xl mx-auto">
          Nuestra trayectoria se mide por la calidad de los resultados entregados a nuestros aliados estratégicos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {PROJECTS_CONTENT.map((project, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-3xl glass-panel"
          >
            <div className="relative h-80 w-full overflow-hidden">
              <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <span className="px-3 py-1 rounded-full bg-electric-cobalt/20 text-electric-cobalt text-xs font-bold uppercase">
                  {project.category}
                </span>
                <span className="text-starlight font-mono font-bold">{project.metric}</span>
              </div>
              <h3 className="text-2xl font-bold text-starlight mb-3">{project.title}</h3>
              <p className="text-titanium leading-relaxed">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
};
