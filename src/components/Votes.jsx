import { useState } from "react";
import { UpdateVotes } from "../axios/apiQueries";

const Votes = ({ review_id, votes }) => {
  const [userVote, setUserVote] = useState(0);

  const onVoteUp = () => {
    setUserVote(1);

    UpdateVotes(review_id, 1).catch((err) => {
      setUserVote(0);
      alert("Votes could not be updated. Please try again later");
    });
  };

  const onVoteDown = () => {
    setUserVote(-1);
    UpdateVotes(review_id, -1).catch((err) => {
      setUserVote(0);
      alert("Votes could not be updated. Please try again later");
    });
  };

  return (
    <div>
      <p>Total Votes: {votes + userVote} </p>
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
