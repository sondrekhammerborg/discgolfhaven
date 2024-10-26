import React from 'react';
import ProductList from '../components/ProductList';
import FeaturedProduct from '../components/FeaturedProduct';
import CustomerReviews from '../components/CustomerReviews';
import ImageCarousel from '../components/ImageCarousel';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../hooks/useCart';

interface IndexProps {
  addToCart: (product: Product) => void;
}

const Index: React.FC<IndexProps> = ({ addToCart }) => {
  const featuredProduct: Product & { description: string } = {
    id: 0,
    name: "Premium Distance Driver",
    price: 24.99,
    image: "/premiumdisc.jpg",
    category: "Drivers",
    speed: 12,
    glide: 5,
    turn: -1,
    fade: 3,
    description: "Experience unparalleled distance and control with our Premium Distance Driver. Perfect for both beginners and seasoned players."
  };

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <div className="relative h-[600px] mb-16">
        <div className="absolute inset-0">
          <img 
            src="/heropicdisc.jpg" 
            alt="Disc Golf Course" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Overlay for better text visibility */}
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">
              Elevate Your Disc Golf Game
            </h1>
            <p className="text-xl mb-8">
              Discover premium discs and gear for players of all skill levels. 
              Join our community of passionate disc golfers.
            </p>
            <Link to="/products">
              <Button size="lg" className="group">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <section className="mb-12 px-4 md:px-0">
        <ImageCarousel />
      </section>

      {/* Featured Product Section */}
      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Bestseller</h2>
        <FeaturedProduct {...featuredProduct} addToCart={() => addToCart(featuredProduct)} />
      </section>

      {/* Featured Discs Section */}
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

      {/* Customer Reviews Section */}
      <section>
        <CustomerReviews />
      </section>
    </div>
  );
};

export default Index;