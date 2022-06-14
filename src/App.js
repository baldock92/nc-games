import "./styles/App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
//import Home from "./components/Home";
//import Categories from "./components/Categories";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="banner-top">
        <Header />
        <Navbar />
      </div>
      <Routes>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/reviews/:category" element={<Reviews />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
