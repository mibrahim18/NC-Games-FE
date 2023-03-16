import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleReview } from "../axios/apiQueries";
import Comments from "./Comments";

import Votes from "./Votes";

const SingleReview = () => {
  const { review_id } = useParams();
  const [singleReviewObj, setSingleReviewObj] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getSingleReview(review_id).then((singleReview) => {
      setSingleReviewObj(singleReview);
      setIsLoading(false);
    });
  }, [review_id]);

  const handleBack = () => {
    navigate("/reviews");
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="indv-review">
      <button onClick={handleBack}>Back</button>
      <br />
      <br />
      <h3>{singleReviewObj.title}</h3>
      <br />
      <h4>Designed by {singleReviewObj.designer}</h4>
      <br />
      <p>owner: {singleReviewObj.owner}</p>
      <br />
      <img src={singleReviewObj.review_img_url} alt={singleReviewObj.title} />
      <br />
      <br />
      <p>{singleReviewObj.review_body}</p>
      <br />
      <p>Category: {singleReviewObj.category}</p>
      <br />
      {singleReviewObj.votes ? (
        <Votes
          review_id={singleReviewObj.review_id}
          votes={singleReviewObj.votes}
        />
      ) : (
        "No votes yet"
      )}
      <>
        <br />
      </>
      <br />
      {singleReviewObj.comment_count
        ? "Comment Count: " + singleReviewObj.comment_count
        : ""}
      <br />
      <br />
      <p>
        Created at {new Date(singleReviewObj.created_at).toLocaleString("en")}
      </p>
      <br />
      <Comments review_id={review_id} />
      <br />
    </div>
  );
};

export default SingleReview;
