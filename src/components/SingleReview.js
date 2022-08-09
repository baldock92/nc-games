import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";
import "../styles/singleReview.css";
import Votes from "./Votes";
import Comments from "./Comments";
import ErrorPage from "./ErrorPage";

const SingleReview = () => {
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id)
      .then((reviewFromApi) => {
        setReview(reviewFromApi);
        setLoading(false);
      })
      .catch((err) => {
        setIsError(err.response);
      });
  }, [review_id]);

  if (isError) {
    return <ErrorPage errorMessage={isError} />;
  }

  if (loading) {
    return <div class="spinner"></div>;
  }

  return (
    <div className="singleReview__card">
      <div className="top__review">
        <h3 className="singleReview__title">
          {review.title} -{" "}
          <span className="singleReview__category">
            A {review.category} game
          </span>
        </h3>
        {/* <h5 className="singleReview__category">A {review.category} game</h5> */}
      </div>
      <div className="review__contents">
        <div className="image__container">
          <img
            src={review.review_img_url}
            className="singleReview__image"
            alt="board game"
          />
        </div>
        <div className="contents__container">
          <ul className="singleReview__author">Review by {review.owner}</ul>
          <li className="singleReview__body">{review.review_body}</li>
          <li className="singleReview__createdAt">
            Review written at :{" "}
            <span className="time__date">
              {" "}
              {review.created_at.slice(11, 19)}
            </span>{" "}
            on {""}
            <span className="time__date">
              {review.created_at.slice(8, 10)}
              {review.created_at.slice(4, 8)}
              {review.created_at.slice(0, 4)}
            </span>
          </li>
          <li className="singleReview__votes">
            Number of upvotes :{" "}
            <span className="vote__count">{review.votes}</span>
          </li>
          <p>Did you like this review?</p>
          <Votes
            votes={review.votes}
            review_id={review.review_id}
            setReview={setReview}
          />
        </div>
      </div>

      <br />

      <li className="singleReview__comments">
        Comments: {review.comment_count}
      </li>
      <Comments review_id={review.review_id} />
    </div>
  );
};

export default SingleReview;
