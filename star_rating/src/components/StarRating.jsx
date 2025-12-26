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







// import React, { useState } from "react";
// import { FaRegStar, FaStar } from "react-icons/fa";
// import "./styles.css";

// const StarRating = ({ totalStars }) => {
//   const [hover, setHover] = useState(0);
//   const [selected, setSelected] = useState(0);
//   return (
//     <div>
//       <h2>Star Rating</h2>
//       {[...Array(totalStars)].map((_, index) => {
//         let rating = index + 1;
//         const isActive = rating <= (hover || selected);
//         return (
//           <span key={index}>
//             {isActive ? (
//               <FaStar
//                 className="star active"
//                 onMouseEnter={() => setHover(rating)}
//                 onMouseLeave={() => setHover(0)}
//                 onClick={() => setSelected(rating)}
//               />
//             ) : (
//               <FaRegStar
//                 className="star"
//                 onMouseEnter={() => setHover(rating)}
//                 onMouseLeave={() => setHover(0)}
//                 onClick={() => setSelected(rating)}
//               />
//             )}
//           </span>
//         );
//       })}
//       <h4>You Rated : {selected}</h4>
//     </div>
//   );
// };
// export default StarRating;
