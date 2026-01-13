import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface HeadphoneCardProps {
  imageUrl: string;
  imageHint: string;
  name: string;
  price: string;
  description: string;
}

export default function HeadphoneCard({ imageUrl, imageHint, name, price, description }: HeadphoneCardProps) {
  return (
    <Card className="group overflow-hidden border-border/60 bg-card hover:border-primary/50 transition-all duration-300 flex flex-col shadow-lg shadow-black/30">
      <CardHeader className="p-0">
        <div className="relative aspect-square">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={imageHint}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow flex flex-col">
        <CardTitle className="font-headline text-2xl">{name}</CardTitle>
        <p className="text-muted-foreground mt-2 text-sm flex-grow">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <p className="text-2xl font-bold text-primary">{price}</p>
        <Button>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
