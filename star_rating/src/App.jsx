import React from 'react';
import StarRating from './components/StarRating';

export default function App() {
  const handleRating = (value) => {
    console.log("Selected rating:", value);
  };

  return (
    <div className="App">
      <h2>Rate this product:</h2>
      <StarRating totalStars={5} size={30} onRatingSelect={handleRating} />
    </div>
  );
}

