export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'over-ear' | 'on-ear' | 'earbuds';
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: 'model-eclipse',
    name: 'Eclipse',
    price: 349,
    category: 'over-ear',
    description: 'The pinnacle of audio engineering. Unmatched clarity and comfort for the discerning listener.',
    featured: true,
  },
  {
    id: 'model-aurora',
    name: 'Aurora',
    price: 299,
    category: 'over-ear',
    description: 'Immersive sound with a vibrant, otherworldly design. Perfect for creators and audiophiles.',
    featured: true,
  },
  {
    id: 'model-nova',
    name: 'Nova',
    price: 249,
    category: 'over-ear',
    description: 'Sleek, futuristic, and powerful. Experience crystal-clear audio in any environment.',
    featured: true,
  },
  {
    id: 'model-pulse',
    name: 'Pulse',
    price: 199,
    category: 'on-ear',
    description: 'Compact, vibrant, and full of energy. The perfect on-the-go companion.',
    featured: true,
  },
  {
    id: 'model-rift',
    name: 'Rift',
    price: 179,
    category: 'earbuds',
    description: 'Pocket-sized power. Experience deep bass and crystal clear calls anywhere.',
    featured: true,
  },
  {
    id: 'model-core',
    name: 'Core',
    price: 129,
    category: 'earbuds',
    description: 'The essential everyday earbud. Reliable, comfortable, and great-sounding.',
    featured: true,
  },
  {
    id: 'model-zenith',
    name: 'Zenith',
    price: 449,
    category: 'over-ear',
    description: 'Our flagship studio reference headphone. Hear every detail with absolute precision.',
  },
  {
    id: 'model-motion',
    name: 'Motion',
    price: 159,
    category: 'on-ear',
    description: 'Lightweight and durable, designed for an active lifestyle without compromising on sound.',
  },
  {
    id: 'model-spark',
    name: 'Spark',
    price: 99,
    category: 'earbuds',
    description: 'Tiny earbuds that pack a surprising punch. Bright sound in a small package.',
  },
  {
    id: 'model-stratus',
    name: 'Stratus',
    price: 399,
    category: 'over-ear',
    description: 'Cloud-like comfort with a vast, open-back soundstage. For long listening sessions.',
  },
  {
    id: 'model-flex',
    name: 'Flex',
    price: 179,
    category: 'on-ear',
    description: 'Foldable and flexible. Your new travel essential for great audio anywhere.',
  },
  {
    id: 'model-atom',
    name: 'Atom',
    price: 149,
    category: 'earbuds',
    description: 'Our smallest and lightest true wireless earbuds, with noise isolation technology.',
  },
  {
    id: 'model-forge',
    name: 'Forge',
    price: 329,
    category: 'over-ear',
    description: 'Built from premium metal alloys for a robust feel and powerful, industrial sound.',
  },
  {
    id: 'model-glide',
    name: 'Glide',
    price: 149,
    category: 'on-ear',
    description: 'Effortless listening with a smooth, balanced sound signature and minimalist design.',
  },
  {
    id: 'model-echo',
    name: 'Echo',
    price: 199,
    category: 'earbuds',
    description: 'Featuring spatial audio for a truly immersive, 3D listening experience.',
  },
];
