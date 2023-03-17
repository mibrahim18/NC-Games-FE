import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/reviews">
        <p>Click here for a list of all reviews</p>
      </Link>
      <Link to="/categories">
        <p>Click here for a list of all categories</p>
      </Link>
    </div>
  );
};

export default Home;
