import React from 'react';
import { Button } from './ui/button';
import { Product } from '../hooks/useCart';

interface ProductItemProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <Button className="w-full" onClick={handleAddToCart}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductItem;