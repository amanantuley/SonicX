import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Waves, EarOff, BatteryCharging, Armchair } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Waves,
    title: 'Deep Bass',
    description: 'Experience powerful, punchy bass that brings your music to life.',
  },
  {
    icon: EarOff,
    title: 'Active Noise Cancellation',
    description: 'Immerse yourself in sound by blocking out distractions.',
  },
  {
    icon: BatteryCharging,
    title: '40-Hour Battery',
    description: 'Enjoy days of wireless listening on a single charge.',
  },
  {
    icon: Armchair,
    title: 'Ultra Comfort',
    description: 'Plush earcups and a lightweight design for all-day wear.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Why You'll Love SonicPulse</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Our headphones are engineered for the ultimate listening experience, combining cutting-edge technology with premium comfort.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card border-border/60 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                  <feature.icon className="h-8 w-8" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
