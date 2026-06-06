import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-text-main text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
            CORFAMEP<span className="text-accent">.</span>
          </Link>
          <p className="text-text-muted text-sm leading-relaxed">
            Líderes en la fabricación de productos de limpieza e higiene, comprometidos con la calidad, la innovación y la salud de su familia y empresa.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Navegación</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="text-text-muted text-sm hover:text-white transition-colors">Inicio</Link></li>
            <li><Link href="/catalogo" className="text-text-muted text-sm hover:text-white transition-colors">Catálogo</Link></li>
            <li><Link href="/nosotros" className="text-text-muted text-sm hover:text-white transition-colors">Nosotros</Link></li>
            <li><Link href="/contacto" className="text-text-muted text-sm hover:text-white transition-colors">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Soporte</h4>
          <ul className="space-y-3">
            <li><Link href="/faq" className="text-text-muted text-sm hover:text-white transition-colors">Preguntas Frecuentes</Link></li>
            <li><Link href="/envios" className="text-text-muted text-sm hover:text-white transition-colors">Envíos</Link></li>
            <li><Link href="/garantia" className="text-text-muted text-sm hover:text-white transition-colors">Garantía</Link></li>
            <li><Link href="/privacidad" className="text-text-muted text-sm hover:text-white transition-colors">Privacidad</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Síganos</h4>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <span className="text-xs">IG</span>
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <span className="text-xs">FB</span>
            </a>
            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <span className="text-xs">LN</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-text-muted">
        <p>&copy; {new Date().getFullYear()} CORFAMEP S.A. Todos los derechos reservados.</p>
        <p className="mt-4 md:mt-0">Diseñado con estándares de pureza e innovación.</p>
      </div>
    </footer>
  );
};

export default Footer;
