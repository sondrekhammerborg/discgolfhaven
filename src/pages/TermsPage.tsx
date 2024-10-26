import React from 'react';

const TermsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="text-gray-700">
            By accessing and using Disc Golf Haven's website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Use of Service</h2>
          <p className="text-gray-700">
            You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. Product Information</h2>
          <p className="text-gray-700">
            We strive to provide accurate product descriptions and pricing. However, we reserve the right to correct any errors and to change prices without notice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">4. Shipping and Returns</h2>
          <p className="text-gray-700">
            Orders are typically processed within 1-2 business days. Returns are accepted within 30 days of purchase for unused items in original packaging.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">5. Privacy Policy</h2>
          <p className="text-gray-700">
            Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;