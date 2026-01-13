import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function WhySonicPulseSection() {
  const whyImage = PlaceHolderImages.find(img => img.id === 'why-sonicpulse');

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">
              Engineered for Emotion
            </h2>
            <p className="text-muted-foreground mb-6">
              At SonicX, we don't just create headphones; we craft experiences. Our brand is built on a foundation of passion for pure, unadulterated sound. We believe music has the power to move you, and our mission is to deliver that power with unparalleled clarity and depth.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span><span className="font-semibold">Premium Materials:</span> Built to last with lightweight alloys and plush, sustainable leather.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span><span className="font-semibold">Patented Audio Drivers:</span> Our custom-tuned drivers deliver a soundstage so wide you'll feel like you're in the studio.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span><span className="font-semibold">Award-Winning Design:</span> Recognized for blending futuristic aesthetics with ergonomic comfort.</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            {whyImage && (
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
                <Image
                  src={whyImage.imageUrl}
                  alt={whyImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={whyImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
