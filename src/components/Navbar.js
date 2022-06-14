import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__wrapper">
      <Link to="/">
        <input type="button" className="navbar__button" value="Home" />
      </Link>
      <Link to="/reviews">
      <input type="button" className="navbar__button" value="Reviews" />
      </Link>
      <Link to="/categories">
      <input type="button" className="navbar__button" value="Categories" />
      </Link>
    </div>
  );
};

export default Navbar;
