"use client";

import Link from 'next/link';
import { Headphones, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useState } from 'react';

const navLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/#models', label: 'Models' },
];

export default function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg font-headline">
            <Headphones className="h-6 w-6 text-primary" />
            SonicPulse
          </Link>
        </div>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex flex-1 items-center justify-end gap-2">
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/#models">
             <Button className="hidden sm:flex">Explore Models</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b">
                   <Link href="/" onClick={closeSheet} className="flex items-center gap-2 font-bold text-lg font-headline">
                    <Headphones className="h-6 w-6 text-primary" />
                    SonicPulse
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon"><X/></Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-6 p-4 text-lg">
                  {navLinks.map((link) => (
                    <Link key={link.label} href={link.href} onClick={closeSheet} className="transition-colors hover:text-primary">
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/login" onClick={closeSheet} className="transition-colors hover:text-primary">
                    Login
                  </Link>
                </nav>
                <div className="mt-auto p-4">
                  <Link href="/#models" onClick={closeSheet} >
                     <Button className="w-full">Explore Models</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
