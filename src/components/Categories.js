import { useState, useEffect } from "react";
import { getCategories } from "../utils/api";
import "../styles/Categories.css";

import { Link } from "react-router-dom";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "white",
};

const Categories = () => {
  const [allCategories, setAllCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("helloooooooooo");

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
    <>
      <div className="dropdown">
        <input id="check01" type="checkbox" name="menu" />
        <label className="dropbtn" htmlFor="check01">
          Click here to see reviews for a specific category
        </label>
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
      </div>

      <div className="categories__all">
        {allCategories.map((category) => {
          return (
            <div className="category__card" key={category.slug}>
              <div className="category__title">
                {category.slug.slice(0, 1).toUpperCase() +
                  category.slug.slice(1)}
              </div>
              <div className="category__description">
                {category.description}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
