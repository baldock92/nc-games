import { useState, useEffect, useContext } from "react";
import { postComment } from "../utils/api";
import "../styles/addComments.css";
import { UserContext } from "../contexts/UserContext";

const AddComment = ({ review_id, setAllComments, allComments  }) => {
  const {user} = useContext(UserContext)


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
 const commentToAdd = {
      body: commentBody,
      username: user,
    };
  useEffect(() => {
   

    let today = new Date().toISOString();

    if (posted) {
      let currComments = [
        ...allComments,
        {
          body: commentBody,
          author: user,
          created_at: today,
        },
      ];

      setAllComments(currComments);
     
      postComment(review_id, commentToAdd).catch((err) => {
        currComments.pop();
        setAllComments(currComments)
        alert("Sorry, something went wrong, please try posting your comment again!")
      });
    }
  }, [review_id, posted]);

  return (
    <div className="AddComment__whole">
      {posted? <h2>Thanks for submitting your comment, {commentToAdd.username}!</h2> : <h3>Write a comment below 😊</h3>}
      
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
