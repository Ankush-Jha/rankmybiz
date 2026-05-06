// components/Rating.jsx
import { useState } from 'react';
import './Rating.css';

function Rating({ onRate }) {
  const [rating, setRating] = useState(0);

  const handleRate = (num) => {
    setRating(num);
    if (onRate) onRate(num);
  };

  return (
    <div className="rating-container">
      <h2 className="rating-title">HOW WAS YOUR EXPERIENCE?</h2>

      <div className="rating-box">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className={`rating-star ${rating >= num ? 'active' : ''}`}
            onClick={() => handleRate(num)}
          >
            ✦
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rating;