import { useState } from "react";
import { deleteComment } from "../utils/api";
import "../styles/Delete.css";

const Delete = ({ comment }) => {
  const [confirmDelete, setConfirmDelete] = useState(false);

  let loggedInUser = "grumpy19";

  const handleDeleteClick = () => {
    if (loggedInUser === comment.author) {
      deleteComment(comment.comment_id)
        .then((statusCode) => {
          if (statusCode === 204) {
            alert("succesfully deleted comment!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("You can only delete your own comments!");
    }
  };

  return (
    <div>
      {confirmDelete ? (
        <>
          <p>Are you sure you want to delete?</p>
          <div>
            <button
              className="Delete__yesButton"
              onClick={() => handleDeleteClick()}
            >
              ✔️
            </button>
            <button
              className="Delete__noButton"
              onClick={() => setConfirmDelete(false)}
            >
              ❌
            </button>
          </div>
        </>
      ) : null}
      <button
        className="Comments__delete-button"
        onClick={() => {
          setConfirmDelete(true);
        }}
      >
        Delete comment
      </button>
    </div>
  );
};

export default Delete;
