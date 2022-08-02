import "./styles/App.css";

import Header from "./components/Header";
// import Login from "./components/Login"
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Categories from "./components/Categories";
import Home from "./components/Home";
import SingleReview from "./components/SingleReview";
import ErrorPage from "./components/ErrorPage"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
