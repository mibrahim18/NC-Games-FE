const IndvReview = ({ review }) => {
  const IndvReview = review.review;
  return (
    <div className="indv-review">
      <br />
      <br />
      <h3>{IndvReview.title}</h3>
      <br />
      <h4>Designed by {IndvReview.designer}</h4>
      <br />
      <p>owner: {IndvReview.owner}</p>
      <br />
      <img src={IndvReview.review_img_url} alt={IndvReview.title} />
      <br />
      <br />
      <p>{IndvReview.review_body}</p>
      <br />
      <p>Category: {IndvReview.category}</p>
      <br />
      {IndvReview.votes ? "Votes: " + IndvReview.votes : ""}
      <>
        <br />
      </>
      <br />
      {IndvReview.comment_count
        ? "Comment Count: " + IndvReview.comment_count
        : ""}
      <br />
      <br />
      <p>Created at {new Date(IndvReview.created_at).toLocaleString("en")}</p>
      <br />
    </div>
  );
};

export default IndvReview;
