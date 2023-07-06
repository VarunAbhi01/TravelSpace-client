import "./nav.css"
import { useNavigate } from "react-router-dom";

const Nav = () => {

  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={handleSearch}> TravelSpace </span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Nav