import { useState } from "react";
import { patchVotes } from "../utils/api";
import "../styles/Votes.css";

const Votes = ({ review_id, votes, setReview }) => {
  const [voteChange, setVoteChange] = useState(0);

  const handleUpClick = () => {
    setVoteChange((currVotes) => currVotes + 1);
    setReview((currReview) => {
      let copyReview = { ...currReview };
      copyReview.votes += 1;
      return copyReview;
    });
    patchVotes(review_id, 1)
    .catch(() => {
      setVoteChange((currVotes) => currVotes - 1);
      setReview((currReview) => {
        let copyReview = { ...currReview };
        copyReview.votes -= 1;
        return copyReview;
      });
    });
  };

  const handleDownClick = () => {
    setVoteChange((currVotes) => currVotes - 1);
    setReview((currReview) => {
      let copyReview = { ...currReview };
      copyReview.votes -= 1;
      return copyReview;
    });
    patchVotes(review_id, -1)
    .catch(() => {
      setVoteChange((currVotes) => currVotes + 1);
      setReview((currReview) => {
        let copyReview = { ...currReview };
        copyReview.votes += 1;
        return copyReview;
      });
    });
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
