import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600 mb-4">
          We'd love to hear from you! Whether you have questions about our products, need assistance with an order, or just want to chat about disc golf, our team is here to help.
        </p>
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h2>
          <p className="text-gray-600">Email: info@discgolfhaven.com</p>
          <p className="text-gray-600">Phone: (555) 123-4567</p>
          <p className="text-gray-600">Address: 123 Disc Golf Lane, Frisbee City, DC 12345</p>
        </div>
        <p className="text-gray-600">
          Our customer service team is available Monday through Friday, 9am to 5pm EST.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;