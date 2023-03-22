import { useState } from "react";
import { postComment } from "../axios/apiQueries";

const PostComment = ({ review_id, setCommentsList }) => {
  const [comment, setComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  const commentChange = (event) => {
    setComment(event.target.value);
  };

  const onClick = () => {
    setIsPosting(true);
    const newComment = {
      username: "grumpy19",
      body: comment,
      created_at: new Date().toISOString(),
    };
    setCommentsList((prevList) => [newComment, ...prevList]);
    postComment(review_id, undefined, comment)
      .then(() => {
        setIsPosting(false);
      })
      .catch(() => {
        setCommentsList((prevList) =>
          prevList.filter((comment) => comment !== newComment)
        );
        alert("Error posting comment. Please try again later.");
        setIsPosting(false);
      });
    setComment("");
  };

  return (
    <div>
      <h4>Post a comment</h4>
      <p>Newest comments at top</p>
      <textarea
        placeholder="Write your comment here..."
        value={comment}
        onChange={commentChange}
        disabled={isPosting}
      />
      <button onClick={onClick} disabled={isPosting}>
        {isPosting ? "Posting to the top of the list..." : "Post"}
      </button>
    </div>
  );
};

export default PostComment;
