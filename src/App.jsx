import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import CreateBlog from "./pages/CreateBlog/CreateBlog";
import UserBlogs from "./pages/userBlogs/UserBlogs";
import UserBlogDetails from "./pages/userBlogDetails/UserBlogDetails";
import Footer from "./components/Footer";
import UpdateBlog from "./pages/UpdateBlog/UpdateBlog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/blogdetails/:id" element={<BlogDetails />} />
          <Route exact path="/createblog" element={<CreateBlog />} />
          <Route exact path="/userblogs" element={<UserBlogs />} />
          <Route exact path="/updateblog/:id" element={<UpdateBlog />} />
          <Route
            exact
            path="/userblogdetails/:id"
            element={<UserBlogDetails />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
