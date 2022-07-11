import { useState, useEffect } from "react";
import { postComment } from "../utils/api";
import "../styles/addComments.css";

const AddComment = ({ review_id, setAllComments, allComments }) => {
  const [commentBody, setCommentBody] = useState("");
  //posted changes to true when a comment is submitted, and then fires to the backend.
  const [posted, setPosted] = useState(false);
  //submiteOnce disabled submit button once a comment is added, preventing spam.
  const [submitOnce, setSubmitOnce] = useState(false);

  const handleSubmitComment = (event) => {
    event.preventDefault();
    setPosted(true);
    setSubmitOnce(true);
  };

  useEffect(() => {
    const commentToAdd = {
      body: commentBody,
      username: "grumpy19",
    };

    let today = new Date().toISOString();

    if (posted) {
      let currComments = [
        ...allComments,
        {
          body: commentBody,
          author: "grumpy19",
          created_at: today,
          comment_id: 9999,
          review_id: review_id,
          votes: 0,
        },
      ];

      setAllComments(currComments);
      postComment(review_id, commentToAdd).catch((err) => {
        console.log(err, "Error <<<<<<<");
      });
    }
  }, [review_id, posted]);

  return (
    <div className="AddComment__whole">
      <h3>Write a comment below 😊</h3>
      <form className="AddComment__form" onSubmit={handleSubmitComment}>
        <textarea
          className="AddComment__input"
          rows="5"
          cols="80"
          type="text"
          minLength={10}
          maxLength={200}
          required
          onChange={(event) => {
            setCommentBody(event.target.value);
          }}
        ></textarea>
        <input
          type="submit"
          value="Submit"
          className="AddComment__submitButton"
          disabled={submitOnce}
        ></input>
      </form>
    </div>
  );
};

export default AddComment;
