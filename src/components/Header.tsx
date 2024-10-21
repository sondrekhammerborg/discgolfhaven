import React, { useState } from 'react';
import { ShoppingCart, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2 lg:hidden" 
            aria-label="Menu"
            onClick={toggleMobileMenu}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-bold text-gray-800">Disc Golf Haven</h1>
        </div>
        <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:flex lg:space-x-4 absolute lg:static left-0 right-0 top-full bg-white lg:bg-transparent shadow-md lg:shadow-none z-50 lg:z-auto`}>
          <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 p-4 lg:p-0">
            <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-800">Products</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
          </div>
        </nav>
        <Button variant="ghost" size="icon" aria-label="Shopping Cart">
          <ShoppingCart className="h-6 w-6" />
        </Button>
      </div>
    </header>
  );
};

export default Header;