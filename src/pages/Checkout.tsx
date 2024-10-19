import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';
import { useCart } from '../contexts/CartContext';

const Checkout = () => {
  const { toast } = useToast();
  const { cart, removeFromCart, clearCart } = useCart();

  const handleCheckout = () => {
    clearCart();
    toast({
      title: "Order placed",
      description: "Your order has been successfully placed!",
    });
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cart.length === 0 ? (
            <p className="text-gray-600 mb-4">Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-2">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                  <Button variant="destructive" size="sm" onClick={() => removeFromCart(item.id)}>Remove</Button>
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </>
          )}
          <Button onClick={handleCheckout} className="w-full mt-6" disabled={cart.length === 0}>
            Place Order
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;