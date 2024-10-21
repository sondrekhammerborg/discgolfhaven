import React from 'react';
import ProductList from '../components/ProductList';
import { Product } from '../hooks/useCart';

interface IndexProps {
  addToCart: (product: Product) => void;
}

const Index: React.FC<IndexProps> = ({ addToCart }) => {
  return (
    <div className="flex-grow">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to Disc Golf Haven</h1>
      <ProductList addToCart={addToCart} />
    </div>
  );
};

export default Index;