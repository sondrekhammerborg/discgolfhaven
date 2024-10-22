import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">
        We'd love to hear from you! Whether you have a question about our products, 
        need advice on choosing the right disc, or just want to share your disc golf story, 
        we're here to help.
      </p>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
        <p>Email: info@discgolfhaven.com</p>
        <p>Phone: (555) 123-4567</p>
        <p>Address: 123 Disc Golf Lane, Frisbee City, DC 12345</p>
      </div>
      <p>
        Our customer service team is available Monday through Friday, 9am to 5pm EST. 
        We strive to respond to all inquiries within 24 hours.
      </p>
    </div>
  );
};

export default ContactPage;