"use client";
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Corfamep</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Líderes en la fabricación de productos de limpieza e higiene personal en Ecuador. Calidad y confianza en cada gota.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-white">Enlaces</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li><a href="/" className="hover:text-white transition-colors">Inicio</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">Nosotros</a></li>
            <li><a href="#products" className="hover:text-white transition-colors">Productos</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-white">Soporte</h4>
          <ul className="space-y-3 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
            <li><a href="#" className="hover:text-white transition-//colors">Términos de Servicio</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-white">Contacto</h4>
          <p className="text-slate-400 text-sm mb-4">Quito / Guayaquil, Ecuador</p>
          <p className="text-slate-400 text-sm">Email: contacto@corfamep.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
        © {new Date().getFullYear()} Corfamep S.A. Todos los derechos reservados.
      </div>
    </footer>
  );
};
