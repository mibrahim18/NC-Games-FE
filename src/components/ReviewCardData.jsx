// import React from "react";

// const ReviewCardData = ({ list, handleClick }) => {
//   console.log(list);
//   return (
//     <ul className="review-card">
//       {list.map((review) => (
//         <li
//           key={review.review_id}
//           onClick={() => handleClick(review.review_id)}
//         >
//           <h3>{review.title}</h3>
//           <h4>Designed by {review.designer}</h4>
//           <p>owner: {review.owner}</p>
//           <img src={review.review_img_url} alt={review.title} />
//           <p>Category: {review.category}</p>
//           <p>Created at {new Date(review.created_at).toLocaleString("en")}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default ReviewCardData;
