export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: 'driver' | 'midrange' | 'putter';
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Soft Peach Driver',
    price: 14.99,
    image: '/disc_picture.jpg', // Updated image path
    description: 'A high-speed disc for maximum distance with a soft peach color.',
    category: 'driver',
  },
  {
    id: 2,
    name: 'Sky Blue Mid-Range',
    price: 12.99,
    image: '/disc_picture.jpg', // Updated image path
    description: 'Versatile mid-range disc for approach shots and short drives.',
    category: 'midrange',
  },
  {
    id: 3,
    name: 'Lime Green Putter',
    price: 9.99,
    image: '/disc_picture.jpg', // Updated image path
    description: 'Designed for accurate putting and approach shots.',
    category: 'putter',
  },
];