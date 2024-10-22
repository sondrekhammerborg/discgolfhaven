import React from 'react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-sage-100 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Disc Golf Haven Logo" className="h-10 w-10 mr-2" />
            <span className="text-sage-800 font-semibold">DISC GOLF HAVEN</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              {['Home', 'Shop', 'Discdics', 'Courses', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase()}`} className="text-sage-700 hover:text-sage-900">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex-grow bg-hero-pattern bg-cover bg-center">
        <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-end h-full text-center">
          <h1 className="text-6xl font-bold text-white mb-4">DISC GOLF HAVEN</h1>
          <p className="text-2xl text-white">MINIMALIST BACKGROUND STORE</p>
        </div>
      </main>
    </div>
  );
};

export default Index;