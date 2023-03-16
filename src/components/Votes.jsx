import { useState } from "react";
import { getUpdateVotes } from "../axios/apiQueries";

const Votes = ({ review_id, votes }) => {
  const [userVote, setUserVote] = useState(0);
  const [updatedVotes, setUpdatedVotes] = useState(votes);

  const onVoteUp = () => {
    setUserVote(1);
    setUpdatedVotes(updatedVotes);
    getUpdateVotes(review_id, 1)
      .then(() => {})
      .catch((err) => {
        setUserVote(0);
        setUpdatedVotes(updatedVotes - 1);
        alert("Votes could not be updated. Please try again later");
      });
  };

  const onVoteDown = () => {
    setUserVote(-1);
    setUpdatedVotes(updatedVotes);
    getUpdateVotes(review_id, -1)
      .then(() => {})
      .catch((err) => {
        setUserVote(0);
        setUpdatedVotes(updatedVotes + 1);
        alert("Votes could not be updated. Please try again later");
      });
  };

  return (
    <div>
      <p>Total Votes: {updatedVotes + userVote} </p>
      <button onClick={onVoteUp} disabled={userVote !== 0}>
        Vote Up
      </button>
      <p></p>
      <button onClick={onVoteDown} disabled={userVote !== 0}>
        Vote Down
      </button>
    </div>
  );
};

export default Votes;
