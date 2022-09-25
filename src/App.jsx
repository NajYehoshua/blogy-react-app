import NavBar from "./components/NavBar";
import BlogsContainer from "./components/BlogsContainer";
import Home from "./components/Home";
import BlogPage from "./components/BlogPage";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogsContainer />} />
        <Route path="/blog/:id" element={<BlogPage />} />
      </Routes>
    </>
  );
};

export default App;
