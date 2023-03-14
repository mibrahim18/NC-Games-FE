import React, { useState } from "react";
import Api from "../axios/Api";
import IndvReview from "./IndvReview";
import ReviewCardReusable from "./ReviewCardReusable";

const ReviewCard = ({ data }) => {
  const [clickedReview, setClickedReview] = useState(false);
  const [showIndvReview, setShowIndvReview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (review_id) => {
    setIsLoading(true);
    Api.get(`/reviews/${review_id}`)
      .then((response) => {
        setClickedReview(response.data);
        setShowIndvReview(true);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const handleBack = () => {
    setClickedReview(false);
    setShowIndvReview(false);
  };

  return (
    <div>
      {!showIndvReview ? (
        <ReviewCardReusable data={data} handleClick={handleClick} />
      ) : (
        <button onClick={handleBack}>Back</button>
      )}

      {isLoading ? <h3>Loading...</h3> : ""}

      {showIndvReview ? <IndvReview review={clickedReview} /> : ""}
    </div>
  );
};

export default ReviewCard;
