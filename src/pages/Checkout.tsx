import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { useToast } from '../hooks/use-toast';

const Checkout = () => {
  const { toast } = useToast();

  const handleCheckout = () => {
    // In a real app, this would process the order
    toast({
      title: "Order placed",
      description: "Your order has been successfully placed!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {/* In a real app, you'd map over cart items here */}
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <Button onClick={handleCheckout} className="w-full">Place Order</Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;