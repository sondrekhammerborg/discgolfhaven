export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'driver' | 'midrange' | 'putter' | 'bag' | 'mini' | 'accessory';
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Soft Peach Driver',
    price: 14.99,
    image: '/disc_picture.jpg',
    description: 'A high-speed disc for maximum distance with a soft peach color.',
    category: 'driver',
  },
  {
    id: 2,
    name: 'Sky Blue Mid-Range',
    price: 12.99,
    image: '/disc_picture.jpg',
    description: 'Versatile mid-range disc for approach shots and short drives.',
    category: 'midrange',
  },
  {
    id: 3,
    name: 'Lime Green Putter',
    price: 9.99,
    image: '/disc_picture.jpg',
    description: 'Designed for accurate putting and approach shots.',
    category: 'putter',
  },
  {
    id: 4,
    name: 'Deluxe Disc Golf Bag',
    price: 79.99,
    image: '/disc_picture.jpg',
    description: 'Spacious bag with multiple compartments for discs and accessories.',
    category: 'bag',
  },
  {
    id: 5,
    name: 'Mini Marker Disc',
    price: 4.99,
    image: '/disc_picture.jpg',
    description: 'Official mini disc for marking your lie on the course.',
    category: 'mini',
  },
  {
    id: 6,
    name: 'Disc Golf Towel',
    price: 7.99,
    image: '/disc_picture.jpg',
    description: 'Microfiber towel for keeping your discs clean and dry.',
    category: 'accessory',
  },
  {
    id: 7,
    name: 'Energy Bar Pack',
    price: 8.99,
    image: '/disc_picture.jpg',
    description: 'Pack of 5 energy bars to keep you fueled during long rounds.',
    category: 'accessory',
  },
];