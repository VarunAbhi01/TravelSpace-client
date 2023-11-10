import { useContext } from "react";
import "./nav.css"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Nav = () => {

  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/");
  };

  const {user} = useContext(AuthContext)

  return (
    <div className="navbar">
      <div className="navContainer">
      <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
        <span className="logo" onClick={handleSearch}> TravelSpace </span>
      </Link>
      {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Nav