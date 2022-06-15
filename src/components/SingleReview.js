import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";
import "../styles/singleReview.css";
import Votes from "./Votes";

const SingleReview = () => {
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(true);

  const { review_id } = useParams();

  useEffect(() => {
      setLoading(true);
      

      getReviewById(review_id).then((reviewFromApi) => {
        setReview(reviewFromApi);
        setLoading(false);
      });
    },
    [review_id]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="singleReview__card">
      <h3 className="singleReview__title">{review.title}</h3>
      <h5 className="singleReview__category">A {review.category} game</h5>
      <img src={review.review_img_url} className="singleReview__image" alt="board game" />
      <ul className="singleReview__author">Review by {review.owner}</ul>
      <li className="singleReview__body">{review.review_body}</li>
      <li className="singleReview__createdAt">Review written: {review.created_at}</li>
      <li className="singleReview__votes">Number of upvotes : {review.votes}</li>
      <li className="singleReview__comments">Number of comments: {review.comment_count}</li>
      <Votes votes={review.votes} review_id={review.review_id} setReview={setReview} />
    </div>
  );
};

export default SingleReview;
