import { Suspense } from 'react';
import ShopPageContents from './ShopPageContents';
import { Skeleton } from '@/components/ui/skeleton';

function ShopPageFallback() {
  return (
    <div className="container py-12 md:py-16">
       <header className="mb-8 md:mb-12 text-center">
        <Skeleton className="h-12 w-1/2 mx-auto" />
        <Skeleton className="h-6 w-3/4 mx-auto mt-4" />
      </header>
       <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="md:col-span-1">
          <Skeleton className="h-64 w-full" />
        </aside>
        <main className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-96 w-full" />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopPageFallback />}>
      <ShopPageContents />
    </Suspense>
  );
}
