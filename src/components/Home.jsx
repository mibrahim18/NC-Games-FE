import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/reviews">
        <p>Click here for a list of reviews</p>
      </Link>
    </div>
  );
};

export default Home;
