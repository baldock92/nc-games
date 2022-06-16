import { useState, useEffect } from "react";
import { postComment } from "../utils/api";
import "../styles/addComments.css";

const AddComment = ({ review_id }) => {
  const [commentBody, setCommentBody] = useState("");
  const [posted, setPosted] = useState(false);

  const handleSubmitComment = (event) => {
    event.preventDefault();
    setPosted(true);
  };

  useEffect(() => {
    const commentToAdd = {
      body: commentBody,
      username: "grumpy19",
    };

    if (posted) {
      postComment(review_id, commentToAdd)
        .then((newComment) => {
          alert("Comment successfully added!");
        })
        .then(() => {
          setCommentBody("");
        })
        .catch((err) => {
          console.log(err, "Error <<<<<<<");
        });
    }
  }, [posted, review_id]);

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
        ></input>
      </form>
    </div>
  );
};

export default AddComment;
