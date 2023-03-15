import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleReview } from "../axios/apiQueries";
import Comments from "./Comments";

const SingleReview = () => {
  const { review_id } = useParams();
  const [singleReviewObj, setSingleReviewObj] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    getSingleReview(review_id).then((singleReview) => {
      setSingleReviewObj(singleReview);
      setIsLoading(false);
    });
  }, [review_id]);
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="indv-review">
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
      {singleReviewObj.votes ? "Votes: " + singleReviewObj.votes : ""}
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
    </div>
  );
};

export default SingleReview;
