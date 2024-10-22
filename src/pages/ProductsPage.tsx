import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { Product } from '../hooks/useCart';

interface ProductsPageProps {
  addToCart: (product: Product) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ addToCart }) => {
  const { category } = useParams<{ category: string }>();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        {category ? `${category} Products` : 'All Products'}
      </h1>
      <ProductList addToCart={addToCart} category={category} />
    </div>
  );
};

export default ProductsPage;