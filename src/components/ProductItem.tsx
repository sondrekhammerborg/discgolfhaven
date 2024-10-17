import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Product } from '../data/products';
import { useToast } from '../hooks/use-toast';

const ProductItem = ({ product }: { product: Product }) => {
  const { toast } = useToast();

  const handleAddToCart = () => {
    // In a real app, this would add the item to the cart
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mx-auto" />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h2>
        </Link>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <Button className="w-full" onClick={handleAddToCart}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductItem;