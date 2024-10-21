import React from 'react';
import { CartItem } from '../hooks/useCart';
import { Button } from '../components/ui/button';
import { X } from 'lucide-react';

interface CartPageProps {
  cart: CartItem[];
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ cart, removeFromCart, updateQuantity, clearCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </Button>
                <span className="mx-2">{item.quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
          <div className="mt-6">
            <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
            <Button className="w-full mt-4" onClick={clearCart}>Clear Cart</Button>
            <Button className="w-full mt-4">Checkout</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;