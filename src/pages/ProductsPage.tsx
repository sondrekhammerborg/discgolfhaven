import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Drivers', image: 'https://example.com/drivers.jpg' },
  { id: 2, name: 'Mid-Range', image: 'https://example.com/midrange.jpg' },
  { id: 3, name: 'Putters', image: 'https://example.com/putters.jpg' },
  { id: 4, name: 'Disc Golf Bags', image: 'https://example.com/bags.jpg' },
  { id: 5, name: 'Minis', image: 'https://example.com/minis.jpg' },
  { id: 6, name: 'Snacks', image: 'https://example.com/snacks.jpg' },
  { id: 7, name: 'Accessories', image: 'https://example.com/accessories.jpg' },
];

const ProductsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Product Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/products/${category.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{category.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;