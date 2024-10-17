import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    // In a real app, this would add the item to the cart
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48 mx-auto" src={product.image} alt={product.name} />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.name}</div>
              <p className="mt-2 text-gray-500">{product.description}</p>
              <p className="mt-2 text-gray-900">${product.price.toFixed(2)}</p>
              <Button onClick={handleAddToCart} className="mt-4">Add to Cart</Button>
              <Button onClick={() => navigate('/')} variant="outline" className="mt-4 ml-4">Back to Products</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;