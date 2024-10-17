import React from 'react';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import Cart from './Cart';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Button variant="ghost" size="icon" className="mr-2 lg:hidden" aria-label="Menu">
            <Menu className="h-6 w-6" />
          </Button>
          <Link to="/" className="text-xl font-bold text-gray-800">Disc Golf Haven</Link>
        </div>
        <nav className="hidden lg:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
          <Link to="/products" className="text-gray-600 hover:text-gray-800">Products</Link>
          <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
        </nav>
        <Cart />
      </div>
    </header>
  );
};

export default Header;