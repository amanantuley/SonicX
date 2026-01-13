import Link from 'next/link';
import { Button } from '@/components/ui/button';
import HeroAnimation from './HeroAnimation';

export default function HeroSection() {
  return (
    <section className="relative h-[150vh] min-h-[600px] text-white">
      <div className="sticky top-0 h-screen flex items-center justify-center text-center">
        <HeroAnimation />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black via-transparent to-black/20" />
        
        <div className="relative z-10 p-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-headline tracking-tighter leading-tight drop-shadow-lg">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Feel the Sound.
            </span>
            <br/>
            Live the Bass.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground drop-shadow-md">
            Premium Wireless Headphones
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/#models">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105">
                Explore Models
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
