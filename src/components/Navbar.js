import { useState, useEffect } from "react";
import { getCategories } from "../utils/api";
import "../styles/Categories.css";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

const Navbar = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayDropdown, setDisplayDropdown] = useState("none")

  const handleDropdownClick = () => {
    displayDropdown === "block"? setDisplayDropdown("none") : setDisplayDropdown("block")
  }

  useEffect(() => {
    setLoading(true);
    getCategories().then((categories) => {
      setAllCategories(categories);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="navbar__wrapper">
      <Link to="/">
        <input type="button" className="navbar__button" value="Home" onClick={(() => {setDisplayDropdown("none")})}/>
      </Link>
      <Link to="/reviews">
        <input type="button" className="navbar__button" value="Reviews" onClick={(() => {setDisplayDropdown("none")})}/>
      </Link>
      <span className="dropdown">
      <input id="check01" type="checkbox" name="menu" />
        <label onClick={handleDropdownClick} className="navbar__button" htmlFor="check01">Categories</label>
        <ul className="dropdown-content" style={{"display": displayDropdown}}>
          {allCategories.map((category) => {
            return (
              <li key={category.slug} onClick={handleDropdownClick}>
                <label htmlFor="check01">
                  <Link style={linkStyle} to={`/reviews/${category.slug}`}>
                    {category.slug}
                  </Link>
                </label>
              </li>
            );
          })}
        </ul>
        {/* <Link to="/categories">
          <input type="button" className="navbar__button" value="Categories" />
        </Link> */}
      </span>
    </div>
  );
};

export default Navbar;