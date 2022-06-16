import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";
import "../styles/singleReview.css";
import Votes from "./Votes";
import Comments from "./Comments";

const SingleReview = () => {
  const [review, setReview] = useState({});
  const [loading, setLoading] = useState(true);

  const { review_id } = useParams();

  useEffect(() => {

    getReviewById(review_id).then((reviewFromApi) => {
      setReview(reviewFromApi);
      setLoading(false);
    });
  }, [review_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="singleReview__card">
      <h3 className="singleReview__title">{review.title}</h3>
      <h5 className="singleReview__category">A {review.category} game</h5>
      <img
        src={review.review_img_url}
        className="singleReview__image"
        alt="board game"
      />
      <ul className="singleReview__author">Review by {review.owner}</ul>
      <li className="singleReview__body">{review.review_body}</li>
      <li className="singleReview__createdAt">
        
        Review date: {review.created_at.slice(0,10)}
                    <br />
                    Review Time: {review.created_at.slice(11,19)}
      </li>
      <li className="singleReview__votes">
        Number of upvotes : {review.votes}
      </li>
      <br />
      <p>Did you like this review?</p>

      <Votes
        votes={review.votes}
        review_id={review.review_id}
        setReview={setReview}
      />
      <li className="singleReview__comments">
        Comments: {review.comment_count}
      </li>
      <Comments review_id={review.review_id} />
      
    </div>
  );
};

export default SingleReview;
