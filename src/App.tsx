import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useCart } from "./hooks/useCart";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";

const queryClient = new QueryClient();

const App = () => {
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart } = useCart();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Header cart={cart} />
            <main className="flex-grow container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<Index addToCart={addToCart} />} />
                <Route path="/products" element={<ProductsPage addToCart={addToCart} />} />
                <Route path="/products/:category" element={<ProductsPage addToCart={addToCart} />} />
                <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
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
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogPostPage />} />
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