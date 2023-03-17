import { useState, useEffect } from "react";
import { getReviews } from "../axios/apiQueries";
import { useNavigate } from "react-router-dom";
import Votes from "./Votes";

const Reviews = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((reviewList) => {
      setList(reviewList);
      setIsLoading(false);
    });
  }, []);

  const handleClick = (review_id) => {
    navigate(`/reviews/${review_id}`);
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <ul className="review-card">
        {list.map((review) => (
          <li key={review.review_id}>
            <h3>{review.title}</h3>
            <h4>Designed by {review.designer}</h4>
            <p>owner: {review.owner}</p>
            <img src={review.review_img_url} alt={review.title} />
            <p>Category: {review.category}</p>
            <br />
            <p>Created at {new Date(review.created_at).toLocaleString("en")}</p>
            <br />
            <Votes review_id={review.review_id} votes={review.votes} />
            <br />
            <button onClick={() => handleClick(review.review_id)}>
              More info
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
