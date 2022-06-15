import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import "../styles/Comments.css";

const Comments = ({review_id}) => {
  const [allComments, setAllComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    getComments(review_id).then((commentsFromApi) => {
      setAllComments(commentsFromApi);
      setLoading(false);
    });
  }, [review_id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul className="allComments">
        {allComments.map((comment) => {
          return <div className="comment__card" key={comment.comment_id}>
            <li className="comment__body">Comment: {comment.body}</li>
            <li className="comment__author">Author: {comment.author}</li>
            <li className="comment__created_at">Comment made at: {comment.created_at}</li>
          </div>;
        })}
      </ul>
    </div>
  );
};

export default Comments;
