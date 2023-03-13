import { useState, useEffect } from "react";
import API from "../axios/API";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    API.get("/reviews")
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
