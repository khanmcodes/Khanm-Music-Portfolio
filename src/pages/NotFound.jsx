import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">
        Oops! The page you're looking for doesn't exist.
        <br />
        <span style={{ fontSize: "15px" }}>
          Yes, I took time out to make this error page that probably no one is
          ever gonna see..
        </span>
      </p>
      <NavLink to="/" className="home-button">
        Go Home
      </NavLink>
    </div>
  );
};

export default NotFound;
