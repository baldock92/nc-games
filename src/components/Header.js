import "../styles/Header.css"
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
  const {user} = useContext(UserContext)

  return (
    <div className="header__wrapper">
      <h1>NC games review</h1>
      {user? <h5>Logged in as : {user}</h5> : null}
    </div>
  );
};

export default Header;
