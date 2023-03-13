import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>NC-Games</h1>
      <br />
      <br />
      <img
        className="cropped-image"
        src="https://www.shutterstock.com/image-vector/initial-two-letter-black-line-260nw-1466171765.jpg"
        alt="NC-Games logo"
      />
      <Link to="/">
        <p>Return to entry page</p>
      </Link>
    </header>
  );
};

export default Header;
