import React from "react";
import "./components.css";

import { AiFillStar } from "react-icons/ai";

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 4; i++) {
    stars.push(
      <span key={i} style={{ color: i <= rating ? "#0075FF" : "#e4e5e9" }}>
        {<AiFillStar className="rating-star" />}
      </span>
    );
  }

  return <div>{stars}</div>;
};

export default StarRating;
