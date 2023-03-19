import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getReviews } from "../axios/apiQueries";
import Votes from "./Votes";

const SingleCategory = () => {
  const { category } = useParams();
  const [singleCategoryObj, setSingleCategoryObj] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getReviews(category).then((singleCategory) => {
      setSingleCategoryObj(singleCategory);
      setIsLoading(false);
    });
  }, [category]);

  const handleBack = () => {
    navigate("/categories");
  };

  const handleClick = (id) => {
    navigate(`/reviews/${id}`);
  };

  return (
    <div>
      <button onClick={handleBack}>All Categories</button>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <ul className="review-card">
          {singleCategoryObj.map((categoryReview) => (
            <li key={categoryReview.review_id}>
              <h3>{categoryReview.title}</h3>
              <h4>Designed by {categoryReview.designer}</h4>
              <p>owner: {categoryReview.owner}</p>
              <img
                src={categoryReview.review_img_url}
                alt={categoryReview.title}
              />
              <p>Category: {categoryReview.category}</p>
              <br />
              <p>
                Created at{" "}
                {new Date(categoryReview.created_at).toLocaleString("en")}
              </p>
              <br />
              <Votes
                review_id={categoryReview.review_id}
                votes={categoryReview.votes}
              />
              <br />
              <button onClick={() => handleClick(categoryReview.review_id)}>
                More info
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SingleCategory;
