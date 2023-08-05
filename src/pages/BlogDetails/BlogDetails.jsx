import React, { useState, useEffect } from "react";
import "./BlogDetails.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function BlogDetails() {
  const [fetchedBlog, setFetchedBlog] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8999/api/v1/blogs/get-one-blog/${id}`
        );
        setFetchedBlog(response.data.blog);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBlog();
    console.log(fetchedBlog);
  }, [id]);

  return (
    <>
      <div className="mainbox">
        <h1 className="headin">{fetchedBlog.title}</h1>
        <div className="leftcontainer">
          <img className="detailsImg" src={fetchedBlog.img} alt="blogImg" />
        </div>

        <div className="details">
          <p>
            <b style={{ fontSize: "1.5rem", color: "red" }}>Introduction :</b>
            <br />
            {fetchedBlog.shortDescription}
          </p>
        </div>

        <div className="longDescription">
          <b style={{ fontSize: "1.5rem", color: "red" }}>Description :</b>
          <br />
          {fetchedBlog.longDescription}
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
