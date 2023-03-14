import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Check if current path is the same as the entry page path
  const isOnEntryPage = location.pathname === "/";

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
      {isOnEntryPage ? (
        ""
      ) : (
        <Link to="/">
          <p>Return to entry page</p>
        </Link>
      )}
    </header>
  );
};

export default Header;
