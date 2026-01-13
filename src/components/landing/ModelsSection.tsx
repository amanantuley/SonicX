import Link from 'next/link';
import HeadphoneCard from '@/components/ui/HeadphoneCard';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { products } from '@/lib/products';
import { Button } from '../ui/button';

export default function ModelsSection() {
  const featuredProducts = products.filter(p => p.featured);
  const modelImages = PlaceHolderImages.filter(img => featuredProducts.some(p => p.id === img.id));

  return (
    <section id="models" className="py-16 md:py-24 bg-black">
      <div className="container relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Signature Models</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Choose the sound that defines you. Each model is crafted with precision for a unique sensory experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((model) => {
            const image = modelImages.find(img => img.id === model.id);
            if (!image) return null;
            return (
              <HeadphoneCard
                key={model.id}
                href={`/shop/${model.id}`}
                imageUrl={image.imageUrl}
                imageHint={image.imageHint}
                name={model.name}
                price={`$${model.price}`}
                description={model.description}
              />
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Link href="/shop">
            <Button size="lg" variant="outline">View All Products</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
