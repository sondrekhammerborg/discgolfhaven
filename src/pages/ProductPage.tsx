import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
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
  { id: 10, name: 'Trooper Backpack', price: 39.99, image: '/discgolfbag.jpg', category: 'Bags', description: "The Trooper Backpack is perfect for casual rounds. It comfortably holds up to 18 discs and has extra pockets for accessories." },
  { id: 11, name: 'Commander Cooler Bag', price: 59.99, image: '/discgolfbag1.jpg', category: 'Bags', description: "Stay refreshed on the course with the Commander Cooler Bag. It holds your discs and keeps your drinks cold for those long tournament days." },
  { id: 12, name: 'Luxury Cart Bag', price: 199.99, image: '/discgolfbag2.jpg', category: 'Bags', description: "The ultimate in disc golf luxury. This cart bag holds over 25 discs, has multiple pockets, and is designed for use with disc golf carts." },
  
  // Accessories
  { id: 13, name: 'Mini Marker Disc', price: 3.99, image: '/exampledischaven.jpg', category: 'Accessories', description: "Official mini marker disc for marking your lie. Available in various colors to match your style." },
  { id: 14, name: 'Disc Retriever', price: 24.99, image: '/discretriever.jpg', category: 'Accessories', description: "Don't let water hazards ruin your game. This extendable disc retriever helps you rescue discs from up to 15 feet away." },
  { id: 15, name: 'Towel', price: 9.99, image: '/disctowel.jpg', category: 'Accessories', description: "Keep your discs dry and your hands clean with this microfiber disc golf towel. Features a convenient clip for easy attachment to your bag." },
  
  // Snacks
  { id: 16, name: 'Energy Bar', price: 2.49, image: '/discbar.jpg', category: 'Snacks', description: "Fuel your round with these delicious, nutrient-packed energy bars. Perfect for a quick boost between holes." },
  { id: 17, name: 'Trail Mix', price: 3.99, image: '/disctrailmix.jpg', category: 'Snacks', description: "A classic mix of nuts, dried fruits, and chocolate for sustained energy throughout your disc golf adventure." },
  { id: 18, name: 'Sports Drink', price: 1.99, image: '/discsportdrink.jpg', category: 'Snacks', description: "Stay hydrated and replenish electrolytes with this refreshing sports drink. Available in various flavors." },
];

interface ProductPageProps {
  addToCart: (product: Product) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ addToCart }) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-4">Category: {product.category}</p>
          <p className="mb-6 text-gray-600">{product.description}</p>
          {product.speed !== undefined && (
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <span className="font-semibold">Speed:</span> {product.speed}
              </div>
              <div>
                <span className="font-semibold">Glide:</span> {product.glide}
              </div>
              <div>
                <span className="font-semibold">Turn:</span> {product.turn}
              </div>
              <div>
                <span className="font-semibold">Fade:</span> {product.fade}
              </div>
            </div>
          )}
          <Button 
            onClick={() => addToCart(product)}
            className="w-full md:w-auto"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
