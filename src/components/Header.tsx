import React from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

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
        <nav className="hidden lg:flex items-center space-x-4">
          <Link to="/" className="text-gray-600 hover:text-gray-800">Home</Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center text-gray-600 hover:text-gray-800 p-0 h-auto font-normal">
                Products <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/?category=all" className="w-full">All Products</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/?category=driver" className="w-full">Drivers</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/?category=midrange" className="w-full">Midrange</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/?category=putter" className="w-full">Putters</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/?category=bag" className="w-full">Bags</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/?category=accessory" className="w-full">Accessories</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/about" className="text-gray-600 hover:text-gray-800">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800">Contact</Link>
        </nav>
        <Cart />
      </div>
    </header>
  );
};

export default Header;