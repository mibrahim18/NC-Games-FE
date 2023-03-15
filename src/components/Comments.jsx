import { useState, useEffect } from "react";
import { getCommentForSingleReview } from "../axios/apiQueries";

const Comments = ({ review_id }) => {
  const [commentsList, setCommentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getCommentForSingleReview(review_id).then((comments) => {
      setCommentsList(comments);
      setIsLoading(false);
    });
  }, [review_id]);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      {commentsList.length === 0 ? (
        <h2>No comments yet</h2>
      ) : (
        <>
          <h2>Comments</h2>
          <br />
          <ul className="review-card">
            {commentsList.map((comment) => {
              return (
                <li key={comment.comment_id}>
                  <br />
                  <p>{comment.body}</p>
                  <br />
                  <p>
                    Written at{" "}
                    {new Date(comment.created_at).toLocaleString("en")}
                  </p>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default Comments;
