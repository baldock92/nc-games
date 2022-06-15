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
    .catch((err) => {
      console.log(err);
    });
};

export const getCategories = () => {
  return gamesApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const getReviewById = (review_id) => {
  return gamesApi
    .get(`/reviews/${review_id}`)
    .then(({ data }) => {
      return data.review;
    })
    .catch((err) => {
      console.log(err);
    });
};
