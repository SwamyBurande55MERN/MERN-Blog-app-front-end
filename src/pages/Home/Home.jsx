import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8999/api/v1/blogs/all-blogs"
        );
        setBlogs(response.data.allblogs); // Set the 'allblogs' array from the response data
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <>
      <div className="allblogs">
        {blogs.map((blog) => (
          <div className="blog" key={blog._id}>
            <div className="left">
              <img src={blog.img} className="blog-image" alt="blogimgs" />
            </div>

            <div className="right">
              <h4 className="blogHeading">{blog.title}</h4>

              <p className="shortDescripion">{blog.shortDescription}</p>
              <span>
                <Link to={`/blogdetails/${blog._id}`}>
                  <button className="readmoreBtn">Read more..</button>
                </Link>
              </span>
              {/* <span className="username">- {blog.user.username}</span> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
