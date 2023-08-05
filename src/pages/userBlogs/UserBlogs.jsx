import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./UserBlogs.css";
import NotFound from "../../assets/notfound.png";

const UserBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const id = localStorage.getItem("userId");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // console.log(id);
        const response = await axios.get(
          `https://mern-blog-app-redux-toolkit.onrender.com/api/v1/blogs/user-blogs/${id}`
        );
        setBlogs(response.data.userBlogs.blogs); // Set the 'allblogs' array from the response data
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    // console.log(blogs);
  }, [blogs]);

  return (
    <>
      {!blogs.length && (
        <div className="notfound">
          <img src={NotFound} alt="no_blogs_found" />
        </div>
      )}

      {blogs.length > 0 && (
        <div className="allblogs">
          <h1 className="myBlogsHeading">My Blogs</h1>
          {blogs.map((blog) => (
            <div className="blog" key={blog._id}>
              <div className="left">
                <img src={blog.img} className="blog-image" alt="blogimgs" />
              </div>

              <div className="right">
                <h3 className="blogHeading">{blog.title}</h3>

                <p className="shortDescripion">{blog.shortDescription}</p>
                <Link to={`/userblogdetails/${blog._id}`}>
                  <button className="readmoreBtn">Read more..</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UserBlogs;
