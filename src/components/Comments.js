import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import "../styles/Comments.css";

const Comments = ({ review_id }) => {
  const [allComments, setAllComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moreComments, setMoreComments] = useState(false);

  const handleMoreCommentClick = () => {
    moreComments === true ? setMoreComments(false) : setMoreComments(true);
  };

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
      
      <ul className="comments__all">
        {moreComments === false ? (
          <>
            <button
              className="comments__Button"
              id="comments__expandButton"
              onClick={handleMoreCommentClick}
            >
              Show comments ➕
            </button>
          </>
        ) : (
          <>
            <button
              className="comments__Button"
              id="comments__hideButton"
              onClick={handleMoreCommentClick}
            >
              Hide comments ➖
            </button>
            {allComments.map((comment) => {
              return (
                <div className="comment__card" key={comment.comment_id}>
                  <li className="comment__author">Author: {comment.author}</li>
                  <li className="comment__body">"{comment.body}"</li>
                  
                  <li className="comment__created_at">
                    Date: {comment.created_at.slice(0,10)}
                    <br />
                    Time: {comment.created_at.slice(11,19)}
                  </li>
                </div>
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
};

export default Comments;
