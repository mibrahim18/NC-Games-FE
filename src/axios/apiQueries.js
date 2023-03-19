import axios from "axios";

export const api = axios.create({
  baseURL: "https://team-a.onrender.com/api",
});

export const getCommentForSingleReview = (review_id) => {
  return api.get(`/reviews/${review_id}/comments`).then((commentsResponse) => {
    return commentsResponse.data.comments;
  });
};

export const UpdateVotes = (review_id, inc_votes) => {
  return api
    .patch(`/reviews/${review_id}`, {
      inc_votes,
    })
    .then((voteResponse) => {
      return voteResponse;
    });
};

export const postComment = (review_id = 3, username = "grumpy19", body) => {
  return api
    .post(`/reviews/${review_id}/comments`, {
      username,
      body,
    })
    .then((data) => {
      console.log(data);
    });
};

export const getListAllCategories = () => {
  return api.get(`/categories`).then(({ data }) => {
    return data.categories;
  });
};

export const getReviews = (category = null) => {
  const url = category ? `/reviews?category=${category}` : "/reviews";
  return api.get(url).then(({ data }) => {
    return data.reviews;
  });
};

export const getSingleReview = (review_id) => {
  return api.get(`/reviews/${review_id}`).then((singleReview) => {
    return singleReview.data.review;
  });
};
