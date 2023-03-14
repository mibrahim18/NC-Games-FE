const IndvReview = ({ review }) => {
  const indvReview = review.review;
  return (
    <div className="indv-review">
      <br />
      <br />
      <h3>{indvReview.title}</h3>
      <br />
      <h4>Designed by {indvReview.designer}</h4>
      <br />
      <p>owner: {indvReview.owner}</p>
      <br />
      <img src={indvReview.review_img_url} alt={indvReview.title} />
      <br />
      <br />
      <p>{indvReview.review_body}</p>
      <br />
      <p>Category: {indvReview.category}</p>
      <br />
      {indvReview.votes ? "Votes: " + indvReview.votes : ""}
      <>
        <br />
      </>
      <br />
      {indvReview.comment_count
        ? "Comment Count: " + indvReview.comment_count
        : ""}
      <br />
      <br />
      <p>Created at {new Date(indvReview.created_at).toLocaleString("en")}</p>
      <br />
    </div>
  );
};

export default IndvReview;
