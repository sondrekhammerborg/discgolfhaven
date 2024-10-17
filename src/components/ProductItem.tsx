import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductItem = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>
        </Link>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <Button className="w-full">Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductItem;