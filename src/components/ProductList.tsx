import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';
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
  
  // Disc Golf Bags
  { id: 10, name: 'Trooper Backpack', price: 39.99, image: 'https://example.com/trooper.jpg', category: 'Bags' },
  { id: 11, name: 'Commander Cooler Bag', price: 59.99, image: 'https://example.com/commander.jpg', category: 'Bags' },
  { id: 12, name: 'Luxury Cart Bag', price: 199.99, image: 'https://example.com/luxury-cart.jpg', category: 'Bags' },
  
  // Accessories
  { id: 13, name: 'Mini Marker Disc', price: 3.99, image: 'https://example.com/mini-marker.jpg', category: 'Accessories' },
  { id: 14, name: 'Disc Retriever', price: 24.99, image: 'https://example.com/retriever.jpg', category: 'Accessories' },
  { id: 15, name: 'Towel', price: 9.99, image: 'https://example.com/towel.jpg', category: 'Accessories' },
  
  // Snacks
  { id: 16, name: 'Energy Bar', price: 2.49, image: 'https://example.com/energy-bar.jpg', category: 'Snacks' },
  { id: 17, name: 'Trail Mix', price: 3.99, image: 'https://example.com/trail-mix.jpg', category: 'Snacks' },
  { id: 18, name: 'Sports Drink', price: 1.99, image: 'https://example.com/sports-drink.jpg', category: 'Snacks' },
];

interface ProductListProps {
  addToCart: (product: Product) => void;
  limit?: number;
  category?: string;
}

const ProductList: React.FC<ProductListProps> = ({ addToCart, limit, category }) => {
  const filteredProducts = category
    ? products.filter(product => product.category.toLowerCase() === category.toLowerCase())
    : products;

  const displayProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayProducts.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="block">
          <ProductItem product={product} addToCart={addToCart} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;