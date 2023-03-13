import { useState, useEffect } from "react";
import axios from "axios";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://team-a.onrender.com/api/reviews`)
      .then((response) => {
        setList(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? <h1>Loading...</h1> : <ReviewCard data={list} />;
};

export default Reviews;
