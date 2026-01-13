"use client";

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, Product } from '@/lib/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import HeadphoneCard from '@/components/ui/HeadphoneCard';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { motion, AnimatePresence } from 'framer-motion';

type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';

export default function ShopPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [categoryFilter, setCategoryFilter] = useState(initialCategory);
  const [sortOption, setSortOption] = useState<SortOption>('price-asc');

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(p => p.category === categoryFilter);
    }

    return [...filtered].sort((a, b) => {
      switch (sortOption) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'name-asc':
          return a.name.localeCompare(b.name);
        case 'name-desc':
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
  }, [categoryFilter, sortOption]);

  const allImages = PlaceHolderImages;

  return (
    <div className="container py-12 md:py-16">
      <header className="mb-8 md:mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">Shop SonicX</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
          Explore our full range of premium headphones and earbuds.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters */}
        <aside className="md:col-span-1">
          <div className="sticky top-20 p-4 rounded-lg border bg-card shadow-sm">
            <h3 className="text-lg font-headline font-semibold mb-4">Filters</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Category</h4>
                <RadioGroup value={categoryFilter} onValueChange={setCategoryFilter}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="cat-all" />
                    <Label htmlFor="cat-all">All</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="over-ear" id="cat-over-ear" />
                    <Label htmlFor="cat-over-ear">Over-Ear</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="on-ear" id="cat-on-ear" />
                    <Label htmlFor="cat-on-ear">On-Ear</Label>
                  </div>
                   <div className="flex items-center space-x-2">
                    <RadioGroupItem value="earbuds" id="cat-earbuds" />
                    <Label htmlFor="cat-earbuds">Earbuds</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Sort By</h4>
                 <Select value={sortOption} onValueChange={(value) => setSortOption(value as SortOption)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort products" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="name-asc">Name: A to Z</SelectItem>
                    <SelectItem value="name-desc">Name: Z to A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="md:col-span-3">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredAndSortedProducts.map((product) => {
                  const image = allImages.find(img => img.id === product.id);
                  if (!image) return null;
                  return (
                    <motion.div
                      key={product.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <HeadphoneCard
                        href={`/shop/${product.id}`}
                        imageUrl={image.imageUrl}
                        imageHint={image.imageHint}
                        name={product.name}
                        price={`$${product.price}`}
                        description={product.description}
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
