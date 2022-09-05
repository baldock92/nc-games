import "./styles/App.css";
import { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Categories from "./components/Categories";
import Home from "./components/Home";
import SingleReview from "./components/SingleReview";
import ErrorPage from "./components/ErrorPage";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState("")


  return (
    <UserContext.Provider value={{user, setUser}}>
    <div className="App">
      <div className="banner-top">
        <Header />
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/reviews/:category" element={<Reviews />} />
        <Route path="/singlereview/:review_id" element={<SingleReview />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
    </UserContext.Provider>
  );
}

export default App;
