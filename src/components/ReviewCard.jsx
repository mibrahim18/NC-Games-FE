import React, { useState } from "react";
import API from "../axios/API";
import IndvReview from "./IndvReview";

const ReviewCard = ({ data }) => {
  const [clickedReview, setClickedReview] = useState(false);
  const [showIndvReview, setShowIndvReview] = useState(false);

  const handleClick = (review_id) => {
    API.get(`/reviews/${review_id}`)
      .then((response) => {
        setClickedReview(response.data);
        setShowIndvReview(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleBack = () => {
    setClickedReview(false);
    setShowIndvReview(false);
  };

  return (
    <div>
      {!showIndvReview ? (
        <ul className="review-card">
          {data.reviews.map((review) => (
            <li
              key={review.review_id}
              onClick={() => handleClick(review.review_id)}
            >
              <h3>{review.title}</h3>
              <h4>Designed by {review.designer}</h4>
              <p>owner: {review.owner}</p>
              <img src={review.review_img_url} alt={review.title} />
              <p>Category: {review.category}</p>
              <p>
                Created at {new Date(review.created_at).toLocaleString("en")}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <button onClick={handleBack}>Back</button>
      )}

      {showIndvReview ? <IndvReview review={clickedReview} /> : ""}
    </div>
  );
};

export default ReviewCard;
