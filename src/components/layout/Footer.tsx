import Link from 'next/link';
import { Facebook, Twitter, Instagram, Headphones, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const footerLinks = {
  shop: [
    { href: '/shop?category=over-ear', label: 'Over-Ear' },
    { href: '/shop?category=on-ear', label: 'On-Ear' },
    { href: '/shop?category=earbuds', label: 'Earbuds' },
    { href: '/shop', label: 'All Products' },
  ],
  company: [
    { href: '#', label: 'About Us' },
    { href: '#', label: 'Blog' },
    { href: '#', label: 'Careers' },
    { href: '#', label: 'Press' },
  ],
  legal: [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    { href: '#', label: 'Cookie Policy' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/40">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-4 lg:col-span-2 pr-8">
             <Link href="/" className="flex items-center gap-2 font-bold text-2xl font-headline mb-4">
              <Headphones className="h-8 w-8 text-primary" />
              SonicX
            </Link>
            <p className="text-muted-foreground text-sm mb-6">Experience the future of sound. Premium wireless headphones and earbuds engineered for emotion and clarity.</p>
            <form className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Enter your email" className="bg-background" />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
          </div>

          <div>
            <h4 className="font-headline text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-headline text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between">
           <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} SonicX Corporation. All rights reserved.
          </p>
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
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
      </div>
    </footer>
  );
}
