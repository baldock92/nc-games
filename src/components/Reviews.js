import { useState, useEffect } from "react";
import { getReviews } from "../utils/api";
import "../styles/reviews.css";

const Reviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getReviews().then((reviews) => {
      setAllReviews(reviews);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="reviews__all">
        {allReviews.map((review) => {
            return (
                <div className="review__card" key={review.review_id}>
                <img className="review__image"  src={review.review_img_url} alt="board game" />
                <div className="review__title"> {review.title}</div>
                <div className="review__category">Category: {review.category}</div>
                <div className="review__id">Review ID: {review.review_id}</div>

                </div>
            )
        })}
      
    </div>
  );
};
export default Reviews;
