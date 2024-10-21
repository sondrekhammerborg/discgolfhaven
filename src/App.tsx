import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { useState } from "react";
import { useCart } from "./hooks/useCart";
import CartPage from "./pages/CartPage";

const queryClient = new QueryClient();

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart } = useCart();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header toggleCart={toggleCart} cart={cart} />
            <main className="flex-grow container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Index addToCart={addToCart} />} />
                <Route
                  path="/cart"
                  element={
                    <CartPage
                      cart={cart}
                      removeFromCart={removeFromCart}
                      updateQuantity={updateQuantity}
                      clearCart={clearCart}
                    />
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;