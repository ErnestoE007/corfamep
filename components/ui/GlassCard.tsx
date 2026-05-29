"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard = ({ children, className, hoverEffect = true }: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" } : {}}
      className={cn(
        "relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl",
        "before:absolute before:inset-0 before:rounded-2xl before:border before:border-white/20 before:pointer-events-none",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
