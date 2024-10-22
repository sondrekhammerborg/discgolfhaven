import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Disc Golf Haven</h1>
      <p className="mb-4">
        Welcome to Disc Golf Haven, your ultimate destination for all things disc golf. 
        Founded in 2023, we're passionate about bringing the joy of disc golf to enthusiasts 
        and newcomers alike.
      </p>
      <p className="mb-4">
        Our mission is to provide high-quality discs, accessories, and expert advice to help 
        you elevate your game. Whether you're a seasoned pro or just starting out, we have 
        everything you need to make your disc golf experience unforgettable.
      </p>
      <p>
        At Disc Golf Haven, we believe in the power of community and the thrill of the perfect 
        throw. Join us in celebrating this amazing sport!
      </p>
    </div>
  );
};

export default AboutPage;