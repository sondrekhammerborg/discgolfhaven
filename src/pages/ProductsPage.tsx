import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProductList from '../components/ProductList';
import SearchFilters from '../components/SearchFilters';
import { Product } from '../hooks/useCart';
import { Input } from '../components/ui/input';
import { Search } from 'lucide-react';

interface ProductsPageProps {
  addToCart: (product: Product) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ addToCart }) => {
  const { category } = useParams<{ category: string }>();
  const location = useLocation();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [rating, setRating] = useState(0);

  // Update selected category when URL changes
  useEffect(() => {
    // Map URL category to match the product data categories
    const categoryMap: { [key: string]: string } = {
      'midrange': 'Mid-Range',
      'drivers': 'Drivers',
      'putters': 'Putters',
      'bags': 'Bags',
      'accessories': 'Accessories',
      'snacks': 'Snacks'
    };
    
    setSelectedCategory(category ? (categoryMap[category.toLowerCase()] || category.toLowerCase()) : 'all');
  }, [category, location.pathname]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {category ? `${category} Products` : 'All Products'}
      </h1>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <Input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 w-full"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <SearchFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            rating={rating}
            setRating={setRating}
          />
        </aside>
        
        <main className="lg:col-span-3">
          <ProductList 
            addToCart={addToCart} 
            searchQuery={searchQuery}
            priceRange={priceRange}
            selectedCategory={selectedCategory}
            rating={rating}
          />
        </main>
      </div>
    </div>
  );
};

export default ProductsPage;