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

  useEffect(() => {
    setLoading(true);
    getCategories().then((categories) => {
      setAllCategories(categories);
      setLoading(false);
    });
  }, []);

  return (
    <div className="navbar__wrapper">
      <Link to="/">
        <input type="button" className="navbar__button" value="Home" />
      </Link>
      <Link to="/reviews">
        <input type="button" className="navbar__button" value="Reviews" />
      </Link>
      <span className="dropdown">
      <input id="check01" type="checkbox" name="menu" />
        <label className="navbar__button" htmlFor="check01">Categories</label>
        <ul className="dropdown-content">
          {allCategories.map((category) => {
            return (
              <li key={category.slug}>
                <label htmlFor="check01">
                  <Link style={linkStyle} to={`/reviews/${category.slug}`}>
                    {category.slug}
                  </Link>
                </label>
              </li>
            );
          })}
        </ul>
        <Link to="/categories">
          <input type="button" className="navbar__button" value="Categories" />
        </Link>
      </span>
    </div>
  );
};

export default Navbar;
