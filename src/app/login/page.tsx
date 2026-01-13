"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Headphones } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // No actual authentication, just redirect
    router.push('/');
  };

  return (
    <div className="flex min-h-[calc(100vh-12.5rem)] items-center justify-center p-4">
      <Card className="w-full max-w-sm border-border/60 shadow-lg shadow-primary/10">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
             <Link href="/" className="flex items-center gap-2 font-bold text-2xl font-headline">
              <Headphones className="h-8 w-8 text-primary" />
              SonicPulse
            </Link>
          </div>
          <CardTitle className="text-2xl font-headline">Welcome Back</CardTitle>
          <CardDescription>Enter your credentials to continue.</CardDescription>
        </CardHeader>
        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" defaultValue="demo@sonicpulse.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" defaultValue="demopassword" />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button type="submit" className="w-full">Login</Button>
            <p className="text-xs text-muted-foreground">
              This is a demo login – no authentication is required.
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
