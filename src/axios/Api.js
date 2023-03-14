import axios from "axios";

export const api = axios.create({
  baseURL: "https://team-a.onrender.com/api",
});

export const getReviews = () => {
  return api.get("/reviews").then((reviewList) => {
    return reviewList.data.reviews;
  });
};

export const getSingleReview = (review_id) => {
  return api.get(`/reviews/${review_id}`).then((singleReview) => {
    return singleReview.data.review;
  });
};
