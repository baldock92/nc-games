const axios = require("axios");

const gamesApi = axios.create({
  baseURL: "https://my-ncgame.herokuapp.com/api/",
});

export const getReviews = () => {
  return gamesApi.get("/reviews").then(({ data }) => {
    return data.reviews;
  });
};
