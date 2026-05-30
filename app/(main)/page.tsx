import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Products } from '@/components/sections/Products';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Clients } from '@/components/sections/Clients';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <section id="about"><About /></section>
        <section id="products"><Products /></section>
        <section id="benefits"><Services /></section>
        <section id="sustainability"><Projects /></section>
        <section id="clients"><Clients /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
