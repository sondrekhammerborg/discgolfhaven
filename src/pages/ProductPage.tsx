import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Product } from '../hooks/useCart';

const products: Product[] = [
  // Drivers
  { id: 1, name: 'Cloud Breaker Driver', price: 19.99, image: 'https://example.com/cloud-breaker.jpg', category: 'Drivers', speed: 12, glide: 5, turn: -1, fade: 3 },
  { id: 2, name: 'Solar Flare Driver', price: 18.99, image: 'https://example.com/solar-flare.jpg', category: 'Drivers', speed: 11, glide: 5, turn: -2, fade: 2 },
  { id: 3, name: 'Thunderbolt Driver', price: 20.99, image: 'https://example.com/thunderbolt.jpg', category: 'Drivers', speed: 13, glide: 5, turn: -1, fade: 3 },
  
  // Mid-Range Discs
  { id: 4, name: 'Buzzz Mid-Range', price: 14.99, image: 'https://example.com/buzzz.jpg', category: 'Mid-Range', speed: 5, glide: 4, turn: -1, fade: 1 },
  { id: 5, name: 'Roc3 Mid-Range', price: 15.99, image: 'https://example.com/roc3.jpg', category: 'Mid-Range', speed: 5, glide: 4, turn: 0, fade: 3 },
  { id: 6, name: 'Mako3 Mid-Range', price: 16.99, image: 'https://example.com/mako3.jpg', category: 'Mid-Range', speed: 5, glide: 5, turn: 0, fade: 0 },
  
  // Putters
  { id: 7, name: 'Aviar Putter', price: 12.99, image: 'https://example.com/aviar.jpg', category: 'Putters', speed: 2, glide: 3, turn: 0, fade: 1 },
  { id: 8, name: 'Judge Putter', price: 13.99, image: 'https://example.com/judge.jpg', category: 'Putters', speed: 2, glide: 4, turn: 0, fade: 1 },
  { id: 9, name: 'Luna Putter', price: 14.99, image: 'https://example.com/luna.jpg', category: 'Putters', speed: 3, glide: 3, turn: 0, fade: 3 },
];

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
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-4">Category: {product.category}</p>
          {product.speed !== undefined && (
            <div className="grid grid-cols-2 gap-4 mb-4">
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
          <Button onClick={() => addToCart(product)}>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;