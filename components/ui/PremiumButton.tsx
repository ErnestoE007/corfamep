"use client";
import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PremiumButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const PremiumButton = ({ variant = 'primary', className, children, ...props }: PremiumButtonProps) => {
  const variants = {
    primary: "bg-electric-cobalt text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(46,91,255,0.4)]",
    secondary: "bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20",
    outline: "bg-transparent text-electric-cobalt border border-electric-cobalt/50 hover:border-electric-cobalt"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative px-6 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden group",
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
    </motion.button>
  );
};
