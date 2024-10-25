import React from 'react';
import ProductList from '../components/ProductList';
import FeaturedProduct from '../components/FeaturedProduct';
import CustomerReviews from '../components/CustomerReviews';
import ImageCarousel from '../components/ImageCarousel';
import { Product } from '../hooks/useCart';

interface IndexProps {
  addToCart: (product: Product) => void;
}

const Index: React.FC<IndexProps> = ({ addToCart }) => {
  const featuredProduct: Product & { description: string } = {
    id: 0,
    name: "Pro Disc Golf Driver",
    price: 24.99,
    image: "https://example.com/featured-driver.jpg",
    category: "Drivers",
    speed: 12,
    glide: 5,
    turn: -1,
    fade: 3,
    description: "Experience unparalleled distance and control with our Pro Disc Golf Driver. Perfect for both beginners and seasoned players."
  };

  return (
    <div className="flex-grow space-y-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to Disc Golf Haven</h1>
      
      <section className="mb-12 px-4 md:px-0">
        <ImageCarousel />
      </section>

      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Featured Product</h2>
        <FeaturedProduct {...featuredProduct} addToCart={() => addToCart(featuredProduct)} />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Featured Discs</h2>
        <ProductList 
          addToCart={addToCart} 
          limit={3}
          selectedCategory="all"
          searchQuery=""
          priceRange={[0, 200]}
          rating={0}
        />
      </section>

      <section>
        <CustomerReviews />
      </section>
    </div>
  );
};

export default Index;