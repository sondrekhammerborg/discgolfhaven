import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import { products } from '../data/products';

const Index = () => {
  const location = useLocation();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');

    if (category && category !== 'all') {
      setFilteredProducts(products.filter(product => product.category === category));
    } else {
      setFilteredProducts(products);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to Disc Golf Haven</h1>
        <ProductList products={filteredProducts} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;