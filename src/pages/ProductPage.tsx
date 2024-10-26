import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Product } from '../hooks/useCart';

interface ProductPageProps {
  addToCart: (product: Product) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ addToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-4">Category: {product.category}</p>
          <p className="mb-6 text-gray-600">{product.description}</p>
          {product.speed !== undefined && (
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <span className="font-semibold">Speed:</span> {product.speed}
              </div>
              <div>
                <span className="font-semibold">Glide:</span> {product.glide}
              </div>
              <div>
                <span className="font-semibold">Turn:</span> {product.turn}
              </div>
              <div>
                <span className="font-semibold">Fade:</span> {product.fade}
              </div>
            </div>
          )}
          <Button 
            onClick={() => addToCart(product)}
            className="w-full md:w-auto"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;