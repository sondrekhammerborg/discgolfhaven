import React from 'react';
import ProductItem from './ProductItem';

const products = [
  { id: 1, name: 'Driver Disc', price: 14.99, image: 'https://example.com/driver.jpg' },
  { id: 2, name: 'Mid-Range Disc', price: 12.99, image: 'https://example.com/midrange.jpg' },
  { id: 3, name: 'Putter Disc', price: 9.99, image: 'https://example.com/putter.jpg' },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;