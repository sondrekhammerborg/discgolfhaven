import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { CartItem } from '../hooks/useCart';
import { Input } from './ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

interface HeaderProps {
  cart: CartItem[];
}

const Header: React.FC<HeaderProps> = ({ cart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const cartItemCount = cart ? cart.reduce((sum, item) => sum + item.quantity, 0) : 0;

  const productCategories = [
    { name: 'All Products', path: '/products' },
    { name: 'Drivers', path: '/products/drivers' },
    { name: 'Mid-Range', path: '/products/midrange' },
    { name: 'Putters', path: '/products/putters' },
    { name: 'Disc Golf Bags', path: '/products/bags' },
    { name: 'Minis', path: '/products/minis' },
    { name: 'Snacks', path: '/products/snacks' },
    { name: 'Accessories', path: '/products/accessories' },
  ];

  return (
    <header className="bg-white shadow-sm relative">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden z-20" 
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
            <Link to="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">
              Disc Golf Haven
            </Link>
          </div>

          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </form>

          <div className="flex items-center gap-4">
            <nav className={`${
              isMobileMenuOpen ? 'flex' : 'hidden'
            } lg:flex flex-col lg:flex-row absolute lg:static left-0 right-0 top-full bg-white lg:bg-transparent shadow-md lg:shadow-none z-10 lg:z-auto`}>
              <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 p-4 lg:p-0">
                <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4">
                          {productCategories.map((category) => (
                            <li key={category.path}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={category.path}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  {category.name}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <Link to="/blog" className="text-gray-600 hover:text-gray-800">Blog</Link>
                <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
                <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
              </div>
            </nav>
            <Link to="/cart" aria-label="Shopping Cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {cartItemCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>

        <form onSubmit={handleSearch} className="mt-4 md:hidden">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;