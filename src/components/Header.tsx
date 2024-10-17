import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="mr-2 lg:hidden" aria-label="Menu">
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-bold text-gray-800">Disc Golf Haven</h1>
        </div>
        <nav className="hidden lg:flex space-x-4">
          <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="/products" className="text-gray-600 hover:text-gray-800">Products</a>
          <a href="/about" className="text-gray-600 hover:text-gray-800">About</a>
          <a href="/contact" className="text-gray-600 hover:text-gray-800">Contact</a>
        </nav>
        <Button variant="ghost" size="icon" aria-label="Shopping Cart">
          <ShoppingCart className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;