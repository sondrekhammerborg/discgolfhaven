import React from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { CartItem } from '../hooks/useCart';

interface HeaderProps {
  cart: CartItem[];
}

const Header: React.FC<HeaderProps> = ({ cart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const cartItemCount = cart ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0;

  return (
    <header className="bg-white shadow-sm relative">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon" 
            className="mr-2 lg:hidden z-20" 
            aria-label="Menu"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
          <h1 className="text-xl font-bold text-gray-800">Disc Golf Haven</h1>
        </div>
        <nav className={`${
          isMobileMenuOpen ? 'flex' : 'hidden'
        } lg:flex flex-col lg:flex-row absolute lg:static left-0 right-0 top-full bg-white lg:bg-transparent shadow-md lg:shadow-none z-10 lg:z-auto`}>
          <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 p-4 lg:p-0">
            <Link to="/" className="text-gray-600 hover:text-gray-800" onClick={toggleMobileMenu}>Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-gray-800" onClick={toggleMobileMenu}>Products</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-800" onClick={toggleMobileMenu}>About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-800" onClick={toggleMobileMenu}>Contact</Link>
          </div>
        </nav>
        <Link to="/cart" aria-label="Shopping Cart">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="h-6 w-6" />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemCount}
              </span>
            )}
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;