import React from "react";
import { reviews } from "../Pages/Homepage/db/data"; // Import reviews data
import StarRating from "./StarRating";
import "./components.css";

const Reviews = () => {
  return (
    <div className="reviews-section">
      {reviews.map((review) => (
        <div key={review.id} className="review">
          <StarRating rating={review.rating} />
          <p>{review.review}</p>
          <h4 className="review-img">
            <span className="review-image1">
              <img className="review-image" src={review.image} alt="" />
            </span>
            <h4> {review.username}</h4>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
