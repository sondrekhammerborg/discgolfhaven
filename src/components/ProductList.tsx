import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';
import { Product } from '../hooks/useCart';

const products: Product[] = [
  // Drivers
  { id: 1, name: 'Cloud Breaker Driver', price: 19.99, image: '/exampledischaven.jpg', category: 'Drivers', speed: 12, glide: 5, turn: -1, fade: 3, description: "Break through the clouds with this high-speed driver. Perfect for achieving maximum distance on your drives." },
  { id: 2, name: 'Solar Flare Driver', price: 18.99, image: '/exampledischaven.jpg', category: 'Drivers', speed: 11, glide: 5, turn: -2, fade: 2, description: "Light up the course with the Solar Flare. This driver offers excellent glide and a slight turn for those long, arcing shots." },
  { id: 3, name: 'Thunderbolt Driver', price: 20.99, image: '/exampledischaven.jpg', category: 'Drivers', speed: 13, glide: 5, turn: -1, fade: 3, description: "Strike fast and true with the Thunderbolt. This high-speed driver is designed for power throwers looking for maximum distance." },
  
  // Mid-Range Discs
  { id: 4, name: 'Buzzz Mid-Range', price: 14.99, image: '/exampledischaven.jpg', category: 'Mid-Range', speed: 5, glide: 4, turn: -1, fade: 1, description: "The Buzzz is the gold standard of mid-range discs. Versatile and reliable, it's a must-have for players of all skill levels." },
  { id: 5, name: 'Roc3 Mid-Range', price: 15.99, image: '/exampledischaven.jpg', category: 'Mid-Range', speed: 5, glide: 4, turn: 0, fade: 3, description: "The Roc3 offers excellent control and stability. It's perfect for those precise approach shots and short drives." },
  { id: 6, name: 'Mako3 Mid-Range', price: 16.99, image: '/exampledischaven.jpg', category: 'Mid-Range', speed: 5, glide: 5, turn: 0, fade: 0, description: "With its neutral flight path, the Mako3 is the ultimate straight-flying mid-range. Great for beginners and pros alike." },
  
  // Putters
  { id: 7, name: 'Aviar Putter', price: 12.99, image: '/exampledischaven.jpg', category: 'Putters', speed: 2, glide: 3, turn: 0, fade: 1, description: "The Aviar is a classic putter trusted by champions. Its consistent flight and soft touch make it ideal for both putting and approaching." },
  { id: 8, name: 'Judge Putter', price: 13.99, image: '/exampledischaven.jpg', category: 'Putters', speed: 2, glide: 4, turn: 0, fade: 1, description: "The Judge offers a perfect blend of stability and glide. It's great for push putts and can handle a bit of wind." },
  { id: 9, name: 'Luna Putter', price: 14.99, image: '/exampledischaven.jpg', category: 'Putters', speed: 3, glide: 3, turn: 0, fade: 3, description: "Developed with pro player Paul McBeth, the Luna is a stable putter that excels in both putting and approach shots." },
  
  // Disc Golf Bags
  { id: 10, name: 'Trooper Backpack', price: 39.99, image: 'https://example.com/trooper.jpg', category: 'Bags', description: "The Trooper Backpack is perfect for casual rounds. It comfortably holds up to 18 discs and has extra pockets for accessories." },
  { id: 11, name: 'Commander Cooler Bag', price: 59.99, image: 'https://example.com/commander.jpg', category: 'Bags', description: "Stay refreshed on the course with the Commander Cooler Bag. It holds your discs and keeps your drinks cold for those long tournament days." },
  { id: 12, name: 'Luxury Cart Bag', price: 199.99, image: 'https://example.com/luxury-cart.jpg', category: 'Bags', description: "The ultimate in disc golf luxury. This cart bag holds over 25 discs, has multiple pockets, and is designed for use with disc golf carts." },
  
  // Minis
  { id: 13, name: 'Mini Marker Disc', price: 3.99, image: '/exampledischaven.jpg', category: 'Minis', description: "Official mini marker disc for marking your lie. Available in various colors to match your style." },
  
  // Accessories
  { id: 14, name: 'Disc Retriever', price: 24.99, image: 'https://example.com/retriever.jpg', category: 'Accessories', description: "Don't let water hazards ruin your game. This extendable disc retriever helps you rescue discs from up to 15 feet away." },
  { id: 15, name: 'Towel', price: 9.99, image: 'https://example.com/towel.jpg', category: 'Accessories', description: "Keep your discs dry and your hands clean with this microfiber disc golf towel. Features a convenient clip for easy attachment to your bag." },
  
  // Snacks
  { id: 16, name: 'Energy Bar', price: 2.49, image: 'https://example.com/energy-bar.jpg', category: 'Snacks', description: "Fuel your round with these delicious, nutrient-packed energy bars. Perfect for a quick boost between holes." },
  { id: 17, name: 'Trail Mix', price: 3.99, image: 'https://example.com/trail-mix.jpg', category: 'Snacks', description: "A classic mix of nuts, dried fruits, and chocolate for sustained energy throughout your disc golf adventure." },
  { id: 18, name: 'Sports Drink', price: 1.99, image: 'https://example.com/sports-drink.jpg', category: 'Snacks', description: "Stay hydrated and replenish electrolytes with this refreshing sports drink. Available in various flavors." },
];

interface ProductListProps {
  addToCart: (product: Product) => void;
  searchQuery?: string;
  priceRange?: [number, number];
  selectedCategory?: string;
  rating?: number;
  limit?: number;
}

const ProductList: React.FC<ProductListProps> = ({
  addToCart,
  searchQuery = '',
  priceRange = [0, 200],
  selectedCategory = 'all',
  rating = 0,
  limit,
}) => {
  const filteredProducts = products.filter((product) => {
    // Search query filter
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = searchQuery === '' ||
      product.name.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      (product.category && product.category.toLowerCase().includes(searchLower));

    // Price range filter
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];

    // Category filter
    const matchesCategory = selectedCategory === 'all' || 
      (product.category && product.category.toLowerCase() === selectedCategory.toLowerCase());

    // Rating filter
    const matchesRating = !product.rating || product.rating >= rating;

    return matchesSearch && matchesPrice && matchesCategory && matchesRating;
  });

  const displayProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No products found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {displayProducts.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="block">
          <ProductItem product={product} addToCart={addToCart} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;