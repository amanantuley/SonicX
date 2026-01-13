import Link from 'next/link';
import { Facebook, Twitter, Instagram, Headphones } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg font-headline">
            <Headphones className="h-6 w-6 text-primary" />
            SonicX
          </Link>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} SonicX. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Twitter">
            <div className="p-2 rounded-full transition-colors hover:bg-accent hover:text-accent-foreground">
              <Twitter className="h-5 w-5" />
            </div>
          </Link>
          <Link href="#" aria-label="Facebook">
            <div className="p-2 rounded-full transition-colors hover:bg-accent hover:text-accent-foreground">
              <Facebook className="h-5 w-5" />
            </div>
          </Link>
          <Link href="#" aria-label="Instagram">
            <div className="p-2 rounded-full transition-colors hover:bg-accent hover:text-accent-foreground">
              <Instagram className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}
