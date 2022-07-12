import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Quick Fix Stays</span>
        </Link>
        {user ? (
          <>
            {user.username}
            <button className="navButton" onClick={handleClick}>
              Logout
            </button>
          </>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
            <Link to={{pathname: "https://quick-fix-stays-admin.netlify.app"}} target="_blank">
              <button className="navButton">Admin</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
