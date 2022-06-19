const axios = require("axios");

const gamesApi = axios.create({
  baseURL: "https://my-ncgame.herokuapp.com/api/",
});

export const getReviews = (category) => {
  return gamesApi
    .get(`/reviews`, { params: { category } })
    .then(({ data }) => {
      return data.reviews;
    })
    // .catch((err) => {
    //   console.log(err);
    // });
};

export const getCategories = () => {
  return gamesApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const getReviewById = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.review;
  });
};

export const patchVotes = (review_id, votes) => {
  return gamesApi
    .patch(`/reviews/${review_id}`, { inc_votes: votes })
    .then(({ data }) => {
      return data.updatedReview;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getComments = (review_id) => {
  return gamesApi
    .get(`/reviews/${review_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postComment = (review_id, newComment) => {
  return gamesApi
    .post(`/reviews/${review_id}/comments`, newComment)
    .then(({ data }) => {
      return data.comment;
    })
    .catch((err) => {
      console.log(err, "<<<<<< ERR IN API");
    });
};

export const deleteComment = (comment_id) => {
  console.log(comment_id);
  return gamesApi
    .delete(`comments/${comment_id}`)
    .then((data) => {
      return data.status;
    })
    .catch((err) => {
      console.log(err.response.data, "<<< ERROR IN API <<<<<");
    });
};
