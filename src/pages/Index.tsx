import React from 'react';
import ProductList from '../components/ProductList';

const Index = () => {
  return (
    <div className="flex-grow">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to Disc Golf Haven</h1>
      <ProductList />
    </div>
  );
};

export default Index;