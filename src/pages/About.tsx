import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About Disc Golf Haven</h1>
        <p className="text-gray-600 mb-4">
          Disc Golf Haven is your one-stop shop for all things disc golf. Founded by passionate disc golfers, we aim to provide the best equipment and accessories to players of all skill levels.
        </p>
        <p className="text-gray-600 mb-4">
          Our team is dedicated to growing the sport and fostering a community of disc golf enthusiasts. Whether you're a beginner looking for your first disc or a seasoned pro searching for the perfect addition to your bag, we've got you covered.
        </p>
        <p className="text-gray-600">
          Visit us today and elevate your disc golf game!
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;