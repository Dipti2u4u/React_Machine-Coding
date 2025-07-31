import React, { useState } from 'react';
import './StarRating.css';

const StarRating = ({ totalStars = 5, size = 24, onRatingSelect }) => {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);

  const handleClick = (rating) => {
    setSelected(rating);
    if (onRatingSelect) onRatingSelect(rating);
  };

  return (
    <div className="star-rating" style={{ fontSize: `${size}px` }}>
      {[...Array(totalStars)].map((_, i) => {
        const rating = i + 1;
        return (
          <span
            key={i}
            className={`star ${rating <= (hovered || selected) ? 'filled' : ''}`}
            onMouseEnter={() => setHovered(rating)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => handleClick(rating)}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;

