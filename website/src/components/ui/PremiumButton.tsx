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
    primary: "bg-accent text-white shadow-lg",
    secondary: "bg-bg-secondary text-text-main border border-border hover:bg-gray-200",
    outline: "bg-transparent text-accent border border-accent hover:bg-accent/5"
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
