import HeadphoneCard from '@/components/ui/HeadphoneCard';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const models = [
  {
    id: 'model-aurora',
    name: 'Aurora',
    price: '$299',
    description: 'Immersive sound with a vibrant, otherworldly design. Perfect for creators and audiophiles.'
  },
  {
    id: 'model-nova',
    name: 'Nova',
    price: '$249',
    description: 'Sleek, futuristic, and powerful. Experience crystal-clear audio in any environment.'
  },
  {
    id: 'model-eclipse',
    name: 'Eclipse',
    price: '$349',
    description: 'The pinnacle of audio engineering. Unmatched clarity and comfort for the discerning listener.'
  },
];

export default function ModelsSection() {
  const modelImages = PlaceHolderImages.filter(img => models.some(m => m.id === img.id));

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
          {models.map((model) => {
            const image = modelImages.find(img => img.id === model.id);
            if (!image) return null;
            return (
              <HeadphoneCard
                key={model.id}
                imageUrl={image.imageUrl}
                imageHint={image.imageHint}
                name={model.name}
                price={model.price}
                description={model.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
