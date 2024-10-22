import React from 'react';

interface Review {
  id: number;
  name: string;
  content: string;
  rating: number;
}

const CustomerReviews: React.FC = () => {
  const reviews: Review[] = [
    { id: 1, name: "John Doe", content: "Great selection of discs! The customer service is top-notch.", rating: 5 },
    { id: 2, name: "Jane Smith", content: "Fast shipping and excellent quality products. Will buy again!", rating: 4 },
    { id: 3, name: "Mike Johnson", content: "The disc I bought has improved my game significantly. Highly recommended!", rating: 5 },
  ];

  return (
    <div className="bg-pale-blue p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded-md shadow">
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-2">{review.name}</span>
              <span className="text-yellow-500">{'★'.repeat(review.rating)}</span>
            </div>
            <p className="text-gray-600">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;