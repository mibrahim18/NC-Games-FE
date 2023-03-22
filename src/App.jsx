import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import SingleReview from "./components/SingleReview";
import Categories from "./components/Categories";
import SingleCategory from "./components/SingleCategory";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<SingleCategory />} />
      </Routes>
    </div>
  );
}

export default App;
