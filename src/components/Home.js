import "../styles/Home.css";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginClick = (username) => {
    setLoggedIn(true);
    setUser(username);
  };

  const handleLogoutClick = () => {
    setLoggedIn(false);
    setUser("")
  }

  return (
    <>
      <h3 className="Home__title">
        Welcome to my board games review app!
      </h3>
      <br />
      {loggedIn ? (
        <div>
          <h4>Welcome back {user}</h4>
          <button className="logout__button" onClick={handleLogoutClick}>
            Logout?
          </button>
        </div>
      ) : (
        <h4>Who do you want to log in as?</h4>
      )}

      <div className="users__all">
        <div
          className="users__individual"
          onClick={() => {
            handleLoginClick("tickle122");
          }}
        >
          tickle122
          <img
            src="https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-tickle.svg?v=5815476939599341761659605031"
            alt="users avatar"
          />
        </div>
        <div
          className="users__individual"
          onClick={() => {
            handleLoginClick("cooljmessy");
          }}
        >
          cooljmessy
          <img
            src="https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-messy.svg?v=161336296327173425491659605021"
            alt="users avatar"
          />
        </div>
        <div
          className="users__individual"
          onClick={() => {
            handleLoginClick("weegembump");
          }}
        >
          weegembump
          <img
            src="https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-bump.svg?v=127307366462390316611659605009"
            alt="users avatar"
          />
        </div>
        <div
          className="users__individual"
          onClick={() => {
            handleLoginClick("happyamy2016");
          }}
        >
          happyamy2016
          <img
            src="https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-happy.svg?v=32825736591941550291659605017"
            alt="users avatar"
          />
        </div>
        <div
          className="users__individual"
          onClick={() => {
            handleLoginClick("jessjelly");
          }}
        >
          jessjelly
          <img
            src="https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-jelly.svg?v=134221596013407924151659605018"
            alt="users avatar"
          />
        </div>
        <div
          className="users__individual"
          onClick={() => {
            handleLoginClick("grumpy19");
          }}
        >
          grumpy19
          <img
            src="https://cdn.shopify.com/s/files/1/0194/0815/8819/t/26/assets/svg--character--mr-grumpy.svg?v=114146306143244771531659605017"
            alt="users avatar"
          />
        </div>
      </div>

      {/* <h4>You are logged in as <span className="Home__user">grumpy19</span></h4>
      <img className="Home__img"
        src="https://i.guim.co.uk/img/media/696d305e8fb4ec8e33038325f5e135ad7e6f62b5/0_878_3586_2149/master/3586.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=7c8a02cb30d1bc9b008a31529aa98fc1"
        alt="monopoly board game"
      /> */}
    </>
  );
};

export default Home;
