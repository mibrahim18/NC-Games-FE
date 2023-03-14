// import React, { useState } from "react";
// import api from "../axios/api";
// import SingleReview from "./SingleReview";
// import ReviewCardData from "./ReviewCardData";

// const ReviewList = ({ list }) => {
//   const [clickedReview, setClickedReview] = useState(false);
//   const [showIndvReview, setShowIndvReview] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleBack = () => {
//     setClickedReview(false);
//     setShowIndvReview(false);
//   };

//   return (
//     <div>
//       {!showIndvReview ? (
//         <ReviewCardData list={list} handleClick={handleClick} />
//       ) : (
//         <button onClick={handleBack}>Back</button>
//       )}

//       {isLoading ? <h3>Loading...</h3> : ""}

//       {showIndvReview ? <SingleReview review={clickedReview} /> : ""}
//     </div>
//   );
// };

// export default ReviewList;
