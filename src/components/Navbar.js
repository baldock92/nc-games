import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__wrapper">
      <input type="button" className="navbar__button" value="Home" />
      <input type="button" className="navbar__button" value="Reviews" />
      <input type="button" className="navbar__button" value="Categories" />
    </div>
  );
};

export default Navbar;
