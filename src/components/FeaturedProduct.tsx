import React from 'react';
import { Button } from './ui/button';

interface FeaturedProductProps {
  name: string;
  description: string;
  price: number;
  image: string;
  addToCart: () => void;
}

const FeaturedProduct: React.FC<FeaturedProductProps> = ({ name, description, price, image, addToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow hover:shadow-lg">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={image} alt={name} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{name}</div>
          <p className="mt-2 text-gray-500">{description}</p>
          <div className="mt-4">
            <span className="text-gray-800 font-bold">${price.toFixed(2)}</span>
            <Button onClick={addToCart} className="ml-4">Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;