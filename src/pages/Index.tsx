import React from 'react';
import ProductList from '../components/ProductList';
import FeaturedProduct from '../components/FeaturedProduct';
import CustomerReviews from '../components/CustomerReviews';
import { Product } from '../hooks/useCart';

interface IndexProps {
  addToCart: (product: Product) => void;
}

const Index: React.FC<IndexProps> = ({ addToCart }) => {
  const featuredProduct: Product = {
    id: 0,
    name: "Pro Disc Golf Driver",
    price: 24.99,
    image: "https://example.com/featured-driver.jpg",
    description: "Our best-selling driver disc, perfect for achieving maximum distance with excellent control."
  };

  return (
    <div className="flex-grow space-y-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to Disc Golf Haven</h1>
      
      <section className="bg-pale-green p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Featured Product</h2>
        <FeaturedProduct {...featuredProduct} addToCart={() => addToCart(featuredProduct)} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Our Products</h2>
        <ProductList addToCart={addToCart} />
      </section>

      <section>
        <CustomerReviews />
      </section>
    </div>
  );
};

export default Index;