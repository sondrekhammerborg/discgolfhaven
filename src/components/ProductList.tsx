import React from 'react';
import ProductItem from './ProductItem';
import { Product } from '../hooks/useCart';

const products: Product[] = [
  { 
    id: 1, 
    name: 'Driver Disc', 
    price: 14.99, 
    image: 'https://example.com/driver.jpg',
    description: 'High-speed disc for maximum distance'
  },
  { 
    id: 2, 
    name: 'Mid-Range Disc', 
    price: 12.99, 
    image: 'https://example.com/midrange.jpg',
    description: 'Versatile disc for controlled flights'
  },
  { 
    id: 3, 
    name: 'Putter Disc', 
    price: 9.99, 
    image: 'https://example.com/putter.jpg',
    description: 'Accurate disc for short-range throws'
  },
];

interface ProductListProps {
  addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ addToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;