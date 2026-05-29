import { Hero } from '@/components/sections/Hero';
import { Products } from '@/components/sections/Products';

export default function Home() {
  return (
    <main className="bg-obsidian text-starlight selection:bg-electric-cobalt/30">
      <Hero />
      <Products />
      {/* Other sections will be added sequentially */}
    </main>
  );
}
