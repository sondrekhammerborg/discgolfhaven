import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import SearchFilters from '../components/SearchFilters';
import { Product } from '../hooks/useCart';

interface ProductsPageProps {
  addToCart: (product: Product) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ addToCart }) => {
  const { category } = useParams<{ category: string }>();
  
  // Search and filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [selectedCategory, setSelectedCategory] = useState(category?.toLowerCase() || 'all');
  const [rating, setRating] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {category ? `${category} Products` : 'All Products'}
      </h1>
      
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