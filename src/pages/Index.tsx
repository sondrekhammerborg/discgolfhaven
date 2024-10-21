import React from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';

const Index = () => {
  // Create a dummy toggleCart function to satisfy the prop requirement
  const dummyToggleCart = () => {
    // This function is intentionally left empty as it's just a placeholder
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header toggleCart={dummyToggleCart} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to Disc Golf Haven</h1>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default Index;