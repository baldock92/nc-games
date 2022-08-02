import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../utils/api";
import "../styles/reviews.css";
import { Link } from "react-router-dom";
import SortBy from "./SortBy";
import ErrorPage from "./ErrorPage";

const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setLoading(true);

    getReviews(category)
      .then((reviews) => {
        setAllReviews(reviews);
        setLoading(false);
      })
      .catch((err) => {
        setIsError(err.response);
      });
  }, [category]);

  if (isError) {
    return <ErrorPage errorMessage={isError} />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="reviews__all">
      <SortBy setAllReviews={setAllReviews} allReviews={allReviews} />
      {allReviews.map((review) => {
        return (
          <Link to={`/singlereview/${review.review_id}`} key={review.review_id}>
            <div className="review__card">
              <img
                className="review__image"
                src={review.review_img_url}
                alt="board game"
              />
              <div className="review__content">
                <div className="review__title"> {review.title}</div>
                <div className="review__category">
                  Category: {review.category}
                </div>
                <div className="review__id">Review ID: {review.review_id}</div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Reviews;
