import axios from "axios"

// const baseURL = "https://my-ncgame.herokuapp.com/api/";

const gamesApi = axios.create({
  baseURL: "https://my-ncgame.herokuapp.com/api/",
});

export const getReviews = (category) => {
  return gamesApi.get(`/reviews`, { params: { category } }).then(({ data }) => {
    return data.reviews;
  });
};

export const getCategories = () => {
  return gamesApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
};
