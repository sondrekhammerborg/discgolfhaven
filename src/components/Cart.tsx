import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  // In a real app, you'd manage cart state here
  const cartItemsCount = 3; // Dummy count for demonstration

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" aria-label="Shopping Cart" onClick={handleCheckout}>
        <ShoppingCart className="h-6 w-6" />
        {cartItemsCount > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
            {cartItemsCount}
          </span>
        )}
      </Button>
    </div>
  );
};

export default Cart;