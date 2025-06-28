import React from 'react';

interface CustomerReviewProps {
  review: string;
  customerName: string;
}

const CustomerReview: React.FC<CustomerReviewProps> = ({ review, customerName }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <p className="text-white italic text-lg mb-4">“{review}”</p>
      <p className="text-white font-semibold text-xl">— {customerName}</p>
    </div>
  );
};

export default CustomerReview;
