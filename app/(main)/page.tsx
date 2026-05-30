import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Products } from '@/components/sections/Products';
import { Services } from '@/components/sections/Services';
import { Projects } from '@/components/sections/Projects';
import { Clients } from '@/components/sections/Clients';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="bg-obsidian text-starlight selection:bg-electric-cobalt/30">
      <Hero />
      <About />
      <Products />
      <Services />
      <Projects />
      <Clients />
      <Contact />
    </main>
  );
}
