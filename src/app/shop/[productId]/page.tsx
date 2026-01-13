import { products } from '@/lib/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Star, Truck, ShieldCheck, Award } from 'lucide-react';
import HeadphoneCard from '@/components/ui/HeadphoneCard';

export async function generateStaticParams() {
  return products.map((product) => ({
    productId: product.id,
  }));
}

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const product = products.find(p => p.id === params.productId);
  
  if (!product) {
    notFound();
  }

  const image = PlaceHolderImages.find(img => img.id === product.id);
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="container py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Product Image */}
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl shadow-primary/10">
          {image && (
             <Image
              src={image.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              data-ai-hint={image.imageHint}
            />
          )}
           <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
            {product.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold font-headline">{product.name}</h1>
          <div className="flex items-center gap-4 mt-4 mb-6">
            <p className="text-4xl font-bold text-primary">${product.price}</p>
            <div className="flex items-center gap-1 text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current text-muted" />
              <span className="text-muted-foreground text-sm ml-2">(1,283 reviews)</span>
            </div>
          </div>
          <p className="text-muted-foreground mb-8">{product.description}</p>
          
          <Button size="lg" className="w-full sm:w-auto">Add to Cart</Button>
          
          <div className="mt-8 space-y-4 text-sm text-muted-foreground border-t pt-6">
             <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-primary" />
              <span>Free shipping on orders over $50</span>
            </div>
             <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>2-year warranty and 30-day return policy</span>
            </div>
             <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-primary" />
              <span>Engineered in California, assembled for the world</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold font-headline text-center mb-12">You Might Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedProducts.map(related => {
            const relatedImage = PlaceHolderImages.find(img => img.id === related.id);
            if (!relatedImage) return null;
            return (
              <HeadphoneCard
                key={related.id}
                href={`/shop/${related.id}`}
                imageUrl={relatedImage.imageUrl}
                imageHint={relatedImage.imageHint}
                name={related.name}
                price={`$${related.price}`}
                description={related.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
