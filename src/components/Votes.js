import { useState, useEffect } from "react";
import { patchVotes } from "../utils/api";
import "../styles/Votes.css";

const Votes = ({ review_id, votes }) => {
  const [voteChange, setVoteChange] = useState(0);

  const handleUpClick = () => {
    setVoteChange((currVotes) => currVotes + 1);
    patchVotes(review_id, 1).catch((err) => {
      console.log(err);
    });
  };

  const handleDownClick = () => {
    setVoteChange((currVotes) => currVotes - 1);
    patchVotes(review_id, -1).catch((err) => console.log(err));
  };

  return (
    <div class="votes__button-wrapper">
      <button
        class="upvote__button"
        onClick={handleUpClick}
        disabled={voteChange > 0}
      >
        👍
      </button>
      <button
        class="downvote__button"
        onClick={handleDownClick}
        disabled={voteChange < 0}
      >
        👎
      </button>
    </div>
  );
};

export default Votes;
