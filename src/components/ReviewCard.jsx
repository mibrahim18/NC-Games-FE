const ReviewCard = ({ data }) => {
  return (
    <ul className="review-card">
      {data.reviews.map((review) => {
        return (
          <li key={review.review_id}>
            <h3>{review.title}</h3>
            <h4>Designed by {review.designer}</h4>
            <p>owner: {review.owner}</p>
            <img src={review.review_img_url} alt={review.title} />
            <p>Category: {review.category}</p>
            <p>Created at {new Date(review.created_at).toLocaleString("en")}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewCard;
