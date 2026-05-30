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
    primary: "bg-gradient-to-r from-brand-primary to-brand-secondary text-white shadow-lg",
    secondary: "bg-white text-brand-primary border border-brand-primary/20 hover:bg-brand-primary/5",
    outline: "bg-transparent text-brand-primary border border-brand-primary/50 hover:border-brand-primary"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative px-6 py-3 rounded-full font-bold transition-all duration-300 overflow-hidden group",
        variants[variant],
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
    </motion.button>
  );
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
